import { useState } from 'react';
import { Box } from '@mui/material';
import styles from './Section.module.css';
import Card from '../Card/Card';

const Section = ({ sectionTitle, albumsList }) => {
    const [isButtonCollapse, setIsButtonCollapse] = useState(false);

    return (
        <Box className={styles.section_body}>
            <Box className={styles.heading_button_container}>
                <p className={styles.heading}>
                    {sectionTitle}
                </p>
                <button className={styles.button}>
                    {!isButtonCollapse ? 'Collapse' : 'Show all'}
                </button>
            </Box>
            <Box className={styles.card_grid}>
                {
                    albumsList.map((album) => {
                        return (
                            <Card 
                                key={album.id}
                                image={album.image}
                                follows={album.follows}
                                title={album.title}
                            />
                        )
                    })
                }
            </Box>
        </Box>
    );
};

export default Section;