/**
 * 打印路由日志到控制台
 */
const simpleLogger = (to, from ) => {
	//const decode = decodeURIComponent
	//console.info(`[路由日志] ${decode(from.path || '')} => ${decode(to.path)} `)
	//console.info(`[路由日志] ${from.path || ''} => ${to.path} `)
	console.info(`after ${to.path}`)
}

export default simpleLogger
