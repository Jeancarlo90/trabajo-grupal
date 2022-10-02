import  '../App.css'
import TarjetaInfluencer from './TarjetaInfluencer';
import dataInfluencers from '../Data/DataInfluencers.json'


function ReviewInfluencers(){
    return(
    <main className='container'>
        <h3> Influencers</h3>
        <div className='row mt-5'>
        {
                dataInfluencers.map(item => (
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