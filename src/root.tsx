import { Outlet, Scripts } from "react-router";

import "@gi/athena/athena.css";
import "./index.css";

export default function App() {
  return (
    <html lang="en">
      <head>
        <title>vite-boilerplate</title>
      </head>
      <body>
        <Outlet />
        <Scripts />
      </body>
    </html>
  );
}
