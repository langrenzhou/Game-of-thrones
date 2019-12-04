
import Koa from 'koa'
import Nuxt from 'nuxt'
import R from 'ramda'
import { resolve } from 'path'
let config = require('../nuxt.config.js')
config.dev = !(process.env === 'production')
const r=path=>resolve(__dirname,path)
const host = process.env.HOST || '127.0.0.1'
const port = process.env.PORT || 3000
const MODDLEWHRES = ['router']

class Serve {
  constructor() {
    this.app = new Koa()
    this.useMiddelwhre(this.app)(MODDLEWHRES)
  }
  useMiddelwhre(app) {
   return R.map(R.compose(
     R.map(i=>i(app)),
     require,
      i=>`${r('./middlewares')}/${i}`
   ))
  } 
  async start() {
    const nuxt =await new Nuxt(config)
    // Build in development
    if (config.dev) {
        try{
          await nuxt.build()
        }catch(e){
              console.error(e)
              process.exit(1)
        }
    }

   this.app.use(async (ctx,next) => {
      ctx.status = 200
     await nuxt.render(ctx.req, ctx.res)
    })

    this.app.listen(port, host)
    console.log('Server listening on ' + host + ':' + port) // eslint-disable-line no-console
  }
}



const app = new Serve()

app.start()
