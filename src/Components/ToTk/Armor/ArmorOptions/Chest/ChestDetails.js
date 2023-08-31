import { Image } from "@nextui-org/react"
import NextImage from 'next/image'
import { useEffect, useState } from "react"
import { useRouter } from "next/router"
import axios from "axios"


const ChestDetails = ({chestId}) => {

    const totk = process.env.NEXT_PUBLIC_API_TOTK

    const router = useRouter()

    const [chest, setChest] = useState({})

    useEffect(() => {
        axios
            .get(`${totk}/chest/${chestId}`)
            .then((res) => {
                setChest(res.data)
                console.log(res.data)
            })
            .catch((err) => {
                console.log('error in helmDetails', err)
            })
    }, [chestId])

    return (
        <div className="hero min-h-screen" style={{backgroundColor: '#9ca4a1'}}>
            <div className="hero-content flex-col sm:flex-row space-y-1 sm:space-x-4 bg-[#2a3333] bg-opacity-40 rounded-xl">
            <Image
                    as={NextImage}
                    width={200}
                    height={200}
                    src={chest.chestURL}
                    alt="NextUI hero Image"
                />
                <div>
                    <h1 className="text-5xl font-bold text-white">{chest.chestName}</h1>
                    <ul className="py-8 list-disc space-y-4 text-xl ">
                        <label className=" text-white">Base Defense</label>
                        <li className="ml-10 text-white">
                            {chest.chestDefense}
                        </li>
                        <div className="divider divider-horizontal"></div>
                        <label className=" text-white">Location</label>
                        <li className="ml-10 text-white">
                        <a className="link" href={chest.chestLocationURL} >{chest.chestLocation}</a>
                        </li>
                        <div className="divider divider-horizontal"></div>
                        <label className=" text-white">Special Effect</label>
                        <li className="ml-10 text-white">
                            {chest.chestEffect}
                        </li>
                    </ul>
                    <button className="btn btn-outline" onClick={() => router.push('/totk/chestArmor')}>Go Back</button>
                </div>
            </div>
        </div>
    )
}

export default ChestDetails