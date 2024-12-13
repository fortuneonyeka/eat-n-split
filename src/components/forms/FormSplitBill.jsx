import React from "react";
import Button from "../buttons/Button";

const FormSplitBill = ({selectedFriend}) => {
  return (
    <form action="" className="form-split-bill">
      <h2>Split bill with {selectedFriend.name}</h2>
      <label htmlFor="">💰 Total Bill</label>
      <input type="text" />

      <label htmlFor="">🧍🏻 Your Bill</label>
      <input type="text" />

      <label htmlFor="">👫 {selectedFriend.name}'s Bill</label>
      <input type="text" disabled />

      <label htmlFor="">💳 Who is paying the bill</label>
      <select name="" id="">
        <option value="user">you</option>
        <option value="friend">{selectedFriend.name}</option>
      </select>

      <Button >Split Bill</Button>
    </form>
  );
};

export default FormSplitBill;
