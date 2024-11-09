import{_ as i,K as e,L as r,W as l}from"./framework-edebdfe1.js";const n="/imgs/web/inner/domain/kerberos/1.png",s="/imgs/web/inner/domain/kerberos/0.png",o="/imgs/web/inner/domain/kerberos/2.png",a="/imgs/web/inner/domain/kerberos/3.png",t="/imgs/web/inner/domain/kerberos/4.png",m="/imgs/web/inner/domain/kerberos/5.png",p="/imgs/web/inner/domain/kerberos/6.png",g="/imgs/web/inner/domain/kerberos/7.png",c="/imgs/web/inner/domain/kerberos/8.png",d="/imgs/web/inner/domain/kerberos/9.png",_="/imgs/web/inner/domain/kerberos/10.png",b="/imgs/web/inner/domain/kerberos/11.png",u="/imgs/web/inner/domain/kerberos/12.png",h="/imgs/web/inner/domain/kerberos/13.png",k="/imgs/web/inner/domain/kerberos/14.png",y="/imgs/web/inner/domain/kerberos/15.png",w="/imgs/web/inner/domain/kerberos/16.png",z="/imgs/web/inner/domain/kerberos/17.png",S={},f=l('<h1 id="kerberos协议" tabindex="-1"><a class="header-anchor" href="#kerberos协议" aria-hidden="true">#</a> Kerberos协议</h1><h2 id="什么是kerberos" tabindex="-1"><a class="header-anchor" href="#什么是kerberos" aria-hidden="true">#</a> 什么是Kerberos</h2><p>Kerberos是一种计算机网络授权协议，用来在非安全网络中，对个人通信以安全的手段进行身份认证。密码不在网络上传输，提高安全性。</p><h2 id="简写名词" tabindex="-1"><a class="header-anchor" href="#简写名词" aria-hidden="true">#</a> 简写名词</h2><ul><li>AS（Authentication Server）= 认证服务器</li><li>KDC（Key Distribution Center）= 密钥分发中心</li><li>TGT（Ticket Granting Ticket）= 票据授权票据，票据的票据</li><li>TGS（Ticket Granting Server）= 票据授权服务器</li></ul><h2 id="认证过程" tabindex="-1"><a class="header-anchor" href="#认证过程" aria-hidden="true">#</a> 认证过程</h2><ul><li>Kerberos组件</li></ul><p><img src="'+n+'" alt="er" loading="lazy"></p><p><img src="'+s+'" alt="er" loading="lazy"></p><ul><li>Kerberos流程</li></ul><p><img src="'+o+'" alt="er" loading="lazy"></p><ul><li>AS_REQ</li></ul><p><img src="'+a+'" alt="er" loading="lazy"></p><ul><li>AS_REP</li></ul><p><img src="'+t+'" alt="er" loading="lazy"></p><ul><li>客户端解密</li></ul><p><img src="'+m+'" alt="er" loading="lazy"></p><ul><li>TGS_REQ</li></ul><p><img src="'+p+'" alt="er" loading="lazy"></p><ul><li>服务端解密</li></ul><p><img src="'+g+'" alt="er" loading="lazy"></p><ul><li>TGS Cache</li></ul><p><img src="'+c+'" alt="er" loading="lazy"></p><ul><li>TGS_REP</li></ul><p><img src="'+d+'" alt="er" loading="lazy"></p><ul><li>客户端加密</li></ul><p><img src="'+_+'" alt="er" loading="lazy"></p><ul><li>S_REQ</li></ul><p><img src="'+b+'" alt="er" loading="lazy"></p><ul><li>服务端解密</li></ul><p><img src="'+u+'" alt="er" loading="lazy"></p><ul><li>Service Cache</li></ul><p><img src="'+h+'" alt="er" loading="lazy"></p><ul><li>服务端加密</li></ul><p><img src="'+k+'" alt="er" loading="lazy"></p><ul><li>S_REP</li></ul><p><img src="'+y+'" alt="er" loading="lazy"></p><ul><li>客户端解密</li></ul><p><img src="'+w+'" alt="er" loading="lazy"></p><ul><li>用户缓存服务KEY</li></ul><p><img src="'+z+'" alt="er" loading="lazy"></p>',41),K=[f];function T(E,x){return e(),r("div",null,K)}const R=i(S,[["render",T],["__file","kerberos.html.vue"]]);export{R as default};
