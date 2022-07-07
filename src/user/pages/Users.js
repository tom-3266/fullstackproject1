import React from "react";
import UserList from "../Components/UserList";

const Users = () => {
  const USERS = [
    {
      id: 1,
      name: "Tom Sibi",
      image: "https://picsum.photos/200",
      places: 2,
    },
  ];
  return (
    <h2>
      <UserList users={USERS} />
    </h2>
  );
};

export default Users;
