import React from 'react'
import Button from '../buttons/Button';

const FormAddFriend = () => {
  return <form action="" className='form-add-friend'>
    <label htmlFor="">👫Name</label>
    <input type="text"/>

    <label htmlFor="">Image Url</label>
    <input type="text"/>

    <Button>Add</Button>
  </form>
}

export default FormAddFriend
