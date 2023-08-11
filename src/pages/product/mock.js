import { colorStyle } from '~/pages/styles.js';

export const columns = [
    {
        title: 'Tên',
        dataIndex: 'name',
        key: 'name',
        width: '165px',
    },
    {
        title: 'Mã',
        dataIndex: 'code',
        key: 'code',
        width: '90px',
    },
    {
        title: 'Ảnh',
        dataIndex: 'image',
        key: 'image',
        render: (_, record) => {
            return (
                <div>
                    <img style={{ width: '110px' }} src={record.image} />
                </div>
            );
        },
        width: '150px',
    },
    {
        title: 'Màu',
        dataIndex: 'color',
        key: 'color',
        width: '160px',
        render: (_, record) => {
            return (
                <div>
                    <div style={{display: 'flex'}}>
                        <div style={colorStyle}>{record.color}</div>
                        <div style={colorStyle}>{record.color}</div>
                        <div style={colorStyle}>{record.color}</div>
                        <div style={colorStyle}>{record.color}</div>
                        <div style={colorStyle}>{record.color}</div>
                        <div style={colorStyle}>{record.color}</div>
                    </div>
                    <div style={{display: 'flex'}}>
                        <div style={colorStyle}>{record.color}</div>
                        <div style={colorStyle}>{record.color}</div>
                        <div style={colorStyle}>{record.color}</div>
                        <div style={colorStyle}>{record.color}</div>
                        <div style={colorStyle}>{record.color}</div>
                        <div style={colorStyle}>{record.color}</div>
                    </div>
                </div>
            );
        },
    },
    {
        title: 'Size',
        dataIndex: 'size',
        key: 'size',
        width: '190px',
    },
    {
        title: 'Thông tin mô tả',
        dataIndex: 'infomation',
        key: 'infomation',
        render: (_, record) => {
            return (
                <div>
                    <p style={{ margin: '0px', fontSize: '12px' }}>{record.infomation}</p>
                    <p style={{ margin: '0px', fontSize: '12px' }}>
                        * Vải thun cotton 4 chiều (95% cotton, 5% spandex)
                    </p>
                    <p style={{ margin: '0px', fontSize: '12px' }}>* May 2 kim tăng độ bền</p>
                    <p style={{ margin: '0px', fontSize: '12px' }}>* In DTG hoặc Decal chất lượng cao</p>
                </div>
            );
        },
    },
];
export const data = [
    {
        key: '1',
        name: 'Cổ tròn tay dài',
        code: 'CTTD',
        image: 'https://t4.ftcdn.net/jpg/03/21/98/71/360_F_321987179_mJndthZlqmXBXAAYOXE6pMJaHVlqxufa.jpg',
        color: '-',
        size: 'XS - S - M - L - XL - XXL',
        infomation: '* Nhiều size và màu săc',
    },
    {
        key: '2',
        name: 'Cổ tròn tay ngắn',
        code: 'CTTN3',
        image: 'https://t4.ftcdn.net/jpg/03/21/98/71/360_F_321987179_mJndthZlqmXBXAAYOXE6pMJaHVlqxufa.jpg',
        color: '-',
        size: 'XS - S - M - L - XL - XXL',
        infomation: '* Nhiều size và màu săc',
    },
    {
        key: '3',
        name: 'Hoodie tay ngắn',
        code: 'HTN1',
        image: 'https://t4.ftcdn.net/jpg/03/21/98/71/360_F_321987179_mJndthZlqmXBXAAYOXE6pMJaHVlqxufa.jpg',
        color: '-',
        size: 'XS - S - M - L - XL - XXL',
        infomation: '* Nhiều size và màu săc',
    },
];
