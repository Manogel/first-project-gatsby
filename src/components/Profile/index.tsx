import React from "react"
import { useStaticQuery, graphql } from "gatsby"

// import { Container } from './styles';

interface IQuery {
  site: {
    siteMetadata: {
      title: string
      description: string
      position: string
      author: string
    }
  }
}

const Profile: React.FC = () => {
  const data = useStaticQuery<IQuery>(graphql`
    query MyQuery {
      site {
        siteMetadata {
          title
          description
          position
          author
        }
      }
    }
  `)

  const { author, position, title } = data.site.siteMetadata

  return (
    <div className="profile-wrapper">
      <h1>{title}</h1>
      <h2>{position}</h2>
      <p>{author}</p>
    </div>
  )
}

export default Profile
