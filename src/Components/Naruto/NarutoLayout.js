import Head from "next/head";

import NarutoHeader from "./NarutoHeader";
import NarutoFooter from "./NarutoFooter";

const NarutoLayout = ({children}) => {
    return (
        <>
        <Head>
            <title>Naruto: Jutsu Maker</title>
        </Head>
        <NarutoHeader/>
            {children}
        <NarutoFooter/>
        </>
    )
}

export default NarutoLayout