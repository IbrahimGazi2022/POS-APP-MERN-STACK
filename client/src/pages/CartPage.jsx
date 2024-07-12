import { useDispatch, useSelector } from 'react-redux';
import MainLayout from '../components/MainLayout';
import { Table } from 'antd';
import { DeleteOutlined, PlusCircleOutlined, MinusCircleOutlined, } from '@ant-design/icons';

const CartPage = () => {
    const { cartItems } = useSelector((state) => state.root);
    const dispatch = useDispatch();

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
            render: (id, record) => <DeleteOutlined />
        },
    ];
    return (
        <MainLayout>
            <h3>Cart Page</h3>
            <Table dataSource={cartItems} columns={columns} bordered></Table>
        </MainLayout>
    );
};

export default CartPage;
