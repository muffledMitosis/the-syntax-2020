import React, {useState} from 'react';
import './submit.css'

import { storage, db, firebase} from './utils/firebase.js';

function SoloSubmission() {

    const [fName, setfName] = useState("");
    const [adNum, setadNum] = useState("");
    const [email, setEmail] = useState("");
    const [phoneNum, setPhoneNum] = useState("");
    const [selectedFile, setSelectedFile] = useState(undefined);

    const [formDisplay, setFormDisplay] = useState("d_inline");
    const [loadingDisplay, setLoadingDisplay] = useState("d_none");
    const [doneDisplay, setDoneDisplay] = useState("d_none");

    const handleSubmit = event => {
        console.log(`Name: ${fName}\nadNum: ${adNum}\nEmail: ${email}\nPhone: ${phoneNum}`);
        console.log(selectedFile);

        let sotorageRef = storage.ref().child(`submissions/${fName}.${selectedFile.name.split(".")[1]}`);
        let dbRef = db.collection('submissions');

        setFormDisplay(prev=>prev="d_none");
        setLoadingDisplay(prev=>prev="d_inline");

        dbRef.add({
            fullName: fName,
            admissionNum: adNum,
            email: email,
            mobNum: phoneNum,
            time: firebase.firestore.FieldValue.serverTimestamp()
        })
        .then(()=>{

            sotorageRef.put(selectedFile)
                .then(()=>{
                    setLoadingDisplay(prev=>prev="d_none");
                    setDoneDisplay(prev=>prev="d_inline");
                }).catch(e=>console.log(e));

        }).catch(e=>console.log(e));

        event.preventDefault();
    }

    let elem = (
        <div>
            <form onSubmit={handleSubmit} className={formDisplay}>
                <label>Full Name: <input required value={fName} onChange={e=>setfName(e.target.value)}/></label>
                <label>Admission Number: <input required value={adNum} onChange={e=>setadNum(e.target.value)}/></label>
                <label>Email Address: <input required value={email} type="email" onChange={e=>setEmail(e.target.value)}/></label>
                <label>Phone Number: <input required value={phoneNum} type="tel" onChange={e=>setPhoneNum(e.target.value)}/></label>
                <label>Word Document: <input required type="file" onChange={e=>setSelectedFile(e.target.files[0])} /></label>
                <button>Submit</button>
            </form>
            <div className={loadingDisplay}>Loading...</div>
            <div className={doneDisplay}>Done :)</div>
        </div>
    );

    return elem;
}

function DuoSubmission() {
    return (<div>Duo Submission</div>)
}

export {SoloSubmission, DuoSubmission}