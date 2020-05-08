const router = require("koa-router")();

const user = require("./user.js");

console.log(user)


module.exports = (app) => {
	router.get("/", user.index)

	router.get("/login", user.login)

	router.get("/register", user.register)

	app.use(router.routes()).use(router.allowedMethods());
};