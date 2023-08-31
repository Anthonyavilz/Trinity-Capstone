import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { setHelmOptions, setChestOptions, setLegOptions, clearOptions, setSelectedHelm, setSelectedChest, setSelectedLeg } from '@/Store/Redux/Slices/armorSlice'
import { setArmorName, clearArmorName } from '@/Store/Redux/Slices/armorNameSlice'
import axios from "axios"

const ArmorCreate = () => {

    const totk = process.env.NEXT_PUBLIC_API_TOTK

    const dispatch = useDispatch()

    const { helmOptions, chestOptions, legOptions, selectedHelm, selectedChest, selectedLeg } = useSelector((state) => state.armor)
    const { armorName } = useSelector(state => state.name)
    const user = useSelector(state => state.auth.userId)

    const [userSets, setUserSets] = useState([])

    const fetchHelms = async () => {
        try {
            const response = await axios.get(`${totk}/helms`);
            dispatch(setHelmOptions(response.data));
            console.log('success in fetchHelms', response.data)
        } catch (error) {
            console.log('error in fetchHelms', error);
        }
    };

    const fetchChest = async () => {
        try {
            const response = await axios.get(`${totk}/chest`)
            dispatch(setChestOptions(response.data))
        } catch (error) {
            console.log('error fetchChest', error)
        }
    }

    const fetchLegs = async () => {
        try {
            const response = await axios.get(`${totk}/leg`)
            dispatch(setLegOptions(response.data))
        } catch (error) {
            console.log('error fetchLeg', error)
        }
    }

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
        fetchHelms()
        fetchChest()
        fetchLegs()
    }, [])

    const handleHelmChange = (e) => {
        console.log(e.target.value)
        dispatch(setSelectedHelm(e.target.value))
    };

    const handleChestChange = (e) => {
        console.log(e.target.value)
        dispatch(setSelectedChest(e.target.value))
    };

    const handleLegChange = (e) => {
        console.log(e.target.value)
        dispatch(setSelectedLeg(e.target.value))
    };

    const onSubmit = async (e) => {
        e.preventDefault()

        console.log('helm', selectedHelm)
        console.log('chest', selectedChest)
        console.log('leg', selectedLeg)
        console.log('name', armorName)
        console.log('userID', user)

        const armorPost = {
            nameEntry: armorName,
            helmEntry: selectedHelm,
            chestEntry: selectedChest,
            legEntry: selectedLeg,
            userId: user
        }

        await
            axios
                .post(`${totk}/armorset`, armorPost)
                .then((res) => {
                    console.log('success in submit', res.data)
                    fetchArmorSets()
                })
                .catch(err => console.log(err))

        dispatch(clearOptions())
        dispatch(clearArmorName())
    }

    const handleFavorite = async (key) => {

        console.log('totk_user', key)

        const submitFavorite = {
            armorSetId: key
        }

        console.log('submit body', submitFavorite)

        try {
            const response = await axios.post(`${totk}/user-favorite`, submitFavorite)
            console.log('submission to favorite', response.data)
            // axios.post(`${totk}/user-favorite`, submitFavorite)
        } catch (error) {
            console.log('error in favorite', error)
        }

    }

    const armor = userSets.map((creation) => {
        return (
            <div className="hero min-h-screen" style={{backgroundColor: '#2a3333'}} key={creation.armorSet_id}>
                <div className="card-body" style={{backgroundColor: '#9ca4a2'}}>
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
                                <h2 className="card-title">{creation.Helm.helmName}</h2>
                            </div>
                            <figure><img src={creation.Chest.chestURL} alt={creation.Helm.helmName} /></figure>
                        </div>
                        <div className="divider divider-horizontal"></div>
                        <div className="card w-96 bg-base-100 shadow-xl">
                            <div className="card-body">
                                <h2 className="card-title">{creation.Helm.helmName}</h2>
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

    return (
        <div>
            <div className="hero min-h-screen" style={{backgroundColor: '#2a3333'}}>
                <div className="hero-content flex-row w-auto">
                    <div className="card flex-row w-full max-x-sm shadow-2xl bg-slate-100">
                        <div className="card-body">
                            <form onSubmit={onSubmit} className="flex flex-col">
                                <div className="form-control">
                                    <select className="select w-full max-w-xs" value={selectedHelm} onChange={handleHelmChange}>
                                        <option value=''>Select...</option>
                                        {helmOptions.map((helm) => (
                                            <option key={helm.helm_id} value={helm.helm_id}>{helm.helmName}</option>
                                        ))}
                                    </select>
                                    <div className="divider" ></div>
                                    <select className="select w-full max-w-xs" value={selectedChest} onChange={handleChestChange}>
                                        <option value=''>Select...</option>
                                        {chestOptions.map((chest) => (
                                            <option key={chest.chest_id} value={chest.chest_id}>{chest.chestName}</option>
                                            ))}
                                    </select>
                                    <div className="divider" ></div>
                                    <select className="select w-full max-w-xs" value={selectedLeg} onChange={handleLegChange}>
                                        <option value=''>Select...</option>
                                        {legOptions.map((leg) => (
                                            <option key={leg.leg_id} value={leg.leg_id}>{leg.legName}</option>
                                            ))}
                                    </select>
                                    <div className="divider" ></div>
                                    <input
                                        className="input input-bordered w-full max-w-xs"
                                        type='text'
                                        placeholder='Armor Set Name'
                                        value={armorName}
                                        onChange={(e) => dispatch(setArmorName(e.target.value))}
                                    />
                                    <div className="divider" ></div>
                                    <button className="btn glass" type='submit' >Submit</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            {armor.length >=1 ? armor
            :
                <div className="hero h-1" style={{backgroundColor: '#2a3333'}} >
                </div>}
        </div>

    )
}

export default ArmorCreate

// console.log('upperpart', userSets)
// userSets.forEach(nameH => {
//     const nameOfHelm = nameH.Helm.helmName
//     console.log('name of helm', nameOfHelm)
// })
// userSets.forEach(nameC => {
//     const nameOfChest = nameC.Chest.chestName
//     console.log('name of helm', nameOfChest)
// })
// userSets.forEach(nameL => {
//     const nameOfLeg = nameL.Leg.legName
//     console.log('name of helm', nameOfLeg)
// })
// userSets.forEach(helmIMG => {
//     const IMGhelm = helmIMG.Helm.helmURL
//     console.log('name of helm', IMGhelm)
// })
// userSets.forEach(chestIMG => {
//     const IMGchest = chestIMG.Chest.chestURL
//     console.log('name of helm', IMGchest)
// })
// userSets.forEach(legIMG => {
//     const IMGleg = legIMG.Leg.legURL
//     console.log('name of helm', IMGleg)
// })

{/* <div>
<form onSubmit={onSubmit}>
    <select value={selectedHelm} onChange={handleHelmChange}>
        <option value=''>Select...</option>
        {helmOptions.map((helm) => (
            <option key={helm.helm_id} value={helm.helm_id}>{helm.helmName}</option>
        ))}
    </select>
    <select value={selectedChest} onChange={handleChestChange}>
        <option value=''>Select...</option>
        {chestOptions.map((chest) => (
            <option key={chest.chest_id} value={chest.chest_id}>{chest.chestName}</option>
        ))}
    </select>
    <select value={selectedLeg} onChange={handleLegChange}>
        <option value=''>Select...</option>
        {legOptions.map((leg) => (
            <option key={leg.leg_id} value={leg.leg_id}>{leg.legName}</option>
        ))}
    </select>
    <input
        type='text'
        placeholder='Armor Set Name'
        value={armorName}
        onChange={(e) => dispatch(setArmorName(e.target.value))}
    />
    <button type='submit' >Submit</button>
</form>
</div> */}