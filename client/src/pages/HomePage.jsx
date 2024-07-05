import { useEffect } from "react"
import Axios from "axios"
import MainLayout from "../components/MainLayout"

const HomePage = () => {

  const getAllItems = () => {
    Axios.get('/api/v1/items/get-all-items').then((response) => {
      console.log(response.data)
    }).catch((error) => {
      console.log(error)
    })
  }

  useEffect(() => {
    getAllItems()
  }, [])

  return (
    <MainLayout>
      <h1>HomePage</h1>
    </MainLayout>
  )
}

export default HomePage
