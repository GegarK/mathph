import{_ as d,K as c,L as t,a5 as n,M as e,N as a,W as l,F as s}from"./framework-fa417d66.js";const o={},h=e("h1",{id:"snarkjs",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#snarkjs","aria-hidden":"true"},"#"),a(" SnarkJS")],-1),u=e("p",null,"snarkjs 是一个用于构建和验证零知识证明（ZKPs）工具的 JavaScript 库，它主要用于处理 zk-SNARKs（简洁非交互式零知识证明）。snarkjs 可以帮助开发者生成 ZKPs，验证证明，及管理可信设置等操作。",-1),m={id:"安装",tabindex:"-1"},v=e("a",{class:"header-anchor",href:"#安装","aria-hidden":"true"},"#",-1),p={href:"https://github.com/iden3/snarkjs",target:"_blank",rel:"noopener noreferrer"},_=l(`<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">npm</span> <span class="token function">install</span> <span class="token parameter variable">-g</span> snarkjs
<span class="token function">npm</span> <span class="token function">install</span> <span class="token parameter variable">-g</span> circom
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="定义电路" tabindex="-1"><a class="header-anchor" href="#定义电路" aria-hidden="true">#</a> 定义电路</h2><div class="language-cirrom line-numbers-mode" data-ext="cirrom"><pre class="language-cirrom"><code>// square.circom
template Square() {
    signal input x;
    signal output y;

    y &lt;== x * x;  // y = x^2
}

component main = Square();
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="可信设置" tabindex="-1"><a class="header-anchor" href="#可信设置" aria-hidden="true">#</a> 可信设置</h2><h2 id="证明生成" tabindex="-1"><a class="header-anchor" href="#证明生成" aria-hidden="true">#</a> 证明生成</h2><h2 id="证明验证" tabindex="-1"><a class="header-anchor" href="#证明验证" aria-hidden="true">#</a> 证明验证</h2>`,6);function b(k,f){const i=s("DocsAD"),r=s("ExternalLinkIcon");return c(),t("div",null,[h,u,n(i),e("h2",m,[v,a(),e("a",p,[a("安装"),n(r)])]),_])}const g=d(o,[["render",b],["__file","snarkjs.html.vue"]]);export{g as default};
