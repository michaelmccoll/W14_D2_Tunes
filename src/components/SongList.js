import SongDetails from './SongDetails';

const SongList = ({songs,loaded}) => {

    const songNodes = songs.map(song => {
        return(
            <SongDetails 
            title={song["im:name"].label} 
            artist={song["im:artist"].label} 
            image={song["im:image"][0].label}
            preview={song.link[1].attributes.href}
            />
        )
    })

    return(
        <>
            <ol>
                {songNodes}
            </ol>
        </>

    )
}

export default SongList;