import React, {useState} from 'react';
import './submit.css'

import {analytics, storage, db} from './utils/firebase.js';

function SoloSubmission() {

    const [fName, setfName] = useState("");
    const [adNum, setadNum] = useState("");
    const [email, setEmail] = useState("");
    const [phoneNum, setPhoneNum] = useState("");
    const [selectedFile, setSelectedFile] = useState(undefined);

    const handleSubmit = event => {
        console.log(`Name: ${fName}\nadNum: ${adNum}\nEmail: ${email}\nPhone: ${phoneNum}`);
        console.log(selectedFile);

        let ref = storage.ref().child(`submissions/${fName}.${selectedFile.type.split("/")[1]}`);
        console.log(selectedFile);
        let uploadTask = ref.put(selectedFile);

        event.preventDefault();
    }

    let elem = (
        <div>
            <form onSubmit={handleSubmit}>
                <label>Full Name: <input required value={fName} onChange={e=>setfName(e.target.value)}/></label>
                <label>Admission Number: <input required value={adNum} onChange={e=>setadNum(e.target.value)}/></label>
                <label>Email Address: <input required value={email} type="email" onChange={e=>setEmail(e.target.value)}/></label>
                <label>Phone Number: <input required value={phoneNum} type="tel" onChange={e=>setPhoneNum(e.target.value)}/></label>
                <label>Word Document: <input required type="file" onChange={e=>setSelectedFile(e.target.files[0])} /></label>
                <button>Submit</button>
            </form>
        </div>
    );

    return elem;
}

function DuoSubmission() {
    return (<div>Duo Submission</div>)
}

export {SoloSubmission, DuoSubmission}