import { Link } from 'react-router-dom';
import  '../App.css'
import { FaHome } from 'react-icons/fa';
import { BsController } from 'react-icons/bs';

function NavBar(){
    return(
        <header>
                <div className="px-3 py-2 text-bg-dark">
                    <div className="container">
                        <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
                            <a href="/" className="d-flex align-items-center my-2 my-lg-0 me-lg-auto text-white text-decoration-none">
                                <BsController style={{width:"100px", height:"50px"}}></BsController>
                            </a>
                            <ul className="nav col-12 col-lg-auto my-2 justify-content-center my-md-0 text-small">
                                <li>
                                <Link  to='/' className="nav-link text-white">
                                    <FaHome />
                                        Home
                                        </Link>
                                </li>
                                <li>
                                    <Link to='/About' className="nav-link text-white">
                                        About
                                    </Link >
                                </li>
                                <li>
                                    <Link to='/Ranking' className="nav-link text-white">   
                                        Ranking
                                    </Link >
                                </li>
                                <li>
                                    <Link to='/Reviews' className="nav-link text-white">   
                                     Reviews
                                    </Link >
                                </li>
                                <li>
                                    <Link to='/Support' className="nav-link text-white">
                                       Support
                                    </Link >
                                </li>
                                <li>
                                    <Link to='/Experts' className="nav-link text-white">  
                                       Experts
                                    </Link >
                                </li>
                                <li>
                                    <Link to='/Request' className="nav-link text-white">  
                                    Request
                                    </Link >
                                </li>
                                <li>
                                    <Link to='/History' className="nav-link text-white">  
                                    History
                                    </Link >
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="px-3 py-2 border-bottom mb-3">
                    <div className="container d-flex flex-wrap justify-content-center">
                        <form className="col-12 col-lg-auto mb-2 mb-lg-0 me-lg-auto" role="search">
                            <input type="search" className="form-control" placeholder="Search..." aria-label="Search" />
                            </form>

                        <div className="text-end">
                            <button type="button" className="btn btn-light text-dark me-2">Login</button>
                            <button type="button" className="btn btn-primary">Sign-up</button>
                        </div>
                    </div>
                </div>
            </header>
    )
}

export default NavBar;