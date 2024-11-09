import{_ as a,K as t,L as e,a5 as p,W as n,F as c}from"./framework-edebdfe1.js";const o={},i=n('<h1 id="format-string" tabindex="-1"><a class="header-anchor" href="#format-string" aria-hidden="true">#</a> Format-String</h1><h2 id="什么是字符串格式化漏洞" tabindex="-1"><a class="header-anchor" href="#什么是字符串格式化漏洞" aria-hidden="true">#</a> 什么是字符串格式化漏洞</h2><p>字符串格式化漏洞是一种常见的安全漏洞，主要出现在C语言中的<code>printf</code>函数和其他类似的格式化字符串函数中。这种漏洞的产生主要是因为程序将格式化字符串的输入权交给了用户，而<code>printf</code>函数并不知道参数个数，它的内部有一个指针，用来索检格式化字符串。对于特定类型的占位符，如<code>%d</code>、<code>%s</code>、<code>%c</code>等，<code>printf</code>就会去取相应参数的值，直到索检到格式化字符串结束。所以没有参数，代码也会将format string后面的内存当做参数以16进制输出。这样就会造成内存泄露。</p>',3),u=n(`<p>例如，下面的代码就存在格式化字符串漏洞：</p><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token keyword">char</span> str<span class="token punctuation">[</span><span class="token number">100</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token function">scanf</span><span class="token punctuation">(</span><span class="token string">&quot;%s&quot;</span><span class="token punctuation">,</span>str<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token function">printf</span><span class="token punctuation">(</span>str<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在这段代码中，<code>printf</code>函数的参数<code>str</code>是由用户输入的，如果用户输入的字符串中包含<code>%</code>字符，那么<code>printf</code>函数就会将其视为一个格式化字符串，并尝试从栈上获取相应的参数。这可能会导致内存泄露，甚至允许攻击者执行任意代码。</p><p>为了防止这种漏洞，你应该始终使用静态的格式化字符串，并且确保用户输入的数据永远不会被解释为格式化字符串。例如，你应该将上面的代码修改为：</p><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token keyword">char</span> str<span class="token punctuation">[</span><span class="token number">100</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token function">scanf</span><span class="token punctuation">(</span><span class="token string">&quot;%s&quot;</span><span class="token punctuation">,</span>str<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;%s&quot;</span><span class="token punctuation">,</span> str<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这样，无论用户输入什么，<code>printf</code>函数都只会将其视为普通的字符串，而不是格式化字符串。</p><h2 id="字符串格式化漏洞影响" tabindex="-1"><a class="header-anchor" href="#字符串格式化漏洞影响" aria-hidden="true">#</a> 字符串格式化漏洞影响</h2><ul><li><strong>执行任意代码</strong>：攻击者可以利用格式化字符串漏洞在程序中执行任意代码。</li><li><strong>读取栈</strong>：攻击者可以读取程序的栈，这可能会导致敏感信息的泄露，内存覆盖。</li><li><strong>引发段错误</strong>：如果攻击者尝试访问无效的内存地址，可能会导致程序崩溃。</li></ul><h2 id="漏洞代码" tabindex="-1"><a class="header-anchor" href="#漏洞代码" aria-hidden="true">#</a> 漏洞代码</h2><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token comment">// n&#39; format specifier disabled 0 visual studio</span>
<span class="token comment">// _set_printf_count_output(1);</span>

<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;stdio.h&gt;</span></span>

<span class="token keyword">void</span> <span class="token function">string_format_vuln</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token function">_set_printf_count_output</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">int</span> secret_value <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
    <span class="token function">printf</span><span class="token punctuation">(</span>argv<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>secret_value <span class="token operator">==</span> <span class="token number">7</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;You win!\\n&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token keyword">int</span> argc<span class="token punctuation">,</span> <span class="token keyword">char</span><span class="token operator">*</span> argv<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

    <span class="token function">string_format_vuln</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,10);function l(r,d){const s=c("DocsAD");return t(),e("div",null,[i,p(s),u])}const v=a(o,[["render",l],["__file","string.html.vue"]]);export{v as default};
