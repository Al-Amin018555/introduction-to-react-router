import React from 'react';
import { Link, useRouteError } from 'react-router-dom';

const ErrorPage = () => {
    const error = useRouteError();
    console.log(error);
    return (
        <div>
            <h2>Oopss!!</h2>
            <i>{error.statusText || error.message}</i>
            {
                error.status === 404 && <div>

                    <h3>Page not found</h3>
                    <p>go back where you from</p>
                    <Link to='/'>Home</Link>
                </div>

            }
        </div>
    );
};

export default ErrorPage;