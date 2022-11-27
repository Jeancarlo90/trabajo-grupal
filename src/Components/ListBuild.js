import  '../App.css'
import { FaCheckCircle } from 'react-icons/fa';


const ListBuild = (props) => {
    return(
        <main>
    
            <div class="container text-center bg-white my-3">
                <div class="row">
                    <div class="col-sm-11">
                        <div class="row">
                            <div class="col-3 d-flex align-items-center">
                                <img src={props.periferico.img} style={{width:"75px", height:"75px"}} alt="...">
                                </img>
                            </div>
                            <div class="col-9 d-flex align-items-center">
                                <div className='row'>
                                    <div className='col-12  d-flex'>
                                        <h5> {props.periferico.title}</h5>
                                    </div>
                                    <div className='col-12 d-flex'>
                                        <small class="text-muted">{props.periferico.currency}{props.periferico.price}</small>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="col-sm-1 d-flex justify-content-center align-items-center" style={{background:"#DD2FEF"}}>
                        <FaCheckCircle style={{color:"white"}} />
                    </div>
                </div>
            </div>
        </main>
    )
}
export default ListBuild;