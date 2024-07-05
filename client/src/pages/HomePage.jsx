import { useEffect, useState } from "react";
import Axios from "axios";
import { Col, Row } from 'antd';
import MainLayout from "../components/MainLayout";
import Item from "../components/Item";


const HomePage = () => {
  const [itemsData, setItemsData] = useState([])

  const getAllItems = () => {
    Axios.get('/api/v1/items/get-all-items').then((response) => {
      setItemsData(response.data)
    }).catch((error) => {
      console.log(error)
    })
  }

  useEffect(() => {
    getAllItems()
  }, [])

  return (
    <MainLayout>
      <Row>
        {itemsData.map((item) => {
          return (
            <Col xs={24} lg={6} md={12} sm={6}>
              <Item item={item} />
            </Col>
          )
        })}
      </Row>
    </MainLayout>
  )
}

export default HomePage
