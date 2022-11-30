import  '../App.css'
import React, { useEffect, useState } from "react"
import TarjetaRanking from '../Components/TarjetaRanking';

const BASE_URL = "https://backendtrabajo-production.up.railway.app"

function SubmitTicket(){
    const [componentsList, setComponentsList] = useState([])

    const httpGetComponentssAsyncAwait = async () => {
        const resp = await fetch(
            `${BASE_URL}/components/bestseller`
        )
        const data = await resp.json()
        setComponentsList(data)
    }

    useEffect(() => {
       // httpGetComponentssAsyncAwait()
    }, [])


    return(
        <main className='bg-dark h-100 w-100'>
            <div className='container w-100'>
                <h3 className='text-light'> Submit a Request</h3>
                <div className='row mt-5'>
                    <div class=" bg-white mx-5 mb-4 p-4 rounded"  >
                        <div class="row">
                            <form class="formularioRegistro">
                                <div class="row">
                                    <div class="mb-3 col-12">
                                        <label class="form-label">Email</label>
                                        <input type="email" class="form-control"></input>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="mb-3 col-12">
                                        <label class="form-label">Name</label>
                                        <input type="text" class="form-control"></input>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="mb-3 col-12">
                                        <label class="form-label">Phone</label>
                                        <input type="text" class="form-control"></input>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="mb-3 col-12">
                                        <label class="form-label">Subject</label>
                                        <input type="text" class="form-control"></input>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="mb-3 col-12">
                                        <label class="form-label">Description</label>
                                        <textarea class="form-control" name="" id="" cols="30" rows="10"></textarea>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-3">
                                        <button type="button" class="btn btn-primary border-0" style={{background:"#DD2FEF"}}>Submit</button>
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