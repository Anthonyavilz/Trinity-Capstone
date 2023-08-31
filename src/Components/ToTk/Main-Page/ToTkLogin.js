import back from '../../../../public/Images/ToTk-Images/loginBackground.jpeg'
import { setAuthData } from '@/Store/Redux/Slices/authSlice'
import { setUsername, setPassword } from '@/Store/Redux/Slices/loggingSlice'
import { useDispatch, useSelector } from 'react-redux'
import { useRouter } from 'next/router'
import axios from 'axios'

const ToTkLogin = () => {

    const totk = process.env.NEXT_PUBLIC_API_TOTK 
    const router = useRouter()
    const dispatch = useDispatch()


    const backgroundStyles = {
        backgroundImage: `url(${back.src})`
    }

    const user = useSelector(state => state.logging.username)
    const pass = useSelector(state => state.logging.password)

    const handleSubmit = async (e) => {
        e.preventDefault()

        console.log('user', user)
        console.log('pass', pass)

        const loginBody = {
            username: user,
            password: pass
        }

        await
            axios
                .post(`${totk}/totk-login`, loginBody)
                .then((res) => {
                    console.log(res.data)
                    dispatch(setAuthData(res.data))
                    router.push('/totk/user')
                })
                .catch(err => console.log(err))
    }

    return (
        <div className="hero min-h-screen" style={backgroundStyles}>
            <div className="hero-content flex-col lg:flex-row-reverse">
            <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-gradient-to-b from-transparent to-yellow-500 bg-opacity-20">
                <div className="card-body">
                        <form onSubmit={handleSubmit}>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Username</span>
                                </label>
                                <input 
                                    className="input input-bordered" 
                                    type="text" 
                                    value={user}
                                    onChange={(e) => dispatch(setUsername(e.target.value))} 
                                    placeholder="username" 
                                />
                            </div>                            
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input 
                                    className="input input-bordered" 
                                    type="text" 
                                    value={pass}
                                    onChange={(e) => dispatch(setPassword(e.target.value))} 
                                    placeholder="password" 
                                />
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn" type='submit' >Login</button>
                            </div>
                        </form>
                </div>
            </div>
            </div>
        </div>
    )
}

export default ToTkLogin