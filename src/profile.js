import React, { useState } from "react";
import Tweet from "./Tweet";

function Profile() {

    const [users, setUsers] = useState(
        [
            { name: "Cha Eun Woo", message: "I am an actor, singer and model" },
            { name: "Jung Hae In", message: "I am an actor" },
            { name: "Lee Jung Suk", message: "I am an actor" },
            { name: "Kim Soo Hyun", message: "I am an actor" }
        ]
    );
    const [count, setCount] = useState(0);
    const increment = () => {
        setCount(count + 1);
    }

    return ( <
        div className = "profile" >

        <
        h1 className = "mb20" > Korean Actor < /h1>

        <
        Tweet name = "Cha Eun Woo"
        message = "I am an Actor" / >
        <
        Tweet name = "Lee Jung Suk"
        message = "I am an Actor" / >
        <
        Tweet name = "Jung Hae In"
        message = "I am an Actor" / >

        <
        /div>
    )

}



export default Profile;