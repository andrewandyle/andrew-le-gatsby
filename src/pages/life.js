import React from "react"	
import { Link } from "gatsby"	

import Layout from "../components/layout"	
import SEO from "../components/seo"	

const SecondPage = () => (
  <Layout>	
    <SEO title="Life" />	
    <Link to="/life/oop-blog">Go to OOP Blogs</Link>	
  </Layout>	
)	

export default SecondPage
