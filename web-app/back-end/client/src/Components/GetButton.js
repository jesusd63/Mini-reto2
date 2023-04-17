import "./GetButtonModule.css";
import React, {useState} from "react"
import Modal from "./Modal"

function GetButton(){

    const [ModalIsOpen, setModalIsOpen] = useState(false);

    function deleteHandler(){
        setModalIsOpen(true);
    }


    return(
    <div>
        <button className= "btn" onClick={deleteHandler} > GET </button>
        {ModalIsOpen ? <Modal /> : null}
    </div>
    );
}

export default GetButton;