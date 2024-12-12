import React from 'react'
import { initialFriends } from '../data';
import Friend from './Friend';

const FriendsList = () => {
  return (
    <div>
      <ul>{initialFriends.map((friend) => (
        <Friend  friend={friend} key={friend.id}/>
      ))}</ul>
    </div>
  )
}

export default FriendsList
