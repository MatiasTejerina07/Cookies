import { AppBar, IconButton, Toolbar, Link as Anchor, Typography } from "@mui/material"
import { MenuOutlined } from "@mui/icons-material"
import Link from "next/link"

export const Navbar = () => {
    return (
        <AppBar position="sticky" elevation={0}>
            <Toolbar>
                <IconButton
                    size="large"
                    edge="start">
                    <MenuOutlined />
                </IconButton>
                <Link href={'/'} passHref>
                    <Anchor>
                        <Typography variant="h6" color={"white"}>CookieMaster</Typography>
                    </Anchor>
                </Link>


                <Link href={'/theme-changer'} passHref>
                    <Anchor>
                        <Typography variant="h6" color={"white"}>Cambiar THEME</Typography>
                    </Anchor>
                </Link>
            </Toolbar>
        </AppBar >
    )
}
