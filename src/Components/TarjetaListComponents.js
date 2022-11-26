import  '../App.css'



const TarjetaListComponents = (props) => {
    return(
        <main>
            <div className='row border-bottom border-dark' style={{background:"#042165"}}>
                <div className='row my-1'>
                    <div className='col-2 d-flex align-items-center'>
                    <img src={props.periferico.img} class="rounded" style={{width:"45px", height:"45px"}} alt="...">
                        </img>
                    </div>
                    <div className='col-8 d-flex align-items-center text-white'>
                    <h5> {props.periferico.title}</h5>
                    </div>
                    <div className='col-2 d-flex align-items-center text-white'>
                    <h5> {props.periferico.currency}{props.periferico.price}</h5>
                </div>
                </div>

            </div>
        </main>
    )
}
export default TarjetaListComponents;