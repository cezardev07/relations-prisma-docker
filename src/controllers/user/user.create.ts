import { Request, Response } from "express"
import { model } from "../../model/prisma"

export default class UserCreate{
  public async create(req:Request, res:Response){
    const {name} = req.body
    if(!name.trim()) return res.status(400)
    const user = await model.user.create({
      data:{
        name: name
      }
    })
    return res.status(200).json({
      statusbar: 200,
      message: "ok",
      data: user
    })
  }
}