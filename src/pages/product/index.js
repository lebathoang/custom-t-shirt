import React, { useState } from 'react';
import { Layout, Space, Table, Affix } from 'antd';
import { headerStyle, contentStyle, tableStyle, scrollableContainer } from '~/pages/styles.js';
import { columns, data } from './api.js';
import Sidebar from '~/pages/sidebar';

const { Header, Content } = Layout;

const ProductList = () => {
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
                            <Header style={headerStyle}>Danh sách phôi</Header>
                            <Content style={contentStyle}>
                                <div>
                                    <div>
                                        <span>{hasSelected ? `Selected ${selectedRowKeys.length} items` : ''}</span>
                                    </div>
                                    <Table
                                        style={tableStyle}
                                        rowSelection={rowSelection}
                                        columns={columns}
                                        dataSource={data}
                                        bordered
                                        pagination={false}
                                    />
                                </div>
                            </Content>
                        </Layout>
                    </Affix>
                </div>
            </Layout>
        </Space>
    );
};

export default ProductList;
