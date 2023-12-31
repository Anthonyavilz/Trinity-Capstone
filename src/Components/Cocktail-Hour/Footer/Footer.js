import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import FavoriteIcon from '@mui/icons-material/Favorite';
import styles from './footerStyles.module.css'
import stylesM from '../material-ui-styles/materialStyles.module.css'
import Link from "next/link";

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={stylesM.container}>
                <div className={styles.left} >
                    <List className={styles.list} >
                        <ListItem className={styles.inlineBlock}>
                            <Link className={styles.block} href='/cocktail-hour/guest' >
                                <p className={styles.p} >
                                    Cocktail Hour
                                </p>
                            </Link>
                        </ListItem>
                        <ListItem className={styles.inlineBlock}>
                            <Link className={styles.block} href='/cocktail-hour/aboutMe' >
                                <p className={styles.p} >
                                    About Me
                                </p>
                            </Link>
                        </ListItem>
                        <ListItem className={styles.inlineBlock}>
                            <Link className={styles.block} href='/cocktail-hour/aboutChristina' >
                                <p className={styles.p} >
                                    About Christina
                                </p>
                            </Link>
                        </ListItem>
                        <ListItem className={styles.inlineBlock}>
                            <Link className={styles.block} href='/cocktail-hour/guest/cocktailRegister' >
                                <p className={styles.p} >
                                    Register
                                </p>
                            </Link>
                        </ListItem>
                        <ListItem className={styles.inlineBlock}>
                            <Link className={styles.block} href='/cocktail-hour/guest/cocktailLogin' >
                                <p className={styles.p} >
                                    Login
                                </p>
                            </Link>
                        </ListItem>
                    </List>
                </div>
                <div className={styles.right} >
                &copy; {1900 + new Date().getYear()} , made by {' '} Phillip Avila
                </div>
            </div>
        </footer>
    )
}

export default Footer

// here I can conditional render (ternary) to hold the token and display the approriate buttons like the header