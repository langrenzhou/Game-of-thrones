import Router from 'koa-router'
import config from '../config'
export const router = app => {
    const router = new Router()
    const { } = 123
    router.get("/wechat-hear",(ctx,next)=>{
        const token=config.wechat.token
        const { signature, nonce, timestamp, echostr } = ctx.query
        const str = [token, timestamp, nonce].sort().join()
        const sha=sha1(str)
        if(sha === signature){
            ctx.body=echostr
        }else{
            ctx.body='Failed'
        }
        ctx.body=echostr
    })
 
    app.use(router.routes())
    app.use(router.allowedMethods())
}