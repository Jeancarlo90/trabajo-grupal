import  '../App.css'
import TarjetaTotalPrice from '../Components/TarjetaTotalPrice';
import { FaShoppingCart } from 'react-icons/fa';


function PageNotFound(){
    return(
    <main className='bg-dark h-100'>
        <div className='container'>
            <h3 className='text-light'>Build your own PC!</h3>
            <div className='d-flex flex-row-reverse'>
                <button type="button" class="btn btn-primary btn-lg border-0" style={{background:"#DD2FEF"}}><FaShoppingCart></FaShoppingCart> Checkout</button>
                <button type="button " class="btn btn-light btn-lg mx-2">&#60;Back</button>

            </div>
            <div className='row'>
                <div className='col-md-4'>
                    <TarjetaTotalPrice></TarjetaTotalPrice>
                </div>

                <div className='col-md-4'>
                    
                </div>

                <div className='col-md-4'>
                    
                </div>

            </div>
        </div>
    </main>
    )
}

export default PageNotFound;