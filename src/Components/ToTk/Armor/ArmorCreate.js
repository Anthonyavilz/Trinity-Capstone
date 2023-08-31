import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { setHelmOptions, setChestOptions, setLegOptions, clearOptions, setSelectedHelm, setSelectedChest, setSelectedLeg } from '@/Store/Redux/Slices/armorSlice'
import { setArmorName, clearArmorName } from '@/Store/Redux/Slices/armorNameSlice'
import axios from "axios"
import { useRouter } from "next/router"

const ArmorCreate = () => {

    const totk = process.env.NEXT_PUBLIC_API_TOTK

    const router = useRouter()

    const dispatch = useDispatch()

    const { helmOptions, chestOptions, legOptions, selectedHelm, selectedChest, selectedLeg } = useSelector((state) => state.armor)
    const { armorName } = useSelector(state => state.name)
    const user = useSelector(state => state.auth.userId)

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
                    router.push('/totk/user')
                })
                .catch(err => console.log(err))

        dispatch(clearOptions())
        dispatch(clearArmorName())
    }

    // const handleFavorite = async (key) => {

    //     console.log('totk_user', key)

    //     const submitFavorite = {
    //         armorSetId: key
    //     }

    //     console.log('submit body', submitFavorite)

    //     try {
    //         const response = await axios.post(`${totk}/user-favorite`, submitFavorite)
    //         console.log('submission to favorite', response.data)
    //         axios.post(`${totk}/user-favorite`, submitFavorite)
    //         router.push('/totk/user')
    //     } catch (error) {
    //         console.log('error in favorite', error)
    //     }

    // }

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