import React from "react";

import UserList from "../components/userList";

const Users = () => {

    const USERS = [{
        id: 'u1',
        name: 'Bhakta',
        image: 'https://img.freepik.com/free-vector/isolated-young-handsome-man-different-poses-white-background-illustration_632498-859.jpg?size=626&ext=jpg',
        places: '5'
    }]

    return (
        <UserList items={USERS}/>
    )
}

export default Users;