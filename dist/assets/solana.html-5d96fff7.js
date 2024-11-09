import{_ as s,K as t,L as l,M as a,N as n,a5 as d,W as o,F as i}from"./framework-edebdfe1.js";const r={},c=a("h1",{id:"solana",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#solana","aria-hidden":"true"},"#"),n(" Solana")],-1),u={id:"命令行",tabindex:"-1"},b=a("a",{class:"header-anchor",href:"#命令行","aria-hidden":"true"},"#",-1),h={href:"https://docs.solanalabs.com/cli/usage",target:"_blank",rel:"noopener noreferrer"},p=o(`<table><thead><tr><th>Command</th><th>Command</th><th>Command</th><th>Command</th></tr></thead><tbody><tr><td>solana</td><td>solana-genesis</td><td>solana-keygen</td><td>solana-stake-accounts</td></tr><tr><td>solana-watchtower</td><td>solana-bench-tps</td><td>solana-gossip</td><td>solana-ledger-tool</td></tr><tr><td>solana-test-validator</td><td>solana-dos</td><td>solana-install</td><td>solana-log-analyzer</td></tr><tr><td>solana-tokens</td><td>solana-faucet</td><td>solana-install-init</td><td>solana-net-shaper</td></tr><tr><td>solana-validator</td><td></td><td></td><td></td></tr></tbody></table><h2 id="solana命令行" tabindex="-1"><a class="header-anchor" href="#solana命令行" aria-hidden="true">#</a> Solana命令行</h2><ul><li>solana-keygen new 生成密钥对</li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>~/.config/solana/id.json
<span class="token punctuation">[</span><span class="token number">105,38</span>,176,206,95,148,97,25,221,92,90,24,179,189,244,158,81,171,136,91,73,10,162,176,222,236,38,165,158,111,210,51,235,185,88,38,143,151,5,157,103,104,148,124,47,142,116,104,230,241,34,218,162,254,236,160,97,136,225,209,215,218,163,144<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>solana-keygen pubkey 查看公钥</li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>solana-keygen pubkey ~/.config/solana/id.json

GsAjFVdC3PXReBrgnTw22edFoVmJjaWPEjTjXznsBDfu
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>solana-keygen verify 校验密钥对</li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>solana-keygen verify GsAjFVdC3PXReBrgnTw22edFoVmJjaWPEjTjXznsBDfu
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>solana-keygen recover &#39;prompt://&#39; 助记词恢复</li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>符合BIP-39格式
abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon about
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><p>solana balance 查看余额</p></li><li><p>切换网络地址</p></li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>solana config <span class="token builtin class-name">set</span> <span class="token parameter variable">--url</span> https://api.devnet.solana.com
solana config <span class="token builtin class-name">set</span> <span class="token parameter variable">--url</span> https://api.testnet.solana.com
solana config <span class="token builtin class-name">set</span> <span class="token parameter variable">--url</span> https://api.mainnet-beta.solana.com
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,12);function m(v,g){const e=i("ExternalLinkIcon");return t(),l("div",null,[c,a("h2",u,[b,n(),a("a",h,[n("命令行"),d(e)])]),p])}const _=s(r,[["render",m],["__file","solana.html.vue"]]);export{_ as default};