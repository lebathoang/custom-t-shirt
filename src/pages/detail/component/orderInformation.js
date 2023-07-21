import React from 'react';
import { Layout, Col, Row, Divider } from 'antd';
import {
    contentStyle,
    boxStyle,
    title,
    DividerStyle,
    style,
    countSize,
    describe
} from '../../styles.js';

const { Content } = Layout;

const OrderInformation = () => {
    return (
        <Layout>
            <Content style={contentStyle}>
                <label style={title}>Thông tin đơn hàng</label>
                <Row style={boxStyle}>
                    <Col span={8}>
                        <Divider orientation="left" style={DividerStyle}>
                            Tên sản phẩm
                        </Divider>
                        <Row
                            gutter={16}
                            style={{
                                alignItems: 'center',
                                fontWeight: 600,
                            }}
                        >
                            <Col className="gutter-row" span={21}>
                                <div style={style}>CTTD - Cổ tròn tay dài</div>
                            </Col>
                        </Row>
                        <Divider orientation="left" style={DividerStyle}>
                            Màu áo
                        </Divider>
                        <Row gutter={16}>
                            <Col className="gutter-row" span={21}>
                                <div style={style}>Vàng</div>
                            </Col>
                        </Row>
                    </Col>
                    <Col span={8} style={{ display: 'flex' }}>
                        <Col span={8}>
                            <Divider orientation="left" style={DividerStyle}>
                                Mặt trước
                            </Divider>
                            <Row gutter={16} style={{ width: '385px' }}>
                                <Col className="gutter-row" span={10} style={describe}>
                                    <div>Chữ: HelloWorld</div>
                                    <div>Font: Arial</div>
                                    <div>Màu: rgb(0, 0, 255)</div>
                                    <div>Kiểu chữ: Italic</div>
                                    <div>Canh lề: Center</div>
                                    <div>Viền: Red - 3px</div>
                                    <div>Chiều ngang: 55</div>
                                    <div>Chiều cao: 97</div>
                                    <div>Chỉnh kích thước: Có</div>
                                    <div>Xoay: 0 độ</div>
                                    <div>Ảnh: Không</div>
                                </Col>
                            </Row>
                        </Col>
                        <Col span={8} offset={4}>
                            <Divider orientation="left" style={DividerStyle}>
                                Mặt sau
                            </Divider>
                            <Row gutter={16} style={{ width: '385px' }}>
                                <Col className="gutter-row" span={10} style={describe}>
                                    <div>Chữ: </div>
                                    <div>Font: </div>
                                    <div>Màu: </div>
                                    <div>Kiểu chữ: </div>
                                    <div>Canh lề: </div>
                                    <div>Viền: </div>
                                    <div>Chiều ngang: 5</div>
                                    <div>Chiều cao: </div>
                                    <div>Chỉnh kích thước: Có</div>
                                    <div>Xoay: 0 độ</div>
                                    <div>Ảnh: #ART123</div>
                                </Col>
                            </Row>
                        </Col>
                    </Col>
                    <Col span={8} style={{ display: 'flex' }}>
                        <Col span={5} >
                            <Divider orientation="left" style={DividerStyle}>
                                Size áo
                            </Divider>
                            <Row gutter={16}>
                                <Col className="gutter-row" span={22} style={{paddingLeft: '5px'}}>
                                    <div style={countSize}>XS</div>
                                    <div style={countSize}>S</div>
                                    <div style={countSize}>M</div>
                                    <div style={countSize}>L</div>
                                    <div style={countSize}>XL</div>
                                    <div style={countSize}>2XL</div>
                                    <div style={countSize}>3XL</div>
                                </Col>
                            </Row>
                        </Col>
                        <Col span={5} >
                            <Divider orientation="left" style={DividerStyle}>
                                Số lượng
                            </Divider>
                            <Row gutter={16}>
                                <Col className="gutter-row" span={22} style={{paddingLeft: '5px'}}>
                                    <div style={countSize}>1</div>
                                    <div style={countSize}>1</div>
                                    <div style={countSize}>1</div>
                                    <div style={countSize}>1</div>
                                    <div style={countSize}>1</div>
                                    <div style={countSize}>1</div>
                                    <div style={countSize}>1</div>
                                </Col>
                            </Row>
                        </Col>
                    </Col>
                </Row>
            </Content>
        </Layout>
    );
};

export default OrderInformation;
