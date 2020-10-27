import React, {useState} from 'react';
import './submit.css'

import { storage, db, firebase} from './utils/firebase.js';

import {wordLogo} from './utils/constStrings';

function SoloSubmission() {

    const [fName, setfName] = useState("");
    const [adNum, setadNum] = useState("");
    const [email, setEmail] = useState("");
    const [phoneNum, setPhoneNum] = useState("");
    const [selectedFile, setSelectedFile] = useState(undefined);

    const [formDisplay, setFormDisplay] = useState("");
    const [loadingDisplay, setLoadingDisplay] = useState("d_none");
    const [doneDisplay, setDoneDisplay] = useState("d_none");

    const handleSubmit = event => {
        console.log(`Name: ${fName}\nadNum: ${adNum}\nEmail: ${email}\nPhone: ${phoneNum}`);
        console.log(selectedFile);

        let sotorageRef = storage.ref().child(`submissions/${fName}_${Date()}.${selectedFile.name.split(".")[1]}`);
        let dbRef = db.collection('submissions');

        setFormDisplay(prev=>prev="d_none");
        setLoadingDisplay(prev=>prev="d_inline");

        dbRef.add({
            fullName: fName,
            admissionNum: adNum,
            email: email,
            mobNum: phoneNum,
            type: "solo",
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
        <div className="outerContainer">
            <div className="card">
                <img src={wordLogo} />
                <form onSubmit={handleSubmit} className={formDisplay}>
                    <label>Full Name: <input required value={fName} onChange={e=>setfName(e.target.value)}/></label>
                    <label>Admission Number: <input required value={adNum} onChange={e=>setadNum(e.target.value)}/></label>
                    <label>Email Address: <input required value={email} type="email" onChange={e=>setEmail(e.target.value)}/></label>
                    <label>Phone Number: <input required value={phoneNum} type="tel" onChange={e=>setPhoneNum(e.target.value)}/></label>
                    <label>Word Document: <input required type="file" onChange={e=>setSelectedFile(e.target.files[0])} /></label>
                    <button>Submit</button>
                </form>
                <div className={loadingDisplay + " loadingDiv"}><div class="lds-ring"><div></div><div></div><div></div><div></div></div></div>
                <div className={doneDisplay + " doneDiv"}><div class="check"></div></div>
            </div>
        </div>
    );

    return elem;
}

function DuoSubmission() {
    const [auth1, setauth1] = useState("");
    const [auth2, setauth2] = useState("");
    const [adNum1, setadNum1] = useState("");
    const [adNum2, setadNum2] = useState("");
    const [email, setEmail] = useState("");
    const [phoneNum, setPhoneNum] = useState("");
    const [selectedFile, setSelectedFile] = useState(undefined);

    const [formDisplay, setFormDisplay] = useState("");
    const [loadingDisplay, setLoadingDisplay] = useState("d_none");
    const [doneDisplay, setDoneDisplay] = useState("d_none");

    const handleSubmit = event => {

        let sotorageRef = storage.ref().child(`submissions/${auth1}_${Date()}.${selectedFile.name.split(".")[1]}`);
        let dbRef = db.collection('submissions');

        setFormDisplay(prev=>prev="d_none");
        setLoadingDisplay(prev=>prev="d_inline");

        dbRef.add({
            auth1: auth1,
            auth2: auth2,
            admissionNum1: adNum1,
            admissionNum2: adNum2,
            email: email,
            mobNum: phoneNum,
            type: "duo",
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
        <div className="outerContainer">
            <div className="card">
                <img src={wordLogo} />
                <form onSubmit={handleSubmit} className={formDisplay}>
                    <label>Author 1: <input required value={auth1} onChange={e=>setauth1(e.target.value)}/></label>
                    <label>Admission Number 1: <input required value={adNum1} onChange={e=>setadNum1(e.target.value)}/></label>
                    <label>Author 2: <input required value={auth2} onChange={e=>setauth2(e.target.value)}/></label>
                    <label>Admission Number 2: <input required value={adNum2} onChange={e=>setadNum2(e.target.value)}/></label>
                    <label>Email Address: <input required value={email} type="email" onChange={e=>setEmail(e.target.value)}/></label>
                    <label>Phone Number: <input required value={phoneNum} type="tel" onChange={e=>setPhoneNum(e.target.value)}/></label>
                    <label>Word Document: <input required type="file" onChange={e=>setSelectedFile(e.target.files[0])} /></label>
                    <button>Submit</button>
                </form>
                <div className={loadingDisplay + " loadingDiv"}><div class="lds-ring"><div></div><div></div><div></div><div></div></div></div>
                <div className={doneDisplay + " doneDiv"}><div class="check"></div></div>
            </div>
        </div>
    );

    return elem;
}

export {SoloSubmission, DuoSubmission}