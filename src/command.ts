import express from "express";

import firstPage from "./pages/firstPage";
import secondPage from "./pages/secondPage";
import thirdPage from "./pages/thirdPage";

const NODE_ENV = process.env.NODE_ENV || "production";

const app = express();
const PORT = NODE_ENV === "development" ? 3000 : 443;

app.get("/", (req, res) => {
  res.setHeader("Allow-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Headers", "*");

  if (req.query.article)
    return res.send(thirdPage(req.query.article as string));

  if (req.query.keywords) {
    return secondPage(req.query.keywords as string).then((response) =>
      res.send(response)
    );
  }

  if (!req.query.keywords) return res.send(firstPage());
});

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
