import React from "react";
import Box from "@mui/material/Box";
import styles from './Logo.module.css';

const Logo = () => {
    return (
        <Box className={styles.logo}>
            <img src="../assets/hero-image.png" alt="Qtify-logo"></img>
        </Box>
    );
};

export default Logo;