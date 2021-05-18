import Room from "../models/rooms"
export const allRooms = async (req, res) => {
  res.status(200).json({ success: true, message: "All rooms" })
}

export const newRoom = async (req, res) => {
  try {
    const room = await Room.create(req.body)

    res.status(200).json({ success: true, room })
  } catch (error) {
    res.status(400).json({ success: false, error: error.message })
  }
}
