import Link from "next/link"


const NarutoFooter = () => {
    return (
        <footer className="footer footer-center bg-gray-300 p-10 text-white rounded">
        <nav className="grid grid-flow-col gap-4">
            <Link className="link link-hover" href='/' >
                <button className="btn">Main Home</button>
            </Link>
            <div className="divider divider-horizontal divide-white" />
            <Link className="link link-hover" href='/naruto'>
                <button className="btn">Naruto Home</button>
            </Link>
        </nav> 
        </footer>
    )
}

export default NarutoFooter