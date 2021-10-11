import React from "react";
import { Link } from "react-router-dom";

export default function MinPUll(props){
    return(
        <li className="card">
            <h2>{props.author.name} asks:</h2>
            <div>
                <img src={props.author.avatarURL} />
                <div>
                    <h2>Would you rather</h2>
                    <p>...{props.question.optionOne.text.slice(0,15)}...</p>
                    <Link to={"/pull/"+props.question.id}><button>View pull</button></Link>
                </div>
            </div>
        </li>
    )
}
