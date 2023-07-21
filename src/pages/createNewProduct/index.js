import React from 'react';
import { Layout, Space } from 'antd';
import Main from './main.js';
import Sidebar from '~/pages/sidebar'

const CreateNewProduct = () => {
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
                <Main />
            </Layout>
        </Space>
    );
};

export default CreateNewProduct;
