import { createFileRoute } from "@tanstack/react-router";
import { memo } from "react";
import App from "@/App";

const Index = memo(function Index() {
  return <App />;
});

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Dream XI — Football Team Project" },
      {
        name: "description",
        content:
          "A FIFA-style dream XI lineup of football legends arranged in a 4-3-3 formation on a stadium pitch. Featuring Messi, Ronaldo, Maldini, and more legendary players.",
      },
      {
        name: "keywords",
        content: "football, soccer, dream team, FIFA, Messi, Ronaldo, Maldini, 4-3-3 formation",
      },
      { property: "og:title", content: "Dream XI — Football Team Project" },
      {
        property: "og:description",
        content: "A FIFA-style dream XI lineup of football legends arranged in a 4-3-3 formation.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://dream-xi.vercel.app" },
      { property: "og:image", content: "/og-image.png" },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Dream XI — Football Team Project" },
      {
        name: "twitter:description",
        content: "A FIFA-style dream XI lineup of football legends arranged in a 4-3-3 formation.",
      },
      { name: "twitter:image", content: "/og-image.png" },
    ],
  }),
  component: Index,
});
