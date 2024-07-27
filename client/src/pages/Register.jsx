import { Col, Form, Button, Input, Row, message } from 'antd';
import { Link } from "react-router-dom";
import axios from "axios";
import { useDispatch } from "react-redux";
import '../resources/authentication.css';

const Register = () => {
    const dispatch = useDispatch();

    const onFinish = (values) => {
        dispatch({ type: "showLoading" });
        axios.post('/api/v1/users/register', values)
            .then((res) => {
                dispatch({ type: "hideLoading" });
                message.success("Registration Successfull, Please Wait For Verification");
            })
            .catch(() => {
                dispatch({ type: "hideLoading" });
                message.error("Something Went Wrong");
            });

    };

    return (
        <div className='authentication'>
            <Row>
                <Col lg={8} xs={22}>
                    <Form layout="vertical" onFinish={onFinish}>
                        <h2>Register</h2>
                        <Form.Item name="name" label="Name">
                            <Input />
                        </Form.Item>
                        <Form.Item name="userId" label="User ID">
                            <Input />
                        </Form.Item>
                        <Form.Item name="password" label="Password">
                            <Input type='password' />
                        </Form.Item>

                        <div className="auth-btn">
                            <Link to='/login'>Already Registed ? Click Here To Login</Link>
                            <Button htmlType="submit" type="primary">
                                Register
                            </Button>
                        </div>
                    </Form>
                </Col>
            </Row>
        </div>
    );
};

export default Register;
