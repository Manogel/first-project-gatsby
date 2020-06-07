import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
// import { Container } from './styles';

const Avatar: React.FC = () => {
  const data = useStaticQuery(graphql`
    query {
      avatarImage: file(relativePath: { eq: "profile.jpg" }) {
        childImageSharp {
          fixed(width: 60, height: 60) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)

  return <Img fixed={data.avatarImage.childImageSharp.fixed} />
}

export default Avatar
