import React from "react"
import Sidebar from "../Sidebar"
import GlobalStyles from "../../styles/global"
import { LayoutMain, LayoutWrapper } from "./styles"

const Layout: React.FC = ({ children }) => {
  return (
    <LayoutWrapper>
      <GlobalStyles />
      <Sidebar />
      <LayoutMain>{children}</LayoutMain>
    </LayoutWrapper>
  )
}

export default Layout
