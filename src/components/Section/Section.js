import { useState, useEffect, useRef } from 'react';
import { Box } from '@mui/material';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import styles from './Section.module.css';
import Card from '../Card/Card';
import axios from 'axios';
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import { Navigation } from 'swiper/modules';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/virtual';
import CarouselLeftNavigation from '../Carousel/CarouselLeftNavigation';
import CarouselRightNavigation from '../Carousel/CarouselRightNavigation';

/**
 * @param {function} setAllSongsList
 * sets data to songs list
 * @param {list} list
 * all songs list
 * @returns 
 */
const TabsContainer = ({ setAllSongsList, list }) => {
    const [value, setValue] = useState(0);
    const allSongsList = useRef(list);

    const [genre, setGenre] = useState({
        "key": "all",
        "label": "All"
    });
    const genreListInitial = [{
        "key": "all",
        "label": "All"
    }];
    const [genresList, setGenresList] = useState(genreListInitial);
    
    useEffect(() => {
        async function fetchData() {
            try{
                const response = await axios.get('https://qtify-backend-labs.crio.do/genres');
                const data = response.data.data;
                setGenresList(genreListInitial.concat(data));
            } catch(e) {
    
            }
        }

        fetchData();
    },[]);

    // useEffect(() => {
    //     async function fetchData() {
    //         try{
    //             // const response = await axios.get()
    //         } catch(e) {
    
    //         }
    //     }

    //     fetchData();
    // }, [genre]);

    const handleGenreChange = (list) => {

    };

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    function a11yProps(index) {
        return {
          id: `simple-tab-${index}`,
        };
    }

    return (
        <Box className={styles.tabs_container}>
            <Tabs 
                value={value} 
                onChange={handleChange}
                TabIndicatorProps={{
                    style: {
                        backgroundColor: "var(--color-primary)",
                    },
                }}
            >
                {
                    genresList.map((genre) => {
                        return (
                            <Tab 
                                key={genre.key} 
                                label={genre.label} 
                                {...a11yProps(genre.key)} 
                                className={styles.tab_button}
                            />
                        );
                    })
                }
            </Tabs>
        </Box>
    );
};

const Controls = ({ list }) => {
    const swiper = useSwiper();

    useEffect(() => {
        swiper.slideTo(0);
    }, [list]);

    return <></>;
};

/**
 * 
 * @param {List<object>} list
 * list of albums or songs 
 * @returns 
 */
const Carousel = ({ list }) => {
    
    return (
        <Box>
            <Swiper
                spaceBetween={40}
                slidesPerView={7}
                scrollbar={{ draggable: true }}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
            >
                <Controls list={list} />
                <CarouselLeftNavigation />
                <CarouselRightNavigation />
                {
                    list.map((item) => {
                        return (
                            <SwiperSlide key={item.id}>
                                <Card 
                                    image={item.image}
                                    title={item.title}
                                    follows={ item.follows ? `${item.follows} Follows` : `${item.likes} Likes`}
                                />
                            </SwiperSlide>
                        )
                    })
                }
            </Swiper>
        </Box>
    );
};

/**
 * 
 * @param {List<object>} list
 * list of albums or songs 
 * @returns 
 */
const CardGrid = ({ list }) => {
    return (
        <Box className={styles.card_grid}>
            {
                list.map((item) => {
                    return (
                        <Card 
                            key={item.id}
                            image={item.image}
                            title={item.title}
                            follows={ item.follows ? `${item.follows} Follows` : `${item.likes} Likes`}
                        />
                    )
                })
            }
        </Box>
    );
};

/**
 * 
 * @param {string} sectionTitle
 * title of section Top, New or Songs
 * @param {List<Object>} list 
 * list of albums or songs
 * @param {Function} setAllSongsList
 * set list of songs for songs
 * @returns {} none
 */

const Section = ({ sectionTitle, list, setAllSongsList }) => {
    const [isButtonCollapse, setIsButtonCollapse] = useState(true);

    return (
        <>
            <Box className={styles.section_body}>
                <Box className={styles.heading_button_container}>
                    <p className={styles.heading}>
                        {sectionTitle}
                    </p>
                    {
                        (sectionTitle !== 'Songs') 
                            &&
                        <button 
                            className={styles.button}
                            onClick={() => setIsButtonCollapse((prev) => !prev) }
                        >
                            {!isButtonCollapse ? 'Collapse' : 'Show all'}
                        </button>
                    }
                </Box>
                {
                    (sectionTitle === 'Songs') 
                        &&
                    <TabsContainer setAllSongsList={setAllSongsList} list={list} />
                }
                {
                    isButtonCollapse
                     ? (
                        <Carousel list={list} />
                    ) : (
                        <CardGrid list={list} />
                    )
                }
            </Box>
            {
                (!isButtonCollapse && sectionTitle === 'Top Albums') && <hr className={styles.hr} />
            }
        </>
    );
};

export default Section;