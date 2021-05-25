import axios from "axios"
import absoluteUrl from "next-absolute-url"
import {
  ALL_ROOMS_FAIL,
  ALL_ROOMS_SUCCESS,
  CLEAR_ERRORS,
  ROOM_DETAILS_SUCCESS,
} from "../constants/roomTypes"

export const getRooms = (req) => async (dispatch) => {
  try {
    const { origin } = absoluteUrl(req)
    const { data } = await axios.get(`${origin}/api/rooms/rooms`)
    dispatch({
      type: ALL_ROOMS_SUCCESS,
      payload: data,
    })
  } catch (error) {
    dispatch({ type: ALL_ROOMS_FAIL, payload: error.response.data.message })
  }
}

export const clearErrors = () => async (dispatch) => {
  dispatch({
    type: CLEAR_ERRORS,
  })
}

export const getRoomDetails = (req, id) => async (dispatch) => {
  const { origin } = absoluteUrl(req)
  const { data } = await axios.get(`${origin}/api/rooms/${id}`)
  try {
    dispatch({ type: ROOM_DETAILS_SUCCESS, payload: data.room })
  } catch (error) {
    dispatch({
      type: ROOM_DETAILS_FAIL,
      payload: error.response.data.message,
    })
  }
}
