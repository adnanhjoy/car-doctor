import React, { useContext } from 'react';
import img from '../../assets/images/login/login.svg'
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider';

const Signup = () => {
    const {createUser} = useContext(AuthContext);

    const handleSignUp = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;

        createUser(email, password)
        .then(result => {
            result.user;
            form.reset();
        })
        .catch(error => console.error(error))
    }

    return (
        <div className="hero my-10">
            <div className="hero-content flex-col lg:flex-row">
                <div className="text-center lg:text-left">
                    <img src={img} alt="" />
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <h1 className="text-4xl font-semibold text-center">Sign Up</h1>

                    <form onSubmit={handleSignUp} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name='name' placeholder="name" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="text" name='email' placeholder="email" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name='password' placeholder="password" className="input input-bordered" />
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Sign Up</button>
                        </div>
                    </form>


                    <p className='text-center mb-10'>You don't have an account ? <Link className=' text-orange-500 hover:underline' to='/login'>Login</Link></p>
                </div>
            </div>
        </div>
    );
};

export default Signup;