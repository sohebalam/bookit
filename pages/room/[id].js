import Head from "next/head"
import Image from "next/image"
import Layout from "../../components/layout/Layout"
import RoomDetails from "../../components/RoomDetails"
import { getRoomDetails } from "../../redux/actions/roomActions"
import { wrapper } from "../../redux/store"

export default function RoomDetailsPage() {
  return (
    <Layout>
      <RoomDetails title="Room Details" />
    </Layout>
  )
}

export const getServerSideProps = wrapper.getServerSideProps(
  async ({ req, params, store }) => {
    await store.dispatch(getRoomDetails(req, params.id))
  }
)
