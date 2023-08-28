import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import FavoriteIcon from '@mui/icons-material/Favorite';
import styles from './footerStyles.module.css'
import styles2 from '../../material-ui-styles/materialStyles.module.css'
import Link from "next/link";

console.log('line 6', styles)

// const useStyles = makeStyles(styles)

const Footer = () => {

    // const classes = useStyles()

    return (
        <footer className={styles.footer}>
            <div className={styles2.container}>
                <div className={styles.left} >
                    <List className={styles.list} >
                        <ListItem className={styles.inlineBlock}>
                            <Link className={styles.block} href='/cocktail-hour/guest' >
                                <p className={styles.p} >
                                    Cocktail Hour
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