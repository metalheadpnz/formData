import React, {useState} from 'react';

const FilePicker = () => {

    const [content, setContent] = useState(null)
    // console.log(content)

    const pickerHandler = (e) => {
        console.log(e.target.files[0])
        setContent(e.target.files[0])
    }

    return (
        <div>
            <h3>file picker</h3>
            <input type="file" onChange={pickerHandler}/>
        </div>
    );
};

export default FilePicker;
