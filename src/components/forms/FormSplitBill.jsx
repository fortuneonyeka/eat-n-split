import React from 'react'
import Button from '../buttons/Button';

const FormSplitBill = () => {
  return <form action="" className='form-split-bill'>
<h2>Split bill with </h2>
<label htmlFor="">💰 Total Bill</label>
<input type="text"/>

<label htmlFor="">🧍🏻 Your Bill</label>
<input type="text"/>

<label htmlFor="">👫 X's' Bill</label>
<input type="text" disabled/>

<label htmlFor="">💳 Who is paying the bill</label>
<select name="" id=""> 
  <option value="user">you</option>
  <option value="friend">X</option>
</select>

<Button>Split Bill</Button>
  </form>
}

export default FormSplitBill
