import Head from "next/head"

import HomePage from "@/Components/Main-App/HomePage"
import HomeHeader from "@/Components/Main-App/HomeHeader"
import { NextUIProvider } from "@nextui-org/react" 

const MainApp = () => {
    return (
        <div>
            <Head>
                <title>Portfolio</title>
            </Head>
            <NextUIProvider>
            {/* <HomeHeader/> */}
            <HomePage/>
            </NextUIProvider>
        </div>
    )
}

export default MainApp