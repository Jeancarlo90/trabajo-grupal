import  '../App.css'
import React, { useEffect, useState } from "react"
import TarjetaHistory from '../Components/TarjetaHistory';

const BASE_URL = "http://localhost:4444";

function History(){
    const [componentsList, setComponentsList] = useState([])

    const httpGetComponentssAsyncAwait = async () => {
        const user_id = "6c3ea494-7944-4e2c-a067-b56f2372efd1";
        const resp = await fetch(
            `${BASE_URL}/history?user_id=${user_id}`
        )
        const data = await resp.json();
        console.log(data);
        setComponentsList(data.components)
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
                        <div className="row">
                            <div className="col-3 mt-2">
                                <div className="col-12 p-2 rounded mb-2 bg-white" style={{borderLeft: "10px solid #DD2FEF"}} >
                                    <h4>Order History</h4>
                                </div>
                                <div className="col-12 p-2 rounded mb-2 bg-white" style={{borderLeft: "10px solid white"}}>
                                    <h4>Profile Info</h4>
                                </div>
                                <div className="col-12 p-2 rounded mb-2 bg-white" style={{borderLeft: "10px solid white"}}>
                                    <h4>Log Out</h4>
                                </div>
                            </div>
                            <div className="col-1"></div>
                            <div className="col-7">
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