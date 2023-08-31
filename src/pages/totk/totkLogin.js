import ToTKGuest from "@/Components/ToTk/Main-Page/ToTKGuest";
import ToTkLogin from "@/Components/ToTk/Main-Page/ToTkLogin";


const totkLogin = () => {
    return (
        <div>
            <ToTKGuest>
                <ToTkLogin/>
            </ToTKGuest>
        </div>
    )
}

export default totkLogin