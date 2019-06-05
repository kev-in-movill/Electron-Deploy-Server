export default {
  NAME: "Deploy Server",
  VERSION: require("../../package.json").version,
  ENV: require("express")().get("env"),
  PORT: 6060
}
