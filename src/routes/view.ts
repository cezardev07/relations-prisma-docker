import { Request, Response, Router } from "express"

const viewRouter = Router()

viewRouter.get("/", (_request:Request, response:Response) => {
  return response.sendFile(process.cwd() + "/view/index.html")
})

export default viewRouter