import React from 'react';
import { Menu, Avatar, Breadcrumb } from 'antd';
import { history } from 'umi';
import {
  HomeOutlined,
} from '@ant-design/icons';
import reactSvg from '../assets/react.svg';
import vueSvg from '../assets/vue.svg';
import styles from './styles/index';
import './styles/css.less'

const breadCrumbMap = {
  'home': '首页',
  'react': 'React',
  'vue': 'Vue'
}

export default class App extends React.Component {
  state = {
    current: 'home',
    breadcrumb: '首页'
  };

  handleClick = (e: { key: any; }) => {
    console.log('click ', e);
    const { key } = e
    this.setState({
      current: key,
      breadcrumb: breadCrumbMap[key]
    });
  };

  render() {
    const { current, breadcrumb } = this.state;
    return (
      <div style={styles.box}>
        <div style={styles.nav}>
          <div style={styles.navLeft}>
            <Avatar size={40} src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
          </div>
          <Menu
            mode="horizontal"
            style={styles.menu}
            onClick={this.handleClick}
            selectedKeys={[current]}
          >
            <Menu.Item key="home" onClick={() => history.push('/')} style={styles.menuItembox}>
              <div style={styles.menuItem}>
                <HomeOutlined style={styles.menuIcon} />
                <span style={styles.menuItemText}>首页</span>
              </div>
            </Menu.Item>
            <Menu.Item key="react" onClick={() => history.push('/app1')} style={styles.menuItembox}>
              <div style={styles.menuItem}>
                <img src={reactSvg} style={styles.menuIcon}></img>
                <span style={styles.menuItemText}>React</span>
              </div>
            </Menu.Item>
            <Menu.Item key="vue" onClick={() => history.push('/app2')} style={styles.menuItembox}>
              <div style={styles.menuItem}>
                <img src={vueSvg} style={styles.menuIcon}></img>
                <span style={styles.menuItemText}>Vue</span>
              </div>
            </Menu.Item>
            {/* <Menu.Item key="zhihuinl" style={styles.menuItembox}>
              <a style={styles.menuItem} href="http://www.test7.club:8080" target="_blank" rel="noopener noreferrer">
                智慧农林网
                </a>
            </Menu.Item> */}
          </Menu>
        </div>
        <div style={styles.content}>
          <Breadcrumb>
            <Breadcrumb.Item><h3>{breadcrumb}</h3></Breadcrumb.Item>
          </Breadcrumb>
          {this.props.children}
        </div>
      </div>
    );
  }
}