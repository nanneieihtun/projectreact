import React, { useState } from "react";
import Tweet from "./Tweet";
import Nav from "./nav";
import About from "./About";
import Shop from "./Shop";
import './profile.css';

import { BrowserRouter as Router, Switch, Route, link } from 'react-router-dom';

function App() {
    const [users, setUsers] = useState(
        [
            { name: "Cha Eun Woo", message: "I am an actor, singer and model", dob: "30 March 1997" },
            { name: "Jung Hae In", message: "I am an actor", dob: "April 1 1987" },
            { name: "Lee Jung Suk", message: "I am an actor", dob: "April 1 1987" },
            { name: "Kim Soo Hyun", message: "I am an actor", dob: "April 1 1987" },
        ]
    );
    const [count, setCount] = useState(0);
    const increment = () => {
        setCount(count + 1);
    }
    return (


        <
        div className = "navApp" >
        <
        Nav / >

        <
        Shop / >
        <
        About / >

        <
        ul className = "profile" >

        {
            users.map(user => ( <
                Tweet name = { user.name }
                message = { user.message }
                dob = { user.dob }
                />
            ))
        } <
        button > Click Me < /button> <
        /ul>


        <
        /div>
    )

}

export default App;