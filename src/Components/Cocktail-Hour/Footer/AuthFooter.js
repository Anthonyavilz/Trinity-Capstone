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
                            <Link className={styles.block} href='/cocktail-hour/user' >
                                <p className={styles.p} >
                                    Cocktail Hour
                                </p>
                            </Link>
                        </ListItem>
                        <ListItem className={styles.inlineBlock}>
                            <Link className={styles.block} href='/cocktail-hour/post' >
                                <p className={styles.p} >
                                    Post
                                </p>
                            </Link>
                        </ListItem>
                        <ListItem className={styles.inlineBlock}>
                            <Link className={styles.block} href='/cocktail-hour/mapView' >
                                <p className={styles.p} >
                                    Map View
                                </p>
                            </Link>
                        </ListItem>
                        <ListItem className={styles.inlineBlock}>
                            <Link className={styles.block} href='/cocktail-hour/guest' >
                                <p className={styles.p} >
                                    Logout
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