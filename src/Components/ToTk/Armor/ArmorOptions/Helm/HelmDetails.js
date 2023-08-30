import axios from "axios"
import { useEffect, useState } from "react"
import { Image } from "@nextui-org/react"
import NextImage from 'next/image'


const HelmDetails = () => {

    const totk = process.env.NEXT_PUBLIC_API_TOTK

    const [helms, setHelms] = useState([])
    console.log(helms)

    const fetchHelms = async () => {
        await 
            axios
                .get(`${totk}/helms`)
                .then(res => {
                    console.log('line 14', res.data[0])
                    setHelms(res.data[0])
                })
                .catch(err => {
                    console.log(err)
                })
    }

    useEffect(() => {
        fetchHelms()
    }, [])

    return (
        <div className="hero min-h-screen" style={{backgroundColor: '#9ca4a1'}}>
            <div className="hero-content flex-col lg:flex-row space-y-4 lg:space-x-4">
            <Image
                    as={NextImage}
                    width={200}
                    height={200}
                    src={helms.helmURL}
                    alt="NextUI hero Image"
                />
                <div>
                    <h1 className="text-5xl font-bold">{helms.helmName}</h1>
                    <ul className="py-7 list-disc space-y-2">
                        <li>
                            {helms.helmName}
                        </li>
                        <li>
                            {helms.helmName}
                        </li>
                        <li>
                            {helms.helmName}
                        </li>
                    </ul>
                    <button className="btn btn-primary">Go Back</button>
                </div>
            </div>
        </div>
    )
}

export default HelmDetails