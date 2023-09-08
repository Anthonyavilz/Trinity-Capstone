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
                    <ul className="list-disc text-2xl">
                        <li className="py-6">
                            <p className="mb-2">Story:</p>
                            <ul className="ml-8 text-lg list-disc">
                            <li>This project was one of my first major React apps I had designed and built back in 2019 during my first time taking DevMountain.</li>
                            <li>The project was built to demonstrate my understanding of a full CRUD `Create, Read, Update, & Delete` operation.</li>
                            <li>For the data managment, it used a noDB to handle all the user`s input and actions</li>
                            <li>At the time it used a simple conditional rendering statement in order to change the `page` since it was a Single Page Application</li>
                            </ul>
                        </li>
                        <li className="py-6">
                            <p className="mb-2">Updates:</p>
                            <ul className="ml-8 list-disc text-lg">
                            <li>The first major update to this app was primarily refactoring, reorganizing and updating the code to use modern React useState to manage the different states.</li>
                            <li>Second major update was instead of using conditional rendering to display diferrent `pages`, I used React-Router-Dom in order to build a functiong navigation bar and functionality with routes</li>
                            <li>With this project being housed in Next.js, instead of using React-Router-Dom, it utilizes Next.js`s pages directory to manage the different routes</li>
                            <li>The other updates were having the selector tabs display the images of the hand seals, along with proper information sections about the various villages with clickable cards below the world map that link to a fandom wiki</li>
                            </ul>
                        </li>
                        <li className="py-6">
                            <p className="mb-2">Tech:</p>
                            <ul className="ml-8 list-disc text-xl">
                            <li>Next.js / React</li>
                            <li>React-Select</li>
                            <li>Node.js / Express / Axios</li>
                            </ul>
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
                    <ul className="list-disc text-2xl">
                        <li className="py-6">
                            <p className="mb-2">Story:</p>
                            <ul className="ml-8 text-lg list-disc">
                            <li>This project was originally my final project back in 2019 but due to some last minute factors, it was never able to be fully finished the way it is now.</li>
                            <li>At the time it had used a Heroku database and SQL commands to manipulate data and handle the various calls to the database.</li>
                            <li>For global and state management, it utilized React-Redux along with express-session to issue out cookies for user authentication and verification.</li>
                            <li>Lastly, it used Google Maps API to have a map and autocomplete feature for user input and display. The entire design had used Material UI for the overall design of the site.</li>
                            <li>Unfortunately a lot of the original project did not work due to the lack of understanding and proper connectivity of the back-end to front-end.</li>
                            </ul>
                        </li>
                        <li className="py-6">
                            <p className="mb-2">Updates:</p>
                            <ul className="ml-8 list-disc text-lg">
                                <li>While refactoring some of the functionality, I ended up simplify to have a more cohesive flow and user experience</li>
                                <li>Using the same features with Google Maps API and express-session for cookies, I implemented React`s useContext to manage the state and aid in user authorization.</li>
                                <li>For the design, I did some elements of Material UI but also added some elements from two other UI libraries which both use Tailwind CSS.</li>
                            </ul>
                        </li>
                        <li className="py-6">
                            <p className="mb-2">Tech:</p>
                            <ul className="ml-8 list-disc text-xl">
                            <li>Next.js - React</li>
                            <li>Google Maps API - Material UI - DaisyUI - Tailwind CSS</li>
                            <li>Node.js - Express - Axios - Express-Sessions - useContext - PostgresDB - Sequelize</li>
                            </ul>
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
                    <ul className="list-disc text-2xl">
                        <li className="py-6">
                            <p className="mb-2">Story:</p>
                            <ul className="ml-8 text-lg list-disc">
                                <li>This project is the 3rd Version of this concept. It was my first major project during my second try at DevMountain.</li>
                                <li>The 1st & 2nd version was a simple Single Page Application that used Vanilla HTLM/CSS/Javascript</li>
                                <li>Version 1 used a noDB approach to handle user input and functionality just like the Naruto project used.</li>
                                <li>Version 2 modernized data approach by using Sequelize and a PostgresDB to handle information and manipulation.</li>
                                <li>To show my growth at the end of my DevMountain run, Version 3 was built</li>
                            </ul>
                        </li>
                        <li className="py-6">
                            <p className="mb-2">Updates:</p>
                            <ul className="ml-8 list-disc text-lg">
                                <li>The first major update was building a React version of the previous iterations of this project and concept</li>
                                <li>The second update was creating and ulitizing Sequelize ORM models and approach for data management.</li>
                                <li>Third was adding a user login/register function which I used JsonWebTokens to provide user authentication.</li>
                                <li>Fourth was using Redux to manage more global and reusable states due to the size of this project.</li>
                                <li>Fifth was adding pages to show the various armor options that I manually inputted as a seed file for this project.</li>
                                <li>Lastly, I used two different UI libraries that are built on Tailwind CSS to provide a clean and simple UI/UX experience.</li>
                            </ul>
                        </li>
                        <li className="py-6">
                            <p className="mb-2">Tech:</p>
                            <ul className="ml-8 list-disc text-xl">
                            <li>Next.js - React</li>
                            <li>Next UI - DaisyUI - Tailwind CSS</li>
                            <li>Node.js - Express - Axios - JsonWebTokens - Redux/ReduxToolkit - PostgresDB</li>
                            </ul>
                        </li>
                    </ul>
                </div>
                </div>
            </div>
    </div>
    );
};

export default HomePage;
