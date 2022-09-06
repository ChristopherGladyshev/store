import React, { useState } from 'react'
import { Input, Button } from '../../elements'

import './Admin.scss';

const Admin = () => {
  const sendForm = (e: any) => {
    e.preventDefault();
  }
  return (
    <div className='container'>
      <form className='admin__form--create-product'>
        <div>
          <Input type='text' placeholder='Header'>Header</Input>
        </div>
        <div>
          <Input type='text' placeholder='description'>description</Input>
        </div>
        <div>
          <Input type='text' placeholder='Header'>Header</Input>
        </div>
        <div>
          <Input type='text' placeholder='Header'>Header</Input>
        </div>
        <div>
          <Input type='text' placeholder='Header'>Header</Input>
        </div>
        <div>
          <Button onClick={(event) => sendForm(event)} >Отправить</Button>
        </div>
      </form>
    </div>
  )
}

export default Admin
