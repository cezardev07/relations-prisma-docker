import { Request, Response, Router } from "express"
import CartCreate from "../controllers/cart/cart.create"

const cartRouter = Router()

cartRouter.post("/cart", (request:Request, response:Response) => {
  const cartCreate = new CartCreate()
  return cartCreate.create(request, response)
})

export default cartRouter