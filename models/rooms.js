import mongoose from "mongoose"

const roomSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
    maxLength: [100, "Room characters connot exceed 100 characters "],
  },
  description: {
    type: String,
    required: [true, "Please enter room description"],
  },
  address: {
    type: String,
    required: [true, "Please enter room address"],
  },
  pricePerNight: {
    type: Number,
    required: [true, "Please enter room price"],
    maxLength: [5, "Price characters connot exceed 5 characters "],
    default: 0.0,
  },
  guestCapacity: {
    type: Number,
    required: [true, "Please enter room capacity"],
  },
  numOfBeds: {
    type: Number,
    required: [true, "Please enter room number of beds"],
  },
  internet: {
    type: Boolean,
    default: false,
  },
  breakfast: {
    type: Boolean,
    default: false,
  },
  airCondition: {
    type: Boolean,
    default: false,
  },
  petsAllowed: {
    type: Boolean,
    default: false,
  },
  roomCleaning: {
    type: Boolean,
    default: false,
  },
  ratings: {
    type: Number,
    default: 0,
  },
  numOfReviews: {
    type: Number,
    default: 0,
  },
  images: [
    {
      public_id: {
        type: String,
        required: true,
      },
      url: {
        type: String,
        required: true,
      },
    },
  ],
  category: {
    type: String,
    required: [true, "Please enter room category"],
    enum: {
      values: ["King", "Single", "Twins"],
      message: "Please select correct category for room",
    },
  },
  reviews: [
    {
      // user: {
      //   type: mongoose.Schema.ObjectId,
      //   ref: "User",
      //   required: true,
      // },
      name: {
        type: String,
        required: true,
      },
      comment: {
        type: String,
        required: true,
      },
      rating: {
        type: Number,
        required: true,
      },
    },
  ],
  // user: {
  //   type: mongoose.Schema.ObjectId,
  //   ref: "User",
  //   required: true,
  // },
  createdAt: {
    type: Date,
    default: Date.now,
  },
})

// mongoose.model.roomSchema = {}

export default mongoose.model.roomSchema || mongoose.model("Room", roomSchema)
