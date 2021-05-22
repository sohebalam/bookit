import nc from "next-connect"
import {
  deleteRoom,
  getSingleRoom,
  updateRoom,
} from "../../../controllers/roomCont"
import connectDB from "../../../config/connectDB"

import onError from "../../../middlewares/errors"

connectDB()

const handler = nc({ onError })

handler.get(getSingleRoom)
handler.put(updateRoom)
handler.delete(deleteRoom)

export default handler
