import { Button, Form, Input } from 'antd'
import React from 'react'

function AllForm() {
  return (
    <div className='card'>
        <Form
        layout='vertical'>
            <Form.Item label='Brand' name='brand'>
                <Input type='text'/>
            </Form.Item>
            <Form.Item label='Model' name='model'>
                <Input type='text'/>
            </Form.Item>
            <Form.Item label='Price' name='price'>
                <Input type='number'/>
            </Form.Item>
            <Button className='button' block>
                Browse Cars
            </Button>
        </Form>
    </div>
  )
}

export default AllForm