import{_ as c,K as l,L as i,M as n,N as s,a5 as a,W as p,F as t}from"./framework-edebdfe1.js";const u={},k=n("h1",{id:"dapp开发",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#dapp开发","aria-hidden":"true"},"#"),s(" DAPP开发")],-1),r={id:"solana-sdk",tabindex:"-1"},d=n("a",{class:"header-anchor",href:"#solana-sdk","aria-hidden":"true"},"#",-1),m={href:"https://solana-labs.github.io/solana-web3.js/",target:"_blank",rel:"noopener noreferrer"},v=p(`<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">npm</span> i @solana/web3.js
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,1),b=p(`<h2 id="js" tabindex="-1"><a class="header-anchor" href="#js" aria-hidden="true">#</a> JS</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> solanaWeb3 <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;@solana/web3.js&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// Connect to the Solana Devnet</span>
<span class="token keyword">const</span> connection <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">solanaWeb3<span class="token punctuation">.</span>Connection</span><span class="token punctuation">(</span>solanaWeb3<span class="token punctuation">.</span><span class="token function">clusterApiUrl</span><span class="token punctuation">(</span><span class="token string">&#39;testnet&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token string">&#39;confirmed&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// Generate a new keypair (wallet)</span>
<span class="token keyword">const</span> wallet <span class="token operator">=</span> solanaWeb3<span class="token punctuation">.</span>Keypair<span class="token punctuation">.</span><span class="token function">generate</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;Generated new wallet with public key:&quot;</span><span class="token punctuation">,</span> wallet<span class="token punctuation">.</span>publicKey<span class="token punctuation">.</span><span class="token function">toBase58</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// Request an airdrop of 1 SOL to the generated wallet</span>
<span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token function">requestAirdrop</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> airdropSignature <span class="token operator">=</span> <span class="token keyword">await</span> connection<span class="token punctuation">.</span><span class="token function">requestAirdrop</span><span class="token punctuation">(</span>
    wallet<span class="token punctuation">.</span>publicKey<span class="token punctuation">,</span>
    solanaWeb3<span class="token punctuation">.</span><span class="token constant">LAMPORTS_PER_SOL</span><span class="token punctuation">,</span> <span class="token comment">// 1 SOL</span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
  
  <span class="token comment">// Confirm the transaction</span>
  <span class="token keyword">await</span> connection<span class="token punctuation">.</span><span class="token function">confirmTransaction</span><span class="token punctuation">(</span>airdropSignature<span class="token punctuation">)</span><span class="token punctuation">;</span>

  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;Airdrop successful!&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// Check balance of the wallet</span>
<span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token function">checkBalance</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> balance <span class="token operator">=</span> <span class="token keyword">await</span> connection<span class="token punctuation">.</span><span class="token function">getBalance</span><span class="token punctuation">(</span>wallet<span class="token punctuation">.</span>publicKey<span class="token punctuation">)</span><span class="token punctuation">;</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;Wallet balance:&quot;</span><span class="token punctuation">,</span> balance <span class="token operator">/</span> solanaWeb3<span class="token punctuation">.</span><span class="token constant">LAMPORTS_PER_SOL</span><span class="token punctuation">,</span> <span class="token string">&quot;SOL&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// Main function to run the example</span>
<span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">await</span> <span class="token function">requestAirdrop</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">await</span> <span class="token function">checkBalance</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">catch</span><span class="token punctuation">(</span><span class="token parameter">err</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="rust" tabindex="-1"><a class="header-anchor" href="#rust" aria-hidden="true">#</a> Rust</h2><div class="language-rust line-numbers-mode" data-ext="rs"><pre class="language-rust"><code><span class="token keyword">use</span> <span class="token namespace">solana_client<span class="token punctuation">::</span>rpc_client<span class="token punctuation">::</span></span><span class="token class-name">RpcClient</span><span class="token punctuation">;</span>
<span class="token keyword">use</span> <span class="token namespace">solana_sdk<span class="token punctuation">::</span>pubkey<span class="token punctuation">::</span></span><span class="token class-name">Pubkey</span><span class="token punctuation">;</span>
<span class="token keyword">use</span> <span class="token namespace">solana_sdk<span class="token punctuation">::</span>commitment_config<span class="token punctuation">::</span></span><span class="token class-name">CommitmentConfig</span><span class="token punctuation">;</span>
<span class="token keyword">use</span> <span class="token namespace">solana_account_decoder<span class="token punctuation">::</span></span><span class="token class-name">UiAccountEncoding</span><span class="token punctuation">;</span>
<span class="token keyword">use</span> <span class="token namespace">std<span class="token punctuation">::</span></span><span class="token keyword">str</span><span class="token punctuation">::</span><span class="token class-name">FromStr</span><span class="token punctuation">;</span>

<span class="token keyword">fn</span> <span class="token function-definition function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 创建与 Solana 节点的 RPC 客户端连接</span>
    <span class="token keyword">let</span> rpc_url <span class="token operator">=</span> <span class="token string">&quot;https://api.mainnet-beta.solana.com&quot;</span><span class="token punctuation">;</span>
    <span class="token keyword">let</span> client <span class="token operator">=</span> <span class="token class-name">RpcClient</span><span class="token punctuation">::</span><span class="token function">new_with_commitment</span><span class="token punctuation">(</span>rpc_url<span class="token punctuation">.</span><span class="token function">to_string</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token class-name">CommitmentConfig</span><span class="token punctuation">::</span><span class="token function">confirmed</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">// 获取最新的区块高度</span>
    <span class="token keyword">match</span> client<span class="token punctuation">.</span><span class="token function">get_slot</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">Ok</span><span class="token punctuation">(</span>slot<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token macro property">println!</span><span class="token punctuation">(</span><span class="token string">&quot;Current slot: {}&quot;</span><span class="token punctuation">,</span> slot<span class="token punctuation">)</span><span class="token punctuation">,</span>
        <span class="token class-name">Err</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token macro property">eprintln!</span><span class="token punctuation">(</span><span class="token string">&quot;Error getting slot: {}&quot;</span><span class="token punctuation">,</span> err<span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// 智能合约的程序ID（Program ID）</span>
    <span class="token keyword">let</span> program_id_str <span class="token operator">=</span> <span class="token string">&quot;JUP6LkbZbjS1jKKwapdHNy74zcZ3tLUZoi5QNyVTaV4&quot;</span><span class="token punctuation">;</span> <span class="token comment">// 替换为实际的程序ID</span>
    <span class="token keyword">let</span> program_id <span class="token operator">=</span> <span class="token class-name">Pubkey</span><span class="token punctuation">::</span><span class="token function">from_str</span><span class="token punctuation">(</span>program_id_str<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">expect</span><span class="token punctuation">(</span><span class="token string">&quot;Invalid program ID&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">// 获取程序账户信息</span>
    <span class="token keyword">match</span> client<span class="token punctuation">.</span><span class="token function">get_account_with_commitment</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>program_id<span class="token punctuation">,</span> <span class="token class-name">CommitmentConfig</span><span class="token punctuation">::</span><span class="token function">confirmed</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">Ok</span><span class="token punctuation">(</span>response<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
            <span class="token keyword">if</span> <span class="token keyword">let</span> <span class="token class-name">Some</span><span class="token punctuation">(</span>account<span class="token punctuation">)</span> <span class="token operator">=</span> response<span class="token punctuation">.</span>value <span class="token punctuation">{</span>
                <span class="token macro property">println!</span><span class="token punctuation">(</span><span class="token string">&quot;Program account info:&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token macro property">println!</span><span class="token punctuation">(</span><span class="token string">&quot;Lamports: {}&quot;</span><span class="token punctuation">,</span> account<span class="token punctuation">.</span>lamports<span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token macro property">println!</span><span class="token punctuation">(</span><span class="token string">&quot;Executable: {}&quot;</span><span class="token punctuation">,</span> account<span class="token punctuation">.</span>executable<span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token macro property">println!</span><span class="token punctuation">(</span><span class="token string">&quot;Owner: {}&quot;</span><span class="token punctuation">,</span> account<span class="token punctuation">.</span>owner<span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token macro property">println!</span><span class="token punctuation">(</span><span class="token string">&quot;Data: {:?}&quot;</span><span class="token punctuation">,</span> account<span class="token punctuation">.</span>data<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
                <span class="token macro property">println!</span><span class="token punctuation">(</span><span class="token string">&quot;No account found for program ID: {}&quot;</span><span class="token punctuation">,</span> program_id_str<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token class-name">Err</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token macro property">eprintln!</span><span class="token punctuation">(</span><span class="token string">&quot;Error getting program account: {}&quot;</span><span class="token punctuation">,</span> err<span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4);function g(f,w){const o=t("ExternalLinkIcon"),e=t("DocsAD");return l(),i("div",null,[k,n("h2",r,[d,s(),n("a",m,[s("Solana SDK"),a(o)])]),v,a(e),b])}const y=c(u,[["render",g],["__file","index.html.vue"]]);export{y as default};
