import React from 'react';
import Image from './not.jpg';
import {Link} from 'react-router-dom';
function PageNotFound() {
    return (
        <>
            <div className="d-flex align-items-center justify-content-center vh-100">
                <div className="text-center row">
                    <div className=" col-md-6">
                        <img src={Image} alt=""   style={{ width: '350px' }} 
                             className="img-fluid"/>
                    </div>
                    <div className=" col-md-6 mt-5">
                        <p className="fs-3"> <span className="text-danger">Opps!</span> Page not found.</p>
                        <p className="lead">
                            The page you’re looking for doesn’t exist.
                        </p>
                        <Link  className='link btn btn-warning' to="/">Home</Link>
                    </div>
                </div>
            </div>
        </>
    );
}

export default PageNotFound;