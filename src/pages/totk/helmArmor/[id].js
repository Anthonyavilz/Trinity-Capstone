import ToTKGuest from "@/Components/ToTk/Main-Page/ToTKGuest"
import HelmDetails from "@/Components/ToTk/Armor/ArmorOptions/Helm/HelmDetails"
import { useRouter } from "next/router"

const HelmDetailsPage = () => {

    const router = useRouter()
    const { id } = router.query

  return (
    <div>
        <ToTKGuest>
            <HelmDetails helmId={id} />
        </ToTKGuest>
    </div>
  )
}

export default HelmDetailsPage