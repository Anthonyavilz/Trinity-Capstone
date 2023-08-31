import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import axios from "axios" 
import { useRouter } from "next/router"

const ToTKUser = () => {

    const totk = process.env.NEXT_PUBLIC_API_TOTK

    const router = useRouter()

    const user = useSelector(state => state.auth.userId)
    const [userSets, setUserSets] = useState([])

    const fetchArmorSets = async () => {
        try {
            const response = await axios.get(`${totk}/sets/${user}`)
            console.log('successful pull on armor', response.data)
            setUserSets(response.data)
        } catch (error) {
            console.log('error fetching user armor', error)
        }
    }

    useEffect(() => {
        fetchArmorSets()
    }, [])

    const armor = userSets.map((creation) => {
        return (
            <div className="hero min-h-screen" style={{background: "url('https://images7.alphacoders.com/131/1314890.jpg')"}} key={creation.armorSet_id}>
                <div className="card-body" style={{backgroundColor: '#9ca4a2'}}>
                    <div className="card-title font-bold" >{creation.armorName}</div>
                    <div className="flex flex-row">
                        <div className="card w-96 bg-base-100 shadow-xl">
                            <div className="card-body">
                                <h2 className="card-title">{creation.Helm.helmName}</h2>
                            </div>
                            <figure><img src={creation.Helm.helmURL} alt={creation.Helm.helmName} /></figure>
                        </div>
                        <div className="divider divider-horizontal"></div>
                        <div className="card w-96 bg-base-100 shadow-xl">
                            <div className="card-body">
                                <h2 className="card-title">{creation.Chest.chestName}</h2>
                            </div>
                            <figure><img src={creation.Chest.chestURL} alt={creation.Helm.helmName} /></figure>
                        </div>
                        <div className="divider divider-horizontal"></div>
                        <div className="card w-96 bg-base-100 shadow-xl">
                            <div className="card-body">
                                <h2 className="card-title">{creation.Leg.legName}</h2>
                            </div>
                            <figure><img src={creation.Leg.legURL} alt={creation.Helm.helmName} /></figure>
                        </div>
                    </div>
                    <div className="divider"></div>
                    <div className="flex flex-row justify-center items-center space-x-4">
                        <button className="btn btn-square btn-outline" onClick={() => handleFavorite(creation.armorSet_id)} >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>
                        </button>
                        <div className="divider"></div>
                        <button className="btn btn-square btn-outline">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                        </button>
                    </div>
                </div>
            </div>
        )
    })

    return armor.length >= 1 ? (
        <>
            {armor}
        </>
    ) : (
        <div className="hero min-h-screen" style={{background: "url('https://images7.alphacoders.com/131/1314890.jpg')"}}>
        <div className="hero-content text-center">
            <div className="max-w-md">
            <h1 className="text-5xl font-bold">Hello there!</h1>
            <p className="py-6">Explore the Armor Options in the top left menu. After that click below or in the menu to create your own armor sets!</p>
            <button className="btn btn-outline" onClick={() => router.push('/totk/user/armorCreator')} >Get Started</button>
            </div>
        </div>
        </div>
    )
}

export default ToTKUser