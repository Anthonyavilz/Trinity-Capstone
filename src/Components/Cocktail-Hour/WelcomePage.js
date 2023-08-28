import Image from "next/image";
import { useRouter } from "next/router";
import landing from 'public/Images/Cocktail-Hour-Images/cocktailhour-20.jpg'
import { Grid } from "@mui/material";


const WelcomePage = () => {
    
    const router = useRouter()

    const handleClick = () => {
        router.push('/cocktail-hour/guest')
    }

    return (
        <div className="main-background" >
            <div className="logo" >
                <Grid container justifyContent='center' >
                    <Image
                        src={landing}
                        alt="logo"
                        onClick={handleClick}
                    >
                    </Image>
                </Grid>
            </div>
        </div>
    )
}

export default WelcomePage

