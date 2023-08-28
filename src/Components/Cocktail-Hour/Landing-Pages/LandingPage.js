import { Grid } from "@mui/material"


const LandingPage = () => {
    return (
        <div className="chLanding">
            <div className="chLandingInfo">
                <Grid container direction='column' >
                    <Grid item >
                        Welcome to Cocktail Hour
                    </Grid>
                    <Grid item zeroMinWidth >
                        The site where you can register/login, and create a custom Google Map to display your favorites, bars, lounges, etc and be a go-to place to quickly remember your favorite drinks at your favorite bars
                    </Grid>
                </Grid>
            </div>
        </div>
    )
}

export default LandingPage