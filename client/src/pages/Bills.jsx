import MainLayout from '../components/MainLayout';
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import axios from "axios";
import { EyeOutlined } from "@ant-design/icons";
import { Table } from 'antd';
import Modal from 'antd/es/modal/Modal';
import "../resources/bill.css";

const Bills = () => {
    const [billsData, setBillsData] = useState([]);
    const [printBillModalVisibility, setPrintBillModalVisibility] = useState(false);
    const [selectedBill, setSelectedBill] = useState(null);
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
                    <EyeOutlined onClick={() => {
                        setPrintBillModalVisibility(true);
                        setSelectedBill(record);
                    }} />
                </div>
            ),
        },
    ];


    const cartcolumns = [
        {
            title: "Name",
            dataIndex: "name",
        },
        {
            title: "Price",
            dataIndex: "price",
        },
        {
            title: "Quantity",
            dataIndex: "_id",
            render: (id, record) => (
                <div>
                    <b>{record.quantity}</b>
                </div>
            ),
        },
        {
            title: "Total fare",
            dataIndex: "_id",
            render: (id, record) => (
                <div>
                    <b>{record.quantity * record.price}</b>
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
            {printBillModalVisibility && (
                <Modal title="Bill Details" open={printBillModalVisibility} onCancel={() => { setPrintBillModalVisibility(false); }} footer={false}>
                    <div>
                        <div className='invoice'>
                            <div>
                                <h1><b>Store Controller</b></h1>
                            </div>
                        </div>
                        <div className='bill-customer'>
                            <p><b>Name : </b>{selectedBill.customerName}</p>
                            <p><b>Phone Number : </b>{selectedBill.customerPhoneNumber}</p>
                            <p><b>Date</b> :{selectedBill.createdAt.toString().substring(0, 10)}</p>
                        </div>

                        <Table dataSource={selectedBill.cartItems} columns={cartcolumns} pagination={false} />

                        <div className="dotted-border">
                            <p><b>SUB TOTAL</b> : {selectedBill.subTotal}</p>
                            <p><b>Tax</b> : {selectedBill.tax}</p>
                        </div>

                    </div>
                </Modal>
            )}
        </MainLayout >
    );
};

export default Bills;
