import React from "react";

import UserItem from "./userItem";
import Card from "../../shared/components/UIElement/card"

import "./userlist.css"

const UserList = (props) => {
    if (props.items.length === 0) {
        return (
            <div className="center">
                <Card>
                    <h2>No users found</h2>
                </Card>
            </div>
        )
    }

    return (
        <ul >
            {
                props.items.map((user) => (
                    <UserItem key={user.id} id={user.id} image={user.image} name={user.name} placeCount={user.places} />
                ))
            }
        </ul>
    )
}

export default UserList;