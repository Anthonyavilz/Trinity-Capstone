import ImageMapper from 'react-img-mapper'
import { useRouter } from 'next/router'

const VillagePage = () => {
    
    const router = useRouter()

    const URL = 'https://i0.wp.com/anbulegacy.com/wp-content/uploads/2021/05/world-map-edit.jpg?resize=1080%2C635&ssl=1'
    const MAP = {
        name: 'world-map',
        areas: [
            {
                name: 'Rain', shape: 'rect', coords: [274,381,313,404], preFillColor: 'white', fillColor: 'Blue' 
            },
            {
                name: 'Sand', shape: 'circle', coords: [219,539,11], preFillColor: 'white', fillColor: 'Blue'
            }
        ]
    }

    const handleRainAreaClick = (area) => {
        if(area.name === 'Rain') {
            router.push('/naruto/villages/rainVillage')
        } else if (area.name === 'Sand') {
            router.push('/naruto/villages/sandVillage')
        }
    }

    return (
        <div>
            <ImageMapper src={URL} map={MAP} onClick={handleRainAreaClick}/>
        </div>
    )
}

export default VillagePage
