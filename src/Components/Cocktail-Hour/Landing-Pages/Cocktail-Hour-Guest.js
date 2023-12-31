import Head from "next/head";
import Footer from "../Footer/Footer";

const CHGuest = ({children}) => {
    return (
        <div>
            <Head>
                <title>Cocktail Hour</title>
            </Head>
            {children}
            <Footer/>
        </div>
    )
}

export default CHGuest

