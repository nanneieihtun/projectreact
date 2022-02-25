import React from "react";
import './profile.css';

function Tweet(props) {
    return (

        <
        div className = "tweet" >

        <
        h3 > { props.name } < /h3> <
        p > { props.message } < /p> <
        p > { props.dob } < /p>

        <
        /div>
    )
}

export default Tweet;