import { navbar } from "vuepress-theme-hope";

export default navbar([
  { 
    text: "数理通学", 
    icon: "type" ,
    children:[
      { text: "数理通学", link: "/sltx/README.md", icon: "arrow" },
      { text: "数学历史", link: "/sltx/history.md", icon: "arrow" },
      { text: "数学人物", link: "/sltx/people.md", icon: "arrow" },
      { text: "数学作用", link: "/sltx/func", icon: "arrow" },
      { text: "数学符号", link: "/sltx/sym", icon: "arrow" },
    ]
  },
  { 
    text: "代数", 
    icon: "script",
    children:[
      { text: "初等代数", link: "/alg/elementary", icon: "arrow" },
      { text: "抽象代数", link: "/alg/abstract", icon: "arrow" },
      { text: "代数几何", link: "/alg/geometry", icon: "arrow" },
      { text: "代数拓扑", link: "/alg/topology", icon: "arrow" },
    ]
  },
  {
    text: "分析",
    icon: "debug",
    children:[
      { text: "微积分", link: "", icon: "arrow" },
      { text: "复分析", link: "", icon: "arrow" },
      { text: "泛函分析", link: "", icon: "arrow" },
      { text: "微分方程", link: "", icon: "arrow" },
      { text: "傅里叶分析", link: "", icon: "arrow" },
    ]
  },
  {
    text: "数论",
    icon: "network",
    children:[
      { text: "初等数论", link: "/nt/ent", icon: "arrow" },
      { text: "代数数论", link: "", icon: "arrow" },
      { text: "解析数论", link: "", icon: "arrow" },
      { text: "几何数论", link: "", icon: "arrow" },
      { text: "概率数论", link: "", icon: "arrow" },
      { text: "拓扑数论", link: "", icon: "arrow" },
    ]
  },
  {
    text: "概率",
    icon: "process",
    children:[
      { text: "基础概率", link: "", icon: "arrow" },
      { text: "随机分布", link: "", icon: "arrow" },
      { text: "多元概率", link: "", icon: "arrow" },
      { text: "随机过程", link: "", icon: "arrow" },
      { text: "概率统计", link: "", icon: "arrow" },
      { text: "概率模型", link: "", icon: "arrow" },
    ]
  },
  { 
    text: "几何", 
    icon: "semantic",
    children:[
      { text: "欧几里得", link: "/geometry", icon: "arrow" },
      { text: "非欧几何", link: "/geometry", icon: "arrow" },
      { text: "拓扑几何", link: "/geometry", icon: "arrow" },
      { text: "微分几何", link: "/geometry", icon: "arrow" },
      { text: "离散几何", link: "/geometry", icon: "arrow" },
    ]
  },
  { 
    text: "物理", 
    icon: "creative",
    children:[
      { text: "PHYSICS", link: "/ph", icon: "arrow" },
      { text: "经典力学", link: "", icon: "arrow" },
      { text: "现代物理", link: "", icon: "arrow" },
      { text: "天体物理", link: "", icon: "arrow" },
      { text: "核子物理", link: "", icon: "arrow" },
      { text: "理论物理", link: "", icon: "arrow" },
      { text: "生化物理", link: "", icon: "arrow" },
    ]
  },
  { 
    text: "计算机", 
    icon: "creative",
    children:[
      { text: "计算机数学", link: "/computer/", icon: "arrow" },
      { text: "计算机算法", link: "/computer/calg", icon: "arrow" },
      { text: "密码学安全", link: "/computer/salg", icon: "arrow" },
      { text: "人工智能AI", link: "/computer/AI", icon: "arrow" },
      { text: "密码学-CTF", link: "/ctf", icon: "arrow" },
      { text: "算法题目ACM", link: "/acm", icon: "arrow" },
    ]
  },
  { text: "DeeLMind", icon: "plugin", link: "https://deelmind.com" },
  { text: "论坛", icon: "article", link: "https://forum.deelmind.com" },
  // { text: "资源", icon: "cache", link: "https://deelmind.org" },
]);
