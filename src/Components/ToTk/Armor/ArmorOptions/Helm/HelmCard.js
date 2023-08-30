import { Card, CardBody, Image, CardHeader } from '@nextui-org/react'
import NextImage from 'next/image'
import axios from 'axios'
import { useState, useEffect } from 'react'

const HelmCard = () => {

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
        <Card isPressable onPress={() => console.log('pressed')} className="py-4 border-none bg-black/30 max-w-[610px] rounded-xl" shadow='sm'>
            <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
                <p className="text-tiny uppercase font-bold">{helms.helmName}</p>
            </CardHeader>
            <CardBody className="overflow-visible py-2">
            <Image
                as={NextImage}
                alt="Card background"
                className="object-cover rounded-xl"
                src={helms.helmURL}
                width={200}
                height={200}
            />
            </CardBody>
        </Card>
    )
}

export default HelmCard