import Link from "next/link"

const TotkFooter = () => {


    return (
        <footer className="footer footer-center p-10 bg-base-200 text-base-content rounded">
        <div className="grid grid-flow-col gap-4">
            <Link className="link link-hover" href='/' >Trinity Home</Link>
            <a className="link link-hover">ToTk Home</a> 
            <a className="link link-hover">Login/Register</a> 
        </div> 
        </footer>
    )
}

export default TotkFooter