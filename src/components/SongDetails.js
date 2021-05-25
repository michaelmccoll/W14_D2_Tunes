import '../components/SongDetails.css';

const SongDetails = ({title,artist,image,preview}) => {
    return(
        <>
            <li class="details">
                <p>Title: {title}</p>
                <p>Artist: {artist}</p>
                <img class="img" src={image}/>
                <audio class="audio" controls src={preview}/>
            </li>
        </>
    )
}

export default SongDetails;