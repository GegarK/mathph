import{_ as n,K as s,L as a,W as p}from"./framework-fa417d66.js";const t={},e=p(`<h1 id="零知识" tabindex="-1"><a class="header-anchor" href="#零知识" aria-hidden="true">#</a> 零知识</h1><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token comment"># 这里我们使用一个简单的椭圆曲线定义进行演示</span>
<span class="token comment"># 使用 P-256 曲线或类似的简单曲线来模拟加法和乘法</span>

<span class="token keyword">def</span> <span class="token function">elliptic_curve_add</span><span class="token punctuation">(</span>P<span class="token punctuation">,</span> Q<span class="token punctuation">,</span> a<span class="token punctuation">,</span> b<span class="token punctuation">,</span> p<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token triple-quoted-string string">&quot;&quot;&quot;
    椭圆曲线加法：P + Q
    &quot;&quot;&quot;</span>
    <span class="token keyword">if</span> P <span class="token operator">==</span> <span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">return</span> Q
    <span class="token keyword">if</span> Q <span class="token operator">==</span> <span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">return</span> P
    
    <span class="token punctuation">(</span>x1<span class="token punctuation">,</span> y1<span class="token punctuation">)</span> <span class="token operator">=</span> P
    <span class="token punctuation">(</span>x2<span class="token punctuation">,</span> y2<span class="token punctuation">)</span> <span class="token operator">=</span> Q

    <span class="token keyword">if</span> P <span class="token operator">!=</span> Q<span class="token punctuation">:</span>
        <span class="token comment"># 计算斜率 λ = (y2 - y1) / (x2 - x1)</span>
        lam <span class="token operator">=</span> <span class="token punctuation">(</span>y2 <span class="token operator">-</span> y1<span class="token punctuation">)</span> <span class="token operator">*</span> mod_inverse<span class="token punctuation">(</span>x2 <span class="token operator">-</span> x1<span class="token punctuation">,</span> p<span class="token punctuation">)</span> <span class="token operator">%</span> p
    <span class="token keyword">else</span><span class="token punctuation">:</span>
        <span class="token comment"># P == Q 的情况，使用切线斜率公式</span>
        lam <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token number">3</span> <span class="token operator">*</span> x1 <span class="token operator">*</span> x1 <span class="token operator">+</span> a<span class="token punctuation">)</span> <span class="token operator">*</span> mod_inverse<span class="token punctuation">(</span><span class="token number">2</span> <span class="token operator">*</span> y1<span class="token punctuation">,</span> p<span class="token punctuation">)</span> <span class="token operator">%</span> p

    <span class="token comment"># 计算新点 R = P + Q</span>
    x3 <span class="token operator">=</span> <span class="token punctuation">(</span>lam <span class="token operator">*</span> lam <span class="token operator">-</span> x1 <span class="token operator">-</span> x2<span class="token punctuation">)</span> <span class="token operator">%</span> p
    y3 <span class="token operator">=</span> <span class="token punctuation">(</span>lam <span class="token operator">*</span> <span class="token punctuation">(</span>x1 <span class="token operator">-</span> x3<span class="token punctuation">)</span> <span class="token operator">-</span> y1<span class="token punctuation">)</span> <span class="token operator">%</span> p
    <span class="token keyword">return</span> <span class="token punctuation">(</span>x3<span class="token punctuation">,</span> y3<span class="token punctuation">)</span>

<span class="token keyword">def</span> <span class="token function">mod_inverse</span><span class="token punctuation">(</span>a<span class="token punctuation">,</span> m<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token triple-quoted-string string">&quot;&quot;&quot;扩展欧几里得算法求逆元&quot;&quot;&quot;</span>
    m0<span class="token punctuation">,</span> x0<span class="token punctuation">,</span> x1 <span class="token operator">=</span> m<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">1</span>
    <span class="token keyword">if</span> m <span class="token operator">==</span> <span class="token number">1</span><span class="token punctuation">:</span>
        <span class="token keyword">return</span> <span class="token number">0</span>
    <span class="token keyword">while</span> a <span class="token operator">&gt;</span> <span class="token number">1</span><span class="token punctuation">:</span>
        q <span class="token operator">=</span> a <span class="token operator">//</span> m
        m<span class="token punctuation">,</span> a <span class="token operator">=</span> a <span class="token operator">%</span> m<span class="token punctuation">,</span> m
        x0<span class="token punctuation">,</span> x1 <span class="token operator">=</span> x1 <span class="token operator">-</span> q <span class="token operator">*</span> x0<span class="token punctuation">,</span> x0
    <span class="token keyword">if</span> x1 <span class="token operator">&lt;</span> <span class="token number">0</span><span class="token punctuation">:</span>
        x1 <span class="token operator">+=</span> m0
    <span class="token keyword">return</span> x1

<span class="token keyword">def</span> <span class="token function">elliptic_curve_scalar_multiply</span><span class="token punctuation">(</span>P<span class="token punctuation">,</span> k<span class="token punctuation">,</span> a<span class="token punctuation">,</span> b<span class="token punctuation">,</span> p<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token triple-quoted-string string">&quot;&quot;&quot;
    椭圆曲线标量乘法：k * P
    &quot;&quot;&quot;</span>
    result <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span>  <span class="token comment"># 无限远点</span>
    base <span class="token operator">=</span> P

    <span class="token keyword">while</span> k<span class="token punctuation">:</span>
        <span class="token keyword">if</span> k <span class="token operator">%</span> <span class="token number">2</span> <span class="token operator">==</span> <span class="token number">1</span><span class="token punctuation">:</span>
            result <span class="token operator">=</span> elliptic_curve_add<span class="token punctuation">(</span>result<span class="token punctuation">,</span> base<span class="token punctuation">,</span> a<span class="token punctuation">,</span> b<span class="token punctuation">,</span> p<span class="token punctuation">)</span>
        base <span class="token operator">=</span> elliptic_curve_add<span class="token punctuation">(</span>base<span class="token punctuation">,</span> base<span class="token punctuation">,</span> a<span class="token punctuation">,</span> b<span class="token punctuation">,</span> p<span class="token punctuation">)</span>
        k <span class="token operator">//=</span> <span class="token number">2</span>

    <span class="token keyword">return</span> result


<span class="token keyword">def</span> <span class="token function">generate_commitment</span><span class="token punctuation">(</span>x<span class="token punctuation">,</span> r<span class="token punctuation">,</span> g<span class="token punctuation">,</span> h<span class="token punctuation">,</span> p<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token triple-quoted-string string">&quot;&quot;&quot;
    生成承诺值：Commit(x) = g^x * h^r
    其中 g 和 h 是椭圆曲线的基点
    &quot;&quot;&quot;</span>
    g_x <span class="token operator">=</span> elliptic_curve_scalar_multiply<span class="token punctuation">(</span>g<span class="token punctuation">,</span> x<span class="token punctuation">,</span> a<span class="token punctuation">,</span> b<span class="token punctuation">,</span> p<span class="token punctuation">)</span>
    h_r <span class="token operator">=</span> elliptic_curve_scalar_multiply<span class="token punctuation">(</span>h<span class="token punctuation">,</span> r<span class="token punctuation">,</span> a<span class="token punctuation">,</span> b<span class="token punctuation">,</span> p<span class="token punctuation">)</span>
    commitment <span class="token operator">=</span> elliptic_curve_add<span class="token punctuation">(</span>g_x<span class="token punctuation">,</span> h_r<span class="token punctuation">,</span> a<span class="token punctuation">,</span> b<span class="token punctuation">,</span> p<span class="token punctuation">)</span>
    <span class="token keyword">return</span> commitment

<span class="token keyword">def</span> <span class="token function">generate_proof</span><span class="token punctuation">(</span>x<span class="token punctuation">,</span> r<span class="token punctuation">,</span> g<span class="token punctuation">,</span> h<span class="token punctuation">,</span> a<span class="token punctuation">,</span> b<span class="token punctuation">,</span> p<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token triple-quoted-string string">&quot;&quot;&quot;
    生成证明，通过承诺和一些数学运算，证明者可以展示他们知道某个秘密
    &quot;&quot;&quot;</span>
    <span class="token comment"># 生成承诺</span>
    commitment <span class="token operator">=</span> generate_commitment<span class="token punctuation">(</span>x<span class="token punctuation">,</span> r<span class="token punctuation">,</span> g<span class="token punctuation">,</span> h<span class="token punctuation">,</span> p<span class="token punctuation">)</span>
    
    <span class="token comment"># 随机生成并生成证明部分（简化示例）</span>
    proof <span class="token operator">=</span> <span class="token punctuation">{</span>
        <span class="token string">&quot;commitment&quot;</span><span class="token punctuation">:</span> commitment<span class="token punctuation">,</span>
        <span class="token string">&quot;r&quot;</span><span class="token punctuation">:</span> r<span class="token punctuation">,</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> proof

<span class="token keyword">def</span> <span class="token function">verify_proof</span><span class="token punctuation">(</span>proof<span class="token punctuation">,</span> g<span class="token punctuation">,</span> h<span class="token punctuation">,</span> a<span class="token punctuation">,</span> b<span class="token punctuation">,</span> p<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token triple-quoted-string string">&quot;&quot;&quot;
    验证证明：检查承诺是否匹配
    &quot;&quot;&quot;</span>
    commitment <span class="token operator">=</span> proof<span class="token punctuation">[</span><span class="token string">&quot;commitment&quot;</span><span class="token punctuation">]</span>
    r <span class="token operator">=</span> proof<span class="token punctuation">[</span><span class="token string">&quot;r&quot;</span><span class="token punctuation">]</span>
    
    <span class="token comment"># 计算承诺值（基于随机数 r）</span>
    expected_commitment <span class="token operator">=</span> generate_commitment<span class="token punctuation">(</span>x<span class="token punctuation">,</span> r<span class="token punctuation">,</span> g<span class="token punctuation">,</span> h<span class="token punctuation">,</span> p<span class="token punctuation">)</span>
    
    <span class="token keyword">if</span> commitment <span class="token operator">==</span> expected_commitment<span class="token punctuation">:</span>
        <span class="token keyword">return</span> <span class="token boolean">True</span>
    <span class="token keyword">return</span> <span class="token boolean">False</span>

<span class="token comment"># 假设我们有如下椭圆曲线参数</span>
p <span class="token operator">=</span> <span class="token number">0xFFFFFFFF00000001</span>  <span class="token comment"># 一个大的质数，作为有限域的模数</span>
a <span class="token operator">=</span> <span class="token number">0</span>  <span class="token comment"># 选择适当的曲线参数</span>
b <span class="token operator">=</span> <span class="token number">7</span>  <span class="token comment"># 选择适当的曲线参数</span>

<span class="token comment"># 基点 g 和 h</span>
g <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">22</span><span class="token punctuation">)</span>  <span class="token comment"># 曲线上的基点（x, y）</span>
h <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">23</span><span class="token punctuation">)</span>  <span class="token comment"># 曲线上的另一个基点（x, y）</span>

<span class="token comment"># 私密值和随机数</span>
x <span class="token operator">=</span> <span class="token number">12345</span>  <span class="token comment"># 我们希望证明的秘密</span>
r <span class="token operator">=</span> <span class="token number">67890</span>  <span class="token comment"># 随机数</span>

<span class="token comment"># 生成证明</span>
proof <span class="token operator">=</span> generate_proof<span class="token punctuation">(</span>x<span class="token punctuation">,</span> r<span class="token punctuation">,</span> g<span class="token punctuation">,</span> h<span class="token punctuation">,</span> a<span class="token punctuation">,</span> b<span class="token punctuation">,</span> p<span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;Proof:&quot;</span><span class="token punctuation">,</span> proof<span class="token punctuation">)</span>

<span class="token comment"># 验证证明</span>
is_valid <span class="token operator">=</span> verify_proof<span class="token punctuation">(</span>proof<span class="token punctuation">,</span> g<span class="token punctuation">,</span> h<span class="token punctuation">,</span> a<span class="token punctuation">,</span> b<span class="token punctuation">,</span> p<span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;Is the proof valid?&quot;</span><span class="token punctuation">,</span> is_valid<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),o=[e];function c(l,i){return s(),a("div",null,o)}const r=n(t,[["render",c],["__file","zero.html.vue"]]);export{r as default};
