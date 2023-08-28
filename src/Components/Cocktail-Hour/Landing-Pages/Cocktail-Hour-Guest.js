import Head from "next/head";
import GuestHeader from "./GuestHeader";
import GuestFooter from "./GuestFooter";

const CHGuest = ({children}) => {
    return (
        <div>
            <Head>
                <title>Cocktail Hour</title>
            </Head>
            <GuestHeader/>
            {children}
            <GuestFooter/>
        </div>
    )
}

export default CHGuest

