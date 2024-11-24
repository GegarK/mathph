import{_ as l,K as t,L as n,M as s,N as a,W as m}from"./framework-fa417d66.js";const e={},i=s("h1",{id:"离散对数",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#离散对数","aria-hidden":"true"},"#"),a(" 离散对数")],-1),p=s("p",null,[a("离散对数（Discrete Logarithm）是数论中的一个基本问题，广泛应用于密码学，尤其是在公钥密码学和区块链中。简而言之，离散对数问题是指在有限域或群中，给定一个基数和一个元素，找到该元素相对于基数的指数。具体来说，如果给定一个群 "),s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("semantics",null,[s("mrow",null,[s("mi",null,"G")]),s("annotation",{encoding:"application/x-tex"},"G")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.6833em"}}),s("span",{class:"mord mathnormal"},"G")])])]),a("，元素 "),s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("semantics",null,[s("mrow",null,[s("mi",null,"g"),s("mo",null,"∈"),s("mi",null,"G")]),s("annotation",{encoding:"application/x-tex"},"g \\in G")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.7335em","vertical-align":"-0.1944em"}}),s("span",{class:"mord mathnormal",style:{"margin-right":"0.03588em"}},"g"),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}}),s("span",{class:"mrel"},"∈"),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}})]),s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.6833em"}}),s("span",{class:"mord mathnormal"},"G")])])]),a(" 和一个元素 "),s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("semantics",null,[s("mrow",null,[s("mi",null,"h"),s("mo",null,"∈"),s("mi",null,"G")]),s("annotation",{encoding:"application/x-tex"},"h \\in G")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.7335em","vertical-align":"-0.0391em"}}),s("span",{class:"mord mathnormal"},"h"),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}}),s("span",{class:"mrel"},"∈"),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}})]),s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.6833em"}}),s("span",{class:"mord mathnormal"},"G")])])]),a("，离散对数问题就是求解 "),s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("semantics",null,[s("mrow",null,[s("mi",null,"x")]),s("annotation",{encoding:"application/x-tex"},"x")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.4306em"}}),s("span",{class:"mord mathnormal"},"x")])])]),a("，使得：")],-1),c=s("p",{class:"katex-block"},[s("span",{class:"katex-display"},[s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML",display:"block"},[s("semantics",null,[s("mrow",null,[s("msup",null,[s("mi",null,"g"),s("mi",null,"x")]),s("mo",null,"="),s("mi",null,"h"),s("mspace"),s("mspace",{width:"1em"}),s("mo",{stretchy:"false"},"("),s("mrow",null,[s("mi",{mathvariant:"normal"},"m"),s("mi",{mathvariant:"normal"},"o"),s("mi",{mathvariant:"normal"},"d")]),s("mspace",{width:"0.3333em"}),s("mi",null,"p"),s("mo",{stretchy:"false"},")")]),s("annotation",{encoding:"application/x-tex"}," g^x = h \\pmod{p} ")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.9088em","vertical-align":"-0.1944em"}}),s("span",{class:"mord"},[s("span",{class:"mord mathnormal",style:{"margin-right":"0.03588em"}},"g"),s("span",{class:"msupsub"},[s("span",{class:"vlist-t"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.7144em"}},[s("span",{style:{top:"-3.113em","margin-right":"0.05em"}},[s("span",{class:"pstrut",style:{height:"2.7em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mathnormal mtight"},"x")])])])])])])]),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}}),s("span",{class:"mrel"},"="),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}})]),s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.6944em"}}),s("span",{class:"mord mathnormal"},"h"),s("span",{class:"mspace allowbreak"}),s("span",{class:"mspace",style:{"margin-right":"1em"}})]),s("span",{class:"base"},[s("span",{class:"strut",style:{height:"1em","vertical-align":"-0.25em"}}),s("span",{class:"mopen"},"("),s("span",{class:"mord"},[s("span",{class:"mord"},[s("span",{class:"mord mathrm"},"mod")])]),s("span",{class:"mspace",style:{"margin-right":"0.3333em"}}),s("span",{class:"mord mathnormal"},"p"),s("span",{class:"mclose"},")")])])])])],-1),r=s("p",null,[a("其中 "),s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("semantics",null,[s("mrow",null,[s("mi",null,"p")]),s("annotation",{encoding:"application/x-tex"},"p")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.625em","vertical-align":"-0.1944em"}}),s("span",{class:"mord mathnormal"},"p")])])]),a(" 是一个素数，"),s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("semantics",null,[s("mrow",null,[s("mi",null,"g")]),s("annotation",{encoding:"application/x-tex"},"g")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.625em","vertical-align":"-0.1944em"}}),s("span",{class:"mord mathnormal",style:{"margin-right":"0.03588em"}},"g")])])]),a(" 是生成元（基），"),s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("semantics",null,[s("mrow",null,[s("mi",null,"h")]),s("annotation",{encoding:"application/x-tex"},"h")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.6944em"}}),s("span",{class:"mord mathnormal"},"h")])])]),a(" 是一个群元素，而 "),s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("semantics",null,[s("mrow",null,[s("mi",null,"x")]),s("annotation",{encoding:"application/x-tex"},"x")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.4306em"}}),s("span",{class:"mord mathnormal"},"x")])])]),a(" 是离散对数，满足 "),s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("semantics",null,[s("mrow",null,[s("msup",null,[s("mi",null,"g"),s("mi",null,"x")]),s("mo",null,"≡"),s("mi",null,"h"),s("mspace"),s("mspace",{width:"0.4444em"}),s("mo",{stretchy:"false"},"("),s("mrow",null,[s("mi",{mathvariant:"normal"},"m"),s("mi",{mathvariant:"normal"},"o"),s("mi",{mathvariant:"normal"},"d")]),s("mspace",{width:"0.3333em"}),s("mi",null,"p"),s("mo",{stretchy:"false"},")")]),s("annotation",{encoding:"application/x-tex"},"g^x \\equiv h \\pmod{p}")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.8588em","vertical-align":"-0.1944em"}}),s("span",{class:"mord"},[s("span",{class:"mord mathnormal",style:{"margin-right":"0.03588em"}},"g"),s("span",{class:"msupsub"},[s("span",{class:"vlist-t"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.6644em"}},[s("span",{style:{top:"-3.063em","margin-right":"0.05em"}},[s("span",{class:"pstrut",style:{height:"2.7em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mathnormal mtight"},"x")])])])])])])]),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}}),s("span",{class:"mrel"},"≡"),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}})]),s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.6944em"}}),s("span",{class:"mord mathnormal"},"h"),s("span",{class:"mspace allowbreak"}),s("span",{class:"mspace",style:{"margin-right":"0.4444em"}})]),s("span",{class:"base"},[s("span",{class:"strut",style:{height:"1em","vertical-align":"-0.25em"}}),s("span",{class:"mopen"},"("),s("span",{class:"mord"},[s("span",{class:"mord"},[s("span",{class:"mord mathrm"},"mod")])]),s("span",{class:"mspace",style:{"margin-right":"0.3333em"}}),s("span",{class:"mord mathnormal"},"p"),s("span",{class:"mclose"},")")])])]),a("。")],-1),h=s("h2",{id:"离散对数问题的难度",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#离散对数问题的难度","aria-hidden":"true"},"#"),a(" 离散对数问题的难度")],-1),o=s("p",null,[a("离散对数问题是一个难解的问题，这也是许多密码学系统（例如Diffie-Hellman密钥交换和ECDSA签名算法）安全性的基础。给定一个群和元素，很难从 "),s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("semantics",null,[s("mrow",null,[s("msup",null,[s("mi",null,"g"),s("mi",null,"x")]),s("mo",null,"="),s("mi",null,"h"),s("mspace"),s("mspace",{width:"0.4444em"}),s("mo",{stretchy:"false"},"("),s("mrow",null,[s("mi",{mathvariant:"normal"},"m"),s("mi",{mathvariant:"normal"},"o"),s("mi",{mathvariant:"normal"},"d")]),s("mspace",{width:"0.3333em"}),s("mi",null,"p"),s("mo",{stretchy:"false"},")")]),s("annotation",{encoding:"application/x-tex"},"g^x = h \\pmod{p}")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.8588em","vertical-align":"-0.1944em"}}),s("span",{class:"mord"},[s("span",{class:"mord mathnormal",style:{"margin-right":"0.03588em"}},"g"),s("span",{class:"msupsub"},[s("span",{class:"vlist-t"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.6644em"}},[s("span",{style:{top:"-3.063em","margin-right":"0.05em"}},[s("span",{class:"pstrut",style:{height:"2.7em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mathnormal mtight"},"x")])])])])])])]),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}}),s("span",{class:"mrel"},"="),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}})]),s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.6944em"}}),s("span",{class:"mord mathnormal"},"h"),s("span",{class:"mspace allowbreak"}),s("span",{class:"mspace",style:{"margin-right":"0.4444em"}})]),s("span",{class:"base"},[s("span",{class:"strut",style:{height:"1em","vertical-align":"-0.25em"}}),s("span",{class:"mopen"},"("),s("span",{class:"mord"},[s("span",{class:"mord"},[s("span",{class:"mord mathrm"},"mod")])]),s("span",{class:"mspace",style:{"margin-right":"0.3333em"}}),s("span",{class:"mord mathnormal"},"p"),s("span",{class:"mclose"},")")])])]),a(" 求解出 "),s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("semantics",null,[s("mrow",null,[s("mi",null,"x")]),s("annotation",{encoding:"application/x-tex"},"x")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.4306em"}}),s("span",{class:"mord mathnormal"},"x")])])]),a("，即使你知道 "),s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("semantics",null,[s("mrow",null,[s("mi",null,"g")]),s("annotation",{encoding:"application/x-tex"},"g")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.625em","vertical-align":"-0.1944em"}}),s("span",{class:"mord mathnormal",style:{"margin-right":"0.03588em"}},"g")])])]),a(" 和 "),s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("semantics",null,[s("mrow",null,[s("mi",null,"h")]),s("annotation",{encoding:"application/x-tex"},"h")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.6944em"}}),s("span",{class:"mord mathnormal"},"h")])])]),a(" 的值。")],-1),g=m('<h2 id="离散对数在密码学中的应用" tabindex="-1"><a class="header-anchor" href="#离散对数在密码学中的应用" aria-hidden="true">#</a> 离散对数在密码学中的应用</h2><ol><li><p><strong>Diffie-Hellman密钥交换</strong>： 在Diffie-Hellman协议中，双方各自选择一个私钥，计算相应的公钥，并交换公钥。基于离散对数问题的难度，两个用户能够通过交换公钥计算出一个共享密钥，而不需要暴露私钥。</p></li><li><p><strong>ElGamal加密算法</strong>： ElGamal加密基于离散对数问题，通过在加密过程中使用群的幂运算，确保加密过程的安全性。</p></li><li><p><strong>数字签名算法（例如DSA、ECDSA）</strong>： 数字签名算法利用离散对数的难度确保消息的完整性和认证。</p></li></ol><h2 id="离散对数的计算方法" tabindex="-1"><a class="header-anchor" href="#离散对数的计算方法" aria-hidden="true">#</a> 离散对数的计算方法</h2><p>尽管离散对数是一个难解的问题，但在一些特定情况下，可以使用一些算法尝试求解：</p>',4),u=s("ol",null,[s("li",null,[s("p",null,[s("strong",null,"暴力破解"),a("：直接计算 "),s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("semantics",null,[s("mrow",null,[s("msup",null,[s("mi",null,"g"),s("mi",null,"x")])]),s("annotation",{encoding:"application/x-tex"},"g^x")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.8588em","vertical-align":"-0.1944em"}}),s("span",{class:"mord"},[s("span",{class:"mord mathnormal",style:{"margin-right":"0.03588em"}},"g"),s("span",{class:"msupsub"},[s("span",{class:"vlist-t"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.6644em"}},[s("span",{style:{top:"-3.063em","margin-right":"0.05em"}},[s("span",{class:"pstrut",style:{height:"2.7em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mathnormal mtight"},"x")])])])])])])])])])]),a(" 并与 "),s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("semantics",null,[s("mrow",null,[s("mi",null,"h")]),s("annotation",{encoding:"application/x-tex"},"h")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.6944em"}}),s("span",{class:"mord mathnormal"},"h")])])]),a(" 比较，直到找到解。这个方法在数值较小时有效，但随着数值增大，计算时间迅速增长，效率极低。")])]),s("li",null,[s("p",null,[s("strong",null,"Baby-step Giant-step 算法"),a("：通过分割问题的规模，利用空间换时间来提高计算效率。该算法的时间复杂度为 "),s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("semantics",null,[s("mrow",null,[s("mi",null,"O"),s("mo",{stretchy:"false"},"("),s("msqrt",null,[s("mi",null,"n")]),s("mo",{stretchy:"false"},")")]),s("annotation",{encoding:"application/x-tex"},"O(\\sqrt{n})")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"1.0503em","vertical-align":"-0.25em"}}),s("span",{class:"mord mathnormal",style:{"margin-right":"0.02778em"}},"O"),s("span",{class:"mopen"},"("),s("span",{class:"mord sqrt"},[s("span",{class:"vlist-t vlist-t2"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.8003em"}},[s("span",{class:"svg-align",style:{top:"-3em"}},[s("span",{class:"pstrut",style:{height:"3em"}}),s("span",{class:"mord",style:{"padding-left":"0.833em"}},[s("span",{class:"mord mathnormal"},"n")])]),s("span",{style:{top:"-2.7603em"}},[s("span",{class:"pstrut",style:{height:"3em"}}),s("span",{class:"hide-tail",style:{"min-width":"0.853em",height:"1.08em"}},[s("svg",{xmlns:"http://www.w3.org/2000/svg",width:"400em",height:"1.08em",viewBox:"0 0 400000 1080",preserveAspectRatio:"xMinYMin slice"},[s("path",{d:`M95,702
c-2.7,0,-7.17,-2.7,-13.5,-8c-5.8,-5.3,-9.5,-10,-9.5,-14
c0,-2,0.3,-3.3,1,-4c1.3,-2.7,23.83,-20.7,67.5,-54
c44.2,-33.3,65.8,-50.3,66.5,-51c1.3,-1.3,3,-2,5,-2c4.7,0,8.7,3.3,12,10
s173,378,173,378c0.7,0,35.3,-71,104,-213c68.7,-142,137.5,-285,206.5,-429
c69,-144,104.5,-217.7,106.5,-221
l0 -0
c5.3,-9.3,12,-14,20,-14
H400000v40H845.2724
s-225.272,467,-225.272,467s-235,486,-235,486c-2.7,4.7,-9,7,-19,7
c-6,0,-10,-1,-12,-3s-194,-422,-194,-422s-65,47,-65,47z
M834 80h400000v40h-400000z`})])])])]),s("span",{class:"vlist-s"},"​")]),s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.2397em"}},[s("span")])])])]),s("span",{class:"mclose"},")")])])]),a("，比暴力破解要高效。")])]),s("li",null,[s("p",null,[s("strong",null,"Pollard's Rho 算法"),a("：这是一个随机算法，通过在较小的时间和空间复杂度下寻找离散对数的解。")])]),s("li",null,[s("p",null,[s("strong",null,"索引计算法（Index Calculus）"),a("：适用于大素数域的离散对数，能够通过对基础数进行预处理来加速离散对数问题的求解。")])])],-1),d=s("h2",{id:"数学背景",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#数学背景","aria-hidden":"true"},"#"),a(" 数学背景")],-1),x=s("p",null,[a("离散对数问题的难解性源于群论和数论中的一些基本难题，特别是对有限域的操作。群中的生成元 "),s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("semantics",null,[s("mrow",null,[s("mi",null,"g")]),s("annotation",{encoding:"application/x-tex"},"g")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.625em","vertical-align":"-0.1944em"}}),s("span",{class:"mord mathnormal",style:{"margin-right":"0.03588em"}},"g")])])]),a(" 可以通过运算生成群中的所有元素，因此在一些大规模的有限群中，求解离散对数是一个非常复杂的问题。")],-1),w=s("h2",{id:"实际计算示例",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#实际计算示例","aria-hidden":"true"},"#"),a(" 实际计算示例")],-1),y=s("p",null,[a("假设有一个素数 "),s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("semantics",null,[s("mrow",null,[s("mi",null,"p"),s("mo",null,"="),s("mn",null,"23")]),s("annotation",{encoding:"application/x-tex"},"p = 23")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.625em","vertical-align":"-0.1944em"}}),s("span",{class:"mord mathnormal"},"p"),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}}),s("span",{class:"mrel"},"="),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}})]),s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.6444em"}}),s("span",{class:"mord"},"23")])])]),a("，生成元 "),s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("semantics",null,[s("mrow",null,[s("mi",null,"g"),s("mo",null,"="),s("mn",null,"5")]),s("annotation",{encoding:"application/x-tex"},"g = 5")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.625em","vertical-align":"-0.1944em"}}),s("span",{class:"mord mathnormal",style:{"margin-right":"0.03588em"}},"g"),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}}),s("span",{class:"mrel"},"="),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}})]),s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.6444em"}}),s("span",{class:"mord"},"5")])])]),a("，我们希望计算 "),s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("semantics",null,[s("mrow",null,[s("msup",null,[s("mn",null,"5"),s("mi",null,"x")]),s("mo",null,"≡"),s("mn",null,"8"),s("mspace"),s("mspace",{width:"0.4444em"}),s("mo",{stretchy:"false"},"("),s("mrow",null,[s("mi",{mathvariant:"normal"},"m"),s("mi",{mathvariant:"normal"},"o"),s("mi",{mathvariant:"normal"},"d")]),s("mspace",{width:"0.3333em"}),s("mn",null,"23"),s("mo",{stretchy:"false"},")")]),s("annotation",{encoding:"application/x-tex"},"5^x \\equiv 8 \\pmod{23}")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.6644em"}}),s("span",{class:"mord"},[s("span",{class:"mord"},"5"),s("span",{class:"msupsub"},[s("span",{class:"vlist-t"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.6644em"}},[s("span",{style:{top:"-3.063em","margin-right":"0.05em"}},[s("span",{class:"pstrut",style:{height:"2.7em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mathnormal mtight"},"x")])])])])])])]),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}}),s("span",{class:"mrel"},"≡"),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}})]),s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.6444em"}}),s("span",{class:"mord"},"8"),s("span",{class:"mspace allowbreak"}),s("span",{class:"mspace",style:{"margin-right":"0.4444em"}})]),s("span",{class:"base"},[s("span",{class:"strut",style:{height:"1em","vertical-align":"-0.25em"}}),s("span",{class:"mopen"},"("),s("span",{class:"mord"},[s("span",{class:"mord"},[s("span",{class:"mord mathrm"},"mod")])]),s("span",{class:"mspace",style:{"margin-right":"0.3333em"}}),s("span",{class:"mord"},"23"),s("span",{class:"mclose"},")")])])]),a(" 中的 "),s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("semantics",null,[s("mrow",null,[s("mi",null,"x")]),s("annotation",{encoding:"application/x-tex"},"x")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.4306em"}}),s("span",{class:"mord mathnormal"},"x")])])]),a("。")],-1),v=s("ol",null,[s("li",null,[s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("semantics",null,[s("mrow",null,[s("msup",null,[s("mn",null,"5"),s("mn",null,"1")]),s("mo",null,"≡"),s("mn",null,"5"),s("mspace"),s("mspace",{width:"0.4444em"}),s("mo",{stretchy:"false"},"("),s("mrow",null,[s("mi",{mathvariant:"normal"},"m"),s("mi",{mathvariant:"normal"},"o"),s("mi",{mathvariant:"normal"},"d")]),s("mspace",{width:"0.3333em"}),s("mn",null,"23"),s("mo",{stretchy:"false"},")")]),s("annotation",{encoding:"application/x-tex"},"5^1 \\equiv 5 \\pmod{23}")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.8141em"}}),s("span",{class:"mord"},[s("span",{class:"mord"},"5"),s("span",{class:"msupsub"},[s("span",{class:"vlist-t"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.8141em"}},[s("span",{style:{top:"-3.063em","margin-right":"0.05em"}},[s("span",{class:"pstrut",style:{height:"2.7em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mtight"},"1")])])])])])])]),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}}),s("span",{class:"mrel"},"≡"),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}})]),s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.6444em"}}),s("span",{class:"mord"},"5"),s("span",{class:"mspace allowbreak"}),s("span",{class:"mspace",style:{"margin-right":"0.4444em"}})]),s("span",{class:"base"},[s("span",{class:"strut",style:{height:"1em","vertical-align":"-0.25em"}}),s("span",{class:"mopen"},"("),s("span",{class:"mord"},[s("span",{class:"mord"},[s("span",{class:"mord mathrm"},"mod")])]),s("span",{class:"mspace",style:{"margin-right":"0.3333em"}}),s("span",{class:"mord"},"23"),s("span",{class:"mclose"},")")])])])]),s("li",null,[s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("semantics",null,[s("mrow",null,[s("msup",null,[s("mn",null,"5"),s("mn",null,"2")]),s("mo",null,"≡"),s("mn",null,"25"),s("mo",null,"≡"),s("mn",null,"2"),s("mspace"),s("mspace",{width:"0.4444em"}),s("mo",{stretchy:"false"},"("),s("mrow",null,[s("mi",{mathvariant:"normal"},"m"),s("mi",{mathvariant:"normal"},"o"),s("mi",{mathvariant:"normal"},"d")]),s("mspace",{width:"0.3333em"}),s("mn",null,"23"),s("mo",{stretchy:"false"},")")]),s("annotation",{encoding:"application/x-tex"},"5^2 \\equiv 25 \\equiv 2 \\pmod{23}")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.8141em"}}),s("span",{class:"mord"},[s("span",{class:"mord"},"5"),s("span",{class:"msupsub"},[s("span",{class:"vlist-t"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.8141em"}},[s("span",{style:{top:"-3.063em","margin-right":"0.05em"}},[s("span",{class:"pstrut",style:{height:"2.7em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mtight"},"2")])])])])])])]),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}}),s("span",{class:"mrel"},"≡"),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}})]),s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.6444em"}}),s("span",{class:"mord"},"25"),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}}),s("span",{class:"mrel"},"≡"),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}})]),s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.6444em"}}),s("span",{class:"mord"},"2"),s("span",{class:"mspace allowbreak"}),s("span",{class:"mspace",style:{"margin-right":"0.4444em"}})]),s("span",{class:"base"},[s("span",{class:"strut",style:{height:"1em","vertical-align":"-0.25em"}}),s("span",{class:"mopen"},"("),s("span",{class:"mord"},[s("span",{class:"mord"},[s("span",{class:"mord mathrm"},"mod")])]),s("span",{class:"mspace",style:{"margin-right":"0.3333em"}}),s("span",{class:"mord"},"23"),s("span",{class:"mclose"},")")])])])]),s("li",null,[s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("semantics",null,[s("mrow",null,[s("msup",null,[s("mn",null,"5"),s("mn",null,"3")]),s("mo",null,"≡"),s("mn",null,"10"),s("mspace"),s("mspace",{width:"0.4444em"}),s("mo",{stretchy:"false"},"("),s("mrow",null,[s("mi",{mathvariant:"normal"},"m"),s("mi",{mathvariant:"normal"},"o"),s("mi",{mathvariant:"normal"},"d")]),s("mspace",{width:"0.3333em"}),s("mn",null,"23"),s("mo",{stretchy:"false"},")")]),s("annotation",{encoding:"application/x-tex"},"5^3 \\equiv 10 \\pmod{23}")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.8141em"}}),s("span",{class:"mord"},[s("span",{class:"mord"},"5"),s("span",{class:"msupsub"},[s("span",{class:"vlist-t"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.8141em"}},[s("span",{style:{top:"-3.063em","margin-right":"0.05em"}},[s("span",{class:"pstrut",style:{height:"2.7em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mtight"},"3")])])])])])])]),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}}),s("span",{class:"mrel"},"≡"),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}})]),s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.6444em"}}),s("span",{class:"mord"},"10"),s("span",{class:"mspace allowbreak"}),s("span",{class:"mspace",style:{"margin-right":"0.4444em"}})]),s("span",{class:"base"},[s("span",{class:"strut",style:{height:"1em","vertical-align":"-0.25em"}}),s("span",{class:"mopen"},"("),s("span",{class:"mord"},[s("span",{class:"mord"},[s("span",{class:"mord mathrm"},"mod")])]),s("span",{class:"mspace",style:{"margin-right":"0.3333em"}}),s("span",{class:"mord"},"23"),s("span",{class:"mclose"},")")])])])]),s("li",null,[s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("semantics",null,[s("mrow",null,[s("msup",null,[s("mn",null,"5"),s("mn",null,"4")]),s("mo",null,"≡"),s("mn",null,"50"),s("mo",null,"≡"),s("mn",null,"4"),s("mspace"),s("mspace",{width:"0.4444em"}),s("mo",{stretchy:"false"},"("),s("mrow",null,[s("mi",{mathvariant:"normal"},"m"),s("mi",{mathvariant:"normal"},"o"),s("mi",{mathvariant:"normal"},"d")]),s("mspace",{width:"0.3333em"}),s("mn",null,"23"),s("mo",{stretchy:"false"},")")]),s("annotation",{encoding:"application/x-tex"},"5^4 \\equiv 50 \\equiv 4 \\pmod{23}")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.8141em"}}),s("span",{class:"mord"},[s("span",{class:"mord"},"5"),s("span",{class:"msupsub"},[s("span",{class:"vlist-t"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.8141em"}},[s("span",{style:{top:"-3.063em","margin-right":"0.05em"}},[s("span",{class:"pstrut",style:{height:"2.7em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mtight"},"4")])])])])])])]),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}}),s("span",{class:"mrel"},"≡"),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}})]),s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.6444em"}}),s("span",{class:"mord"},"50"),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}}),s("span",{class:"mrel"},"≡"),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}})]),s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.6444em"}}),s("span",{class:"mord"},"4"),s("span",{class:"mspace allowbreak"}),s("span",{class:"mspace",style:{"margin-right":"0.4444em"}})]),s("span",{class:"base"},[s("span",{class:"strut",style:{height:"1em","vertical-align":"-0.25em"}}),s("span",{class:"mopen"},"("),s("span",{class:"mord"},[s("span",{class:"mord"},[s("span",{class:"mord mathrm"},"mod")])]),s("span",{class:"mspace",style:{"margin-right":"0.3333em"}}),s("span",{class:"mord"},"23"),s("span",{class:"mclose"},")")])])])]),s("li",null,[s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("semantics",null,[s("mrow",null,[s("msup",null,[s("mn",null,"5"),s("mn",null,"5")]),s("mo",null,"≡"),s("mn",null,"20"),s("mspace"),s("mspace",{width:"0.4444em"}),s("mo",{stretchy:"false"},"("),s("mrow",null,[s("mi",{mathvariant:"normal"},"m"),s("mi",{mathvariant:"normal"},"o"),s("mi",{mathvariant:"normal"},"d")]),s("mspace",{width:"0.3333em"}),s("mn",null,"23"),s("mo",{stretchy:"false"},")")]),s("annotation",{encoding:"application/x-tex"},"5^5 \\equiv 20 \\pmod{23}")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.8141em"}}),s("span",{class:"mord"},[s("span",{class:"mord"},"5"),s("span",{class:"msupsub"},[s("span",{class:"vlist-t"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.8141em"}},[s("span",{style:{top:"-3.063em","margin-right":"0.05em"}},[s("span",{class:"pstrut",style:{height:"2.7em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mtight"},"5")])])])])])])]),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}}),s("span",{class:"mrel"},"≡"),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}})]),s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.6444em"}}),s("span",{class:"mord"},"20"),s("span",{class:"mspace allowbreak"}),s("span",{class:"mspace",style:{"margin-right":"0.4444em"}})]),s("span",{class:"base"},[s("span",{class:"strut",style:{height:"1em","vertical-align":"-0.25em"}}),s("span",{class:"mopen"},"("),s("span",{class:"mord"},[s("span",{class:"mord"},[s("span",{class:"mord mathrm"},"mod")])]),s("span",{class:"mspace",style:{"margin-right":"0.3333em"}}),s("span",{class:"mord"},"23"),s("span",{class:"mclose"},")")])])])]),s("li",null,[s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("semantics",null,[s("mrow",null,[s("msup",null,[s("mn",null,"5"),s("mn",null,"6")]),s("mo",null,"≡"),s("mn",null,"100"),s("mo",null,"≡"),s("mn",null,"8"),s("mspace"),s("mspace",{width:"0.4444em"}),s("mo",{stretchy:"false"},"("),s("mrow",null,[s("mi",{mathvariant:"normal"},"m"),s("mi",{mathvariant:"normal"},"o"),s("mi",{mathvariant:"normal"},"d")]),s("mspace",{width:"0.3333em"}),s("mn",null,"23"),s("mo",{stretchy:"false"},")")]),s("annotation",{encoding:"application/x-tex"},"5^6 \\equiv 100 \\equiv 8 \\pmod{23}")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.8141em"}}),s("span",{class:"mord"},[s("span",{class:"mord"},"5"),s("span",{class:"msupsub"},[s("span",{class:"vlist-t"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.8141em"}},[s("span",{style:{top:"-3.063em","margin-right":"0.05em"}},[s("span",{class:"pstrut",style:{height:"2.7em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mtight"},"6")])])])])])])]),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}}),s("span",{class:"mrel"},"≡"),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}})]),s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.6444em"}}),s("span",{class:"mord"},"100"),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}}),s("span",{class:"mrel"},"≡"),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}})]),s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.6444em"}}),s("span",{class:"mord"},"8"),s("span",{class:"mspace allowbreak"}),s("span",{class:"mspace",style:{"margin-right":"0.4444em"}})]),s("span",{class:"base"},[s("span",{class:"strut",style:{height:"1em","vertical-align":"-0.25em"}}),s("span",{class:"mopen"},"("),s("span",{class:"mord"},[s("span",{class:"mord"},[s("span",{class:"mord mathrm"},"mod")])]),s("span",{class:"mspace",style:{"margin-right":"0.3333em"}}),s("span",{class:"mord"},"23"),s("span",{class:"mclose"},")")])])])])],-1),k=s("p",null,[a("因此，"),s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("semantics",null,[s("mrow",null,[s("mi",null,"x"),s("mo",null,"="),s("mn",null,"6")]),s("annotation",{encoding:"application/x-tex"},"x = 6")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.4306em"}}),s("span",{class:"mord mathnormal"},"x"),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}}),s("span",{class:"mrel"},"="),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}})]),s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.6444em"}}),s("span",{class:"mord"},"6")])])]),a("，这就是离散对数的解。")],-1),M=s("h2",{id:"离散对数问题的挑战",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#离散对数问题的挑战","aria-hidden":"true"},"#"),a(" 离散对数问题的挑战")],-1),b=s("p",null,"由于其难度，离散对数问题常被用作密码学的安全性假设基础。随着计算能力的提升，许多基于离散对数问题的加密方法在对抗量子计算机等新技术时可能会变得不再安全，因此密码学家也在研究量子计算抗性算法（如基于格的加密方法）。",-1),_=[i,p,c,r,h,o,g,u,d,x,w,y,v,k,M,b];function f(z,L){return t(),n("div",null,_)}const G=l(e,[["render",f],["__file","dl.html.vue"]]);export{G as default};
