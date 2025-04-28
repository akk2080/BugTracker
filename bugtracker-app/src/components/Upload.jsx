import { useRef } from "react"
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

function Upload(){
    
    let inputref = useRef();
    let dispatch = useDispatch();


    function upload(){
        let data = inputref.current.value;

        let jsonData = JSON.parse(data);

        console.log(jsonData);
        dispatch({type: 'upload', payload:jsonData});

    }

    return(
        <>
            <div className="uploadDiv">
                <label style={{fontWeight:'bold'}}> Provide the error logs here:
                <input type="text" ref={inputref} />
                </label>
                <button onClick={upload}>Upload</button>
                
            </div>
        </>

    )
}

export default Upload;