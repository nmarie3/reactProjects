const Episode = ({title, pubDate, link, mp3}) => {
  return (
    <div className="episodeContainer">
    <div>
        <a href={link} target="_blank" rel="noopener noreferrer">
            <p>{title}</p>
            <p>{pubDate}</p>
        </a>
        <audio src={mp3} controls />
    </div>
    <div className="notesContainer">
        <label>Add Notes</label>
        <textarea placeholder="Your thoughts?"/>
    </div>
    </div>
  )
}

export default Episode
