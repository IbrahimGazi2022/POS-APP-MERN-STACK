import { useDispatch, useSelector } from 'react-redux';
import MainLayout from '../components/MainLayout';
import { Button, Modal, Table, Form, Input, Select, message } from 'antd';
import { DeleteOutlined, PlusCircleOutlined, MinusCircleOutlined, } from '@ant-design/icons';
import { useEffect, useState } from 'react';

const CartPage = () => {
    const dispatch = useDispatch();
    const { cartItems } = useSelector((state) => state.root);
    const [subTotal, setSubTotal] = useState(0);
    const [billChargeModal, setBillChargeModal] = useState(false);

    const increaseQuantity = (record) => {
        dispatch({
            type: "updateCart",
            payload: { ...record, quantity: record.quantity + 1 }
        });
    };

    const decreaseQuantity = (record) => {
        if (record.quantity !== 1) {
            dispatch({
                type: "updateCart",
                payload: { ...record, quantity: record.quantity + - 1 }
            });
        }
    };

    const deleteCartItem = (record) => {
        dispatch({
            type: "deleteCart",
            payload: record
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
            title: 'Quantity',
            dataIndex: '_id',
            render: (id, record) =>
                <div>
                    <PlusCircleOutlined onClick={() => increaseQuantity(record)} />
                    <b style={{ margin: "15px" }}>{record.quantity}</b>
                    <MinusCircleOutlined onClick={() => decreaseQuantity(record)} />
                </div>
        },
        {
            title: 'Action',
            dataIndex: '_id',
            render: (id, record) => <DeleteOutlined onClick={() => deleteCartItem(record)} />
        },
    ];

    // Total bill function
    useEffect(() => {
        let temp = 0;
        cartItems.forEach((item) => {
            temp = temp + (item.price * item.quantity);
        });
        setSubTotal(temp);
    }, [cartItems]);

    // BIll Modal Handler
    const onFinish = () => {

    };

    return (
        <MainLayout>
            <h3>Cart Page</h3>
            <Table dataSource={cartItems} columns={columns} bordered></Table>
            <div className="">
                <div className="css">
                    <h3>SUB TOTAL: <b>{subTotal}$/-</b></h3>
                </div>
            </div>
            <Button type='primary' onClick={() => setBillChargeModal(true)}>Charge Bill</Button>

            {/* Bill Modal */}
            <Modal title="Charge Bill" open={billChargeModal} onCancel={() => setBillChargeModal(false)} footer={false}>
                <Form layout='vertical' onFinish={onFinish}>
                    <Form.Item name="customerName" label="Customer Name">
                        <Input />
                    </Form.Item>

                    <Form.Item name="phoneNumber" label="Phone Number">
                        <Input />
                    </Form.Item>

                    <Form.Item name="paymentMode" label="Payment Mode">
                        <Select>
                            <Select.Option value="cash">Cash</Select.Option>
                            <Select.Option value="card">Card</Select.Option>
                        </Select>
                    </Form.Item>

                    <div className='modal-btn'>
                        <Button htmlType='submit' type='primary'>Save</Button>
                    </div>
                </Form>

            </Modal>
        </MainLayout >
    );
};

export default CartPage;
