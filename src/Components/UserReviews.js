import  '../App.css'
import { BsFillStarFill } from 'react-icons/bs';
import dataReviews from '../Data/DataReviews.json';

function getStarts() {
    let content = [];
    for (var i=0; i < dataReviews.start; i++) {
      content.push(<BsFillStarFill key={i} style={{color:"#ffc107"}}/>);
    }
    return content;
  };


function Reviews(){
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
                dataReviews.reviews.map(item => (
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