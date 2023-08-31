import Image from "next/image";
import Link from "next/link";
import cocktailLogo from '../../../public/Images/Cocktail-Hour-Images/cocktailhour-04.jpg'
import handSeal from '../../../public/Images/Naruto-Images/Tiger.jpg'
import zelda from '../../../public/Images/ToTk-Images/IMG_0952.PNG'

const HomePage = () => {
    return (
        <div>
            <div className="hero min-h-screen bg-black">
                <div className="hero-content flex-col lg:flex-row text-white">
                    <Link href='/naruto'>
                        <Image
                            src={handSeal}
                            className="max-w-sm rounded-lg shadow-white overflow-hidden mr-8"
                            alt=""
                        />
                    </Link>
                <div>
                    <h1 className="text-5xl font-bold">Naruto: Jutsu Maker</h1>
                    <ul className="list-disc">
                        <li>
                            <p className="py-6">
                                Story: 
                            </p>
                        </li>
                        <li>
                            <p className="py-6">
                                Challenges:
                            </p>
                        </li>
                        <li>
                            <p className="py-6">
                                Tech: 
                            </p>
                        </li>
                    </ul>
                </div>
                </div>
            </div>
            <div className="hero min-h-screen" style={{backgroundColor: '#606161'}}>
                <div className="hero-content flex-col lg:flex-row-reverse text-white">
                <Link href='/cocktail-hour'>
                        <Image
                            src={cocktailLogo}
                            className="max-w-sm rounded-lg shadow-2xl ml-6"
                            alt=""
                        />
                    </Link>
                <div>
                    <h1 className="text-5xl font-bold">Cocktail Hour</h1>
                    <ul className="list-disc">
                        <li>
                            <p className="py-6">
                                Story: 
                            </p>
                        </li>
                        <li>
                            <p className="py-6">
                                Challenges:
                            </p>
                        </li>
                        <li>
                            <p className="py-6">
                                Tech: 
                            </p>
                        </li>
                    </ul>
                </div>
                </div>
            </div>
            <div className="hero min-h-screen" style={{backgroundColor: '#7c8380'}}>
                <div className="hero-content flex-col lg:flex-row text-white">
                    <Link href='/totk' >
                        <Image
                            src={zelda}
                            className="max-w-sm rounded-lg shadow-2xl mr-6"
                            alt=""
                        />
                    </Link>
                <div>
                    <h1 className="text-5xl font-bold">Tears of The Kingdom:</h1>
                    <h1 className="text-5xl font-bold">Armor Creator</h1>
                    <ul className="list-disc">
                        <li>
                            <p className="py-6">
                                Story: 
                            </p>
                        </li>
                        <li>
                            <p className="py-6">
                                Challenges:
                            </p>
                        </li>
                        <li>
                            <p className="py-6">
                                Tech: 
                            </p>
                        </li>
                    </ul>
                </div>
                </div>
            </div>
    </div>
    );
};

export default HomePage;
