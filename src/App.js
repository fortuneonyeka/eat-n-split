import React, { useState } from "react";
import Button from "./components/buttons/Button";
import FormAddFriend from "./components/forms/FormAddFriend";
import FriendsList from "./components/FriendsList";
import FormSplitBill from "./components/forms/FormSplitBill";

function App() {
  const [isAddingFriend, setIsAddingFriend] = useState(false);

  const handleToggleAddFriend = () => {
    setIsAddingFriend((prev) => !prev);
  };

  return (
    <div className="app">
      <div className="sidebar">
        <FriendsList />
        
        {isAddingFriend ? (
          <>
            <FormAddFriend />
            <Button onClick={handleToggleAddFriend}>Close</Button>
          </>
        ) : (
          <Button onClick={handleToggleAddFriend}>Add Friend</Button>
        )}
      </div>
      <FormSplitBill />
    </div>
  );
}

export default App;
