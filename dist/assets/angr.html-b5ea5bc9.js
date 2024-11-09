import{_ as e,K as c,L as u,M as n,N as s,a5 as a,W as l,F as p}from"./framework-edebdfe1.js";const i={},r=n("h1",{id:"angr",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#angr","aria-hidden":"true"},"#"),s(" ANGR")],-1),k={id:"下载安装angr",tabindex:"-1"},d=n("a",{class:"header-anchor",href:"#下载安装angr","aria-hidden":"true"},"#",-1),v={href:"https://angr.io/",target:"_blank",rel:"noopener noreferrer"},m=n("p",null,[n("code",null,"pip install angr")],-1),b=n("h2",{id:"核心流程",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#核心流程","aria-hidden":"true"},"#"),s(" 核心流程")],-1),g=l(`<div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">import</span> angr

project <span class="token operator">=</span> angr<span class="token punctuation">.</span>Project<span class="token punctuation">(</span><span class="token string">&quot;software&quot;</span><span class="token punctuation">,</span> auto_load_libs<span class="token operator">=</span><span class="token boolean">False</span><span class="token punctuation">)</span>
initial_state <span class="token operator">=</span> project<span class="token punctuation">.</span>factory<span class="token punctuation">.</span>entry_state<span class="token punctuation">(</span>addr<span class="token operator">=</span><span class="token number">0x400B9E</span><span class="token punctuation">)</span>
sm <span class="token operator">=</span> project<span class="token punctuation">.</span>factory<span class="token punctuation">.</span>simulation_manager<span class="token punctuation">(</span>initial_state<span class="token punctuation">)</span>
sm<span class="token punctuation">.</span>explore<span class="token punctuation">(</span>find<span class="token operator">=</span>find_addr<span class="token punctuation">,</span>avoid<span class="token operator">=</span>avoid_addr<span class="token punctuation">)</span>
found <span class="token operator">=</span> sm<span class="token punctuation">.</span>found<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span>
solution <span class="token operator">=</span> found<span class="token punctuation">.</span>solver<span class="token punctuation">.</span><span class="token builtin">eval</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="简单例子" tabindex="-1"><a class="header-anchor" href="#简单例子" aria-hidden="true">#</a> 简单例子</h2><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token keyword">int</span> __cdecl <span class="token function">main</span><span class="token punctuation">(</span><span class="token keyword">int</span> argc<span class="token punctuation">,</span> <span class="token keyword">const</span> <span class="token keyword">char</span> <span class="token operator">*</span><span class="token operator">*</span>argv<span class="token punctuation">,</span> <span class="token keyword">const</span> <span class="token keyword">char</span> <span class="token operator">*</span><span class="token operator">*</span>envp<span class="token punctuation">)</span>
<span class="token punctuation">{</span>
  <span class="token keyword">int</span> result<span class="token punctuation">;</span> <span class="token comment">// eax</span>

  <span class="token keyword">if</span> <span class="token punctuation">(</span> argc <span class="token operator">==</span> <span class="token number">2</span> <span class="token punctuation">)</span>
  <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span> <span class="token punctuation">(</span><span class="token keyword">unsigned</span> <span class="token keyword">int</span><span class="token punctuation">)</span><span class="token function">verify</span><span class="token punctuation">(</span>argv<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">,</span> argv<span class="token punctuation">,</span> envp<span class="token punctuation">)</span> <span class="token punctuation">)</span>
      <span class="token function">puts</span><span class="token punctuation">(</span><span class="token string">&quot;Correct! that is the secret key!&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 0x400602</span>
    <span class="token keyword">else</span>
      <span class="token function">puts</span><span class="token punctuation">(</span><span class="token string">&quot;I&#39;m sorry, that&#39;s the wrong secret key!&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    result <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">else</span>
  <span class="token punctuation">{</span>
    <span class="token function">puts</span><span class="token punctuation">(</span><span class="token string">&quot;You need to enter the secret key!&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 0x4005DA</span>
    result <span class="token operator">=</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">return</span> result<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

_BOOL8 __fastcall <span class="token function">verify</span><span class="token punctuation">(</span>__int64 a1<span class="token punctuation">)</span>
<span class="token punctuation">{</span>
  <span class="token keyword">int</span> i<span class="token punctuation">;</span> <span class="token comment">// [rsp+14h] [rbp-4h]</span>

  <span class="token keyword">for</span> <span class="token punctuation">(</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> <span class="token operator">*</span><span class="token punctuation">(</span>_BYTE <span class="token operator">*</span><span class="token punctuation">)</span><span class="token punctuation">(</span>i <span class="token operator">+</span> a1<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token operator">++</span>i <span class="token punctuation">)</span>
  <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span> encrypted<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">!=</span> <span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token keyword">unsigned</span> __int8<span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token keyword">unsigned</span> __int8<span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token operator">*</span><span class="token punctuation">(</span>_BYTE <span class="token operator">*</span><span class="token punctuation">)</span><span class="token punctuation">(</span>i <span class="token operator">+</span> a1<span class="token punctuation">)</span> <span class="token operator">^</span> i<span class="token punctuation">)</span> <span class="token operator">&lt;&lt;</span> <span class="token punctuation">(</span><span class="token punctuation">(</span>i <span class="token operator">^</span> <span class="token number">9</span><span class="token punctuation">)</span> <span class="token operator">&amp;</span> <span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token operator">|</span> <span class="token punctuation">(</span><span class="token keyword">unsigned</span> __int8<span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token keyword">int</span><span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token keyword">unsigned</span> __int8<span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token operator">*</span><span class="token punctuation">(</span>_BYTE <span class="token operator">*</span><span class="token punctuation">)</span><span class="token punctuation">(</span>i <span class="token operator">+</span> a1<span class="token punctuation">)</span> <span class="token operator">^</span> i<span class="token punctuation">)</span> <span class="token operator">&gt;&gt;</span> <span class="token punctuation">(</span><span class="token number">8</span> <span class="token operator">-</span> <span class="token punctuation">(</span><span class="token punctuation">(</span>i <span class="token operator">^</span> <span class="token number">9</span><span class="token punctuation">)</span> <span class="token operator">&amp;</span> <span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
                       <span class="token operator">+</span> <span class="token number">8</span> <span class="token punctuation">)</span>
      <span class="token keyword">return</span> <span class="token number">0LL</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">return</span> i <span class="token operator">==</span> <span class="token number">23</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>project <span class="token operator">=</span> angr<span class="token punctuation">.</span>Project<span class="token punctuation">(</span><span class="token string">&quot;./ais3_crackme&quot;</span><span class="token punctuation">,</span> auto_load_libs<span class="token operator">=</span><span class="token boolean">False</span><span class="token punctuation">)</span>
argv1 <span class="token operator">=</span> claripy<span class="token punctuation">.</span>BVS<span class="token punctuation">(</span><span class="token string">&quot;argv1&quot;</span><span class="token punctuation">,</span><span class="token number">100</span><span class="token operator">*</span><span class="token number">4</span><span class="token punctuation">)</span>
initial_state <span class="token operator">=</span> project<span class="token punctuation">.</span>factory<span class="token punctuation">.</span>entry_state<span class="token punctuation">(</span>args<span class="token operator">=</span><span class="token punctuation">[</span><span class="token string">&quot;ais3_crackme&quot;</span><span class="token punctuation">,</span>argv1<span class="token punctuation">]</span><span class="token punctuation">)</span>
sm <span class="token operator">=</span> project<span class="token punctuation">.</span>factory<span class="token punctuation">.</span>simulation_manager<span class="token punctuation">(</span>initial_state<span class="token punctuation">)</span>
sm<span class="token punctuation">.</span>explore<span class="token punctuation">(</span>find<span class="token operator">=</span><span class="token number">0x400602</span><span class="token punctuation">,</span>avoid<span class="token operator">=</span><span class="token number">0x4005DA</span><span class="token punctuation">)</span>
found <span class="token operator">=</span> sm<span class="token punctuation">.</span>found<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span>
solution <span class="token operator">=</span> found<span class="token punctuation">.</span>solver<span class="token punctuation">.</span><span class="token builtin">eval</span><span class="token punctuation">(</span>argv1<span class="token punctuation">,</span> cast_to<span class="token operator">=</span><span class="token builtin">bytes</span><span class="token punctuation">)</span>
solution <span class="token operator">=</span> solution<span class="token punctuation">[</span><span class="token punctuation">:</span>solution<span class="token punctuation">.</span>find<span class="token punctuation">(</span><span class="token string">b&quot;\\x00&quot;</span><span class="token punctuation">)</span><span class="token punctuation">]</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>solution<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="约束条件" tabindex="-1"><a class="header-anchor" href="#约束条件" aria-hidden="true">#</a> 约束条件</h2><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code>__int64 __fastcall <span class="token function">main</span><span class="token punctuation">(</span><span class="token keyword">int</span> a1<span class="token punctuation">,</span> <span class="token keyword">char</span> <span class="token operator">*</span><span class="token operator">*</span>a2<span class="token punctuation">,</span> <span class="token keyword">char</span> <span class="token operator">*</span><span class="token operator">*</span>a3<span class="token punctuation">)</span>
<span class="token punctuation">{</span>
  __int64 v3<span class="token punctuation">;</span> <span class="token comment">// r8</span>
  __int64 v5<span class="token punctuation">[</span><span class="token number">7</span><span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token comment">// [rsp+0h] [rbp-38h] BYREF</span>

  v3 <span class="token operator">=</span> <span class="token number">0LL</span><span class="token punctuation">;</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span> a1 <span class="token operator">&gt;</span> <span class="token number">1</span> <span class="token punctuation">)</span>
    v3 <span class="token operator">=</span> <span class="token function">strtol</span><span class="token punctuation">(</span>a2<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token number">0LL</span><span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 0x4004AC</span>
  v5<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">1019660215</span> <span class="token operator">*</span> v3<span class="token punctuation">;</span>
  v5<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">0x981DDEC9AB2D9LL</span> <span class="token operator">*</span> <span class="token punctuation">(</span>v3 <span class="token operator">&gt;&gt;</span> <span class="token number">19</span><span class="token punctuation">)</span> <span class="token operator">%</span> <span class="token number">2837</span> <span class="token operator">*</span> <span class="token punctuation">(</span>v3 <span class="token operator">&gt;&gt;</span> <span class="token number">19</span><span class="token punctuation">)</span> <span class="token operator">%</span> <span class="token number">35</span> <span class="token operator">*</span> <span class="token punctuation">(</span><span class="token punctuation">(</span>v3 <span class="token operator">&gt;&gt;</span> <span class="token number">19</span><span class="token punctuation">)</span> <span class="token operator">%</span> <span class="token number">33</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  v5<span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">(</span>v3 <span class="token operator">&gt;&gt;</span> <span class="token number">19</span><span class="token punctuation">)</span> <span class="token operator">%</span> <span class="token number">9643</span> <span class="token operator">*</span> <span class="token number">0x148E0E2774AE66LL</span> <span class="token operator">*</span> <span class="token punctuation">(</span><span class="token punctuation">(</span>v3 <span class="token operator">&gt;&gt;</span> <span class="token number">19</span><span class="token punctuation">)</span> <span class="token operator">%</span> <span class="token number">167</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  v5<span class="token punctuation">[</span><span class="token number">3</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">(</span>v3 <span class="token operator">&gt;&gt;</span> <span class="token number">19</span><span class="token punctuation">)</span> <span class="token operator">%</span> <span class="token number">257</span> <span class="token operator">*</span> <span class="token number">0x25FB3FE64A952LL</span> <span class="token operator">*</span> <span class="token punctuation">(</span><span class="token punctuation">(</span>v3 <span class="token operator">&gt;&gt;</span> <span class="token number">19</span><span class="token punctuation">)</span> <span class="token operator">%</span> <span class="token number">55</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  v5<span class="token punctuation">[</span><span class="token number">4</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">(</span>v3 <span class="token operator">&gt;&gt;</span> <span class="token number">19</span><span class="token punctuation">)</span> <span class="token operator">%</span> <span class="token number">48271</span> <span class="token operator">*</span> <span class="token number">0x246DC95E05ELL</span> <span class="token operator">*</span> <span class="token punctuation">(</span><span class="token punctuation">(</span>v3 <span class="token operator">&gt;&gt;</span> <span class="token number">19</span><span class="token punctuation">)</span> <span class="token operator">%</span> <span class="token number">23</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token function">puts</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token keyword">const</span> <span class="token keyword">char</span> <span class="token operator">*</span><span class="token punctuation">)</span>v5<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//0x400684</span>
  <span class="token keyword">return</span> <span class="token number">0LL</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-assembly line-numbers-mode" data-ext="assembly"><pre class="language-assembly"><code>text:000000000040049C mov     rdi, [rsi+8]    ; nptr
.text:00000000004004A0 mov     edx, 0Ah        ; base
.text:00000000004004A5 xor     esi, esi        ; endptr
.text:00000000004004A7 call    _strtol
.text:00000000004004AC mov     r8, rax
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>    p <span class="token operator">=</span> angr<span class="token punctuation">.</span>Project<span class="token punctuation">(</span><span class="token string">&quot;fake&quot;</span><span class="token punctuation">,</span> auto_load_libs<span class="token operator">=</span><span class="token boolean">False</span><span class="token punctuation">)</span>

    state <span class="token operator">=</span> p<span class="token punctuation">.</span>factory<span class="token punctuation">.</span>blank_state<span class="token punctuation">(</span>addr<span class="token operator">=</span><span class="token number">0x4004AC</span><span class="token punctuation">)</span>
    inp <span class="token operator">=</span> state<span class="token punctuation">.</span>solver<span class="token punctuation">.</span>BVS<span class="token punctuation">(</span><span class="token string">&#39;inp&#39;</span><span class="token punctuation">,</span> <span class="token number">8</span><span class="token operator">*</span><span class="token number">8</span><span class="token punctuation">)</span>
    state<span class="token punctuation">.</span>regs<span class="token punctuation">.</span>rax <span class="token operator">=</span> inp

    simgr<span class="token operator">=</span> p<span class="token punctuation">.</span>factory<span class="token punctuation">.</span>simulation_manager<span class="token punctuation">(</span>state<span class="token punctuation">)</span>
    simgr<span class="token punctuation">.</span>explore<span class="token punctuation">(</span>find<span class="token operator">=</span><span class="token number">0x400684</span><span class="token punctuation">)</span>
    found <span class="token operator">=</span> simgr<span class="token punctuation">.</span>found<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span>

    flag_addr <span class="token operator">=</span> found<span class="token punctuation">.</span>regs<span class="token punctuation">.</span>rdi
    found<span class="token punctuation">.</span>add_constraints<span class="token punctuation">(</span>found<span class="token punctuation">.</span>memory<span class="token punctuation">.</span>load<span class="token punctuation">(</span>flag_addr<span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">)</span> <span class="token operator">==</span> <span class="token builtin">int</span><span class="token punctuation">(</span>binascii<span class="token punctuation">.</span>hexlify<span class="token punctuation">(</span><span class="token string">b&quot;ASIS{&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token number">16</span><span class="token punctuation">)</span><span class="token punctuation">)</span>

    flag <span class="token operator">=</span> found<span class="token punctuation">.</span>memory<span class="token punctuation">.</span>load<span class="token punctuation">(</span>flag_addr<span class="token punctuation">,</span> <span class="token number">40</span><span class="token punctuation">)</span>
    <span class="token keyword">for</span> i <span class="token keyword">in</span> <span class="token builtin">range</span><span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token operator">+</span><span class="token number">32</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
        cond_0 <span class="token operator">=</span> flag<span class="token punctuation">.</span>get_byte<span class="token punctuation">(</span>i<span class="token punctuation">)</span> <span class="token operator">&gt;=</span> <span class="token builtin">ord</span><span class="token punctuation">(</span><span class="token string">&#39;0&#39;</span><span class="token punctuation">)</span>
        cond_1 <span class="token operator">=</span> flag<span class="token punctuation">.</span>get_byte<span class="token punctuation">(</span>i<span class="token punctuation">)</span> <span class="token operator">&lt;=</span> <span class="token builtin">ord</span><span class="token punctuation">(</span><span class="token string">&#39;9&#39;</span><span class="token punctuation">)</span>
        cond_2 <span class="token operator">=</span> flag<span class="token punctuation">.</span>get_byte<span class="token punctuation">(</span>i<span class="token punctuation">)</span> <span class="token operator">&gt;=</span> <span class="token builtin">ord</span><span class="token punctuation">(</span><span class="token string">&#39;a&#39;</span><span class="token punctuation">)</span>
        cond_3 <span class="token operator">=</span> flag<span class="token punctuation">.</span>get_byte<span class="token punctuation">(</span>i<span class="token punctuation">)</span> <span class="token operator">&lt;=</span> <span class="token builtin">ord</span><span class="token punctuation">(</span><span class="token string">&#39;f&#39;</span><span class="token punctuation">)</span>
        cond_4 <span class="token operator">=</span> found<span class="token punctuation">.</span>solver<span class="token punctuation">.</span>And<span class="token punctuation">(</span>cond_0<span class="token punctuation">,</span> cond_1<span class="token punctuation">)</span>
        cond_5 <span class="token operator">=</span> found<span class="token punctuation">.</span>solver<span class="token punctuation">.</span>And<span class="token punctuation">(</span>cond_2<span class="token punctuation">,</span> cond_3<span class="token punctuation">)</span>
        found<span class="token punctuation">.</span>add_constraints<span class="token punctuation">(</span>found<span class="token punctuation">.</span>solver<span class="token punctuation">.</span>Or<span class="token punctuation">(</span>cond_4<span class="token punctuation">,</span> cond_5<span class="token punctuation">)</span><span class="token punctuation">)</span>

    found<span class="token punctuation">.</span>add_constraints<span class="token punctuation">(</span>flag<span class="token punctuation">.</span>get_byte<span class="token punctuation">(</span><span class="token number">32</span><span class="token operator">+</span><span class="token number">5</span><span class="token punctuation">)</span> <span class="token operator">==</span> <span class="token builtin">ord</span><span class="token punctuation">(</span><span class="token string">&#39;}&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>

    flag_str <span class="token operator">=</span> found<span class="token punctuation">.</span>solver<span class="token punctuation">.</span><span class="token builtin">eval</span><span class="token punctuation">(</span>flag<span class="token punctuation">,</span> cast_to<span class="token operator">=</span><span class="token builtin">bytes</span><span class="token punctuation">)</span>

    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;The number to input: &quot;</span><span class="token punctuation">,</span> found<span class="token punctuation">.</span>solver<span class="token punctuation">.</span><span class="token builtin">eval</span><span class="token punctuation">(</span>inp<span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;Flag:&quot;</span><span class="token punctuation">,</span> flag<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,8);function _(f,y){const t=p("ExternalLinkIcon"),o=p("DocsAD");return c(),u("div",null,[r,n("h2",k,[d,s(" 下载安装"),n("a",v,[s("ANGR"),a(t)])]),m,b,a(o),g])}const x=e(i,[["render",_],["__file","angr.html.vue"]]);export{x as default};
