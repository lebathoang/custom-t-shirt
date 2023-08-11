import React, { useState } from 'react';
import { Button, Layout, Space, Row, Col, Divider, Checkbox, Table, Affix } from 'antd';
import {
    contentStyle,
    Dividers,
    styleDescribe,
    updateStyle,
    headerStyle,
    scrollableContainer,
} from '~/pages/styles.js';
import { columns, data } from './mock.js';

const { Header, Content } = Layout;

const CheckboxGroup = Checkbox.Group;
const plainOptions = ['XS', 'S', 'M', 'L', 'XL', '2XL', '3XL', '4XL'];

const Main = () => {
    const [selectedRowKeys, setSelectedRowKeys] = useState([]);

    const onSelectChange = (newSelectedRowKeys) => {
        console.log('selectedRowKeys changed: ', newSelectedRowKeys);
        setSelectedRowKeys(newSelectedRowKeys);
    };
    const rowSelection = {
        selectedRowKeys,
        onChange: onSelectChange,
    };
    const hasSelected = selectedRowKeys.length > 0;

    return (
        <div style={scrollableContainer}>
            <Affix>
                <Layout>
                    <Header style={headerStyle}>Tạo mới sản phẩm</Header>
                    <Content style={contentStyle}>
                        <Row>
                            <Col span={15} offset={5}>
                                <Divider orientation="left" style={Dividers}>
                                    Tên sản phẩm
                                </Divider>
                                <Row gutter={16}>
                                    <Col className="gutter-row" span={24}>
                                        <div style={styleDescribe}>Cổ tròn tay dài</div>
                                    </Col>
                                </Row>
                                <Divider orientation="left" style={Dividers}>
                                    Mã sản phẩm
                                </Divider>
                                <Row gutter={16}>
                                    <Col className="gutter-row" span={24}>
                                        <div style={styleDescribe}>CTTD</div>
                                    </Col>
                                </Row>
                                <Divider orientation="left" style={Dividers}>
                                    Mô tả sản phẩm
                                </Divider>
                                <Row gutter={16}>
                                    <Col className="gutter-row" span={24}>
                                        <div style={styleDescribe}>
                                            <p>* Nhiều size và màu sắc</p>
                                            <p>* Vải thun cotton 4 chiều (95% cotton, 5% spandex)</p>
                                            <p>* May 2 kim tăng độ bền</p>
                                            <p>* In DTG hoặc Decal chất lượng cao</p>
                                        </div>
                                    </Col>
                                </Row>
                                <Divider orientation="left" style={Dividers}>
                                    Size
                                </Divider>
                                <CheckboxGroup options={plainOptions} style={{ paddingBottom: '30px' }} />
                                <div>
                                    <div>
                                        <span>{hasSelected ? `Selected ${selectedRowKeys.length} items` : ''}</span>
                                    </div>
                                    <Table
                                        style={{ fontWeight: 500 }}
                                        rowSelection={rowSelection}
                                        columns={columns}
                                        dataSource={data}
                                        bordered
                                        pagination={false}
                                    />
                                </div>
                                <Space wrap style={{ display: 'flex', justifyContent: 'end', paddingTop: '30px' }}>
                                    <Button type="text" block style={updateStyle}>
                                        Thêm màu
                                    </Button>
                                </Space>
                            </Col>
                        </Row>
                    </Content>
                </Layout>
            </Affix>
        </div>
    );
};

export default Main;
