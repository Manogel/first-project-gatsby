import React from "react"
import { PageProps } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage: React.FC<PageProps> = props => (
  <Layout>
    <SEO title="Home" />
    <h1>Hi people</h1>
    <h1>{props.path}</h1>
  </Layout>
)

export default IndexPage
