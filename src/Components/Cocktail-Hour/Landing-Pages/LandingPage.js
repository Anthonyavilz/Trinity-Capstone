import Header from '../Header/Header'
import styles from './landingPageStyle.module.css'
import Box from "@mui/material/Box"
import Card from "@mui/material/Card"
import CardContent from "@mui/material/CardContent"
import Typography from "@mui/material/Typography"


const LandingPage = () => {
    return (
        <Box component='div' className={styles.chLanding} >
            <Header/>
            <Box className={styles.container}>
                <Card className={styles.card}>
                    <CardContent>
                        <Typography variant="h4" > Welcome to Cocktail Hour!</Typography>
                    </CardContent>
                    <CardContent>
                        <Typography variant="h6" >
                        The site where you can register/login, and create a custom Google Map to display your favorites, bars, lounges, etc and be a go-to place to quickly remember your favorite drinks at your favorite bars
                        </Typography>
                    </CardContent>
                </Card>
            </Box>
        </Box>
    )
}

export default LandingPage

{/* <div className="chLanding">
<Header/>
<div className={styles.container}>
    <Grid container direction='column' >
        <Grid item xs={12} sm={12} md={6} >
            <h1 className={styles.title}>Welcome to Cocktail Hour!</h1>
            <h4>
            The site where you can register/login, and create a custom Google Map to display your favorites, bars, lounges, etc and be a go-to place to quickly remember your favorite drinks at your favorite bars
            </h4>
        </Grid>
    </Grid>
</div>
</div> */}