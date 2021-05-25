import ErrorHandler from "../utils/errorHandler"

import catchAsyncErrors from "../middlewares/catchAsyncErrors"
import APIFeatures from "../utils/apiFeatures"
import Room from "../models/roomModel"

export const allRooms = catchAsyncErrors(async (req, res) => {
  const resPerPage = 4
  const roomsCount = await Room.countDocuments()

  const apiFeatures = new APIFeatures(Room.find(), req.query).search().filter()

  let rooms = await apiFeatures.query
  let filteredRoomsCount = rooms.length
  apiFeatures.pagination(resPerPage)
  rooms = await apiFeatures.query

  // const rooms = await Room.find()
  res
    .status(200)
    .json({ success: true, roomsCount, resPerPage, filteredRoomsCount, rooms })
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
