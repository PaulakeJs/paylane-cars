import { Form, Tabs } from 'antd'
import React from 'react'
import AllForm from './AllForm'
import UsedAllForm from './UsedAllForm'

function BuyScreen() {
  return (
    <div className='b-text'>
        <Tabs
        defaultActiveKey='1'
        >
            <Tabs.TabPane tab='All' key='1' className='tabs'>
                <AllForm/>
            </Tabs.TabPane>
            <Tabs.TabPane tab='New' key='2' className='tabs'>
                <AllForm/>
            </Tabs.TabPane>
            <Tabs.TabPane tab='Used' key='3' className='tabs'>
                <UsedAllForm/>
            </Tabs.TabPane>
        </Tabs>
    </div>
  )
}

export default BuyScreen