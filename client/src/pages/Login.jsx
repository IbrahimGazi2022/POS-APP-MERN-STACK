import { Col, Form, Button, Input, Row, message } from 'antd';
import axios from 'axios';
import { Link } from "react-router-dom";
import { useDispatch } from 'react-redux';
import '../resources/authentication.css';

const Login = () => {

    const dispatch = useDispatch();

    const onFinish = (values) => {
        dispatch({ type: 'showLoading' });
        axios.post('/api/v1/users/login', values).then((res) => {
            dispatch({ type: 'hideLoading' });
            message.success('Login successfull');
        }).catch(() => {
            dispatch({ type: 'hideLoading' });
            message.error('Something went wrong');
        });
    };

    return (
        <div className='authentication'>
            <Row>
                <Col lg={8} xs={22}>
                    <Form layout="vertical" onFinish={onFinish}>
                        <h2>Login</h2>
                        <Form.Item name="userId" label="User ID">
                            <Input type='text' />
                        </Form.Item>
                        <Form.Item name="password" label="Password">
                            <Input type='password' />
                        </Form.Item>

                        <div className="auth-btn">
                            <Link to='/register'>Click Here To Register</Link>
                            <Button htmlType="submit" type="primary">
                                Login
                            </Button>
                        </div>
                    </Form>
                </Col>
            </Row>
        </div>
    );
};

export default Login;
