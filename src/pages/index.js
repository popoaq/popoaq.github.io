import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="emma tang" />
    <div style={{"font-size":"30px"}}>emma tang</div>
    <div>
      <a href="https://twitter.com/emmaytang">twitter</a><br/>
      <a href="https://thoughtcloud.substack.com/">words</a><br/>
      <a href="https://www.notion.so/antilibrary-3997863c457d479f926188af51edcdbd">antilibrary</a><br/>
      <a href="https://www.linkedin.com/in/emmaytang/">linkedin</a><br/>
    </div>

  </Layout>
)

export default IndexPage