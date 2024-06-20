import { useState, useEffect } from "react";
import Section from "../Section/Section";
import axios from "axios";

const AllAlbumSection = () => {
    const [topAlbumsList, setTopAlbumsList] = useState([]);
    const [newAlbumsList, setNewAlbumsList] = useState([]);

    useEffect(() => {
        async function fetchData() {
            try {
                const response1 = await axios.get('https://qtify-backend-labs.crio.do/albums/top');
                setTopAlbumsList(response1.data);
            } catch(e) {

            }
        }

        fetchData();
    }, []);

    return (
        <div >
            <Section 
                sectionTitle='Top Albums'
                albumsList={topAlbumsList}
            />
            {/* <Section /> */}
        </div>
    );
};

export default AllAlbumSection;