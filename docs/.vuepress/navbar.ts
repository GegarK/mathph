import { navbar } from "vuepress-theme-hope";

export default navbar([
  { 
    text: "数理通学", 
    icon: "type" ,
    children:[
      { text: "数理通学", link: "/sltx/", icon: "arrow" },
    ]
  },
  { 
    text: "逻辑", 
    icon: "script",
    children:[
      { text: "X", link: "/program/program/", icon: "arrow" },
    ]
  },
  {
    text: "分析",
    icon: "debug",
    children:[
      { text: "X", link: "/reverse/", icon: "arrow" },
    ]
  },
  {
    text: "数论",
    icon: "network",
    children:[
      { text: "X", link: "/pentest/", icon: "arrow" },
    ]
  },
  {
    text: "概率",
    icon: "process",
    children:[
      { text: "X", link: "/hardware/", icon: "arrow" },
    ]
  },
  { 
    text: "几何", 
    icon: "semantic",
    children:[
      { text: "X", link: "/ai/", icon: "arrow" },
    ]
  },
  { 
    text: "物理", 
    icon: "creative",
    children:[
      { text: "X", link: "/ctf/", icon: "arrow" },
    ]
  },
  { 
    text: "计算机", 
    icon: "creative",
    children:[
      { text: "X", link: "/other/router/", icon: "arrow" },
    ]
  },
  { text: "極客方舟", icon: "plugin", link: "https://deelmind.com" },
  { text: "论坛", icon: "article", link: "https://forum.deelmind.com" },
  { text: "资源", icon: "cache", link: "https://deelmind.org" },
]);
