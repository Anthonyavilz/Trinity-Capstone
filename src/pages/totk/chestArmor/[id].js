import ToTKGuest from "@/Components/ToTk/Main-Page/ToTKGuest";
import ChestDetails from "@/Components/ToTk/Armor/ArmorOptions/Chest/ChestDetails";
import { useRouter } from "next/router";

const ChestDetailsPage = () => {

    const router = useRouter()
    const { id } = router.query

    return (
        <div>
            <ToTKGuest>
                <ChestDetails chestId={id} />
            </ToTKGuest>
        </div>
    )
}

export default ChestDetailsPage