import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { AvatarWrapper } from "./styles"

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

  return <AvatarWrapper fixed={data.avatarImage.childImageSharp.fixed} />
}

export default Avatar
