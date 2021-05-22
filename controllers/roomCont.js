import ErrorHandler from "../utils/errorHandler"

import catchAsyncErrors from "../middlewares/catchAsyncErrors"

import Room from "../models/roomModel"
export const allRooms = catchAsyncErrors(async (req, res) => {
  const rooms = await Room.find()
  res.status(200).json({ success: true, rooms })
})

export const newRoom = catchAsyncErrors(async (req, res) => {
  const room = await Room.create(req.body)

  res.status(200).json({ success: true, room })
})

export const getSingleRoom = catchAsyncErrors(async (req, res, next) => {
  const room = await Room.findById(req.query.id)

  if (!room) {
    return next(new ErrorHandler("Room not found with this ID", 404))
  }
  res.status(200).json({ success: true, room })
})

export const updateRoom = catchAsyncErrors(async (req, res) => {
  let room = await Room.findById(req.query.id)
  if (!room) {
    return next(new ErrorHandler("Room not found with this ID", 404))
  }
  room = await Room.findByIdAndUpdate(req.query.id, req.body, {
    new: true,
    runValidators: true,
    useFindAndModify: false,
  })
  res.status(200).json({ success: true, room })
})
export const deleteRoom = catchAsyncErrors(async (req, res) => {
  const room = await Room.findById(req.query.id)
  if (!room) {
    return next(new ErrorHandler("Room not found with this ID", 404))
  }
  await room.remove()
  res.status(200).json({ success: true, message: "Room is deleted" })
})
