const e=JSON.parse('{"key":"v-49f40319","path":"/web3/smart/btc/theory.html","title":"BTC原理","lang":"zh-CN","frontmatter":{"description":"比特币单位 1. 比特币（BTC） 2. 毫比特币（mBTC） 3. 微比特币（μBTC） 4. 聪（Satoshi） PSBT PSBT (Partially Signed Bitcoin Transaction) 是一种比特币交易的标准格式，允许交易的部分签名，以便在多个参与方之间协作签署交易，尤其在多重签名 (multisig) 和硬件钱包场景中...","head":[["meta",{"property":"og:url","content":"https://deelmind.com/web3/smart/btc/theory.html"}],["meta",{"property":"og:site_name","content":"極客方舟"}],["meta",{"property":"og:title","content":"BTC原理"}],["meta",{"property":"og:description","content":"比特币单位 1. 比特币（BTC） 2. 毫比特币（mBTC） 3. 微比特币（μBTC） 4. 聪（Satoshi） PSBT PSBT (Partially Signed Bitcoin Transaction) 是一种比特币交易的标准格式，允许交易的部分签名，以便在多个参与方之间协作签署交易，尤其在多重签名 (multisig) 和硬件钱包场景中..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"BTC原理\\",\\"image\\":[\\"\\"],\\"dateModified\\":null,\\"author\\":[]}"]]},"headers":[{"level":2,"title":"比特币单位","slug":"比特币单位","link":"#比特币单位","children":[]},{"level":2,"title":"PSBT","slug":"psbt","link":"#psbt","children":[]},{"level":2,"title":"UTXO (Unspent Transaction Output) 模型","slug":"utxo-unspent-transaction-output-模型","link":"#utxo-unspent-transaction-output-模型","children":[{"level":3,"title":"1. UTXO 模型的特点","slug":"_1-utxo-模型的特点","link":"#_1-utxo-模型的特点","children":[]},{"level":3,"title":"2. UTXO 交易流程","slug":"_2-utxo-交易流程","link":"#_2-utxo-交易流程","children":[]}]},{"level":2,"title":"比特币中的UTXO脚本","slug":"比特币中的utxo脚本","link":"#比特币中的utxo脚本","children":[{"level":3,"title":"1. 脚本类型","slug":"_1-脚本类型","link":"#_1-脚本类型","children":[]},{"level":3,"title":"2. 脚本结构","slug":"_2-脚本结构","link":"#_2-脚本结构","children":[]},{"level":3,"title":"3. 脚本执行","slug":"_3-脚本执行","link":"#_3-脚本执行","children":[]},{"level":3,"title":"4. 安全性与复杂性","slug":"_4-安全性与复杂性","link":"#_4-安全性与复杂性","children":[]}]},{"level":2,"title":"比特币地址类型","slug":"比特币地址类型","link":"#比特币地址类型","children":[{"level":3,"title":"1. P2PKH（Pay to Public Key Hash）","slug":"_1-p2pkh-pay-to-public-key-hash","link":"#_1-p2pkh-pay-to-public-key-hash","children":[]},{"level":3,"title":"2. P2SH（Pay to Script Hash）","slug":"_2-p2sh-pay-to-script-hash","link":"#_2-p2sh-pay-to-script-hash","children":[]},{"level":3,"title":"3. P2WPKH（Pay to Witness Public Key Hash）","slug":"_3-p2wpkh-pay-to-witness-public-key-hash","link":"#_3-p2wpkh-pay-to-witness-public-key-hash","children":[]},{"level":3,"title":"4. P2WSH（Pay to Witness Script Hash）","slug":"_4-p2wsh-pay-to-witness-script-hash","link":"#_4-p2wsh-pay-to-witness-script-hash","children":[]}]},{"level":2,"title":"1. 简介 (Introduction)","slug":"_1-简介-introduction","link":"#_1-简介-introduction","children":[]},{"level":2,"title":"2. 交易 (Transactions)","slug":"_2-交易-transactions","link":"#_2-交易-transactions","children":[]},{"level":2,"title":"3. 时间戳服务器 (Timestamp Server)","slug":"_3-时间戳服务器-timestamp-server","link":"#_3-时间戳服务器-timestamp-server","children":[]},{"level":2,"title":"4. 工作证明 (Proof-of-Work)","slug":"_4-工作证明-proof-of-work","link":"#_4-工作证明-proof-of-work","children":[]},{"level":2,"title":"5. 网络 (Network)","slug":"_5-网络-network","link":"#_5-网络-network","children":[]},{"level":2,"title":"6. 奖励 (Incentive)","slug":"_6-奖励-incentive","link":"#_6-奖励-incentive","children":[]},{"level":2,"title":"7. 回收硬盘空间 (Reclaiming Disk Space)","slug":"_7-回收硬盘空间-reclaiming-disk-space","link":"#_7-回收硬盘空间-reclaiming-disk-space","children":[]},{"level":2,"title":"8. 简化版支付确认 (Simplified Payment Verification)","slug":"_8-简化版支付确认-simplified-payment-verification","link":"#_8-简化版支付确认-simplified-payment-verification","children":[]},{"level":2,"title":"9. 价值的组合与分割 (Combining and Splitting Value)","slug":"_9-价值的组合与分割-combining-and-splitting-value","link":"#_9-价值的组合与分割-combining-and-splitting-value","children":[]},{"level":2,"title":"10. 隐私 (Privacy)","slug":"_10-隐私-privacy","link":"#_10-隐私-privacy","children":[]},{"level":2,"title":"11. 计算 (Calculations)","slug":"_11-计算-calculations","link":"#_11-计算-calculations","children":[]},{"level":2,"title":"12. 结论 (Conclusion)","slug":"_12-结论-conclusion","link":"#_12-结论-conclusion","children":[]},{"level":2,"title":"参考文献 (References)","slug":"参考文献-references","link":"#参考文献-references","children":[]}],"git":{"createdTime":null,"updatedTime":null,"contributors":[]},"readingTime":{"minutes":35.11,"words":10533},"filePathRelative":"web3/smart/btc/theory.md","copyright":{},"autoDesc":true,"excerpt":""}');export{e as data};
