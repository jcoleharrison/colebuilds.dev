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

  {
    label: "type",
    filters: ["public", "private"],
  },
  {
    label: "categories",
    filters: ["prototype", "experiment", "production", "research", "personal"],
  },
  {
    label: "domain",
    filters: [
      "ai agents",
      "large language models",
      "multimodal models",
      "computer vision",
      "reinforcement learning",
      "generative models",
      "transformers",
      "nlp",
      "embodied ai",
      "robotics",
      "mlops & infrastructure",
      "data engineering",
      "crypto & blockchain",
      // "speech & audio",
      // "recommendation systems",
      // "time series",
      // "anomaly detection",
      // "graph neural networks",
      // "federated learning",
    ],
  },
  {
    label: "format",
    filters: ["codebase", "video", "blog post", "paper", "podcast"],
  },
];
