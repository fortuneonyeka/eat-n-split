import React from "react";
import Button from "./buttons/Button";

const Friend = ({ friend }) => {
  return (
    <div>
      <li>
        <img src={friend.image} alt={friend.name} />
        <h3>{friend.name}</h3>
        {friend.balance < 0 ? (
          <p className="red">{`You owe ${friend.name} ${Math.abs(
            friend.balance
          )}$`}</p>
        ) : friend.balance > 0 ? (
          <p className="green">
            {friend.name} {`owes you ${friend.balance}$`}
          </p>
        ) : (
          <p>You and {friend.name} are even 😎</p>
        )}
        <Button text="select" className="button"/>
      </li>
    </div>
  );
};

export default Friend;
