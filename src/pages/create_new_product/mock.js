export const columns = [
    {
        title: 'Tên màu',
        dataIndex: 'colorName',
        key: 'colorName',
        padding: '10px 10px',
        width: '130px',
    },
    {
        title: 'Ảnh mặt trước',
        dataIndex: 'fronside',
        key: 'fronside',
        render: (_, record) => {
            return (
                <div>
                    <img style={{width: '200px'}} src={record.frontside} />
                </div>
            );
        },
        padding: '10px 10px',
    },
    {
        title: 'Ảnh mặt sau',
        dataIndex: 'backside',
        key: 'backside',
        render: (_, record) => {
            return (
                <div>
                    <img style={{width: '200px'}} src={record.backside} />
                </div>
            );
        },
        padding: '10px 10px',
    },
];
export const data = [
    {
        key: '1',
        colorName: 'Màu đen',
        frontside: 'https://www.pro-bems.com/IMAGES/images_1/FIGTS008202DIA/m/FIGTS008202DIA_2.jpg',
        backside: 'https://www.pro-bems.com/IMAGES/images_1/FIGTS008202DIA/m/FIGTS008202DIA_2.jpg',
    },
    {
        key: '2',
        colorName: 'Màu đỏ',
        frontside: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNDrzRa-1NtSQTA9ETcE2IUjD8fgIeXQqpJJnq4Hdm0eiPWAXguATfxbw0bMfZNoybLm8&usqp=CAU',
        backside:
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNDrzRa-1NtSQTA9ETcE2IUjD8fgIeXQqpJJnq4Hdm0eiPWAXguATfxbw0bMfZNoybLm8&usqp=CAU',
    },
];
