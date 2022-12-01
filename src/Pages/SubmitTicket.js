import  '../App.css'
import React, { useEffect, useState } from "react"
import TarjetaRanking from '../Components/TarjetaRanking';

const BASE_URL = "https://backendtrabajo-production.up.railway.app";

function SubmitTicket(){
    const [email, setEmail] = useState("")
    const [name, setName] = useState("")
    const [phone, setPhone] = useState("")
    const [subject, setSubject] = useState("")
    const [description, setDescription] = useState("")

    const httpObtenerRequest = async (user_id) => {
        const resp = await fetch(`${BASE_URL}/request?user_id=${user_id}`)
        const data = await resp.json();
        console.log(data);
    };

    const httpGuardarRequest = async (
        user_id, email, name, phone,subject,description
    ) => {
        const data = {
            user_id,
            email,
            name,
            phone,
            subject,
            description
        }

        const resp = await fetch(
            `${BASE_URL}/request`,
            {
                method : "POST",
                body : JSON.stringify(data),
                headers : {
                    "Content-Type" : "application/json"
                }
            }
        )
        const dataResp = await resp.json();

        if (dataResp.error !== "") {
            console.error(dataResp.error);
        }else{
            alert("Request guardado correctamente");
        }

        httpObtenerRequest(user_id);
    };

    function handleSubmit(e) {
        e.preventDefault();
        //console.log(email, name, phone,subject,description);
        
        httpGuardarRequest(
            "6c3ea494-7944-4e2c-a067-b56f2372efd1",
            email, name, phone,subject,description
        );
    };


    return(
        <main className='bg-dark h-100 w-100'>
            <div className='container w-100'>
                <h3 className='text-light'> Submit a Request</h3>
                <div className='row mt-5'>
                    <div className=" bg-white mx-5 mb-4 p-4 rounded"  >
                        <div className="row">
                            <form onSubmit={handleSubmit} >
                                <div className="row">
                                    <div className="mb-3 col-12">
                                        <label className="form-label">Email</label>
                                        <input type="email" value={email} onChange={(evt) => { setEmail(evt.target.value)}}  className="form-control"></input>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="mb-3 col-12">
                                        <label className="form-label">Name</label>
                                        <input type="text" value={name} onChange={(evt) => { setName(evt.target.value)}} className="form-control"></input>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="mb-3 col-12">
                                        <label className="form-label">Phone</label>
                                        <input type="text"  value={phone}  onChange={(evt) => { setPhone(evt.target.value)}} className="form-control"></input>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="mb-3 col-12">
                                        <label className="form-label">Subject</label>
                                        <input type="text"  value={subject}  onChange={(evt) => { setSubject(evt.target.value)}} className="form-control"></input>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="mb-3 col-12">
                                        <label className="form-label">Description</label>
                                        <textarea className="form-control"  value={description}  onChange={(evt) => { setDescription(evt.target.value)}} name="" id="" cols="30" rows="10"></textarea>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-3">
                                        <button type="submit" className="btn btn-primary border-0" style={{background:"#DD2FEF"}}>Submit</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default SubmitTicket;