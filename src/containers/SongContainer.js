import {useState, useEffect} from 'react';
import SongList from '../components/SongList';

const SongContainer = () => {

    const [songs,setSongs] = useState([]);
    const [loaded, setLoaded] = useState(false);

    const getSong = () => {
        fetch(`https://itunes.apple.com/gb/rss/topsongs/limit=20/json`)
        .then(res => res.json())
        .then(data => setSongs(data.feed.entry))
        .then(()=> setLoaded(true))
    }

    useEffect(()=>{
        getSong();
    },[])

    return(
        <>
            <SongList songs={songs} loaded={loaded}/>
        </>
    )
}

export default SongContainer;