import { Button, Form, Input } from 'antd'
import React from 'react'

function Footer() {
  return (
    <div className='footer'>
        <div>
            <h2 className='h2x'> Join PaylaneCars</h2>
            <span className='span2x'>Receive pricing updates, shopping tips & more!</span>
            <Form>
                <Form.Item name='email'>
                    <Input className='inpx' type='email' placeholder='Your email address'/>
                    <Button block>Signup</Button>
                </Form.Item>
            </Form>
            <p>&copy; 2023</p>
        </div>
    </div>
  )
}

export default Footer