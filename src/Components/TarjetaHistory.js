import  '../App.css'



const TarjetaHistory = (props) => {
    return(
        <main>
            <div className='row rounded my-2 bg-light'>
                <div className='col-2'>
                <img src={props.periferico.img} class="rounded" style={{width:"75px", height:"75px"}} alt="...">
                    </img>
                </div>
                <div className='col-6 d-flex align-items-center'>
                <h3 > {props.periferico.title}</h3>
                </div>
                <div className='col-2 d-flex align-items-center'>
                <h3 > {props.periferico.currency}{props.periferico.price}</h3>
                </div>
                <div className='col-2 d-flex align-items-center'>
                <h3 > {props.periferico.currency}{props.periferico.price}</h3>
                </div>
            </div>
        </main>
    )
}
export default TarjetaHistory;