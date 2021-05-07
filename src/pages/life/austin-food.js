import React from "react"
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
} from "react-google-maps"

import Layout from "../../components/layout"
import SEO from "../../components/seo"

const MapComponent = withScriptjs(
  withGoogleMap(props => (
    <GoogleMap
      defaultZoom={17}
      defaultCenter={{ lat: 30.288, lng: -97.749 }}
      defaultOptions={{
        restriction: {
          latLngBounds: {
            north: 30.487,
            south: 30.185,
            west: -97.95,
            east: -97.664,
          },
        },
      }}
    >
      {props.isMarkerShown && (
        <Marker position={{ lat: 30.288, lng: -97.749 }} />
      )}
    </GoogleMap>
  ))
)

const AustinFoodPage = () => (
  <Layout back="/life">
    <SEO title="Austin Food Favorites" />
    <h1>Austin Food Favorites</h1>
    <p>
      This page is a WIP. I'll be listing my favorite restaurants here! For now,
      I've managed to put an embedded Google Map here restricted to show only
      Austin.
    </p>
    <MapComponent
      isMarkerShown
      googleMapURL={`https://maps.googleapis.com/maps/api/js?key=${process.env.GATSBY_MAPS_API_KEY}&v=3.exp&libraries=geometry,drawing,places`}
      loadingElement={<div style={{ height: `100%` }} />}
      containerElement={<div style={{ height: `600px` }} />}
      mapElement={<div style={{ height: `100%` }} />}
    />
  </Layout>
)

export default AustinFoodPage
