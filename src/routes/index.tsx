import { createFileRoute } from "@tanstack/react-router";
// @ts-expect-error - JS component
import PlayersList from "../components/PlayersList.js";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "My Ultimate XI — FIFA Player Cards" },
      {
        name: "description",
        content:
          "A FIFA-style starting XI featuring legends: Van der Sar, Cannavaro, Maldini, Marcelo, Roberto Carlos, Keane, Kaká, Özil, Ronaldo, Messi, Berbatov.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return <PlayersList />;
}
