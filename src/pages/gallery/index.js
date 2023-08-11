import React from 'react';
import { Button, Layout, Space, Affix } from 'antd';
import { Link } from 'react-router-dom';
import { headerStyle, contentStyle, button, scrollableContainer } from '~/pages/styles.js';
import Sidebar from '~/components/layouts/sidebar'

const { Header, Content } = Layout;

const Gallery = () => {
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
                            <Header style={headerStyle}>Gallery</Header>
                            <Content style={contentStyle}>
                                <Space wrap>
                                    <Link to="#">
                                        <Button type="text" style={button}>
                                            <label>Gallery</label>
                                            <p style={{ margin: '0px' }}>Lưu ảnh của app tại đây</p>
                                        </Button>
                                    </Link>
                                    <Link to="#">
                                        <Button type="text" style={button}>
                                            <label>Customize</label>
                                            <p style={{ margin: '0px' }}>Lưu ảnh của khách upload</p>
                                        </Button>
                                    </Link>
                                </Space>
                            </Content>
                        </Layout>
                    </Affix>
                </div>
            </Layout>
        </Space>
    );
};

export default Gallery;
