import React from "react";
import Logo from "../Logo/Logo";
import { Box } from "@mui/material";
import styles from './Navbar.module.css';
import SearchBar from "../SearchBar/SearchBar";
import Button from "../Button/Button";


const Navbar = () => {

    return (
        <Box className={styles.navbar}>
            <Logo />
            <SearchBar />
            <Button text="Give Feedback" />
        </Box>
    );
};

export default Navbar;