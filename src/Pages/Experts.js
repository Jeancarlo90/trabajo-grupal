import  '../App.css'
import TarjetaListComponents from '../Components/TarjetaListComponents';
import TarjetaTotalPrice from '../Components/TarjetaTotalPrice';
import TabsComponents from '../Components/TabsComponents';
import { FaShoppingCart } from 'react-icons/fa';
import dataRanking from '../Data/DataRanking.json'


function PageNotFound(){
    return(
    <main className='bg-dark h-100'>
        <div className='container'>
            <h3 className='text-light'>Build your own PC!</h3>
            <div className='d-flex flex-row-reverse'>
                <button type="button" class="btn btn-primary btn-lg border-0" style={{background:"#DD2FEF"}}><FaShoppingCart></FaShoppingCart> Checkout</button>
                <button type="button " class="btn btn-light btn-lg mx-2">&#60;Back</button>

            </div>
            <div className='row mt-4'>
                <div className='col-md-2'>
                    <TarjetaTotalPrice></TarjetaTotalPrice>
                </div>

                <div className='col-md-7'>
                    <TabsComponents></TabsComponents>
                </div>

                <div className='col-md-3'>
                {
                    dataRanking.map(item => (
                        <TarjetaListComponents  key={item.id} periferico={item}></TarjetaListComponents>
                    ))
                }
                </div>

            </div>
        </div>
    </main>
    )
}

export default PageNotFound;