const path = require("path");
const Koa = require("koa");

const routers = require("./routers/index.js");

const app = new Koa();

routers(app);

app.listen("3000", () => {
	console.log("服务正在3000端口运行....")
})