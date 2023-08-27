import Head from "next/head"

import HomePage from "@/Components/Main-App/HomePage"
import HomeHeader from "@/Components/Main-App/HomeHeader"
import HomeFooter from "@/Components/Main-App/HomeFooter"

const MainApp = () => {
    return (
        <div>
            <Head>
                <title>Portfolio</title>
            </Head>
            <HomeHeader/>
            <HomePage/>
            <HomeFooter/>
        </div>
    )
}

export default MainApp