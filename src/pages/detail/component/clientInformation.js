import React from 'react';
import { Layout, Col, Row, Divider, Dropdown, message, Space } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import { contentStyle, boxStyle, title, DividerStyle, subtitle, style, hourStyle } from '../../styles.js';

const { Content } = Layout;

const onClick = ({ key }) => {
    message.info(`Click on item ${key}`);
  };
  const items = [
    {
      label: '1st menu item',
      key: '1',
    },
    {
      label: '2nd menu item',
      key: '2',
    },
    {
      label: '3rd menu item',
      key: '3',
    },
  ];

const DetailList = () => {
    return (
        <Layout>
            <Content style={contentStyle}>
                <label style={title}>Thông tin khách hàng</label>
                <Row style={boxStyle}>
                    <Col span={8}>
                        <label style={subtitle}>Chung</label>
                        <Divider orientation="left" style={DividerStyle}>
                            Ngày tạo
                        </Divider>
                        <Row
                            gutter={16}
                            style={{
                                alignItems: 'center',
                                fontWeight: 600,
                            }}
                        >
                            <Col className="gutter-row" span={9}>
                                <div style={style}>11-07-2023</div>
                            </Col>
                            <span>@</span>
                            <Col className="gutter-row" span={3}>
                                <div style={hourStyle}>09</div>
                            </Col>
                            <span>:</span>
                            <Col className="gutter-row" span={3}>
                                <div style={hourStyle}>47</div>
                            </Col>
                        </Row>
                        <Divider orientation="left" style={DividerStyle}>
                            Trạng thái
                        </Divider>
                        <Row gutter={16}>
                            <Col className="gutter-row" span={21}>
                                <Dropdown
                                    menu={{
                                        items,
                                        onClick,
                                    }}
                                >
                                    <div style={style} onClick={(e) => e.preventDefault()}>
                                        <Space style={{width: '100%', display: 'flex', justifyContent: 'space-between'}} >
                                        Đã xử lý / Chưa xử lý
                                            <DownOutlined />
                                        </Space>
                                    </div>
                                </Dropdown>
                            </Col>
                        </Row>
                        <Divider orientation="left" style={DividerStyle}>
                            Khách hàng
                        </Divider>
                        <Row gutter={16}>
                            <Col className="gutter-row" span={21}>
                                <div style={style}>Thanh Pham (#2 - thanhppm@gmail.com)</div>
                            </Col>
                        </Row>
                    </Col>
                    <Col span={8}>
                        <label style={subtitle}>Thanh toán</label>
                        <Row gutter={16} style={{ paddingBottom: '23px' }}>
                            <Col className="gutter-row" span={21}>
                                <div style={{ padding: '10px 0 0 10px' }}>Minh Pham</div>
                                <div style={{ paddingLeft: '10px', lineHeight: '12px' }}>
                                    Thon La Uyen, Minh Quang, Vu Thu
                                </div>
                                <div style={{ paddingLeft: '10px' }}>Thai Binh</div>
                            </Col>
                        </Row>
                        <label style={subtitle}>Địa chỉ Email</label>
                        <Row gutter={16} style={{ paddingBottom: '24px' }}>
                            <Col className="gutter-row" span={21}>
                                <div style={{ padding: '10px 0 0 10px' }}>thanhppm@gmail.com</div>
                            </Col>
                        </Row>
                        <label style={subtitle}>Số điện thoại</label>
                        <Row gutter={16}>
                            <Col className="gutter-row" span={21}>
                                <div style={{ padding: '10px 0 0 10px' }}>0969391389</div>
                            </Col>
                        </Row>
                    </Col>
                    <Col span={8}>
                        <label style={subtitle}>Giao hàng</label>
                        <Row gutter={16}>
                            <Col className="gutter-row" span={21}>
                                <div style={{ padding: '10px 0 0 10px' }}>Minh Pham</div>
                                <div style={{ paddingLeft: '10px', lineHeight: '12px' }}>
                                    Thon La Uyen, Minh Quang, Vu Thu
                                </div>
                                <div style={{ paddingLeft: '10px' }}>Thai Binh</div>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Content>
        </Layout>
    );
};

export default DetailList;
