import{_ as a,K as p,L as t,a5 as e,M as n,N as o,W as c,F as l}from"./framework-edebdfe1.js";const i={},u=n("h1",{id:"文件搜索",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#文件搜索","aria-hidden":"true"},"#"),o(" 文件搜索")],-1),k=c(`<div class="language-rust line-numbers-mode" data-ext="rs"><pre class="language-rust"><code><span class="token keyword">use</span> <span class="token namespace">std<span class="token punctuation">::</span></span>fs<span class="token punctuation">;</span>
<span class="token keyword">use</span> <span class="token namespace">std<span class="token punctuation">::</span>error<span class="token punctuation">::</span></span><span class="token class-name">Error</span><span class="token punctuation">;</span>
<span class="token keyword">use</span> <span class="token namespace">std<span class="token punctuation">::</span></span>env<span class="token punctuation">;</span>

<span class="token keyword">pub</span> <span class="token keyword">fn</span> <span class="token function-definition function">search_case_insensitive</span><span class="token operator">&lt;</span><span class="token lifetime-annotation symbol">&#39;a</span><span class="token operator">&gt;</span><span class="token punctuation">(</span>query<span class="token punctuation">:</span> <span class="token operator">&amp;</span><span class="token keyword">str</span><span class="token punctuation">,</span>contents<span class="token punctuation">:</span> <span class="token operator">&amp;</span><span class="token lifetime-annotation symbol">&#39;a</span> <span class="token keyword">str</span><span class="token punctuation">,</span><span class="token punctuation">)</span> <span class="token punctuation">-&gt;</span> <span class="token class-name">Vec</span><span class="token operator">&lt;</span><span class="token operator">&amp;</span><span class="token lifetime-annotation symbol">&#39;a</span> <span class="token keyword">str</span><span class="token operator">&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> query <span class="token operator">=</span> query<span class="token punctuation">.</span><span class="token function">to_lowercase</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">let</span> <span class="token keyword">mut</span> results <span class="token operator">=</span> <span class="token class-name">Vec</span><span class="token punctuation">::</span><span class="token function">new</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">for</span> line <span class="token keyword">in</span> contents<span class="token punctuation">.</span><span class="token function">lines</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> line<span class="token punctuation">.</span><span class="token function">to_lowercase</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">contains</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>query<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            results<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>line<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    results
<span class="token punctuation">}</span>


<span class="token keyword">pub</span> <span class="token keyword">fn</span> <span class="token function-definition function">run</span><span class="token punctuation">(</span>config<span class="token punctuation">:</span> <span class="token class-name">Config</span><span class="token punctuation">)</span> <span class="token punctuation">-&gt;</span> <span class="token class-name">Result</span><span class="token operator">&lt;</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token class-name">Box</span><span class="token operator">&lt;</span><span class="token keyword">dyn</span> <span class="token class-name">Error</span><span class="token operator">&gt;&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> contents <span class="token operator">=</span> <span class="token namespace">fs<span class="token punctuation">::</span></span><span class="token function">read_to_string</span><span class="token punctuation">(</span>config<span class="token punctuation">.</span>file_path<span class="token punctuation">)</span><span class="token operator">?</span><span class="token punctuation">;</span>

    <span class="token keyword">let</span> results <span class="token operator">=</span> <span class="token keyword">if</span> config<span class="token punctuation">.</span>ignore_case <span class="token punctuation">{</span>
        <span class="token function">search_case_insensitive</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>config<span class="token punctuation">.</span>query<span class="token punctuation">,</span> <span class="token operator">&amp;</span>contents<span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token keyword">else</span><span class="token punctuation">{</span>
        <span class="token macro property">vec!</span><span class="token punctuation">[</span><span class="token string">&quot;NULL&quot;</span><span class="token punctuation">]</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>

    <span class="token keyword">for</span> line <span class="token keyword">in</span> results <span class="token punctuation">{</span>
        <span class="token macro property">println!</span><span class="token punctuation">(</span><span class="token string">&quot;{line}&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token class-name">Ok</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>


<span class="token keyword">pub</span> <span class="token keyword">struct</span> <span class="token type-definition class-name">Config</span> <span class="token punctuation">{</span>
    <span class="token keyword">pub</span> query<span class="token punctuation">:</span> <span class="token class-name">String</span><span class="token punctuation">,</span>
    <span class="token keyword">pub</span> file_path<span class="token punctuation">:</span> <span class="token class-name">String</span><span class="token punctuation">,</span>
    <span class="token keyword">pub</span> ignore_case<span class="token punctuation">:</span> <span class="token keyword">bool</span>
<span class="token punctuation">}</span>

<span class="token keyword">impl</span> <span class="token class-name">Config</span> <span class="token punctuation">{</span>
    <span class="token keyword">pub</span> <span class="token keyword">fn</span> <span class="token function-definition function">build</span><span class="token punctuation">(</span>args<span class="token punctuation">:</span> <span class="token operator">&amp;</span><span class="token punctuation">[</span><span class="token class-name">String</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">-&gt;</span> <span class="token class-name">Result</span><span class="token operator">&lt;</span><span class="token class-name">Config</span><span class="token punctuation">,</span> <span class="token operator">&amp;</span><span class="token lifetime-annotation symbol">&#39;static</span> <span class="token keyword">str</span><span class="token operator">&gt;</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> args<span class="token punctuation">.</span><span class="token function">len</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">&lt;</span> <span class="token number">3</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> <span class="token class-name">Err</span><span class="token punctuation">(</span><span class="token string">&quot;not enough arguments&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token keyword">let</span> query <span class="token operator">=</span> args<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">clone</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">let</span> file_path <span class="token operator">=</span> args<span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">clone</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token keyword">let</span> ignore_case <span class="token operator">=</span> <span class="token namespace">env<span class="token punctuation">::</span></span><span class="token function">var</span><span class="token punctuation">(</span><span class="token string">&quot;IGNORE_CASE&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">is_ok</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token class-name">Ok</span><span class="token punctuation">(</span><span class="token class-name">Config</span> <span class="token punctuation">{</span>
            query<span class="token punctuation">,</span>
            file_path<span class="token punctuation">,</span>
            ignore_case<span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">use</span> <span class="token namespace">std<span class="token punctuation">::</span></span>env<span class="token punctuation">;</span>
<span class="token keyword">use</span> <span class="token namespace">std<span class="token punctuation">::</span></span>process<span class="token punctuation">;</span>

<span class="token keyword">use</span> <span class="token namespace">minigrep<span class="token punctuation">::</span></span><span class="token class-name">Config</span><span class="token punctuation">;</span>

<span class="token keyword">fn</span> <span class="token function-definition function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> args<span class="token punctuation">:</span> <span class="token class-name">Vec</span><span class="token operator">&lt;</span><span class="token class-name">String</span><span class="token operator">&gt;</span> <span class="token operator">=</span> <span class="token namespace">env<span class="token punctuation">::</span></span><span class="token function">args</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">collect</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">let</span> config <span class="token operator">=</span> <span class="token class-name">Config</span><span class="token punctuation">::</span><span class="token function">build</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>args<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">unwrap</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token macro property">println!</span><span class="token punctuation">(</span><span class="token string">&quot;Searching for {}&quot;</span><span class="token punctuation">,</span> config<span class="token punctuation">.</span>query<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token macro property">println!</span><span class="token punctuation">(</span><span class="token string">&quot;In file {}&quot;</span><span class="token punctuation">,</span> config<span class="token punctuation">.</span>file_path<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">if</span> <span class="token keyword">let</span> <span class="token class-name">Err</span><span class="token punctuation">(</span>e<span class="token punctuation">)</span> <span class="token operator">=</span> <span class="token namespace">minigrep<span class="token punctuation">::</span></span><span class="token function">run</span><span class="token punctuation">(</span>config<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token macro property">println!</span><span class="token punctuation">(</span><span class="token string">&quot;Application error: {e}&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token namespace">process<span class="token punctuation">::</span></span><span class="token function">exit</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1);function r(d,v){const s=l("DocsAD");return p(),t("div",null,[u,e(s),k])}const b=a(i,[["render",r],["__file","file.html.vue"]]);export{b as default};
