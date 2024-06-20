import { Box, Chip } from '@mui/material';
import styles from './Card.module.css';


// import albumImg from '../../assets/cardSampleImg.png';

const Card = ({ image, follows, title }) => {

    return (
        <Box className={styles.card_body}>
            <Box className={styles.image_follow_container}>
                <Box className={styles.image}>
                    <img 
                        className={styles.image}
                        src={image} 
                        alt={title}
                    >     
                    </img>
                </Box>
                <Box className={styles.follows}>
                    <Chip 
                        className={styles.chip}
                        label={follows} 
                    />
                </Box>
            </Box>
            <Box className={styles.album_name}>
                {title}
            </Box>
        </Box>
    );
};

export default Card;