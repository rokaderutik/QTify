import { useState, useEffect } from "react";
import Section from "../Section/Section";
import axios from "axios";

const AllAlbumSection = () => {
    const [topAlbumsList, setTopAlbumsList] = useState([]);
    const [newAlbumsList, setNewAlbumsList] = useState([]);

    useEffect(() => {
        async function fetchData() {
            try {
                const responseTop = await axios.get('https://qtify-backend-labs.crio.do/albums/top');
                setTopAlbumsList(responseTop.data);

                const responseNew = await axios.get('https://qtify-backend-labs.crio.do/albums/new');
                setNewAlbumsList(responseNew.data);
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
            <Section 
                sectionTitle='New Albums'
                albumsList={newAlbumsList}
            />
        </div>
    );
};

export default AllAlbumSection;