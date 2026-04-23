import { memo } from "react";
import { Outlet, Link, createRootRoute, HeadContent, Scripts } from "@tanstack/react-router";
import { DefaultErrorComponent } from "@/components/DefaultErrorComponent";

import appCss from "../styles.css?url";

const NotFoundComponent = memo(function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground" aria-label="404">
          404
        </h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
            aria-label="Go back to home page"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
});

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Dream XI — Football Team Project" },
      {
        name: "description",
        content:
          "A FIFA-style dream XI lineup of football legends arranged in a 4-3-3 formation on a stadium pitch.",
      },
      { name: "author", content: "Football Team Project" },
      { name: "robots", content: "index, follow" },
      { property: "og:title", content: "Dream XI — Football Team Project" },
      {
        property: "og:description",
        content: "A FIFA-style dream XI lineup of football legends arranged in a 4-3-3 formation.",
      },
      { property: "og:type", content: "website" },
      { property: "og:image", content: "/og-image.png" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Dream XI — Football Team Project" },
      { name: "twitter:description", content: "A FIFA-style dream XI lineup of football legends." },
      { name: "twitter:image", content: "/og-image.png" },
      { name: "theme-color", content: "#1a1a1a" },
    ],
    links: [
      {
        rel: "stylesheet",
        href: appCss,
      },
      {
        rel: "icon",
        type: "image/x-icon",
        href: "/favicon.ico",
      },
      {
        rel: "apple-touch-icon",
        href: "/apple-touch-icon.png",
      },
      {
        rel: "manifest",
        href: "/manifest.json",
      },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "SportsTeam",
          name: "Dream XI",
          description: "A FIFA-style dream XI lineup of football legends",
          sport: "Soccer",
          formation: "4-3-3",
          coach: {
            "@type": "Person",
            name: "José Mourinho",
          },
          member: [
            { "@type": "Person", name: "Edwin van der Sar", jobTitle: "Goalkeeper" },
            { "@type": "Person", name: "Roberto Carlos", jobTitle: "Left Back" },
            { "@type": "Person", name: "Paolo Maldini", jobTitle: "Center Back" },
            { "@type": "Person", name: "Fabio Cannavaro", jobTitle: "Center Back" },
            { "@type": "Person", name: "Marcelo", jobTitle: "Right Back" },
            { "@type": "Person", name: "Roy Keane", jobTitle: "Defensive Midfielder" },
            { "@type": "Person", name: "Kaká", jobTitle: "Attacking Midfielder" },
            { "@type": "Person", name: "Mesut Özil", jobTitle: "Central Midfielder" },
            { "@type": "Person", name: "Neymar", jobTitle: "Left Winger" },
            { "@type": "Person", name: "Lionel Messi", jobTitle: "Striker" },
            { "@type": "Person", name: "Cristiano Ronaldo", jobTitle: "Right Winger" },
          ],
        }),
      },
    ],
  }),
  errorComponent: DefaultErrorComponent,
  notFoundComponent: NotFoundComponent,
  shellComponent: RootShell,
  component: RootComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="light">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  return <Outlet />;
}
