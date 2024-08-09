import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import Axios from "axios";
import { Col, Row } from 'antd';
import MainLayout from "../components/MainLayout";
import Item from "../components/Item";


const HomePage = () => {
  const [itemsData, setItemsData] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("ready mix");
  const dispatch = useDispatch();

  const categories = [
    {
      name: "ready mix",
      imageURL: "https://www.sfbl.com.bd/uploaded_files/300tn_thumb_Chotpoti.PNG"
    },
    {
      name: "Pulses & Cereals",
      imageURL: "https://www.sfbl.com.bd/uploaded_files/300tn_thumb_Kheer%20Pack%20Right.jpg"
    },
    {
      name: "besic spices",
      imageURL: "https://www.sfbl.com.bd/uploaded_files/300tn_thumb_turmeric(1).png"
    },
  ];


  const getAllItems = () => {
    dispatch({ type: "showLoading" });
    Axios.get('https://pos-app-mern-backend.vercel.app/api/v1/items/get-all-items').then((response) => {
      setItemsData(response.data);
      dispatch({ type: "hideLoading" });
    }).catch((error) => {
      dispatch({ type: "hideLoading" });
      console.log(error);
    });
  };

  useEffect(() => {
    getAllItems();
  }, []);

  return (
    <MainLayout>
      <div className="category">
        {categories.map((category) => {
          return (
            <div key={category.name} onClick={() => setSelectedCategory(category.name)} className={`${selectedCategory === category.name && 'selected-category'}`}>
              <h4>{category.name}</h4>
              <img src={category.imageURL} height="60" width="60" />
            </div>
          );
        })}
      </div>
      <Row>
        {itemsData.filter((i) => i.category === selectedCategory).map((item) => {
          return (
            <Col xs={24} lg={6} md={12} sm={6} key={item._id}>
              <Item item={item} key={item._id} />
            </Col>
          );
        })}
      </Row>
    </MainLayout>
  );
};

export default HomePage;
