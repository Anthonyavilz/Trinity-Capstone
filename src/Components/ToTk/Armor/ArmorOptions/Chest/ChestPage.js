import { Card, CardBody, Image, CardHeader } from '@nextui-org/react'
import NextImage from 'next/image'
import { setChestOptions } from "@/Store/Redux/Slices/armorSlice" 
import { useDispatch, useSelector } from "react-redux"
import axios from "axios"
import { useEffect } from "react"
import { useRouter } from 'next/router'

const ChestPage = () => {

    const totk = process.env.NEXT_PUBLIC_API_TOTK
    const router = useRouter()

    const dispatch = useDispatch()

    const chest = useSelector(state => state.armor.chestOptions)

    const fetchChest = async () => {
        try {
            const response = await axios.get(`${totk}/chest`);
            dispatch(setChestOptions(response.data));
            console.log('success in fetchHelms', response.data)
        } catch (error) {
            console.log('error in fetchHelms', error);
        }
    };

    useEffect(() => {
        fetchChest()
    }, [])

    const chestCards = chest.map((cards) => {
        return (
            <Card key={cards.chest_id} isPressable onPress={() => router.push(`/totk/chestArmor/${cards.chest_id}`)} className="py-4 border-none bg-black/30 max-w-[610px] rounded-xl" shadow='sm'>
            <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
                <p className="text-tiny uppercase font-bold text-white">{cards.chestName}</p>
            </CardHeader>
            <CardBody className="overflow-visible py-2">
            <Image
                as={NextImage}
                alt="Card background"
                className="object-cover rounded-xl"
                src={cards.chestURL}
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
                {chestCards}
            </div>
        </div>
    )
}

export default ChestPage