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


// 1 - Login Registration System
{

    {
        //------- 785 theke 794 video porjonto shot dekhe nite hbe age

        // route o toiri korte hbe

        // create new file models - > userModel.js

        import mongoose from "mongoose";

        // Define the schema
        const userSchema = mongoose.Schema(
            {
                name: {
                    type: String,
                    required: true
                },
                userId: {
                    type: String,
                    required: true
                },
                password: {
                    type: String,
                    required: true
                },
                verified: {
                    type: Boolean,
                    required: true
                },
            }, { timestamps: true }
        );

        // Create the model
        const userModel = mongoose.model("users", userSchema);

        // Export the model
        export default userModel;

    }




    // 2 - Create New User to Database
    {

        //----- Login Register API 
        {

            // userRoute.js
            router.post("/register", registerController);
            router.post("/login", loginController);

            // userController.js
            export const registerController = async (req, res) => {
                try {
                    const newuser = new userModel({ ...req.body, verified: false });
                    await newuser.save();
                    res.send("User Registered Successfully");
                } catch (error) {
                    res.status(400).json(error);
                }
            };

            export const loginController = async (req, res) => {
                try {
                    await userModel.findOne(
                        {
                            userId: req.body.userId,
                            password: req.body.password,
                            verified: true
                        }
                    );
                    res.send("Login Successfully");
                } catch (error) {
                    res.status(400).json(error);
                }
            };
        }

        //----- server.js
        import userRoute from "./routes/userRoute.js";
        // routes 
        app.use("/api/v1/user/", userRoute);
    }


    {
        //----- Register.js ( 797 )


        // axios & dispatch import korte hbe

        const dispatch = useDispatch();

        const onFinish = (values) => {
            axios.post('/api/v1/users/register', values)
                .then(() => {
                    dispatch({ type: "showLoading" });
                    message.success("Registration Successfull, Please Wait For Verification");
                })
                .catch(() => {
                    dispatch({ type: "hideLoading" });
                    message.error("Something Went Wrong");
                });

            // akhn check korte hbe j Registration hocce kina 
        };


    }


}


// 3 - login User & Verification
{

    //----- login.js 
    // submit button a onFinish Function add korte hbe
    // axios & dispatch import korte hbe

    const dispatch = useDispatch();

    const onFinish = (values) => {
        dispatch({ type: "showLoading" });
        axios.post('/api/v1/users/login', values);
        .then((res) => {
            dispatch({ type: "showLoading" });
            message.success("Login Successfull");
        })
        .catch(() => {
            dispatch({ type: "hideLoading" });
            message.error("Something Went Wrong");
        });


    //----- userRoute.js 
    export const loginController = async (req, res) => {
        try {
            await userModel.findOne(
                {
                    userId: req.body.userId,
                    password: req.body.password,
                    verified: true
                }
            );
            if (user) {
                res.send(user);
            } else {
                res.status(400).json({ message: "Login failed" }, user);
            }
            res.send("Login Successfully");
        } catch (error) {
            res.status(400).json(error);
        }
    };


}


// Protected Routes
{
    // 1 - only user can accsess to go to the home page  
    // 2 - when user logged in, he does not access to the Register & Login page


    //------- login.js
    message.success("Login Successfull");
    localStorage.setItem("pos-user", JSON.stringify(res.data));

    //------- App.js
    export const ProtectedRoute = ({ children }) => {
        if (localStorage.getItem('pos-user')) {
            return children;
        } else {
            return <Navigate to="/login" />;
        }
    };


    <Routes>
        <Route path="/home" element={<ProtectedRoute><HomePage /></ProtectedRoute>} />
        <Route path="/cart" element={<ProtectedRoute><Cart /></ProtectedRoute>} />
        <Route path="/items" element={<ProtectedRoute><Items /></ProtectedRoute>} />
    </Routes>;

    // akhn check kore dekhte hbe protected route kaj kortece kina....

    //------- login.js
    const dispatch = useDispatch(); // er pore
    const navigate = useNavigate();

    message.success("Login Successfull");
    localStorage.setItem("pos-user", JSON.stringify(res.data)); // er pore 
    navigate("/home");


    useEffect(() => {
        if (localStorage.getItem('pos-user'))
            navigate("/home");
    }, []);
    return (); // er upor a 




    //------- Register.js
    const dispatch = useDispatch(); // er pore
    const navigate = useNavigate();


    useEffect(() => {
        if (localStorage.getItem('pos-user'))
            navigate("/home");
    }, []);
    return (); // er upor a 
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