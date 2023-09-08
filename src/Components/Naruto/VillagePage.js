import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import worldMap from '../../../public/Images/Naruto-Images/WorldMap.jpg'
import rainVillage from '../../../public/Images/Naruto-Images/rain.jpg'
import waterVillage from '../../../public/Images/Naruto-Images/water.webp'
import cloudVillage from '../../../public/Images/Naruto-Images/lightening.png'
import earthVillage from '../../../public/Images/Naruto-Images/earth.jpeg'
import fireVillage from '../../../public/Images/Naruto-Images/fire.jpeg'
import sandVillage from '../../../public/Images/Naruto-Images/sand.webp'

const VillagePage = () => {

    const router = useRouter()

    const rockPage = () => {
        router.push('https://naruto.fandom.com/wiki/Iwagakure')
    }

    const cloudPage = () => {
        router.push('https://naruto.fandom.com/wiki/Kumogakure')
    }

    const rainPage = () => {
        router.push('https://naruto.fandom.com/wiki/Amegakure')
    }

    const leafPage = () => {
        router.push('https://naruto.fandom.com/wiki/Konohagakure')
    }

    const sandPage = () => {
        router.push('https://naruto.fandom.com/wiki/Sunagakure')
    }

    const waterPage = () => {
        router.push('https://naruto.fandom.com/wiki/Kirigakure')
    }

    return (
        <div className='village-page'>
            <h1>Click below to explore information about the various Naruto Villages!</h1>
            <div className='worldMap' >
                <Image src={worldMap} alt='world map' placeholder='blur'/>
            </div>
            <div className='village-cards' >
                <button className='villageCard' onClick={rockPage}>
                    <Image src={earthVillage} alt='' width={400} height={500} placeholder='blur'/>
                    <p>Iwagakure: Village Hidden by Rocks</p>
                </button>
                <button className='villageCard' onClick={cloudPage}>
                    <Image src={cloudVillage} alt='' width={400} height={500} placeholder='blur'/>
                    <p>Kumogakure: Village Hidden by Clouds</p>
                </button>
                <button className='villageCard' onClick={rainPage}>
                    <Image src={rainVillage} alt='' width={400} height={500} placeholder='blur'/>
                    <p>Amegakure: Village Hidden by Rain</p>
                </button>
                <button className='villageCard' onClick={leafPage}>
                    <Image src={fireVillage} alt='' width={400} height={500} placeholder='blur'/>
                    <p>Konohagakure: Village Hidden in the Leafs</p>
                </button>
                <button className='villageCard' onClick={sandPage}>
                    <Image src={sandVillage} alt='' width={400} height={500} placeholder='blur'/>
                    <p>Sunagakure: Village Hidden by Sand</p>
                </button>
                <button className='villageCard' onClick={waterPage}>
                    <Image src={waterVillage} alt='' width={400} height={500} placeholder='blur'/>
                    <p>Kirigakure: Village Hidden in the Mist</p>
                </button>
            </div>
        </div>
    )
}

export default VillagePage