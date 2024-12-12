import React, { useState } from "react";
import Button from "./components/buttons/Button";
import FormAddFriend from "./components/forms/FormAddFriend";
import FriendsList from "./components/FriendsList";
import FormSplitBill from "./components/forms/FormSplitBill";
import {initialFriends} from "./data"


function App() {
  const [friends, setFriends] = useState(initialFriends)
  const [isAddingFriend, setIsAddingFriend] = useState(false);

  const handleAddFriend  = (friend) => {
    setFriends(friends => [...friends, friend])
  }

  const handleToggleAddFriend = () => {
    setIsAddingFriend((prev) => !prev);
    
  };

  const handleCloseForm = () => {
    setIsAddingFriend(false)
  }

  return (
    <div className="app">
      <div className="sidebar">
        <FriendsList friends={friends}/>
        {isAddingFriend && <FormAddFriend handleAddFriend={handleAddFriend} handleCloseForm={handleCloseForm}/>}
        <Button onClick={handleToggleAddFriend}>{isAddingFriend ? "Close" : "Add Friend"}</Button>

        {/* {isAddingFriend ? (
          <>
            <FormAddFriend />
            <Button onClick={handleToggleAddFriend}>Close</Button>
          </>
        ) : (
          <Button onClick={handleToggleAddFriend}>Add Friend</Button>
        )} */}
      </div>
      <FormSplitBill />
    </div>
  );
}

export default App;
