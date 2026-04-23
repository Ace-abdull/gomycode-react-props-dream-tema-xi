import { createFileRoute } from "@tanstack/react-router";
import App from "@/App";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Dream XI — Football Team Project" },
      {
        name: "description",
        content:
          "A FIFA-style dream XI lineup of football legends arranged in a 4-3-3 formation on a stadium pitch.",
      },
      { property: "og:title", content: "Dream XI — Football Team Project" },
      {
        property: "og:description",
        content: "A FIFA-style dream XI lineup of football legends arranged in a 4-3-3 formation.",
      },
      { property: "og:type", content: "website" },
    ],
  }),
  component: Index,
});

function Index() {
  return <App />;
}
