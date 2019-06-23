import React from "react"
import { graphql } from 'gatsby'
// import {Link} from 'gatsby'
// import Img from 'gatsby-image'


import Layout from "../components/layout"
import SEO from "../components/seo"
import HeroSection from "../components/Reuseable/HeroSection"
import Infoblock from "../components/Reuseable/infoblock"
import DualInfoBlock from "../components/Reuseable/DualInfoBlock"
import TeamPhotoSection from "../components/About/TeamPhotoSection"

const AboutPage = ({ data }) => (
  <Layout>
    <SEO title="Home" />
    <HeroSection
    img={data.img.childImageSharp.fluid}
    title="I write Code"
    heroclass="about-background"
    />
    <DualInfoBlock heading="Message from CEO" />
    <Infoblock heading="About Us" />
    <TeamPhotoSection />
    
  </Layout>
)

export const query = graphql`
{
  img: file(relativePath: { eq: "about.png" }) {
    childImageSharp {
      fluid {
        ...GatsbyImageSharpFluid_tracedSVG

      }
    }
  }
}
`
export default AboutPage
