import  '../App.css'
import React, { useEffect, useState } from "react"
import TarjetaHistory from '../Components/TarjetaHistory';

const BASE_URL = "https://backendtrabajo-production.up.railway.app"

function History(){
    const [componentsList, setComponentsList] = useState([])

    const httpGetComponentssAsyncAwait = async () => {
        const resp = await fetch(
            `${BASE_URL}/components/bestseller`
        )
        const data = await resp.json()
        setComponentsList(data)
    }

    useEffect(() => {
        httpGetComponentssAsyncAwait()
    }, [])


    return(
        <main className='bg-dark h-100'>
            <div className='container'>
                <h3 className='text-light'>History</h3>
                <div className='row mt-5 '>
                    <div id="content-margin">
                        <div class="row">
                            <div class="col-3 mt-2">
                                <div class="col-12 p-2 rounded mb-2 bg-white" style={{borderLeft: "10px solid #DD2FEF"}} >
                                    <h4>Order History</h4>
                                </div>
                                <div class="col-12 p-2 rounded mb-2 bg-white" style={{borderLeft: "10px solid white"}}>
                                    <h4>Profile Info</h4>
                                </div>
                                <div class="col-12 p-2 rounded mb-2 bg-white" style={{borderLeft: "10px solid white"}}>
                                    <h4>Log Out</h4>
                                </div>
                            </div>
                            <div class="col-1"></div>
                            <div class="col-7">
                                    {
                                            componentsList.map(item => (
                                                <TarjetaHistory  key={item.id} periferico={item}></TarjetaHistory>
                                            ))
                                        }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default History;