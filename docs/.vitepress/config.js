export default {
  title: "Ditto on Radix",
  description: "Just playing around.",
  themeConfig: {
    nav: [
      { text: "Guide", link: "/guide" },
      { text: "Configs", link: "/configs" },
      { text: "Changelog", link: "https://github.com/..." },
    ],
  },
  sidebar: [
    {
      text: "Guide",
      items: [
        { text: "Introduction", link: "/introduction" },
        { text: "Getting Started", link: "/getting-started" },
      ],
    },
    {
      text: "Atoms",
      items: [{ text: "Button", link: "/buttons" }],
    },
  ],
};
