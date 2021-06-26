import React, { useState } from "react"
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
} from "react-google-maps"

import {
  TabsRow,
  Tab,
  Info,
  PictureContent,
  AccordionContainer,
} from "../../styles/life/austin-food.styles"

import Layout from "../../components/layout"
import SEO from "../../components/seo"

// Accordion
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion"
import "react-accessible-accordion/dist/fancy-example.css"

// Lat/lng bounds to restrict map zoom within Austin
const austinBounds = {
  latLngBounds: {
    north: 30.487,
    south: 30.185,
    west: -97.95,
    east: -97.664,
  },
}

const locationData = {
  favorites: [
    {
      name: "Tumble22",
      lat: 30.348045933913422,
      lng: -97.7352554290337,
      website: "http://tumble22.com/",
      image: "https://i.imgur.com/BvVnh4R.jpg",
    },
    {
      name: "Ramen Tatsu-Ya",
      lat: 30.263145024150198,
      lng: -97.72641810911325,
      website: "https://ramen-tatsuya.com/",
      image: "https://i.imgur.com/tlzZhai.jpg",
    },
    {
      name: "Bar Peached",
      lat: 30.273615607598227,
      lng: -97.75999533088437,
      website: "https://barpeached.com/",
      image: "https://i.imgur.com/2OH709n.jpg",
    },
    {
      name: "Kebabalicious",
      lat: 30.26454144812315,
      lng: -97.72827850204884,
      website: "https://www.kebabalicious.com/",
      image: "https://i.imgur.com/UcqHQg5.jpg",
    },
    {
      name: "Trudy's",
      lat: 30.370780356094468,
      lng: -97.7275283732115,
      website: "https://www.trudys.com/mobile/index.php",
      image: "https://i.imgur.com/FRMSZ7j.jpg",
    },
    {
      name: "Taste of Ethiopia",
      lat: 30.22614669447766,
      lng: -97.76200884622767,
      website: "http://www.tasteofethiopiaaustin.com/",
      image: "https://i.imgur.com/UJqGckQ.jpg",
    },
  ],
  westCampus: [
    {
      name: "The Pizza Press",
      lat: 30.29074581683262,
      lng: -97.74209649488328,
      website: "https://www.thepizzapress.com/location/austin-tx/",
      image: "https://i.imgur.com/QiChE3O.jpg",
    },
    {
      name: "Don Japanese Kitchen",
      lat: 30.286142345491808,
      lng: -97.74250230166828,
      website: "https://www.facebook.com/DonJapanese/",
      image: "https://i.imgur.com/LbJse08.jpg",
    },
    {
      name: "Pluckers Wing Bar",
      lat: 30.286321997712328,
      lng: -97.7450363738324,
      website: "https://www.pluckers.com/",
      image: "https://i.imgur.com/jjmZuRC.jpg",
    },
    {
      name: "Bao'd Up",
      lat: 30.28717470740734,
      lng: -97.7448838784513,
      website: "https://www.baodup.com/",
      image: "https://i.imgur.com/ryLa5Ba.jpg",
    },
    {
      name: "Cabo Bob's",
      lat: 30.295755231667666,
      lng: -97.74414760385584,
      website: "https://cabobobs.com/",
      image: "https://i.imgur.com/WvgWGRX.jpg",
    },
  ],
  deals: [
    {
      name: "EastSide Tavern",
      lat: 30.258764814686867,
      lng: -97.72884901739155,
      website: "https://www.eastsidetavernaustin.com/",
      image: "https://i.imgur.com/zyZfpfd.jpg",
    },
    {
      name: "Lavaca Street Bar",
      lat: 30.24137870702838,
      lng: -97.78502300204927,
      website: "https://lavacasouthlamar.com/",
      image: "https://i.imgur.com/nrPRm37.jpg",
    },
    {
      name: "Drinks Lounge",
      lat: 30.256533357212277,
      lng: -97.72326110204897,
      website: "https://www.drinkslounge.bar/",
      image: "https://i.imgur.com/q5PLsY8.jpg",
    },
    {
      name: "Cuantos Tacos",
      lat: 30.27268900574792,
      lng: -97.72827160389822,
      website: "https://www.facebook.com/cuantostacos512/",
      image: "https://i.imgur.com/QFLuF0U.jpg",
    },
  ],
  desserts: [
    {
      name: "Voodoo Doughnut",
      lat: 30.267820733304852,
      lng: -97.74083591567542,
      website: "https://www.voodoodoughnut.com/",
      image: "https://i.imgur.com/5vdDOsH.jpg",
    },
    {
      name: "Bananarchy",
      lat: 30.288381173223502,
      lng: -97.74168848315303,
      website: "https://bananarchy.net/",
      image: "https://i.imgur.com/v1qp1S5.jpg",
    },
    {
      name: "Gourdough's Big. Fat. Donuts.",
      lat: 30.249749061586023,
      lng: -97.75470837136396,
      website: "https://gourdoughs.com/",
      image: "https://i.imgur.com/5gLDWwT.jpg",
    },
    {
      name: "Jeni's Splendid Ice Creams",
      lat: 30.25203841732729,
      lng: -97.74894602903525,
      website: "https://jenis.com/",
      image: "https://i.imgur.com/w5GH6GF.jpg",
    },
  ],
}

