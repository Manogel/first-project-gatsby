import React from "react"
import Profile from "../Profile"
import GlobalStyles from "../../styles/global"
import { LayoutMain, LayoutWrapper } from "./styles"

const Layout: React.FC = ({ children }) => {
  return (
    <LayoutWrapper>
      <GlobalStyles />
      <aside>
        <Profile />
      </aside>
      <LayoutMain>{children}</LayoutMain>
    </LayoutWrapper>
  )
}

export default Layout
