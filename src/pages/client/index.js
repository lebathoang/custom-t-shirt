import React, { useState } from 'react';
import { Layout, Space, Table, Affix } from 'antd';
import { headerStyle, contentStyle, tableStyle, scrollableContainer } from '~/pages/styles.js';
import { columns, data } from './mock.js';
import Sidebar from '~/components/layouts/sidebar/index.js'

const { Header, Content } = Layout;

const ClientList = () => {
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
            <Layout>
                <Sidebar />
                <div style={scrollableContainer}>
                    <Affix>
                        <Layout>
                            <Header style={headerStyle}>Danh sách khách hàng</Header>
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

export default ClientList;