// Map styles that change map to dark mode and hide all POI (point-of-interest) labels
const darkModeStyles = [
  { elementType: "geometry", stylers: [{ color: "#242f3e" }] },
  {
    elementType: "labels.text.stroke",
    stylers: [{ color: "#242f3e" }],
  },
  { elementType: "labels.text.fill", stylers: [{ color: "#746855" }] },
  {
    featureType: "administrative.locality",
    elementType: "labels.text.fill",
    stylers: [{ color: "#d59563" }],
  },
  {
    featureType: "poi",
    stylers: [{ visibility: "off" }],
  },
  {
    featureType: "road",
    elementType: "geometry",
    stylers: [{ color: "#38414e" }],
  },
  {
    featureType: "road",
    elementType: "geometry.stroke",
    stylers: [{ color: "#212a37" }],
  },
  {
    featureType: "road",
    elementType: "labels.text.fill",
    stylers: [{ color: "#9ca5b3" }],
  },
  {
    featureType: "road.highway",
    elementType: "geometry",
    stylers: [{ color: "#746855" }],
  },
  {
    featureType: "road.highway",
    elementType: "geometry.stroke",
    stylers: [{ color: "#1f2835" }],
  },
  {
    featureType: "road.highway",
    elementType: "labels.text.fill",
    stylers: [{ color: "#f3d19c" }],
  },
  {
    featureType: "transit",
    elementType: "geometry",
    stylers: [{ color: "#2f3948" }],
  },
  {
    featureType: "transit.station",
    elementType: "labels.text.fill",
    stylers: [{ color: "#d59563" }],
  },
  {
    featureType: "water",
    elementType: "geometry",
    stylers: [{ color: "#17263c" }],
  },
  {
    featureType: "water",
    elementType: "labels.text.fill",
    stylers: [{ color: "#515c6d" }],
  },
  {
    featureType: "water",
    elementType: "labels.text.stroke",
    stylers: [{ color: "#17263c" }],
  },
]

const MapComponent = withScriptjs(
  withGoogleMap(props => (
    <GoogleMap
      defaultZoom={13}
      defaultCenter={{ lat: 30.267081411943824, lng: -97.7433044668374 }}
      options={{
        streetViewControl: false,
        mapTypeControl: false,
        fullscreenControl: false,
        restriction: austinBounds,
        styles: darkModeStyles,
      }}
    >
      {props.isMarkerShown &&
        props.activeLocations.map(location => (
          <Marker
            position={{ lat: location.lat, lng: location.lng }}
            onClick={() => props.setActivePlace(location)}
            opacity={props.activePlace === location ? 1 : 0.4}
          />
        ))}
    </GoogleMap>
  ))
)

const AustinFoodPage = () => {
  const [activeTab, setActiveTab] = useState("favorites")
  const [activePlace, setActivePlace] = useState(null)

  return (
    <Layout back="/life">
      <SEO title="Austin Food Favorites" />
      <h1>Austin Food Favorites</h1>
      <p>
        I've only lived in Austin for the amount of time that I went to UT, but
        it's definitely turned me into a foodie! There are many unique
        restaurants or local eateries that are exclusive to Austin, and I've
        made it a hobby to try as many as I can! There are many sources out
        there that list the most popular joints in Austin, and these are just my
        personal recommendations, but those sources (primarily austin.eater.com
        and r/austinfood) have helped me discover these places to begin with!
      </p>
      <p>
        Clicking on the markers on the map or the accordions below the map will
        reveal more information about the restaurant (as well as a picture that
        I took!).
      </p>
      <MapComponent
        isMarkerShown
        activeLocations={locationData[activeTab]}
        activePlace={activePlace}
        setActivePlace={setActivePlace}
        googleMapURL={`https://maps.googleapis.com/maps/api/js?key=${process.env.GATSBY_MAPS_API_KEY}&v=3.exp&libraries=geometry,drawing,places`}
        loadingElement={<div style={{ height: `100%` }} />}
        containerElement={<div style={{ height: `600px` }} />}
        mapElement={<div style={{ height: `100%` }} />}
      />
      <TabsRow>
        {Object.keys(locationData).map(key => (
          <Tab
            active={activeTab === key}
            onClick={() => {
              setActivePlace(null)
              setActiveTab(key)
            }}
          >
            {key.replace(/([A-Z])/g, " $1")}
          </Tab>
        ))}
      </TabsRow>

      <Info>
        <PictureContent>
          {activePlace ? (
            <div>
              <h2>{activePlace.name}</h2>
              <img src={activePlace.image} alt={activePlace.name} />
            </div>
          ) : (
            <div>Click a restaurant to see a picture!</div>
          )}
        </PictureContent>
        <AccordionContainer activeTab={activeTab}>
          <Accordion allowZeroExpanded={true}>
            {locationData[activeTab].map(location => (
              <AccordionItem
                uuid={location.name.replace(/ /g, "")}
                onClick={() => setActivePlace(location)}
                dangerouslySetExpanded={location === activePlace}
              >
                <AccordionItemHeading>
                  <AccordionItemButton>{location.name}</AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                  <div>
                    <a
                      href={location.website}
                      target="_blank"
                      rel="noreferrer"
                      style={{ color: "white" }}
                    >
                      Visit Website
                    </a>
                  </div>
                </AccordionItemPanel>
              </AccordionItem>
            ))}
          </Accordion>
        </AccordionContainer>
      </Info>
    </Layout>
  )
}

export default AustinFoodPage
