export default function CardEpisode({ data: episodes }){
    return(
        <div className='card char'>
            <h2>{episodes.name}</h2>

            <div className='char-info'>
                <span><b>Air date: </b> {episodes.air_date} </span>
                <span><b>Episode: </b> {episodes.episode} </span>
            </div>

            <h2><b>Id: </b>{episodes.id}</h2>
        </div>
    )
}