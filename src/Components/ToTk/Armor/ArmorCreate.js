import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { setHelmOptions, setChestOptions, setLegOptions, clearOptions, setSelectedHelm, setSelectedChest, setSelectedLeg } from '@/Store/Redux/Slices/armorSlice'
import { setArmorName } from '@/Store/Redux/Slices/armorNameSlice'
import axios from "axios"

const ArmorCreate = () => {

    const totk = process.env.NEXT_PUBLIC_API_TOTK

    const dispatch = useDispatch()

    const { helmOptions, chestOptions, legOptions, selectedHelm, selectedChest, selectedLeg } = useSelector((state) => state.armor)
    const { armorName } = useSelector(state => state.name)
    const user = useSelector(state => state.auth.userId)
    console.log('userId', user)

    const [sets, setSets] = useState([])


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
            // setSets(response.data)
            console.log('successful pull on armor', response.data)
        } catch (error) {
            console.log('error fetching user armor', error)
        }
    }

    useEffect(() => {
        fetchHelms()
        fetchChest()
        fetchLegs()
        fetchArmorSets()
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
                })
                .catch(err => console.log(err0))

        dispatch(clearOptions())
    }

    return (
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
    )
}

export default ArmorCreate

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