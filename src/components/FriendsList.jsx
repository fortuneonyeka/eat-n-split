import React from "react";
import Friend from "./Friend";

const FriendsList = ({friends}) => {
  return (
    <div>
      <ul>
        {friends.map((friend) => (
          <Friend friend={friend} key={friend.id} />
        ))}
      </ul>
    </div>
  );
};

export default FriendsList;
