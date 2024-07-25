import { Col, Form, Button, Input, Row } from 'antd';
import { Link } from "react-router-dom";
import '../resources/authentication.css';

const Register = () => {
    return (
        <div className='authentication'>
            <Row>
                <Col lg={8} xs={22}>
                    <Form layout="vertical">
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
