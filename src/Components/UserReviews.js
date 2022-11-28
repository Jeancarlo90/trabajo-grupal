import  '../App.css'
import React, { useEffect, useState } from "react"
import { Link, useNavigate } from "react-router-dom"

import { BsFillStarFill } from 'react-icons/bs';


const BASE_URL = "https://backendtrabajo-production.up.railway.app"

function Reviews(){

    const [reviewList, setReviewList] = useState([])
    const [stars, setStarts] = useState(0)


    const httpGetReviewAsyncAwait = async () => {
        const resp = await fetch(
            `${BASE_URL}/reviews`
        )
        const data = await resp.json()
        setReviewList(data)
        const arr = [];

        data.forEach(item => {
            arr.push(item.stars)
        })
        setStarts(arr.reduce((a,b) => a + b)/arr.length)
    }
    useEffect(() => {
        httpGetReviewAsyncAwait()
    }, [])

    function getStarts() {
        let content = [];
        for (var i=0; i < stars; i++) {
          content.push(<BsFillStarFill key={i} style={{color:"#ffc107"}}/>);
        }
        return content;
      };

    return(
        <main className='container'>
            <h3> User Reviews</h3>
            <div className='row'>
                <div className='col-2'>
                    <h6>Global Rate</h6>
                </div>
                <div className='col-2'>
                    {getStarts() }
                </div>
            </div>
             {
                reviewList.map(item => (
                    <div key={item.id} className='row'>
                        <><hr />
                        <div>
                            <h6>{item.autor} </h6>
                        </div>
                        <div className='mx-4'   >
                        <p >{item.review} </p>
                        </div>
                        </>
                    </div>
                ))
            }
        </main>
    )
}

export default Reviews;