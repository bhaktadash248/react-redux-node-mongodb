import React from "react";
import { Link } from "react-router-dom";

import Avatar from "../../shared/components/UIElement/avatar"
import Card from "../../shared/components/UIElement/card"
import "./userItem.css";

const UserItem = (props) => {
    return (
        <li className="user-item">
            <Card className="user-item_content">
                <Link to={`/${props.id}/places`}>
                    <div className="user-item_image">
                        <Avatar image={props.image} alt={props.name} />
                    </div>
                    <div className="user-item_info">
                        <h2>{props.name}</h2>
                        <h3>{props.placeCount} {props.placeCount === 1 ? "Place" : "places"}</h3>
                    </div>
                </Link>
            </Card>
        </li>
    )
}

export default UserItem;