---
title: "New Wechaty Puppet Service: PadLocal"
author: padlocal
image: /assets/2020/padlocal/logo.png
categories: puppet-service-providers
tags:
  - news
  - wechaty
  - puppet
  - PadLocal
  - wechaty-puppet-padlocal
---

大家好，我是 PadLocal 的开发者，大伙都称我“好大”。

## PadLocal: WeChaty puppet service provider

几年前做爬虫系统的时候，第一次接触到了 Wechaty。这个项目需要定期推送爬虫的状态信息，以及主动查询爬取的相关内容。正好当时有一句很流行的话：“对话即服务”，于是就想是不是可以通过微信来实现这些功能？借助 Wechaty 很快就实现了所有功能，最终效果也非常不错。最近一两年，我们团队开始做社群相关产品，自然而然也用了 Wechaty，慢慢地对 Wechaty 以及整个社区也越来越认可和信任。

但那时候社区中的 puppet 还不是特别完美，使用过程中有一些槽点。而且 puppet 生命周期不是特别稳定，用了一段时间可能就不再维护，我们担心这种不确定性会影响到我们的业务，于是萌生了自己去开发一个 puppet 的想法。再加上我自己也是国内比较早的一批 iOS 开发者，自信对 iOS 有比较深入的理解，以前也玩过一点逆向，觉得这样的想法也并非天方夜谭。

于是从 App 脱壳、用 IDA 反编译微信，开始了漫漫逆向之路。在做这件事之前，我们预计这个过程比较难，会遇到各种难啃的骨头，但万万没有想到会如此艰辛。虽然之前玩过逆向，不过也就是为了好玩，改改 App小功能、抢抢红包啥的，比较初级。刚开始的阶段还挺愉快，因为每一步你很容易看到自己的成长，每次打个怪就感觉升了一级。但慢慢深入下去，就遇到很多真正难啃的骨头，各种伎俩、资料、请教都失败之后，叹气之余感觉自己如那头黔驴一样。也产生过放弃的念头，但始终还是不甘心，仍然咬咬牙坚持了下来。在这里和大家分享几个这样“狼狈”的时刻：

