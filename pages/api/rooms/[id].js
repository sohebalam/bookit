import nc from "next-connect"
import { getSingleRoom } from "../../../controllers/roomCont"
import connectDB from "../../../config/connectDB"

connectDB()

const handler = nc()

handler.get(getSingleRoom)

export default handler
