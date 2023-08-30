import { Grid } from "@mui/material"
import Button from "@mui/material/Button"
import Card from "@mui/material/Card"
import TextField from "@mui/material/TextField"
import Stack from "@mui/material/Stack"
import Box from "@mui/material/Box"
import backImg from '../../../../public/Images/Cocktail-Hour-Images/Dark_Bar_Table.jpg'

import styles from './authStyles.module.css'

const CocktailLogin = () => {

    const backgroundImageStyle = {
        backgroundImage: `url(${backImg.src})`,
    };


    return (
        <div className="hero min-h-screen" style={backgroundImageStyle}>
            <div className="hero-content flex-col lg:flex-row bg-gray-300 bg-opacity-50">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold text-white">Login now!</h1>
                    <p className="py-6 text-white text-xl">Provident cupiditate voluptatem et in. Quaerat fugiat ut</p>
                </div>
            <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                <div className="card-body">
                        <form>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="text" placeholder="email" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="text" placeholder="password" className="input input-bordered" />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Login</button>
                            </div>
                        </form>
                </div>
            </div>
            </div>
        </div>
    )
}

export default CocktailLogin