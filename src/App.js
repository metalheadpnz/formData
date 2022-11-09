import logo from './logo.svg';
import './App.css';
import {useState} from "react";
import axios from "axios";
import FilePicker from "./FilePicker";

function App() {
    const [content, setContent] = useState(null)

    const sentContent = () => {
        const myHeaders = new Headers();
        myHeaders.append("Accept", "application/json");
        myHeaders.append("Authorization", "Bearer 369|95VGsldqv2tDEsFKyXF8FtN8cXnQRZPzOB7RxmTr");

        const formData = new FormData();
        formData.append("image", content);

        const requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: formData,
            redirect: 'follow'
        };

        fetch("http://teenswork.demo.onlinebees.ru/api/helper/upload-image", requestOptions)
            .then(response => response.text())
            .then(result => console.log(result))
            .catch(error => console.log('error', error));
    }


    return (
        <>
            <div className="App">
                <input type="file" onChange={(e) => {
                    setContent(e.target.files[0])
                }}/>

                <div>
                    <button onClick={sentContent}>sent</button>
                </div>
            </div>
            <FilePicker/>
        </>
    );
}

export default App;