1. **处理代码混淆**

 微信会对比较敏感的代码进行混淆处理，关于代码混淆推荐大家参考 [ollvm](https://github.com/obfuscator-llvm/obfuscator/wiki) 。总体来说，代码混淆大概有这几种手段：1. **控制流平坦化**，2. **虚假控制流**，3. **指令替换**
。Quarkslab 的这篇文章 [“Deobfuscation: recovering an OLLVM-protected program”](https://blog.quarkslab.com/deobfuscation-recovering-an-ollvm-protected-program.html) 也介绍一点解混淆的方法，但是文章中提到的例子相比微信中遇到的，只能是小巫见大巫。举个例子微信某个函数混淆后大概有 7W 多行，用 IDA 反编译就可以花一整天时间。通过每天慢慢盘这些代码，总结出了许多规则。于是自己写的一个小工具去解混淆，通过不断尝试与修正，最终成功将代码解混淆了出来。

1. **0305算法**

 微信本身对客户端会进行比较严格的校验，包括设备环境、设备指纹等信息。就是说用网上说的一些工具，去修改微信功能（比如用来抢红包），其实很容易被微信识别出来，封号也许是迟早的事情。这里就需要一些加解密和签名校验机制，其中 0305 算法是里面比较困难的一种。首先代码本身混淆过，其次即使解混淆出来，也很难看出来它的逻辑性，比如具体采用了什么算法以及加解密、签名校验流程。于是乎仍然只能慢慢探索，不断观察每一步数据的变化，摸索出一些可能的样式。最终经过非常多的尝试，才命中正确算法和流程。

经历过这样几个难点而且都成功解决之后，其实底气也足了很多。之后再遇到（其实还很多），仍然会有沮丧的时刻，但更多还是相信能够完成挑战。总体来说，这一路走来就是一步一个坑。解决了一个问题，开开心心重新抬起头来，“天晴了雨停了，我又觉得我行了” 。可过不了多久，微信又会分分钟教你做人，所以对微信一直保持着一颗敬畏之心。

最终，我们做出了一个完整实现的 puppet，叫做 PadLocal。至于为什么叫 “PadLocal” ？这就要谈到我们 puppet 的整体设计，以及相比其他 puppet 有什么不同之处。PadLocal 最大的特点是：

* 账号状态的托管方式
* 与 WeChatServer 的通信方式

在设计 puppet 的时候，我们首先调查了社区内其他 puppet , 并研究了他们的实现原理。我们发现，其他 puppet 设计思路大多是这样：由 puppet server 进行管理和维持托管账号的状态。所有的请求都是通过 `puppet -> puppet server -> WeChatServer` 这样一条链路完成。消息推送部分，puppet 和 puppet server 之间建立长连接，同时 puppet server 和 WeChatServer 也建立对应的长连接。当有新消息推送的时候，是通过 `WeChatServer -> puppet server ->  puppet` 这样的链路到达 puppet 端。这样的设计中 puppet server 就充当了一种有状态的代理角色，所有流量都是由服务器完成转发。在我们看来这样的设计可能有几个潜在的劣势：

1. 因为最终和 WeChatServer 通信的都是 puppet server。如果一个 puppet server 上托管了多个账号，且没有对各个账号配置对应的代理策略，那么这些账号将共享 puppet server 的 IP。从风控角度来看，容易产生风险。而且一旦其中某些账号风险等级比较高，容易对同一个 IP 池的其他账号造成污染，伤及无辜。
2. 所有流量都是通过 puppet server 转发，对其带宽产生了不小压力，特别是当托管账号中产生了大量图片、视频等多媒体资源时。
3. 由于 puppet server 维护了托管账号状态，所以 puppet server 是有状态的。从系统架构角度来看，有状态的服务器在系统稳定性、可用性、容量规划等方面都存在不小挑战。如果集群中某些服务器宕机，而备机切换机制设计不够完善的话，容易出现部分账号处于不可用的状态。  
4. 为了保证 puppet 有更好的可用性和体验，通常 puppet server 会缓存（不一定永久保存）某些数据（比如聊天数据）。也就是说，服务端无可避免地需要触碰托管账号的业务数据。这就需要 puppet 的提供者保持极高的行业自律，而且通过充分的机制保证客户数据的安全性。

基于对以上这些问题的思考，我们将所有流量转发工作都放在了 puppet 来做，**这就是 PadLocal 中 Local 的来源**。我们利用了 GRPC 的双向通信机制，让 puppet 成为代理，将所有流量通过 puppet 转发给 WeChatServer。同时由 puppet 来维持和 WeChatServer 之间的长连接。这样的好处显而易见：

1. 托管账号和 WeChatServer 通信所使用的 IP 都是 puppet 端的 IP，不同账号天然就不存在共享 IP 的风险。
2. 下载图片、视频等多媒体资源的流量不需要经过 PadLocal server。而且不经过服务器，效率也更高。
3. 账号状态维护在 puppet 端完成，于是 PadLocal server 就可以设计为 stateless 的了，应对扩容等问题天然就会简单很多，simple is beautiful。
4. PadLocal server 不会保存任何业务数据，没有数据安全方面风险。

整体架构的拓扑图就如下所示：

![拓扑图](/assets/2020/padlocal/topological-graph.png)

再回过头来看，通过实现一个 puppet，我们自身也收获了非常多的东西。首先对 Wechaty 有了更加深入的了解，能更真切体会设计者的初衷，以及其中的权衡取舍。Wechaty 能够如此易用，都是精心设计后的结果。这是一个美妙的旅程；其次实现一个 Wechaty puppet 是一件十分有挑战的事情，能够完成这样一件事情当然成就感满满；再者可以从内部视角，比较深入和全面的了解微信端上的运行机制和设计思想。作为国民级的通信软件，微信的设计十分出色，各种各样机制、设计理念完全可以担当行业标准，无愧是这个领域绝对的王者。

现在我们决定对外发布 PadLocal puppet，目的希望能够帮助大家在微信生态实现各种创意，同时也帮助微信生态更加丰富、更加健康的发展。我们的存在不是为了作恶，而是帮助建设一个更加美好的社会。对于将来的计划，我们会一直随着微信版本的迭代，积极地持续维护着这个 puppet。

PadLocal 目前是还出于 beta testing 阶段，仍然有一些小问题需要去解决。我们希望能够有更多的开发者参与进来，一起让这个 puppet 走向下一个更成熟的阶段。我们有奖励机制以感谢对 PadLocal 作出贡献的伙伴，具体规则仍在商定之中。目前 Token 以“申请+审核”的方式，向大家逐步开放。如果你感兴趣，欢迎联系[管理员同学](mailto:oxddoxdd@gmail.com)，并说明你通过 PadLocal 实现什么样的创意。我们也正在准备更加详细文档和指引，敬请期待。

最后，长城非一日建成，我们也是站在巨人的肩膀上才能完成这样的工作，感谢所有帮助过 PadLocal 诞生的小伙伴，比心。