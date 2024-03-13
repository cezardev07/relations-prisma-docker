import { Request, Response } from "express"
import { model } from "../../model/prisma"

export default class UserFindAll{
  public async findAll(req:Request, res:Response){
    const result = await model.user.findMany({
      include: {
        cart: true,
      },
    })
    return res.status(200).json({
      statusbar: 200,
      data: result
    })
  }
}