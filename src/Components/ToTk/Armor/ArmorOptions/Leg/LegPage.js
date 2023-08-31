import { Card, CardBody, Image, CardHeader } from '@nextui-org/react'
import NextImage from 'next/image'
import { setLegOptions } from "@/Store/Redux/Slices/armorSlice" 
import { useDispatch, useSelector } from "react-redux"
import axios from "axios"
import { useEffect } from "react"
import { useRouter } from 'next/router'

const LegPage = () => {

    const totk = process.env.NEXT_PUBLIC_API_TOTK
    const router = useRouter()

    const dispatch = useDispatch()

    const leg = useSelector(state => state.armor.legOptions)

    const fetchLegs = async () => {
        try {
            const response = await axios.get(`${totk}/leg`);
            dispatch(setLegOptions(response.data));
            console.log('success in fetchHelms', response.data)
        } catch (error) {
            console.log('error in fetchHelms', error);
        }
    };

    useEffect(() => {
        fetchLegs()
    }, [])

    const legCards = leg.map((cards) => {
        return (
            <Card key={cards.leg_id} isPressable onPress={() => router.push(`/totk/legArmor/${cards.leg_id}`)} className="py-4 border-none bg-black/30 max-w-[610px] rounded-xl" shadow='sm'>
            <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
                <p className="text-tiny uppercase font-bold text-white">{cards.legName}</p>
            </CardHeader>
            <CardBody className="overflow-visible py-2">
            <Image
                as={NextImage}
                alt="Card background"
                className="object-cover rounded-xl"
                src={cards.legURL}
                width={200}
                height={200}
            />
            </CardBody>
        </Card>
        )
    })

    return (
        <div className="hero min-h-screen" style={{backgroundColor: '#2a3333'}}>
            <div className="hero-content bg-transparent flex flex-wrap">
                {legCards}
            </div>
        </div>
    )
}

export default LegPage