import{_ as l,K as u,L as r,a5 as a,M as n,N as s,a6 as c,W as p,F as e}from"./framework-edebdfe1.js";const k={},d=n("h1",{id:"社会工程",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#社会工程","aria-hidden":"true"},"#"),s(" 社会工程")],-1),m=n("h2",{id:"什么是社会工程",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#什么是社会工程","aria-hidden":"true"},"#"),s(" 什么是社会工程")],-1),v=n("p",null,"社会工程是一种通过操纵人的心理来获取信息、欺诈或入侵系统的行为。它利用人们的信任、同情心、恐惧感或其他心理弱点，诱使他们做出违反安全策略或泄露敏感信息的举动。",-1),b=p('<p>社会工程攻击可以采取多种形式，包括：</p><ul><li><p>网络钓鱼：攻击者会发送伪装成合法机构或个人的电子邮件或短信，诱使受害者点击恶意链接或泄露个人信息。</p></li><li><p>电话诈骗：攻击者会冒充政府部门、银行或其他机构的工作人员，通过电话联系受害者，并要求他们提供个人信息或转账汇款。</p></li></ul><p>个人信息：姓名、身份证号码、银行账户信息、信用卡号等。 机密信息：商业机密、政府文件、军事秘密等。 计算机系统：获取访问权限、植入恶意软件、窃取数据等。 社会工程攻击之所以有效，是因为它利用了人们的心理弱点。例如，人们通常会信任看起来合法或权威的人，也容易被恐惧感或紧迫感所驱使。</p><h2 id="什么是社工库" tabindex="-1"><a class="header-anchor" href="#什么是社工库" aria-hidden="true">#</a> 什么是社工库</h2><p>社工库，也称为社会工程数据库，是指包含大量个人信息的数据库，这些信息通常是通过社会工程攻击、网络攻击或数据泄露等方式收集的。社工库中的信息可能包括：</p><p>个人身份信息：姓名、身份证号码、地址、电话号码、邮箱地址等。 账户信息：社交媒体账号、银行账户、信用卡信息等。 其他敏感信息：密码、聊天记录、照片、旅行记录等。</p><h2 id="开源社工库" tabindex="-1"><a class="header-anchor" href="#开源社工库" aria-hidden="true">#</a> 开源社工库</h2><p>电脑端打开本网站首页，限时查看右边数据查询。</p>',8),_={id:"搭建社工库-直播讲解",tabindex:"-1"},h=n("a",{class:"header-anchor",href:"#搭建社工库-直播讲解","aria-hidden":"true"},"#",-1),g={href:"https://forum.deelmind.com/",target:"_blank",rel:"noopener noreferrer"},f=p(`<ol><li>数据准备</li></ol><div class="language-magnet line-numbers-mode" data-ext="magnet"><pre class="language-magnet"><code>magnet:?xt=urn:btih:e831fcfaca5f0208009406b7b090014cef9228a9&amp;dn=passwds

magnet:?xt=urn:btih:963fd90eee4db809ed4224d1ca7a0639c443cf4b

magnet:?xt=urn:btih:c81e0644fd67f73d81b94a31e3fc726679638a98&amp;dn=pcht-v1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2"><li>大数据查询环境（或者用GitHub）</li></ol><p>start .\\elasticsearch-8.13.0\\bin\\elasticsearch.bat</p><p>elasticsearch-8.13.0\\config\\elasticsearch.yml</p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">http.port</span><span class="token punctuation">:</span> <span class="token number">9200</span>
<span class="token key atrule">http.host</span><span class="token punctuation">:</span> 0.0.0.0
<span class="token key atrule">xpack.security.enabled</span><span class="token punctuation">:</span> <span class="token boolean important">false</span>
<span class="token key atrule">xpack.security.enrollment.enabled</span><span class="token punctuation">:</span> <span class="token boolean important">false</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>start .\\kibana-8.13.0\\bin\\kibana.bat</p><p>kibana-8.13.0\\config\\kibana.yml 为空</p><p>.\\ngrok http --domain=surely-up-alpaca.ngrok-free.app 5601</p><ol start="3"><li>导入数据即可</li></ol><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">import</span> pandas <span class="token keyword">as</span> pd
<span class="token keyword">from</span> elasticsearch <span class="token keyword">import</span> Elasticsearch
<span class="token keyword">import</span> os
<span class="token keyword">import</span> hashlib
<span class="token keyword">import</span> json

<span class="token comment"># Elasticsearch索引名称前缀</span>
index_prefix <span class="token operator">=</span> <span class="token string">&#39;socialdb&#39;</span>

<span class="token comment"># CSV文件路径</span>
directory <span class="token operator">=</span> <span class="token string">r&quot;your_path&quot;</span>

<span class="token comment"># Elasticsearch连接</span>
es <span class="token operator">=</span> Elasticsearch<span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">&#39;http://127.0.0.1:9200&#39;</span><span class="token punctuation">]</span><span class="token punctuation">)</span>

<span class="token comment"># 记录最后处理的文件及行数的状态文件路径</span>
status_file <span class="token operator">=</span> <span class="token string">&quot;status.json&quot;</span>

<span class="token comment"># 如果状态文件存在，则加载上次的处理状态</span>
<span class="token keyword">if</span> os<span class="token punctuation">.</span>path<span class="token punctuation">.</span>exists<span class="token punctuation">(</span>status_file<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">with</span> <span class="token builtin">open</span><span class="token punctuation">(</span>status_file<span class="token punctuation">,</span> <span class="token string">&#39;r&#39;</span><span class="token punctuation">)</span> <span class="token keyword">as</span> f<span class="token punctuation">:</span>
        status <span class="token operator">=</span> json<span class="token punctuation">.</span>load<span class="token punctuation">(</span>f<span class="token punctuation">)</span>
<span class="token keyword">else</span><span class="token punctuation">:</span>
    status <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token string">&quot;last_processed_file&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;last_processed_row&quot;</span><span class="token punctuation">:</span> <span class="token number">0</span><span class="token punctuation">}</span>

<span class="token comment"># 遍历目录下的所有文件</span>
<span class="token keyword">for</span> root<span class="token punctuation">,</span> dirs<span class="token punctuation">,</span> files <span class="token keyword">in</span> os<span class="token punctuation">.</span>walk<span class="token punctuation">(</span>directory<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">for</span> filename <span class="token keyword">in</span> files<span class="token punctuation">:</span>
        file_path <span class="token operator">=</span> os<span class="token punctuation">.</span>path<span class="token punctuation">.</span>join<span class="token punctuation">(</span>root<span class="token punctuation">,</span> filename<span class="token punctuation">)</span>
        <span class="token keyword">if</span> file_path <span class="token operator">&lt;</span> status<span class="token punctuation">[</span><span class="token string">&#39;last_processed_file&#39;</span><span class="token punctuation">]</span><span class="token punctuation">:</span>
            <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;跳过&quot;</span><span class="token punctuation">,</span> file_path<span class="token punctuation">)</span>
            <span class="token keyword">continue</span>  <span class="token comment"># 跳过已经处理过的文件</span>

        <span class="token comment"># 创建 SHA-256 哈希对象</span>
        hash_object <span class="token operator">=</span> hashlib<span class="token punctuation">.</span>sha256<span class="token punctuation">(</span><span class="token punctuation">)</span>

        <span class="token comment"># 更新哈希对象</span>
        hash_object<span class="token punctuation">.</span>update<span class="token punctuation">(</span>file_path<span class="token punctuation">.</span>encode<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>

        <span class="token comment"># 计算哈希值作为索引名称的一部分</span>
        index_name <span class="token operator">=</span> index_prefix <span class="token operator">+</span> <span class="token string">&quot;_&quot;</span> <span class="token operator">+</span> hash_object<span class="token punctuation">.</span>hexdigest<span class="token punctuation">(</span><span class="token punctuation">)</span>

        <span class="token comment"># 记录正在处理的文件</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string-interpolation"><span class="token string">f&quot;Processing file: </span><span class="token interpolation"><span class="token punctuation">{</span>file_path<span class="token punctuation">}</span></span><span class="token string">&quot;</span></span><span class="token punctuation">)</span>

        <span class="token comment"># 读取CSV文件并插入数据到Elasticsearch</span>
        <span class="token keyword">try</span><span class="token punctuation">:</span>
            <span class="token comment"># 读取CSV文件，将所有列都设定为字符串类型</span>
            df <span class="token operator">=</span> pd<span class="token punctuation">.</span>read_csv<span class="token punctuation">(</span>file_path<span class="token punctuation">,</span> delimiter<span class="token operator">=</span><span class="token string">&#39;----&#39;</span><span class="token punctuation">,</span> encoding<span class="token operator">=</span><span class="token string">&#39;utf-8&#39;</span><span class="token punctuation">,</span> header<span class="token operator">=</span><span class="token boolean">None</span><span class="token punctuation">,</span> dtype<span class="token operator">=</span><span class="token builtin">str</span><span class="token punctuation">)</span>

            <span class="token comment"># 创建一个列表用于存储批量插入的数据</span>
            bulk_data <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>

            <span class="token keyword">for</span> row_index<span class="token punctuation">,</span> row <span class="token keyword">in</span> df<span class="token punctuation">.</span>iterrows<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
                <span class="token keyword">if</span> row_index <span class="token operator">&lt;</span> status<span class="token punctuation">[</span><span class="token string">&#39;last_processed_row&#39;</span><span class="token punctuation">]</span><span class="token punctuation">:</span>
                    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;跳过&quot;</span><span class="token punctuation">,</span> row_index<span class="token punctuation">)</span>
                    <span class="token keyword">continue</span>  <span class="token comment"># 跳过已经处理过的行</span>

                <span class="token comment"># 要替换的键映射关系</span>
                key_mapping <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token number">0</span><span class="token punctuation">:</span> <span class="token string">&#39;QQ&#39;</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">:</span> <span class="token string">&#39;Tel&#39;</span><span class="token punctuation">}</span>

                <span class="token comment"># 使用字典推导式替换键，并将Tel转换为字符串</span>
                new_dict <span class="token operator">=</span> <span class="token punctuation">{</span>key_mapping<span class="token punctuation">.</span>get<span class="token punctuation">(</span>old_key<span class="token punctuation">,</span> old_key<span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token builtin">str</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span> <span class="token keyword">for</span> old_key<span class="token punctuation">,</span> value <span class="token keyword">in</span> row<span class="token punctuation">.</span>to_dict<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>items<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">}</span>

                <span class="token comment"># 将数据加入批量插入列表</span>
                bulk_data<span class="token punctuation">.</span>append<span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token string">&quot;index&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">{</span><span class="token string">&quot;_index&quot;</span><span class="token punctuation">:</span> index_name<span class="token punctuation">.</span>lower<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
                bulk_data<span class="token punctuation">.</span>append<span class="token punctuation">(</span>new_dict<span class="token punctuation">)</span>

                <span class="token comment"># print(f&quot;正在添加Row {row_index}{new_dict}&quot;)</span>

                <span class="token comment"># 当批量插入列表中的数据量达到一定程度时执行批量插入</span>
                <span class="token keyword">if</span> <span class="token builtin">len</span><span class="token punctuation">(</span>bulk_data<span class="token punctuation">)</span> <span class="token operator">&gt;=</span> <span class="token number">5000</span><span class="token punctuation">:</span>
                    res <span class="token operator">=</span> es<span class="token punctuation">.</span>bulk<span class="token punctuation">(</span>index<span class="token operator">=</span>index_name<span class="token punctuation">.</span>lower<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> body<span class="token operator">=</span>bulk_data<span class="token punctuation">,</span> refresh<span class="token operator">=</span><span class="token boolean">True</span><span class="token punctuation">)</span>
                    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string-interpolation"><span class="token string">f&quot;已插入 </span><span class="token interpolation"><span class="token punctuation">{</span><span class="token builtin">len</span><span class="token punctuation">(</span>bulk_data<span class="token punctuation">)</span> <span class="token operator">//</span> <span class="token number">2</span><span class="token punctuation">}</span></span><span class="token string"> 条数据到 Elasticsearch&quot;</span></span><span class="token punctuation">)</span>
                    bulk_data <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>  <span class="token comment"># 清空批量插入列表</span>

            <span class="token comment"># 处理剩余未插入的数据</span>
            <span class="token keyword">if</span> bulk_data<span class="token punctuation">:</span>
                res <span class="token operator">=</span> es<span class="token punctuation">.</span>bulk<span class="token punctuation">(</span>index<span class="token operator">=</span>index_name<span class="token punctuation">.</span>lower<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> body<span class="token operator">=</span>bulk_data<span class="token punctuation">,</span> refresh<span class="token operator">=</span><span class="token boolean">True</span><span class="token punctuation">)</span>
                <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string-interpolation"><span class="token string">f&quot;已插入 </span><span class="token interpolation"><span class="token punctuation">{</span><span class="token builtin">len</span><span class="token punctuation">(</span>bulk_data<span class="token punctuation">)</span> <span class="token operator">//</span> <span class="token number">2</span><span class="token punctuation">}</span></span><span class="token string"> 条数据到 Elasticsearch&quot;</span></span><span class="token punctuation">)</span>

        <span class="token keyword">except</span> Exception <span class="token keyword">as</span> e<span class="token punctuation">:</span>
            <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string-interpolation"><span class="token string">f&quot;Error reading file </span><span class="token interpolation"><span class="token punctuation">{</span>file_path<span class="token punctuation">}</span></span><span class="token string">: </span><span class="token interpolation"><span class="token punctuation">{</span><span class="token builtin">str</span><span class="token punctuation">(</span>e<span class="token punctuation">)</span><span class="token punctuation">}</span></span><span class="token string">&quot;</span></span><span class="token punctuation">)</span>
            <span class="token comment"># 更新状态文件</span>
            status<span class="token punctuation">[</span><span class="token string">&#39;last_processed_file&#39;</span><span class="token punctuation">]</span> <span class="token operator">=</span> file_path
            status<span class="token punctuation">[</span><span class="token string">&#39;last_processed_row&#39;</span><span class="token punctuation">]</span> <span class="token operator">=</span> row_index
            <span class="token keyword">with</span> <span class="token builtin">open</span><span class="token punctuation">(</span>status_file<span class="token punctuation">,</span> <span class="token string">&#39;w&#39;</span><span class="token punctuation">)</span> <span class="token keyword">as</span> f<span class="token punctuation">:</span>
                json<span class="token punctuation">.</span>dump<span class="token punctuation">(</span>status<span class="token punctuation">,</span> f<span class="token punctuation">)</span>
                exit<span class="token punctuation">(</span><span class="token punctuation">)</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,11),y={id:"获取tg社工库-直播讲解",tabindex:"-1"},w=n("a",{class:"header-anchor",href:"#获取tg社工库-直播讲解","aria-hidden":"true"},"#",-1),x={href:"https://forum.deelmind.com/",target:"_blank",rel:"noopener noreferrer"},q=n("li",null,[n("p",null,"导出群聊天内容")],-1),E={href:"https://core.telegram.org/api",target:"_blank",rel:"noopener noreferrer"},T=p(`<div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">from</span> telethon <span class="token keyword">import</span> TelegramClient

<span class="token comment"># 使用你从 Telegram 获取的 API ID 和 API Hash</span>
api_id <span class="token operator">=</span> <span class="token string">&#39;your_api_id&#39;</span>
api_hash <span class="token operator">=</span> <span class="token string">&#39;your_api_hash&#39;</span>

<span class="token comment"># 创建客户端</span>
client <span class="token operator">=</span> TelegramClient<span class="token punctuation">(</span><span class="token string">&#39;session_name&#39;</span><span class="token punctuation">,</span> api_id<span class="token punctuation">,</span> api_hash<span class="token punctuation">)</span>

<span class="token comment"># 异步函数，获取消息内容</span>
<span class="token keyword">async</span> <span class="token keyword">def</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token comment"># 登录 Telegram</span>
    <span class="token keyword">await</span> client<span class="token punctuation">.</span>start<span class="token punctuation">(</span><span class="token punctuation">)</span>
    
    <span class="token comment"># 查找特定的群聊</span>
    chat <span class="token operator">=</span> <span class="token keyword">await</span> client<span class="token punctuation">.</span>get_entity<span class="token punctuation">(</span><span class="token string">&#39;group_chat_name_or_id&#39;</span><span class="token punctuation">)</span>

    <span class="token comment"># 获取最近的消息</span>
    <span class="token keyword">async</span> <span class="token keyword">for</span> message <span class="token keyword">in</span> client<span class="token punctuation">.</span>iter_messages<span class="token punctuation">(</span>chat<span class="token punctuation">,</span> limit<span class="token operator">=</span><span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span>message<span class="token punctuation">.</span>sender_id<span class="token punctuation">,</span> message<span class="token punctuation">.</span>text<span class="token punctuation">)</span>

<span class="token comment"># 运行脚本</span>
<span class="token keyword">with</span> client<span class="token punctuation">:</span>
    client<span class="token punctuation">.</span>loop<span class="token punctuation">.</span>run_until_complete<span class="token punctuation">(</span>main<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><p>客户端程序获取</p></li><li><p>WEB页面获取</p></li></ul>`,2);function j(C,V){const i=e("DocsAD"),o=e("RouterLink"),t=e("ExternalLinkIcon");return u(),r("div",null,[d,m,v,a(i),b,n("h2",_,[h,s(),a(o,{to:"/pay/class/tiny.html"},{default:c(()=>[s("搭建社工库")]),_:1}),s(" - "),n("a",g,[s("直播讲解"),a(t)])]),f,n("h2",y,[w,s(),a(o,{to:"/pay/class/tiny.html"},{default:c(()=>[s("获取TG社工库")]),_:1}),s(" - "),n("a",x,[s("直播讲解"),a(t)])]),n("ul",null,[q,n("li",null,[n("p",null,[n("a",E,[s("TelegramAPI"),a(t)])])])]),T])}const I=l(k,[["render",j],["__file","index.html.vue"]]);export{I as default};