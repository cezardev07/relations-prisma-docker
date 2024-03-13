import express, {Express} from "express"
import cors from "cors"
import router from "../routes/router"

export default class App{
  public app: Express
  // private publicDirectoryPath: string
  constructor(){
    this.app = express()
    this.midlewares()
    // this.publicDirectoryPath = process.cwd() + "/view"
  }
  private midlewares(){
    this.app.use(cors())
    this.app.use(express.json())
    this.app.use("/", router)
    // this.app.use(express.static(this.publicDirectoryPath))
  }
  public serve({port,message}:{
    port: string | number,
    message?: string
  }){
    this.app.listen(port, () => {
      if(!message?.trim()) {
        return console.log(`serve is running port: ${port}`)
      }
      return console.log(message)
    })
  }
}