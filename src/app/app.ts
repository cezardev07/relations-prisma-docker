import express, {Express} from "express"
import cors from "cors"
import router from "../routes/router"

export default class App{
  public app: Express
  constructor(){
    this.app = express()
    this.midlewares()
  }
  private midlewares(){
    this.app.use(cors())
    this.app.use(express.json())
    this.app.use("/", router)
  }
  public serve({port,message,host}:{
    port: number,
    host: string,
    message?: string
  }){
    this.app.listen(port, host,() => {
      if(!message?.trim()) {
        return console.log(`serve is running port: ${port}`)
      }
      return console.log(message)
    })
  }
}