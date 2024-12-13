import React, { useState } from "react";
import Button from "../buttons/Button";

const FormSplitBill = ({selectedFriend, handleSplitBill}) => {
  const [bill, setBill] = useState("")
  const [paidByUser, setPaidByUser] = useState("")
  const [whoIsPaying, setWhoIsPaying] = useState("user")

  const paidByFriend = bill? bill- paidByUser : ""

  

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!bill || Number(bill) <= 0) {
      alert("Please enter a valid bill amount");
      return;
    }
    if (!paidByUser || Number(paidByUser) < 0) {
      alert("Please enter a valid amount paid by you");
      return;
    }

    const billToSettle = whoIsPaying === "user" 
      ? Number(paidByFriend) 
      : -Number(paidByUser);
    handleSplitBill(billToSettle)
    setBill("")
    setPaidByUser("")
  }
  return (
    <form action="" className="form-split-bill" onSubmit={handleSubmit}>
      <h2>Split bill with {selectedFriend.name}</h2>
      <label htmlFor="">💰 Total Bill</label>
      <input type="number" value={bill} onChange={(e) => setBill(Number(e.target.value))}/>

      <label htmlFor="">🧍🏻 Your Bill</label>
      <input type="number"  value={paidByUser} onChange={(e) =>setPaidByUser(Number(e.target.value) > bill ? paidByUser : Number(e.target.value))}/>

      <label htmlFor="">👫 {selectedFriend.name}'s Bill</label>
      <input type="text" disabled value={paidByFriend}/>

      <label htmlFor="">💳 Who is paying the bill</label>
      <select name="" id="" value={whoIsPaying} onChange={(e) =>setWhoIsPaying(e.target.value)}>
        <option value="user">you</option>
        <option value="friend">{selectedFriend.name}</option>
      </select>

      <Button >Split Bill</Button>
    </form>
  );
};

export default FormSplitBill;
