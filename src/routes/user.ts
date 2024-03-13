import { Request, Response, Router } from "express";
import UserFindAll from "../controllers/user/user.findAll";
import UserCreate from "../controllers/user/user.create";

const userRouter = Router()

userRouter.get("/", (request:Request, response:Response) => {
  const userFindAll = new UserFindAll()
  return userFindAll.findAll(request, response)
})

userRouter.post("/", (request:Request, response:Response) => {
  const userCreate = new UserCreate()
  return userCreate.create(request, response)
})


export default userRouter