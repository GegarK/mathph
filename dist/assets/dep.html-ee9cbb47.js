import{_ as r,K as t,L as o,M as e,N as n,a5 as a,W as d,F as s}from"./framework-edebdfe1.js";const c={},u=e("h1",{id:"节点部署",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#节点部署","aria-hidden":"true"},"#"),n(" 节点部署")],-1),b={id:"完整节点部署",tabindex:"-1"},h=e("a",{class:"header-anchor",href:"#完整节点部署","aria-hidden":"true"},"#",-1),v={href:"https://bitcoin.org/en/full-node",target:"_blank",rel:"noopener noreferrer"},g={href:"https://bitcoin.org/en/download",target:"_blank",rel:"noopener noreferrer"},p=d(`<h2 id="rpc接口" tabindex="-1"><a class="header-anchor" href="#rpc接口" aria-hidden="true">#</a> RPC接口</h2><p><code>bitcoin.conf</code>中添加用户名密码：</p><div class="language-conf line-numbers-mode" data-ext="conf"><pre class="language-conf"><code>rpcuser=yourusername
rpcpassword=yourpassword

bitcoin-cli.exe -rpcuser=user -rpcpassword=pass getblockchaininfo

{
  &quot;chain&quot;: &quot;main&quot;,
  &quot;blocks&quot;: 429742,
  &quot;headers&quot;: 865836,
  &quot;bestblockhash&quot;: &quot;0000000000000000019d727776a5c3b7701a2be3ea2187f2357a4133a6fd33e4&quot;,
  &quot;difficulty&quot;: 225832872179.4596,
  &quot;time&quot;: 1473839719,
  &quot;mediantime&quot;: 1473837334,
  &quot;verificationprogress&quot;: 0.1405214791612086,
  &quot;initialblockdownload&quot;: true,
  &quot;chainwork&quot;: &quot;000000000000000000000000000000000000000000268f5eb2eba5ba26737f02&quot;,
  &quot;size_on_disk&quot;: 555003712,
  &quot;pruned&quot;: true,
  &quot;pruneheight&quot;: 429266,
  &quot;automatic_pruning&quot;: true,
  &quot;prune_target_size&quot;: 1999634432,
  &quot;warnings&quot;: &quot;&quot;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3),m=e("h2",{id:"轻节点钱包",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#轻节点钱包","aria-hidden":"true"},"#"),n(" 轻节点钱包")],-1),q={href:"https://electrum.org/",target:"_blank",rel:"noopener noreferrer"},_=d(`<h2 id="btc命令行" tabindex="-1"><a class="header-anchor" href="#btc命令行" aria-hidden="true">#</a> BTC命令行</h2><h3 id="_1-节点信息" tabindex="-1"><a class="header-anchor" href="#_1-节点信息" aria-hidden="true">#</a> 1. 节点信息</h3><ul><li><p><strong>获取节点版本</strong></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>bitcoin-cli getversion
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p><strong>获取区块链信息</strong></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>bitcoin-cli getblockchaininfo
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p><strong>获取网络信息</strong></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>bitcoin-cli getnetworkinfo
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li></ul><h3 id="_2-钱包操作" tabindex="-1"><a class="header-anchor" href="#_2-钱包操作" aria-hidden="true">#</a> 2. 钱包操作</h3><ul><li><p><strong>创建新钱包</strong></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>bitcoin-cli createwallet <span class="token string">&quot;wallet_name&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p><strong>获取钱包余额</strong></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>bitcoin-cli getbalance
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p><strong>发送比特币</strong></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>bitcoin-cli sendtoaddress <span class="token string">&quot;address&quot;</span> amount
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p><strong>获取交易信息</strong></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>bitcoin-cli gettransaction <span class="token string">&quot;txid&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li></ul><h3 id="_3-交易操作" tabindex="-1"><a class="header-anchor" href="#_3-交易操作" aria-hidden="true">#</a> 3. 交易操作</h3><ul><li><p><strong>创建原始交易</strong></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>bitcoin-cli createrawtransaction <span class="token string">&#39;[{&quot;txid&quot;: &quot;some_txid&quot;, &quot;vout&quot;: 0}]&#39;</span> <span class="token string">&#39;{&quot;address&quot;: amount}&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p><strong>签名原始交易</strong></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>bitcoin-cli signrawtransactionwithwallet <span class="token string">&quot;raw_transaction&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p><strong>发送原始交易</strong></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>bitcoin-cli sendrawtransaction <span class="token string">&quot;signed_transaction&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li></ul><h3 id="_4-内存池操作" tabindex="-1"><a class="header-anchor" href="#_4-内存池操作" aria-hidden="true">#</a> 4. 内存池操作</h3><ul><li><p><strong>获取内存池信息</strong></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>bitcoin-cli getmempoolinfo
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p><strong>获取内存池中的所有交易ID</strong></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>bitcoin-cli getrawmempool
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li></ul><h3 id="_5-区块操作" tabindex="-1"><a class="header-anchor" href="#_5-区块操作" aria-hidden="true">#</a> 5. 区块操作</h3><ul><li><p><strong>获取区块高度</strong></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>bitcoin-cli getblockcount
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p><strong>获取区块信息</strong></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>bitcoin-cli getblock <span class="token string">&quot;blockhash&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p><strong>获取特定区块的交易</strong></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>bitcoin-cli getblock <span class="token string">&quot;blockhash&quot;</span> <span class="token number">2</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li></ul>`,11);function f(x,k){const i=s("ExternalLinkIcon"),l=s("DocsAD");return t(),o("div",null,[u,e("h2",b,[h,n(),e("a",v,[n("完整节点部署"),a(i)])]),e("ul",null,[e("li",null,[e("a",g,[n("下载程序"),a(i)])])]),p,a(l),m,e("ul",null,[e("li",null,[e("a",q,[n("electrum"),a(i)])])]),_])}const D=r(c,[["render",f],["__file","dep.html.vue"]]);export{D as default};