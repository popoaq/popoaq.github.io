import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Emma Tang" />
    <div style={{"font-size":"30px"}}>Emma Tang</div>
    <div>
      <a href="https://twitter.com/emmaytang">Twitter</a><br/>
      <a href="https://thoughtcloud.substack.com/">Words</a><br/>
      <a href="https://www.linkedin.com/in/emmaytang/">Linkedin</a><br/>
    </div>

  </Layout>
)

export default IndexPage