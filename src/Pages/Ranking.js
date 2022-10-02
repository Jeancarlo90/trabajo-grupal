import  '../App.css'
import dataRanking from '../Data/DataRanking.json'
import TarjetaRanking from '../Components/TarjetaRanking';
function Ranking(){
    return(
        <main className='bg-dark h-100'>
            <div className='container'>
                <h3 className='text-light'> Ranking Best Sellers Periferics</h3>
                <div className='row mt-5 '>
            {
                    dataRanking.map(item => (
                        <TarjetaRanking  key={item.id} periferico={item}></TarjetaRanking>
                    ))
                }
        </div>
        </div>
        </main>
    )
}

export default Ranking;