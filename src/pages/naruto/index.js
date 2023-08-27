import Head from "next/head";

import NarutoHeader from "@/Components/Naruto/NarutoHeader";
import NarutoHomePage from "@/Components/Naruto/NarutoHomePage";
import NarutoFooter from "@/Components/Naruto/NarutoFooter";


const NarutoApp = () => {
    return (
        <div>
            <Head>
                <title>Naruto: Jutsu Maker</title>
            </Head>
            <NarutoHeader/>
            <NarutoHomePage/>
            <NarutoFooter/>
        </div>
    )
}

export default NarutoApp