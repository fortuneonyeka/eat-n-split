import React from "react";
import Friend from "./Friend";

const FriendsList = ({friends,handleSelectedFriend, selectedFriend}) => {
  
  
  return (
    <div>
      <ul >
        {friends.map((friend) => (
          <Friend friend={friend} key={friend.id} handleSelectedFriend={handleSelectedFriend} selectedFriend={selectedFriend}/>
        ))}
      </ul>
    </div>
  );
};

export default FriendsList;
