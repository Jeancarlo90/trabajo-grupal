import  '../App.css'
import React, { useEffect, useState } from "react"
import TarjetaRanking from '../Components/TarjetaRanking';

const BASE_URL = "https://backendtrabajo-production.up.railway.app"

function Ranking(){
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
                <h3 className='text-light'> Ranking Best Sellers Periferics</h3>
                <div className='row mt-5 '>
            {
                    componentsList.map(item => (
                        <TarjetaRanking  key={item.id} periferico={item}></TarjetaRanking>
                    ))
                }
        </div>
        </div>
        </main>
    )
}

export default Ranking;