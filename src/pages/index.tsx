import React from "react"
import { PageProps, Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage: React.FC<PageProps> = props => (
  <Layout>
    <SEO title="Home" />
    <h1>Hi people</h1>
    <ul>
      <li>
        <a href="/about">About</a>
      </li>
      <li>
        <Link to="/" activeStyle={{ color: "red" }}>
          Home
        </Link>
      </li>
      <li>
        <Link to="/about">About Link</Link>
      </li>
    </ul>
    <h1>{props.path}</h1>
  </Layout>
)

export default IndexPage
