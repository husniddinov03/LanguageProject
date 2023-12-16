import React, { useState } from 'react'; import {
    MenuFoldOutlined,
    MenuUnfoldOutlined,
    VideoCameraOutlined,
} from '@ant-design/icons';
import { UseInfoContext } from '../../Context/UseInfoContext';
import { Layout, Menu, Button, theme } from 'antd';
import Home from '../Home/Home';
import { AiFillAppstore, AiFillCheckSquare } from "react-icons/ai";
import Unfinished from '../Unfinished/Unfinished';
import Complated from '../Complated/Complated';

const { Header, Sider, Content } = Layout;


const NavPage = () => {
    const { conf, setConf } = UseInfoContext()
    const [collapsed, setCollapsed] = useState(true);

    const handleClick = (key) => {
        if (key.key == 1) {
            setConf("Home")
        } else if (key.key == 2) {
            setConf("Unfinished")
        } else if (key.key) {
            setConf("Complated")
        }
    }

    return (
        <Layout >
            <Sider trigger={null}  collapsed={collapsed}>
                <div className="demo-logo-vertical" />
                <Menu
                    style={{ marginTop: "90px" }}
                    theme="dark"
                    mode="inline"
                    defaultSelectedKeys={['1']}
                    onClick={handleClick}
                    items={[
                        {
                            key: '1',
                            icon: <AiFillAppstore />,
                            label: 'All Courses ',
                        },
                        {
                            key: '2',
                            icon: <VideoCameraOutlined />,
                            label: 'Unfinished',
                        },
                        {
                            key: '3',
                            icon: <AiFillCheckSquare />,
                            label: 'Complated',
                        },
                    ]}
                />
            </Sider>

            <Layout style={{
                minWidth: 500,

            }}>
                <Header
                    style={{
                        padding: 0,
                        background: "linear-gradient(45deg, rgba(245, 222, 179, 0.782), rgba(169, 169, 169, 0.782))"
                    }}
                >
                    <Button
                        type="text"
                        icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
                        onClick={() => setCollapsed(!collapsed)}
                        style={{
                            fontSize: '16px',
                            width: 64,
                            height: 64,
                        }}
                    />
                </Header>
                <Content
                    style={
                        {
                            margin: '24px 16px',
                            padding: 24,
                            minHeight: 780,
                            minWidth: 500,
                            background: "linear-gradient(45deg, rgba(245, 222, 179, 0.782), rgba(169, 169, 169, 0.782))",
                        }}
                >
                    {conf == "Home" ? <Home /> : <></>},
                    {conf == "Unfinished" ? <Unfinished /> : <></>},
                    {conf == "Complated" ? <Complated /> : <></>}
                </Content>
            </Layout>
        </Layout>
    );
}

export default NavPage