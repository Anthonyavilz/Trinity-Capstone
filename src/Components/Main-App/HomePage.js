import Image from "next/image";
import Link from "next/link";
import cocktailLogo from '../../../public/Images/Cocktail-Hour-Images/cocktailhour-02.jpg'
import handSeal from '../../../public/Images/Naruto-Images/Tiger.jpg'

const HomePage = () => {
    return (
        <div>
            <div className="hero min-h-screen bg-black">
                <div className="hero-content flex-col lg:flex-row">
                    <Link href='/naruto'>
                        <Image
                            src={handSeal}
                            className="max-w-sm rounded-lg shadow-2xl"
                            alt=""
                        />
                    </Link>
                <div>
                    <h1 className="text-5xl font-bold">Box Office News!</h1>
                    <p className="py-6">
                        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
                        excepturi exercitationem quasi. In deleniti eaque aut repudiandae
                        et a id nisi.
                    </p>
                </div>
                </div>
            </div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                <Link href='/cocktail-hour'>
                        <Image
                            src={cocktailLogo}
                            className="max-w-sm rounded-lg shadow-2xl"
                            alt=""
                        />
                    </Link>
                <div>
                    <h1 className="text-5xl font-bold">Box Office News!</h1>
                    <p className="py-6">
                        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
                        excepturi exercitationem quasi. In deleniti eaque aut repudiandae
                        et a id nisi.
                    </p>
                </div>
                </div>
            </div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row">
                    <Image
                        src={cocktailLogo}
                        className="max-w-sm rounded-lg shadow-2xl"
                        alt=""
                />
                <div>
                    <h1 className="text-5xl font-bold">Box Office News!</h1>
                    <p className="py-6">
                        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
                        excepturi exercitationem quasi. In deleniti eaque aut repudiandae
                        et a id nisi.
                    </p>
                </div>
                </div>
            </div>
    </div>
  );
};

export default HomePage;
