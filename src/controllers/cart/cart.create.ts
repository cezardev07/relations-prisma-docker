import { Request, Response } from "express"
import { model } from "../../model/prisma"

export default class CartCreate{
  public async create(req:Request, res:Response){
    const {product, id} = req.body
    if(!product.trim() || !id.trim()) return res.status(400)
    if(!await model.user.findUnique({
      where:{
        id: id
      }
    })) return res.status(404)
    const newProduct = await model.cart.create({
      data:{
        product: product,
        user_id: id
      }
    })
    return res.status(200).json({
      statusbar: 200,
      message: "ok",
      data: newProduct
    })
  }
}