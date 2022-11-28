import  '../App.css'
import React, { useEffect, useState } from "react"
import TarjetaInfluencer from './TarjetaInfluencer';

const BASE_URL = "https://backendtrabajo-production.up.railway.app"

function ReviewInfluencers(){
    const [influencerList, setInfluencerList] = useState([])

    const httpGetInfluencersAsyncAwait = async () => {
        const resp = await fetch(
            `${BASE_URL}/influencers`
        )
        const data = await resp.json()
        setInfluencerList(data)
    }

    useEffect(() => {
        httpGetInfluencersAsyncAwait()
    }, [])


    return(
    <main className='container'>
        <h3> Influencers</h3>
        <div className='row mt-5'>
        {
                influencerList.map(item => (
                    <div key={item.id} className='col-sm-12 col-md-6'>
                        <TarjetaInfluencer tarjeta={item}></TarjetaInfluencer>
                    </div>
                ))
            }
        </div>
    </main>   
    )
}

export default ReviewInfluencers;