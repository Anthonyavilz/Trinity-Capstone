import Link from "next/link"

const NarutoHeader = () => {
    return (
        <header className='navBar'>
            <h1>World of Naruto: Jutsu Maker</h1>
            <nav>
                <Link href='/naruto'>
                    <button>Home</button>
                </Link>
                <Link href='/naruto/villages'>
                    <button>Villages</button>
                </Link>
                <Link href='/naruto/handSigns'>
                    <button>Hand Signs</button>
                </Link>
                <Link href='/naruto/createJutsu'>
                    <button>Create Your Own Jutsu!</button>
                </Link>
            </nav>
        </header>
    )
}

export default NarutoHeader