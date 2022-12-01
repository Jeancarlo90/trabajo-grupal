import  '../App.css'
import { FaCheckCircle } from 'react-icons/fa';


const ListBuild = (props) => {
    return(
        <main>
    
            <div className="container text-center bg-white my-3">
                <div className="row">
                    <div className="col-sm-11">
                        <div className="row">
                            <div className="col-3 d-flex align-items-center">
                                <img src={props.periferico.img} style={{width:"75px", height:"75px"}} alt="...">
                                </img>
                            </div>
                            <div className="col-9 d-flex align-items-center">
                                <div className='row'>
                                    <div className='col-12  d-flex'>
                                        <h5> {props.periferico.title}</h5>
                                    </div>
                                    <div className='col-12 d-flex'>
                                        <small className="text-muted">{props.periferico.currency}{props.periferico.price}</small>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-sm-1 d-flex justify-content-center align-items-center" style={{background:"#DD2FEF"}}>
                        <FaCheckCircle style={{color:"white"}} />
                    </div>
                </div>
            </div>
        </main>
    )
}
export default ListBuild;