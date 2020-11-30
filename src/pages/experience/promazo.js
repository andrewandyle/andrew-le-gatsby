import React, { useState } from "react"

import Layout from "../../components/layout"	
import SEO from "../../components/seo"

// Accordion
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from 'react-accessible-accordion'

// Demo styles, see 'Styles' section below for some notes on use.
import 'react-accessible-accordion/dist/fancy-example.css'

import { Wrapper, AccordionContainer, PictureContent } from '../../styles/experience/promazo.styles'

import Filter1 from '../../images/experience/promazo/filter1.png'
import Filter2 from '../../images/experience/promazo/filter2.png'
import Location from '../../images/experience/promazo/location1.png'
import Extension1 from '../../images/experience/promazo/extension1.png'
import Extension2 from '../../images/experience/promazo/extension2.png'
import PositionCards from '../../images/experience/promazo/positioncards.png'
import Mentors from '../../images/experience/promazo/100km1.png'
import CreateSchool from '../../images/experience/promazo/schoolmodal.png'
import ExtensionPage1 from '../../images/experience/promazo/extensionpage1.png'
import ExtensionPage2 from '../../images/experience/promazo/extensionpage2.png'

const defaultPictureContent = <div>Click a month to see visuals!</div>
const monthInfo = {
  may: <div><img src={Filter1} alt="Filter" /><img src={Filter2} alt="Filter" /></div>,
  june: <div><img src={Location} alt="Location" /></div>,
  july: <div><img src={Extension1} alt="Extension" /><img src={Extension2} alt="Extension" /></div>,
  august: <div><img src={PositionCards} alt="Position Cards" /></div>,
  september: <div><img src={Mentors} alt="100k Mentors" /></div>,
  october: <div><img src={CreateSchool} alt="Create School" /></div>,
  november: <div><img src={ExtensionPage1} alt="Extension Page" /><img src={ExtensionPage2} alt="Extension Page" /></div>,
}

const ProMazoPage = () => {
  const [pictureContent, setPictureContent] = useState(defaultPictureContent)

  return (
    <Layout back="/experience">	
      <SEO title="ProMazo" />
      <h1>ProMazo Overview</h1>
      <p>ProMazo's mission is to bring work opportunities to college students who needed help identifying their
        interests and where they want to apply their skills. They reached out to me through LinkedIn in March 2020
        for an internal opportunity, and after struggling during recruitment, this became my first development job.
        I felt like their target audience was something I was part of as well, and I felt passionate about delivering
        on that initiative during my time here.</p>
      <p>I worked as a full stack developer on two apps: an internal PWA that streamlines the job search, and our
        100k Mentor Challenge mobile app. I was able to grow my skills tremendously when working with React, Redux,
        GraphQL, and AWS. This was also my first real team experience, following a Scrum workflow and planning new
        features each sprint.</p>
      <Wrapper>
        <AccordionContainer>
          <Accordion
            allowZeroExpanded={true}
            onChange={(e => {
              if (e.length) {
                setPictureContent(monthInfo[e[0]])
              } else {
                setPictureContent(defaultPictureContent)
              }
            })}
          >
            <AccordionItem uuid="may">
              <AccordionItemHeading>
                <AccordionItemButton style={{ color: 'white', backgroundColor: 'blue' }}>
                  MAY
                </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel>
                <p><strong>Focus:</strong> Pagination, Filtering</p>
                <strong>Goals:</strong>
                <ul>
                  <li>Allow users to infinite scroll through each page to view more data</li>
                  <li>Allow users to input name or enum filters on data from search queries</li>
                </ul>
                <strong>What I Used/Learned:</strong>
                <ul>
                  <li>Elasticsearch</li>
                  <li>GraphQL Query Filters</li>
                </ul>
              </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem uuid="june">
              <AccordionItemHeading>
                <AccordionItemButton>
                  JUNE
                </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel>
                <p><strong>Focus:</strong> Location API, Admin Dashboard</p>
                <strong>Goals:</strong>
                <ul>
                  <li>Allow users to assign Google locations to companies and positions</li>
                  <li>Allow admins to promote companies and positions to become public</li>
                </ul>
                <strong>What I Used/Learned:</strong>
                <ul>
                  <li>Google Maps/Places API</li>
                  <li>AWS AppSync Authorization</li>
                  <li>AWS Cognito</li>
                </ul>
              </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem uuid="july">
              <AccordionItemHeading>
                <AccordionItemButton>
                  JULY
                </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel>
                <p><strong>Focus:</strong> Client Reducer, Chrome Extension</p>
                <strong>Goals:</strong>
                <ul>
                  <li>Manage the frontend state in a single reducer instead of every page's corresponding reducer</li>
                  <li>Allow users to scrape companies and positions from Glassdoor and LinkedIn using a Chrome extension</li>
                </ul>
                <strong>What I Used/Learned:</strong>
                <ul>
                  <li>Creating Redux Reducers</li>
                  <li>Chrome Extension Scripts</li>
                </ul>
              </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem uuid="august">
              <AccordionItemHeading>
                <AccordionItemButton>
                  AUGUST
                </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel>
                <p><strong>Focus:</strong> Position Cards, 100k Onboarding</p>
                <strong>Goals:</strong>
                <ul>
                  <li>Redesign the card component of the Positions page</li>
                  <li>Develop all logic for the onboarding sections for 100k Mentor Challenge</li>
                </ul>
                <strong>What I Used/Learned:</strong>
                <ul>
                  <li>Styled Components</li>
                  <li>React Native Development</li>
                </ul>
              </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem uuid="september">
              <AccordionItemHeading>
                <AccordionItemButton>
                  SEPTEMBER
                </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel>
                <p><strong>Focus:</strong> 100k Onboarding, Redesign Fixes</p>
                <strong>Goals:</strong>
                <ul>
                  <li>Develop all logic for the onboarding sections for 100k Mentor Challenge</li>
                  <li>Finish and debug redesigns on the individual position and contact views</li>
                </ul>
              </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem uuid="october">
              <AccordionItemHeading>
                <AccordionItemButton>
                  OCTOBER
                </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel>
                <p><strong>Focus:</strong> Bug Fixes</p>
                <strong>Goals:</strong>
                <ul>
                  <li>Fix as many critical bugs as possible throughout the app</li>
                  <li>Change the GraphQL schema to use new models in data submission</li>
                  <li>Allow users to create a school for their education info on onboarding</li>
                </ul>
              </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem uuid="november">
              <AccordionItemHeading>
                <AccordionItemButton>
                  NOVEMBER
                </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel>
                <p><strong>Focus:</strong> Chrome Extension</p>
                <strong>Goals:</strong>
                <ul>
                  <li>Allow users to edit and create extension companies and positions on the app</li>
                  <li>Update the extension scrapers to retrieve additional data</li>
                </ul>
              </AccordionItemPanel>
            </AccordionItem>
          </Accordion>
        </AccordionContainer>
        <PictureContent>
          {pictureContent}
        </PictureContent>
      </Wrapper>
    </Layout>
  )
}

export default ProMazoPage
