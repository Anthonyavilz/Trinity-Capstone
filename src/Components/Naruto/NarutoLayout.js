import Head from "next/head";

import NarutoHeader from "./NarutoHeader";
import NarutoFooter from "./NarutoFooter";

const NarutoLayout = ({children}) => {
    return (
        <div className="main-naruto">
        <Head>
            <title>Naruto: Jutsu Maker</title>
        </Head>
        <NarutoHeader/>
            {children}
        <NarutoFooter/>
        </div>
    )
}

export default NarutoLayout