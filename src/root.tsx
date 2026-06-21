import { Outlet, Scripts } from "react-router";

import "@gi/athena/athena.css";
import "./index.css";
import { JobCard } from "./components/home/JobBoard/JobCard/JobCard";

export default function App() {
  return (
    <html lang="pl">
      <head>
        <title>dzialaj-org</title>
      </head>
      <body>
        <Outlet />
        <Scripts />
        <JobCard
          title="Front-end Developer"
          organisation="Generacja Innowacja"
          badges={[
            { id: "1", label: "Zdalnie", variant: "default" },
            { id: "2", label: "Programowanie", variant: "default" },
          ]}
        />
      </body>
    </html>
  );
}
