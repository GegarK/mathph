const e=JSON.parse('{"key":"v-16ca8057","path":"/web3/vulns/create2.html","title":"Create2钓鱼","lang":"zh-CN","frontmatter":{"description":"CREATE2 是以太坊中的一种合约创建机制，它允许开发者在已知的地址上部署合约，而无需提前知道这个地址。攻击者可以利用这一特性，通过恶意合约地址进行钓鱼攻击。 攻击原理 1. 合约地址预测：攻击者可以使用 CREATE2 计算出一个合约的地址，只要知道创建合约的创始地址和特定的盐值（salt），他们就可以在未来的某个时间点向这个地址发送交易。 2. ...","head":[["meta",{"property":"og:url","content":"https://deelmind.com/web3/vulns/create2.html"}],["meta",{"property":"og:site_name","content":"極客方舟"}],["meta",{"property":"og:title","content":"Create2钓鱼"}],["meta",{"property":"og:description","content":"CREATE2 是以太坊中的一种合约创建机制，它允许开发者在已知的地址上部署合约，而无需提前知道这个地址。攻击者可以利用这一特性，通过恶意合约地址进行钓鱼攻击。 攻击原理 1. 合约地址预测：攻击者可以使用 CREATE2 计算出一个合约的地址，只要知道创建合约的创始地址和特定的盐值（salt），他们就可以在未来的某个时间点向这个地址发送交易。 2. ..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Create2钓鱼\\",\\"image\\":[\\"\\"],\\"dateModified\\":null,\\"author\\":[]}"]]},"headers":[{"level":2,"title":"攻击原理","slug":"攻击原理","link":"#攻击原理","children":[]},{"level":2,"title":"CREATE2 钓鱼代码示例","slug":"create2-钓鱼代码示例","link":"#create2-钓鱼代码示例","children":[]}],"git":{"createdTime":null,"updatedTime":null,"contributors":[]},"readingTime":{"minutes":1.51,"words":453},"filePathRelative":"web3/vulns/create2.md","copyright":{},"autoDesc":true,"excerpt":""}');export{e as data};
