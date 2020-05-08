module.exports = {
	index: async (ctx, next) => {
		ctx.body = "主页"
	},
	login: async (ctx, next) => {
		ctx.body = "登录页"
	},
	register: async (ctx, next) => {
		ctx.body = "注册页"
	}
}