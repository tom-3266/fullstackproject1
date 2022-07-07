import React from "react";
import Card from "../../shared/Components/UIElements/Card";
import UserItem from "./UserItem";

import "./UserList.css";

const UserList = ({ users }) => {
  if (users.length === 0) {
    return (
      <Card>
        <div>No data found</div>
      </Card>
    );
  }
  return (
    <div>
      {users.map((user) => {
        return (
          <ul className="users-list" key={user.id}>
            <UserItem
              id={user.id}
              image={user.image}
              name={user.name}
              placeCount={user.places}
            />
          </ul>
        );
      })}
    </div>
  );
};

export default UserList;
