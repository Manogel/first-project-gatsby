import React from "react"
import Profile from "../Profile"
import SocialLinks from "../SocialLinks"

import { Container } from "./styles"
import MenuLinks from "../MenuLinks"

const Sidebar: React.FC = () => {
  return (
    <Container>
      <Profile />
      <SocialLinks />
      <MenuLinks />
    </Container>
  )
}

export default Sidebar
