import { Outlet, Scripts } from "react-router";

import "@gi/athena/athena.css";
import "./index.css";

export default function App() {
  return (
    <html lang="pl">
      <head>
        <title>dzialaj-org</title>
      </head>
      <body>
        <Outlet />
        <Scripts />
      </body>
    </html>
  );
}
