import MainLayout from '../components/MainLayout';
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import Axios from "axios";
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import { Table, Button, Modal, Form, Input, Select, message } from 'antd';

const Items = () => {
  const [itemsData, setItemsData] = useState([]);
  const [addItemModal, setAddItemModal] = useState(false);
  const dispatch = useDispatch();

  const getAllItems = () => {
    dispatch({ type: "showLoading" });
    Axios.get('/api/v1/items/get-all-items').then((response) => {
      setItemsData(response.data);
      dispatch({ type: "hideLoading" });
    }).catch((error) => {
      dispatch({ type: "hideLoading" });
      console.log(error);
    });
  };

  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
    },
    {
      title: 'Image',
      dataIndex: 'image',
      render: (image, record) => <img src={image} alt='' height='60' width='60' />
    },
    {
      title: 'Price',
      dataIndex: 'price',
    },
    {
      title: 'Category',
      dataIndex: 'category',
    },
    {
      title: 'Action',
      dataIndex: '_id',
      render: (id, record) => (
        <div className='action-icon'>
          <EditOutlined />
          <DeleteOutlined onClick={() => deleteCartItem(record)} />
        </div>
      )
    },
  ];

  const onFinish = (values) => {
    dispatch({ type: "showLoading" });
    Axios.post('/api/v1/items/add-item', values).then((response) => {
      message.success("Item Added Succesfully");
      dispatch({ type: "hideLoading" });
      setAddItemModal(false);
      getAllItems();
    }).catch((error) => {
      dispatch({ type: "hideLoading" });
      message.error("Something Went Wrong");
      console.log(error);
    });
  };

  useEffect(() => {
    getAllItems();
  }, []);

  return (
    <MainLayout>
      <div className='item-section'>
        <h1>All Items</h1>
        <Button type='primary' onClick={() => setAddItemModal(true)}>Add Item</Button>
      </div>
      <Modal title="Add New Item" open={addItemModal} onCancel={() => setAddItemModal(false)} footer={false}>
        <Form layout='vertical' onFinish={onFinish}>
          <Form.Item name="name" label="Product Name">
            <Input />
          </Form.Item>

          <Form.Item name="price" label="Product Price">
            <Input />
          </Form.Item>

          <Form.Item name="image" label="Image URL">
            <Input />
          </Form.Item>

          <Form.Item name="category" label="Product Category">
            <Select>
              <Select.Option value="ready mix">Ready mix</Select.Option>
              <Select.Option value="besic spices">Basic Spices</Select.Option>
              <Select.Option value="Pulses & Cereals">Pulses & Cereals</Select.Option>
            </Select>
          </Form.Item>

          <div className='modal-btn'>
            <Button htmlType='submit' type='primary'>Save</Button>
          </div>
        </Form>

      </Modal>
      <Table dataSource={itemsData} columns={columns} bordered></Table>
    </MainLayout>
  );
};

export default Items;
