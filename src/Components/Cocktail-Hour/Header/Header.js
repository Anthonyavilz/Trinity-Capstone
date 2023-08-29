import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import LocalBarIcon from '@mui/icons-material/LocalBar';
import { useState } from 'react'
import { useRouter } from "next/router"; 

const Header = () => {

    const router = useRouter()

    const [anchorElUser, setAnchorElUser] = useState(null);

    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    const handleChristina = () => {
        router.push('/cocktail-hour')
    }

    const handleMe = () => {
        router.push('/cocktail-hour')
    }

    const handleRegister = () => {
        router.push('/cocktail-hour')
    }

    return (
        <AppBar position="static" sx={{ background: 'transparent', boxShadow: 'none'}}>
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                <Typography
                    variant="h6"
                    noWrap
                    component="a"
                    href="/cocktail-hour/guest"
                    sx={{
                    mr: 2,
                    display: { xs: "none", md: "flex" },
                    fontWeight: 700,
                    fontSize: 25,
                    letterSpacing: ".1rem",
                    color: "white",
                    textDecoration: "none",
                    }}
                >
                    Cocktail Hour
                </Typography>
                <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
                </Box>
                <Box sx={{ flexGrow: 0 }}>
                    <Tooltip title="Open Menu">
                        <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                            {/* <Avatar/> */}
                            <LocalBarIcon sx={{color: 'white'}} fontSize="large" />
                        </IconButton>
                    </Tooltip>
                    <Menu
                        sx={{ mt: "45px" }}
                        id="menu-appbar"
                        anchorEl={anchorElUser}
                        anchorOrigin={{
                            vertical: "top",
                            horizontal: "right",
                        }}
                        keepMounted
                        transformOrigin={{
                            vertical: "top",
                            horizontal: "right",
                        }}
                        open={Boolean(anchorElUser)}
                        onClose={handleCloseUserMenu}
                    >
                        <MenuItem onClick={handleChristina}>
                            <Typography textAlign="center">About Me</Typography>
                        </MenuItem>
                        <MenuItem onClick={handleMe}>
                            <Typography textAlign="center">About Christina</Typography>
                        </MenuItem>
                        <MenuItem onClick={handleRegister}>
                            <Typography textAlign="center">Register/Login</Typography>
                        </MenuItem>
                    </Menu>
                </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
};

export default Header;
