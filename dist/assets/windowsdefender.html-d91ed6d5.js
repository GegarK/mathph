import{_ as d,K as a,L as c,M as e,N as n,a5 as o,F as s}from"./framework-edebdfe1.js";const i={},_=e("h1",{id:"关闭windowsdefender",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#关闭windowsdefender","aria-hidden":"true"},"#"),n(" 关闭WindowsDefender")],-1),h={id:"https-github-com-es3n1n-no-defender",tabindex:"-1"},f=e("a",{class:"header-anchor",href:"#https-github-com-es3n1n-no-defender","aria-hidden":"true"},"#",-1),l={href:"https://github.com/es3n1n/no-defender",target:"_blank",rel:"noopener noreferrer"},p=e("p",null,"Windows 中有一个 WSC（Windows 安全中心）服务，防病毒软件会使用该服务让 Windows 知道系统中还有其他防病毒软件，并禁用 Windows Defender。 此 WSC API 未记录，而且需要人们与 Microsoft 签署保密协议才能获取其文档，因此我决定采取一种有趣的方法，并使用了一款名为 Avast 的现有防病毒软件。此 AV 引擎包含一个所谓的 wsc_proxy.exe 服务，该服务实质上为 Avast 设置了 WSC API。 通过一点逆向工程，我将这项服务变成了可以添加我自己的内容的服务。",-1),m=e("p",null,"遗憾的是，为了在重启后保留这个 WSC 内容，no-defender 会将自身（不是它自己而是 Avast 的模块）添加到自动运行中。因此，您需要将 no-defender 二进制文件保留在磁盘上",-1),u={href:"https://deelmind.org/app/1167.html",target:"_blank",rel:"noopener noreferrer"};function w(x,W){const t=s("ExternalLinkIcon"),r=s("DocsAD");return a(),c("div",null,[_,e("h2",h,[f,n(),e("a",l,[n("https://github.com/es3n1n/no-defender"),o(t)])]),p,m,o(r),e("p",null,[e("a",u,[n("软件下载"),o(t)])])])}const A=d(i,[["render",w],["__file","windowsdefender.html.vue"]]);export{A as default};
