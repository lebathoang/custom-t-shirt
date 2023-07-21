import React from 'react';
import { Button, Layout, Space } from 'antd';
import { Link } from 'react-router-dom';
import { siderStyle, buttonStyle } from '~/pages/styles.js';

const { Sider } = Layout;

const Sidebar = () => {
    return (
        <Sider style={siderStyle}>
            <Space wrap>
                <Link to="/">
                    <Button type="text" style={buttonStyle}>
                        ĐƠN HÀNG
                    </Button>
                </Link>
                <Link to="/product">
                    <Button type="text" style={buttonStyle}>
                        SẢN PHẨM
                    </Button>
                </Link>
                <Link to="/client">
                    <Button type="text" style={buttonStyle}>
                        KHÁCH HÀNG
                    </Button>
                </Link>
                <Link to="#">
                    <Button type="text" style={buttonStyle}>
                        FONTS
                    </Button>
                </Link>
                <Link to="/gallery">
                    <Button type="text" style={buttonStyle}>
                        GALLERY
                    </Button>
                </Link>
            </Space>
        </Sider>
    );
};

export default Sidebar;
