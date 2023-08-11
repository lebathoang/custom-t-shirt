import React from 'react';
import { Button, Layout, Space, Col, Row, Affix } from 'antd';
import { headerStyle, updateStyle, scrollableContainer } from '../styles.js';
import ClientInformation from './components/client_information.js';
import OrderInformation from './components/order_information.js';
import Sidebar from '~/components/layouts/sidebar/index.js';

const { Header } = Layout;

const DetailList = () => {
    return (
        <Space
            direction="vertical"
            style={{
                width: '100%',
            }}
            size={[0, 48]}
        >
            <Layout style={{ backgroundColor: 'white' }}>
                <Sidebar />
                <div style={scrollableContainer}>
                    <Affix>
                        <Layout>
                            <Header style={headerStyle}>
                                <Row>
                                    <Col flex="auto" style={{ fontSize: '24px' }}>
                                        Đơn hàng #5481 chi tiết
                                    </Col>
                                    <Col flex="100px">
                                        <Space wrap>
                                            <Button type="text" block style={updateStyle}>
                                                Cập nhật
                                            </Button>
                                        </Space>
                                    </Col>
                                </Row>
                            </Header>
                            <ClientInformation />
                            <OrderInformation />
                        </Layout>
                    </Affix>
                </div>
            </Layout>
        </Space>
    );
};

export default DetailList;
