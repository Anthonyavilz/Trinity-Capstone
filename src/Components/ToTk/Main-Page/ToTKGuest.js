import Head from "next/head";
import TotkFooter from "./TotkFooter";
import TotkHeader from "./TotkHeader";

const ToTKGuest = ({children}) => {
    return (
        <div>
            <Head>
                <title>ToTK: Armor Creator</title>
            </Head>
            <TotkHeader/>
            {children}
            <TotkFooter/>
        </div>
    )
}

export default ToTKGuest