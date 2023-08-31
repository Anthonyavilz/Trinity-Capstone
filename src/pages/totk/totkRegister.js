import ToTKGuest from "@/Components/ToTk/Main-Page/ToTKGuest"
import ToTkRegister from "@/Components/ToTk/Main-Page/ToTkRegister"

const totkRegister = () => {
    return (
        <div>
            <ToTKGuest>
                <ToTkRegister/>
            </ToTKGuest>
        </div>
    )
}

export default totkRegister