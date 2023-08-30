import loginBack from '../../../../public/Images/ToTk-Images/IMG_0945.JPG'
import { setAuthData } from '@/Store/Redux/Slices/authSlice'
import { setFirstName, setLastName, setUsername, setPassword } from '@/Store/Redux/Slices/loggingSlice'
import { useDispatch, useSelector } from 'react-redux'
import { useRouter } from 'next/router'
import axios from 'axios'

const AuthForm = () => {

    const totk = process.env.NEXT_PUBLIC_API_TOTK 
    const router = useRouter()
    const dispatch = useDispatch()


    const backgroundStyles = {
        backgroundImage: `url(${loginBack.src})`
    }

    const first = useSelector(state => state.logging.firstName)
    const last = useSelector(state => state.logging.lastName)
    const user = useSelector(state => state.logging.username)
    const pass = useSelector(state => state.logging.password)

    const handleSubmit = async (e) => {
        e.preventDefault()

        console.log('first name', first)
        console.log('last name', last)
        console.log('user', user)
        console.log('pass', pass)

        const registerBody = {
            first_name: first,
            last_name: last,
            username: user,
            password: pass
        }

        await
            axios
                .post(`${totk}/totk-register`, registerBody)
                .then((res) => {
                    console.log(res.data)
                    dispatch(setAuthData(res.data))
                    router.push('/totk')
                })
                .catch(err => console.log(err))
    }

    return (
        <div className="hero min-h-screen" style={backgroundStyles}>
            <div className="hero-content flex-col lg:flex-row-reverse">
            <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-gradient-to-b from-transparent to-sky-700 bg-opacity-20">
                <div className="card-body">
                        <form onSubmit={handleSubmit}>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">First Name</span>
                                </label>
                                <input 
                                    className="input input-bordered" 
                                    type="text" 
                                    value={first} 
                                    onChange={(e) => dispatch(setFirstName(e.target.value))} 
                                    placeholder="first name" 
                                />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Last Name</span>
                                </label>
                                <input 
                                    className="input input-bordered" 
                                    type="text" 
                                    value={last}
                                    onChange={(e) => dispatch(setLastName(e.target.value))} 
                                    placeholder="last name" 
                                />
                            </div>
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

export default AuthForm