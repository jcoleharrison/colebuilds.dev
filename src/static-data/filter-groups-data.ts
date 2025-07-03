export const filterGroups = [
  /* Standard fields
  {
    title: "title",
    date: "01/01/2025",
    description: "description",
    link: "https://www.example.com",
    tags: ["tag1", "tag2"],
  }
  */

  // {
  //   label: "type",
  //   filters: ["public", "private"],
  // },
  {
    label: "categories",
    filters: ["prototype", "experiment", "research", "prod"],
  },
  {
    label: "domain",
    filters: [
      "computer vision",
      "embodied ai",
      "reinforcement learning",
      "robotics",
      "ai agents",
      "large language models",
      "multimodal",
      "nlp",
      "miscellaneous",
    ],
  },
  {
    label: "format",
    filters: ["codebase", "blog post", "paper"],
  },
];
