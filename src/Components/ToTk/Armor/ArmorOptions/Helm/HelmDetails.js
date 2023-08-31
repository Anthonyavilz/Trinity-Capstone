import { Image } from "@nextui-org/react"
import NextImage from 'next/image'
import { useEffect, useState } from "react"
import { useRouter } from "next/router"
import axios from "axios"


const HelmDetails = ({helmId}) => {

    const totk = process.env.NEXT_PUBLIC_API_TOTK

    const router = useRouter()

    const [helm, setHelm] = useState({})

    useEffect(() => {
        axios
            .get(`${totk}/helms/${helmId}`)
            .then((res) => {
                setHelm(res.data)
                console.log(res.data)
            })
            .catch((err) => {
                console.log('error in helmDetails', err)
            })
    }, [helmId])

    return (
        <div className="hero min-h-screen" style={{backgroundColor: '#9ca4a1'}}>
            <div className="hero-content flex-col sm:flex-row space-y-1 sm:space-x-4 bg-[#2a3333] bg-opacity-40 rounded-xl">
            <Image
                    as={NextImage}
                    width={200}
                    height={200}
                    src={helm.helmURL}
                    alt="NextUI hero Image"
                />
                <div>
                    <h1 className="text-5xl font-bold text-white">{helm.helmName}</h1>
                    <ul className="py-8 list-disc space-y-4 text-xl ">
                        <label className=" text-white">Base Defense</label>
                        <li className="ml-10 text-white">
                            {helm.helmDefense}
                        </li>
                        <div className="divider divider-horizontal"></div>
                        <label className=" text-white">Location</label>
                        <li className="ml-10 text-white">
                        <a className="link" href={helm.helmLocationURL} >{helm.helmLocation}</a>
                        </li>
                        <div className="divider divider-horizontal"></div>
                        <label className=" text-white">Special Effect</label>
                        <li className="ml-10 text-white">
                            {helm.helmEffect}
                        </li>
                    </ul>
                    <button className="btn btn-outline" onClick={() => router.push('/totk/helmArmor')}>Go Back</button>
                </div>
            </div>
        </div>
    )
}

export default HelmDetails