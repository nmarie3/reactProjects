import React from 'react'

const Feed = ({title, link, date}) => {

{/*this is one of many ways to reformat a date to avoid it showing us a weird long string like this "Wed, 16 Apr 2025 23:59:00 -0400" and turn it into something more appealing*/}
let formatted = {day: "numeric", month: "long", year: "numeric"}
let articleDate = new Date(date).toLocaleDateString("ja-JP", formatted)


  return (
    <>
        <p>{articleDate}</p>
        <a href={link} target="blank" rel="noopener noreferrer">
        <h3>{title}</h3>
        </a>
    </>
  )
}

export default Feed
