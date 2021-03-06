const path = require("path");
const express = require("express");
const request = require("request");

const app = express();
const port = process.env.PORT || 3000;
console.log("===> PORT: ", process.env.PORT);

let useFolder;
console.log("NODE_ENV: ", process.env.NODE_ENV);

if (process.env.NODE_ENV !== "production") {
  useFolder = "/public/";
  const webpack = require("webpack");
  const config = require("../webpack.config.development");
  const compiler = webpack(config);
  app.use(
    require("webpack-dev-middleware")(compiler, {
      noInfo: true,
      publicPath: config.output.publicPath,
      hot: true
    })
  );
  app.use(
    require("webpack-hot-middleware")(compiler, {
      log: console.log,
      path: "/__webpack_hmr",
      heartbeat: 10 * 1000
    })
  );
} else {
  useFolder = "/dist/";
}
app.use(express.static("dist"));

app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, ".." + useFolder + "index.html"));
});

app.get("/api/data", (req, res) => {
  request(
    "https://api.mobileqa.mlbinfra.com/api/interview/v1/records",
    function(error, response, body) {
      return res.send(response.toJSON());
    }
  );
});

app.listen(port, function(err) {
  if (err) {
    return console.error(err);
  }

  console.log("Listening at port: ", port);
});
