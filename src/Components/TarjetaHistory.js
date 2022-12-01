import  '../App.css'



const TarjetaHistory = (props) => {
    return(
        <main>
            <div className='row rounded my-2 bg-light'>
                <div className='col-2 my-1'>
                <img src={props.periferico.img} className="rounded" style={{width:"75px", height:"75px"}} alt="...">
                    </img>
                </div>
                <div className='col-6 d-flex align-items-center'>
                <h5 > {props.periferico.title}</h5>
                </div>
                <div className='col-1 d-flex align-items-center'>
                <h5 > {props.periferico.currency}{props.periferico.price}</h5>
                </div>
                <div className='col-3 d-flex align-items-center'>
                <h5> {props.periferico.history.purchase_date}</h5>
                </div>
            </div>
        </main>
    )
}
export default TarjetaHistory;