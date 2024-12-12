import React, { useState } from "react";
import Button from "../buttons/Button";

const FormAddFriend = ({handleAddFriend}) => {
  const [name, setName] = useState("");
  const [image, setImage] = useState("https://i.pravatar.cc/48");

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (!name || !image) return;

    const id = crypto.randomUUID()
    const newFriend = {
      name,
      id,
      image: `${image}?=${id}`,
      balance: 0,
    };
    handleAddFriend(newFriend)
    // console.log(newFriend);
    setName("")
    setImage("https://i.pravatar.cc/48")
  };

  return (
    <form action="" className="form-add-friend" onSubmit={handleFormSubmit}>
      <label htmlFor="">👫Name</label>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <label htmlFor="">Image Url</label>
      <input
        type="text"
        value={image}
        onChange={(e) => setImage(e.target.value)}
      />

      <Button>Add</Button>
    </form>
  );
};

export default FormAddFriend;
