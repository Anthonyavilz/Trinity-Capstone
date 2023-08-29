// import { Box } from "@chakra-ui/react"
// import { Link } from "@chakra-ui/next-js"
// import { Flex } from "@chakra-ui/react"
// import { Spacer } from "@chakra-ui/react"
// import { Button } from "@chakra-ui/react"

import {Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button} from "@nextui-org/react";  
import NextLink from 'next/link'

const HomeHeader = () => {
    return (
        <Navbar>
            <NavbarBrand>
                <p className="font bold text-inherit" >Trinity Capstone</p>
            </NavbarBrand>
            <NavbarContent className="hidden sm:flex gap-4" >
                <NavbarItem>
                    <Link color="foreground" href="/naruto" as={NextLink} >
                    Naruto: Jutsu Maker
                    </Link>
                </NavbarItem>
                <NavbarItem>
                    <Link color="foreground" href="/cocktail-hour" as={NextLink} >
                    Cocktail Hour
                    </Link>
                </NavbarItem>
                <NavbarItem>
                <Link color="foreground" href="/totk" as={NextLink} >
                    ToTK: Armor Creator
                    </Link>
                </NavbarItem>
            </NavbarContent>
        </Navbar>
    )
}

export default HomeHeader

{/* <Flex>
<Box p='2' bg='transparent'>
    <Button bg='transparent'>
        <Link href='/' >
            Project Trinity
        </Link>
    </Button>
</Box>
    <Spacer />
<Box p='2'>
    <Button bg='transparent'>
        <Link href='/naruto'>
            Naruto: Jutsu Maker
        </Link>
    </Button>
</Box>
<Box p='2'>
    <Button bg='transparent'>
        <Link href='/cocktail-hour' >
            Cocktail Hour
        </Link>
    </Button>
</Box>
<Box p='2'>
    <Button bg='transparent'>
        <Link href='/totk' >
            ToTK: Armor Creator
        </Link>
    </Button>
</Box>
<Spacer/>
<Box p='2'>
    <Button bg='transparent'>
        Naruto: Jutsu Maker
    </Button>
</Box>
</Flex> */}