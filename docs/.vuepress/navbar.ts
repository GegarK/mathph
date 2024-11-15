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
    text: "逻辑", 
    icon: "script",
    children:[
      { text: "X", link: "", icon: "arrow" },
    ]
  },
  {
    text: "分析",
    icon: "debug",
    children:[
      { text: "X", link: "", icon: "arrow" },
    ]
  },
  {
    text: "数论",
    icon: "network",
    children:[
      { text: "X", link: "", icon: "arrow" },
    ]
  },
  {
    text: "概率",
    icon: "process",
    children:[
      { text: "X", link: "", icon: "arrow" },
    ]
  },
  { 
    text: "几何", 
    icon: "semantic",
    children:[
      { text: "代数几何", link: "/geometry", icon: "arrow" },
    ]
  },
  { 
    text: "物理", 
    icon: "creative",
    children:[
      { text: "X", link: "", icon: "arrow" },
    ]
  },
  { 
    text: "计算机", 
    icon: "creative",
    children:[
      { text: "计算机数学", link: "/computer/", icon: "arrow" },
      { text: "计算机算法", link: "/computer/alg", icon: "arrow" },
      { text: "密码学安全", link: "/computer/salg", icon: "arrow" },
      { text: "人工智能AI", link: "/computer/AI", icon: "arrow" },
    ]
  },
  { text: "DeeLMind", icon: "plugin", link: "https://deelmind.com" },
  { text: "论坛", icon: "article", link: "https://forum.deelmind.com" },
  { text: "资源", icon: "cache", link: "https://deelmind.org" },
]);
