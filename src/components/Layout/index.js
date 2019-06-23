import React from 'react'
import { Layout, Menu, Icon } from 'antd';
import { Link } from 'dva/router';

const { Header, Sider, Content } = Layout;

export default class SiderDemo extends React.Component {
  state = {
    collapsed: false,
  };

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };

  render() {
    return (
      <Layout>
        <Sider trigger={null} collapsible collapsed={this.state.collapsed}>
          <div className="logo" />
          <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
            <Menu.Item key="1">
            <Link to='/'>
            <Icon type="align-left" />
              <span>知识点 1</span>
              </Link>
            </Menu.Item>

            <Menu.Item key="2">
            <Link to='/lesson2'>
            <Icon type="align-left" />
              <span>知识点 2</span>
              </Link>
            </Menu.Item>
            <Menu.Item key="3">
            <Link to='/lesson3'>
            <Icon type="align-left" />
              <span>知识点 3</span>
              </Link>
            </Menu.Item>
            <Menu.Item key="4">
            <Link to='/lesson4'>
            <Icon type="align-left" />
              <span>知识点 4</span>
              </Link>
            </Menu.Item>
            <Menu.Item key="5">
            <Link to='/lesson5'>
            <Icon type="align-left" />
              <span>知识点 5</span>
              </Link>
            </Menu.Item>
            <Menu.Item key="6">
            <Link to='/lesson6'>
            <Icon type="align-left" />
              <span>知识点 6</span>
              </Link>
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout>
          <Header style={{ background: '#fff', padding: 3 }}>
            <Icon
              className="trigger"
              type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
              onClick={this.toggle}
            />
            <span style={{fontSize: '25px', paddingLeft: '23px'}}>Practical Deep Learning for Coders</span>
          </Header>
          <Content
            style={{
              margin: '24px 16px',
              padding: 24,
              background: '#fff',
              minHeight: 280,
            }}
          >
             {this.props.children}
          </Content>
        </Layout>
      </Layout>
    );
  }
}