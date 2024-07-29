// Delete Item Function
{

    // itemRoute.js
    router.post("/delete-item", deleteItemController);

    // itemsController,js
    export const deleteItemController = async (req, res) => {
        try {
            await ItemsModel.findOneAndDelete({ _id: req.body.itemId });
            res.send('Item Deleted Successfully');
        } catch (error) {
            res.status(400).json(error);
        }
    };

    // Items.jsx
    const deleteItem = (record) => {
        dispatch({ type: "showLoading" });
        axios.post("/api/v1/items/delete-item", { itemId: record._id })
            .then((response) => {
                dispatch({ type: "hideLoading" });
                message.success("Item Delete Successfully");
                getAllItems();
            }).catch((error) => {
                dispatch({ type: "hideLoading" });
                message.error("Something went wrong");
                console.log(error);
            });
    };

    <DeleteOutlined onClick={() => deleteItem(record)} />;



}

// Logout Function
{
    //---- MainLayout.js

    // ei ta ei vabe lekha jabe kina seta age jante hbe
    key: '6',
        icon: <LogoutOutlined onClick(() => {
            localStorage.removeItem("pos-user");
            navigate("/");
        }) />,
            label: 'Logout',

                // login k home route hisab a set kore dite hbe
                <Route path="/" element={<Login />} />;

}


// Total Bill
{
    //------- CartPage.jsx
    const { cartItems } = useSelector((state) => state.root); // er pore 
    const [subTotal, setSubTotal] = useState(0);


    useEffect(() => {
        let temp = 0;
        cartItems.forEach((item) => {
            temp = temp + (item.price * item.quantity);
        });

        setSubTotal(temp);
    }, [cartItems]);

    return ( // er upor


    <Table dataSource={cartItems} columns={columns} bordered></Table> // er pore
    <div className="css ta style kore nite hbe">
        <div className="css">
            <h3>SUB TOTAL: <b>{subTotal}$/-</b></h3>
        </div>
    </div>;
    // akhn total check korte hbe (css ta thik kore nite hbe)

}


// Total Bill Modal
{
    //------- CartPage.jsx 
    const { cartItems } = useSelector((state) => state.root); // er pore 
    const [billChargeModal, setBillChargeModal] = useState(false)

        <div div className = "css ta style kore nite hbe" >
        <div className="css">
            <h3>SUB TOTAL: <b>{subTotal}$/-</b></h3>
        </div> // er pore

        <Button type="primary" onClick(() => setBillChargeModal(true)) > CHARGE BILL</Button >
    </div >

        <Modal title="Charge Bill" visible={billChargeModal}) ></Modal>;
    // akhn cheack kore dekhte hbe j modal kaj kore kina

    // 829 - 833 number video ta dekhte hbe

}