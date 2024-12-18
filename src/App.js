import React, { useState } from "react";
import Button from "./components/buttons/Button";
import FormAddFriend from "./components/forms/FormAddFriend";
import FriendsList from "./components/FriendsList";
import FormSplitBill from "./components/forms/FormSplitBill";
import { initialFriends } from "./data";

function App() {
  const [friends, setFriends] = useState(initialFriends);
  const [isAddingFriend, setIsAddingFriend] = useState(false);
  const [selectedFriend, setSelectedFriend] = useState(null);

  const handleAddFriend = (friend) => {
    setFriends((friends) => [...friends, friend]);
    setIsAddingFriend(false);
  };

  const handleToggleAddFriend = () => {
    setIsAddingFriend((prev) => !prev);
    setSelectedFriend(null);
  };
  const handleSelectedFriend = (friend) => {
    setSelectedFriend((curr) => (curr?.id === friend.id ? null : friend));
    setIsAddingFriend(false);
  };

  const handleSplitBill = (value) => {
    setFriends((currentFriends) =>
      currentFriends.map((friend) =>
        friend.id === selectedFriend.id
          ? { ...friend, balance: friend.balance + value }
          : friend
      )
    );
    setSelectedFriend(null)
  };

  return (
    <div className="app">
      <div className="sidebar">
        <FriendsList
          friends={friends} 
          handleSelectedFriend={handleSelectedFriend}
          selectedFriend={selectedFriend}
        />
        {isAddingFriend && <FormAddFriend handleAddFriend={handleAddFriend} />}
        <Button onClick={handleToggleAddFriend}>
          {isAddingFriend ? "Close" : "Add Friend"}
        </Button>

        {/* {isAddingFriend ? (
          <>
            <FormAddFriend handleAddFriend={handleAddFriend} key={selectedFriend.id} />
            <Button onClick={handleToggleAddFriend}>Close</Button>
          </>
        ) : (
          <Button onClick={handleToggleAddFriend}>Add Friend</Button>
        )} */}
      </div>
      {selectedFriend && (
        <FormSplitBill
          selectedFriend={selectedFriend}
          handleSplitBill={handleSplitBill}
          key={selectedFriend.id}
        />
      )}
    </div>
  );
}

export default App;
