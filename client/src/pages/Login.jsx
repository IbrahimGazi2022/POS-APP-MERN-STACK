import { Col, Form, Button, Input, Row } from 'antd';
import { Link } from "react-router-dom";
import '../resources/authentication.css';

const Login = () => {
    return (
        <div className='authentication'>
            <Row>
                <Col lg={8} xs={22}>
                    <Form layout="vertical">
                        <h2>Login</h2>
                        <Form.Item name="userId" label="User ID">
                            <Input />
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
