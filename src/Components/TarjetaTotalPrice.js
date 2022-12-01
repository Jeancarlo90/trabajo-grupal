import  '../App.css'



const TarjetaTotalPrice = (props) => {
    return(
        <main>
            <div className="card text-white bg-dark border-0" >
                <img src="https://assets.spartangeek.com/cc/CP-AEROCOOL-CYLONBK-6_200106_013415.png" className="card-img-top" alt="..."></img>
                <div className="card-body bg-secondary">
                    <h5 className="card-title">Components price</h5>
                    <p className="card-text">$ 1899</p>
                    <h5 className="card-title">Build free</h5>
                    <p className="card-text">$ 99</p>
                </div>
            </div>
        </main>
    )
}
export default TarjetaTotalPrice;