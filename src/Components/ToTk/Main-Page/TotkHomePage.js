import { useRouter } from "next/router" 


const TotkHomePage = () => {

    const router = useRouter()

    const handeButton = () => {
        router.push('/totk/totkAuth')
    }

    return (
            <div className="hero min-h-screen" style={{backgroundImage: 'url(https://www.pockettactics.com/wp-content/sites/pockettactics/2023/01/zelda-wallpapers-1.jpg)'}}>
                <div className="hero-overlay bg-opacity-60"></div>
                    <div className="hero-content text-center text-neutral-content">
                        <div className="max-w-40rem">
                            <h1 className="mb-1 text-5xl font-bold">Welcome to</h1>
                            <h1 className="mb-5 text-5xl font-bold">Tears of the Kingdom: Armor Creator</h1>
                            <p className="mb-5 text-3xl">Explore the side menu for all the various armor options. After that you can login/register to start creating your own favorite pieces of armor!</p>
                            <button className="btn btn-primary" onClick={handeButton} >Get Started!</button>
                        </div>
                    </div>
            </div>
    )
}

export default TotkHomePage