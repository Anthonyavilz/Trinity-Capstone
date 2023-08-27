import Image from 'next/image'

import Monkey from '../../../public/Images/Naruto-Images/Monkey.jpg'
import Dragon from '../../../public/Images/Naruto-Images/Dragon.jpg'
import Rat from '../../../public/Images/Naruto-Images/Rat.jpg'
import Bird from '../../../public/Images/Naruto-Images/Bird.jpg'
import Serpernt from '../../../public/Images/Naruto-Images/Serpernt.jpg'
import Ox from '../../../public/Images/Naruto-Images/Ox.jpg'
import Dog from '../../../public/Images/Naruto-Images/Dog.jpg'
import Horse from '../../../public/Images/Naruto-Images/Horse.jpg'
import Tiger from '../../../public/Images/Naruto-Images/Tiger.jpg'
import Boar from '.../../../public/Images/Naruto-Images/Boar.jpg'
import Ram from '../../../public/Images/Naruto-Images/Ram.jpg'
import Hare from '../../../public/Images/Naruto-Images/Hare.jpg'

const HandSigns = () => {

    const seals = [
        {
            id: 1,
            name: 'Saru/Monkey',
            img: Monkey,
            description: 'Thumbs lie flat on pinkies'
        },
        {
            id: 2,
            name: 'Tastu/Dragon',
            img: Dragon,
            description: 'Left thumb on top'
        },
        {
            id: 3,
            name: 'Ne/Rat',
            img: Rat,
            description: 'Left thumb on the outside'
        },
        {
            id: 4,
            name: 'Tori/Bird',
            img: Bird,
            description: 'Be careful with the angle of the thumbs and the location of the fingertips'
        },
        {
            id: 5,
            name: 'Mi/Snake',
            img: Serpernt,
            description: 'Left thumb on the outside'
        },        
        {
            id: 6,
            name: 'Ushi/Ox',
            img: Ox,
            description: 'Right hand horizontal, left hand vertical'
        },        
        {
            id: 7,
            name: 'Inu/Dog',
            img: Dog,
            description: 'Left hand flat on the right fist'
        },        
        {
            id: 8,
            name: 'Uma/Horse',
            img: Horse,
            description: 'Both elbows out, index fingers form a triangle'
        },        
        {
            id: 9,
            name: 'Tora/Tiger',
            img: Tiger,
            description: 'Both thumbs straight up'
        },        
        {
            id: 10,
            name: 'I/Boar',
            img: Boar,
            description: 'Wrist need great flexibility'
        },        
        {
            id: 11,
            name: 'Hitsuji/Ram',
            img: Ram,
            description: 'Left thumb on top, hands together vertically'
        },        
        {
            id: 12,
            name: 'U/Hare',
            img: Hare,
            description: 'Aside from pinky, right fingers gently curled'
        }
    ]

    return (
        <div className='handSignContainer'>
                {seals.map(seal => {
                    return (
                        <div key={seal.id} className='sealsCard'>
                            <h1>{seal.name}</h1>
                            {/* <img src={seal.img} alt={seal.name}/> */}
                            <Image src={seal.img} alt={seal.name} />
                            <h2>- {seal.description}</h2>
                        </div>
                    )
                })}
        </div>
    )
}

export default HandSigns