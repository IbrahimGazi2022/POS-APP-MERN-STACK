import MainLayout from '../components/MainLayout';
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import axios from "axios";
import { EyeOutlined } from "@ant-design/icons";
import { Table, Button } from 'antd';

const Bills = () => {
    const [billsData, setBillsData] = useState([]);
    const dispatch = useDispatch();

    const getAllBills = () => {
        dispatch({ type: "showLoading" });
        axios.get('/api/v1/bills/get-all-bills').then((response) => {
            dispatch({ type: "hideLoading" });
            const data = response.data;
            data.reverse();
            setBillsData(data);
        }).catch((error) => {
            dispatch({ type: "hideLoading" });
            console.log(error);
        });
    };

    const columns = [
        {
            title: "Id",
            dataIndex: "_id",
        },
        {
            title: "Customer Name",
            dataIndex: "customerName",
        },
        {
            title: "Phone No:",
            dataIndex: "customerPhoneNumber",
        },
        {
            title: "Sub Total",
            dataIndex: "subTotal",
        },
        {
            title: "Tax",
            dataIndex: "tax",
        },
        {
            title: "Total",
            dataIndex: "totalAmount",
        },
        {
            title: "Actions",
            dataIndex: "_id",
            render: (id, record) => (
                <div className="d-flex">
                    <EyeOutlined />
                </div>
            ),
        },
    ];


    useEffect(() => {
        getAllBills();
    }, []);


    return (
        <MainLayout>
            <div className='item-section'>
                <h1>All Bills</h1>
            </div>
            <Table dataSource={billsData} columns={columns} bordered></Table>   
        </MainLayout >
    );
};

export default Bills;
