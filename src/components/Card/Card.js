import { Box, Chip } from '@mui/material';
import { useNavigate } from "react-router-dom";
import styles from './Card.module.css';


// import albumImg from '../../assets/cardSampleImg.png';

const Card = ({ image, follows, title, slug, isAlbum }) => {
    const navigate = useNavigate();

    function handleOnClick() {
        if(isAlbum) {
            navigate('/album', {state: {slug: slug}});
        } else {

        }
    }

    return (
        <Box 
            className={styles.card_body}
            onClick={handleOnClick}
        >
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