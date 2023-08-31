import ToTKGuest from "@/Components/ToTk/Main-Page/ToTKGuest";
import LegDetails from "@/Components/ToTk/Armor/ArmorOptions/Leg/LegDetails";
import { useRouter } from "next/router"; 

const LegDetailsPage = () => {
    
    const router = useRouter()
    const { id } = router.query

    return (
        <div>
            <ToTKGuest>
                <LegDetails legId={id} />
            </ToTKGuest>
        </div>
    )
}

export default LegDetailsPage