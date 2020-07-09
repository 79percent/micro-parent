import React from 'react';
import { Menu } from 'antd';
import {history} from 'umi';
export default (props: any) => {
  return <div style={{ width: '100%', height: '100%', display: 'flex' }}>
    <div style={{ width: 256 }}>
      <Menu
        defaultSelectedKeys={['0']}
        defaultOpenKeys={['sub0']}
        mode="inline"
      >
        <Menu.Item key="0" onClick={()=>history.push('/')}>
          主应用
        </Menu.Item>
        <Menu.Item key="1" onClick={()=>history.push('/app1')}>
          App1
        </Menu.Item>
        <Menu.Item key="2" onClick={()=>history.push('/app2')}>
          App2
        </Menu.Item>
      </Menu>
    </div>
    {props.children}
  </div>;
}