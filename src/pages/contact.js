import React from "react"
import styled from "styled-components"
import Layout from "../components/layout"
import SEO from "../components/seo"
import ContactHeader from "../components/Contact/ContactHeader"
import ContactSubText from "../components/Contact/ContactSubText"

const ContactTextWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(16, 1fr);
  grid-template-rows: repeat(3, minmax(150px, auto));
`

export default function contact() {
  return (
    <Layout>
      <SEO title="Contact" description="Dylan's portfolio contact page" />
      <ContactTextWrapper>
        <ContactHeader />
        <ContactSubText />
      </ContactTextWrapper>
    </Layout>
  )
}
