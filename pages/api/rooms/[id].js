import nc from "next-connect"
import {
  deleteRoom,
  getSingleRoom,
  updateRoom,
} from "../../../controllers/roomCont"
import connectDB from "../../../config/connectDB"

connectDB()

const handler = nc()

handler.get(getSingleRoom)
handler.put(updateRoom)
handler.delete(deleteRoom)

export default handler
