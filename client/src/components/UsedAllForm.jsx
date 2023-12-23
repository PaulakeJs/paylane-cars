import { Button, Form, Input } from 'antd'
import React from 'react'

function UsedAllForm() {
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
            <Form.Item label='Year' name='year'>
                <select>
                    <option value="1">2005</option>
                    <option value="2">2009</option>
                    <option value="3">2011</option>
                    <option value="4">2016</option>
                    <option value="5">2019</option>
                    <option value="6">2021</option>
                    <option value="7">2023</option>
                </select>
            </Form.Item>
            <Form.Item label='Price' name='price'>
                <Input type='number'/>
            </Form.Item>
            <Button className='button' block>
                Browse Used Cars
            </Button>
        </Form>
    </div>
  )
}

export default UsedAllForm