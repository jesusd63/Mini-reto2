import getRequest from "../Services/UserService"
import { useState } from "react";

function Modal(props) {

    const [response, setResponse] = useState(null);

     function request(){
        const res = getRequest();
        res.then((response) => response.json())
        .then((data) => {
            setResponse(data.items)
            return data;
        })
    }

    return(
        <div>
            {request()}
                <div>
                    {response && (
                    <div>
                        <h2>Response:</h2>
                        <pre>{JSON.stringify(response, null, 2)}</pre>
                    </div>
                )}
                </div>
        </div>
    );
}

export default Modal;