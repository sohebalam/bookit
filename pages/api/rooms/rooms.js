import nc from "next-connect"
import { allRooms, newRoom } from "../../../controllers/roomCont"
import connectDB from "../../../config/connectDB"

connectDB()

const handler = nc()

handler.get(allRooms)
handler.post(newRoom)

export default handler
