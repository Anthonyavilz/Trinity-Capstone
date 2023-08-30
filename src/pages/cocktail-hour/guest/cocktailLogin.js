import CocktailLogin from "@/Components/Cocktail-Hour/Landing-Pages/CocktailLogin"
import CHGuest from "@/Components/Cocktail-Hour/Landing-Pages/Cocktail-Hour-Guest"

const cocktailAuth = () => {
    return (
        <CHGuest>
            <CocktailLogin/>
        </CHGuest>
    )
}

export default cocktailAuth