import  '../App.css'



const TarjetaInfluencer = (props) => {
    return(
        <main>
            <div className='row rounded mx-5'>
                <div className='row'>
                <iframe width="560" height="315" src={props.tarjeta.urlvideo} title="YouTube video player" 
                frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
                <div className='row my-3'>
                <p className="text-center">{props.tarjeta.reviews}</p>
                </div>
                <div className='row'>
                    <div className='col-3'>
                    <img src={props.tarjeta.urllogo}
                     alt="Imagen no encontrada" className="rounded-circle">
                        </img>
                    </div>
                    <div className='col-9'>
                        <h4 style={{color:props.tarjeta.color}}>{props.tarjeta.influencer}</h4>
                        <hr></hr>
                        <p>
                            {props.tarjeta.gratitude}
                        </p>
                    </div>
                </div>
            </div>
        </main>
    )
}
export default TarjetaInfluencer;