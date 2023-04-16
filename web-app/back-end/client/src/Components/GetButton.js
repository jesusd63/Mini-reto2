import classes from "./GetButtonModule.css";
import getRequest from "../Services/UserService"
import React from "react"

function GetButton(){

    function request(){
        const res = getRequest();
        // console.log(res);
        // res.then((data) => {
        //     console.log(data)
        //     for(const item of data.items){
        //        console.log(item.name);
        //     }
        // })
    }

    return <button className= "btn" onClick={request}> GET </button>
}

export default GetButton;