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
      paragraphs: [
        "Definitely my favorite chicken joint in Austin, and one with a broad range of spice levels! A friend recommended it to me after telling me that even his virtual co-workers across the U.S. knew about this place, so it's apparently a big deal!",
        "The spiciest levels are no joke, so definitely take caution if you don't know how much you can handle! I've had both the tenders and OG chicken sandwich, and I always pair them with a side of dirty fries!",
        "They also have good happy hour deals on weekdays from 3-6pm, so I recommend dropping by for a slightly early dinner if possible!",
      ],
    },
    {
      name: "Ramen Tatsu-Ya",
      lat: 30.263145024150198,
      lng: -97.72641810911325,
      website: "https://ramen-tatsuya.com/",
      image: "https://i.imgur.com/tlzZhai.jpg",
      paragraphs: [
        "Ramen Tatsu-Ya is THE social ramen joint in Austin, no contest. I've gone here multiple times with my UT friends. And even after trying many different ramen places, this one still stands out.",
        "The most popular items here are always the tonkotsu ramen (which is the picture). I always like ordering bombs as well as extra noodles (which I find necessary, since I never get filled without them).",
      ],
    },
    {
      name: "Bar Peached",
      lat: 30.273615607598227,
      lng: -97.75999533088437,
      website: "https://barpeached.com/",
      image: "https://i.imgur.com/2OH709n.jpg",
      paragraphs: [
        "An Asian fusion comfort food restaurant that I've seen recommended multiple times on r/austinfood. It's quite pricey though, so I definitely come to this place when I feel like I deserve the treat.",
        "The picture is their mapo bolognese, which is one of their most popular items, and is also quite spicy! They also have a steak & frites night every Tuesday (though I find it overpriced). I usually finish off a meal by ordering their bingsu, which is Korean-style shaved ice.",
        "I should mention they have a sister restaurant called The Peached Tortilla, which you can find on Burnet Rd., and it's also really good!",
      ],
    },
    {
      name: "Kebabalicious",
      lat: 30.26454144812315,
      lng: -97.72827850204884,
      website: "https://www.kebabalicious.com/",
      image: "https://i.imgur.com/UcqHQg5.jpg",
      paragraphs: [
        "A Turkish kebab restaurant on E 7th St. A pretty lowkey place that I discovered myself with my friends, and it's great in terms of quality and value, so I highly recommend giving it a try!",
        "I usually go for their meat options, but you can also customize your kebab if you want! Also, I find their king size kebabs (the picture is king size) to be quite a lot (at least for my small stomach) and actually worth its price!",
      ],
    },
    {
      name: "Trudy's",
      lat: 30.370780356094468,
      lng: -97.7275283732115,
      website: "https://www.trudys.com/mobile/index.php",
      image: "https://i.imgur.com/FRMSZ7j.jpg",
      paragraphs: [
        "A local Tex-Mex restaurant and bar. I went to Trudy's Texas Star with a group of friends during my first year at UT, and that was their West Campus location, which unfortunately closed down. But much later, I got to eat Trudy's again at their North Star location on Burnet Rd!",
        "Their most popular item, without a doubt, is the stuffed avacado (which is the picture, and probably hard to tell), and that's what I got both times. It's a fried and breaded avacado, sauced and coated with cheese, stuffed with chicken and more cheese! And like most other Tex-Mex places, the sides and chips complete the value.",
      ],
    },
    {
      name: "Taste of Ethiopia",
      lat: 30.22614669447766,
      lng: -97.76200884622767,
      website: "http://www.tasteofethiopiaaustin.com/",
      image: "https://i.imgur.com/UJqGckQ.jpg",
      paragraphs: [
        "I've never had Ethiopian food before this place, so it was a really unique experience! Their food is served on top of injera, which is their sourdough pancake that's yeast-risen and has a spongy texture. I really like the way they arrange their food, and eating the shareable portions with our fingers was a great experience!",
        "They also have a lunch buffet every weekday from 11am-2pm, which I haven't tried but I would probably try out in the future!",
        "I also went to Habesha Ethiopian Restaurant which is up north (I-35 and 290), and I find that place just as good as this one!",
      ],
    },
  ],
  westCampus: [
    {
      name: "The Pizza Press",
      lat: 30.29074581683262,
      lng: -97.74209649488328,
      website: "https://www.thepizzapress.com/location/austin-tx/",
      image: "https://i.imgur.com/QiChE3O.jpg",
      paragraphs: [
        "This pizza place on 26th St is the very first restaurant I went to in West Campus during UT orientation, and I always enjoy coming back for more and bringing friends over.",
        "They create personal pizzas in front of you, and I always create my own pizza. I probably haven't tried their pre-made flavors because I always like to switch up everything, including my sauces, meats, toppings and sauces. I just get wacky combinations for no reason, but it never disappoints!",
      ],
    },
    {
      name: "Don Japanese Kitchen",
      lat: 30.286142345491808,
      lng: -97.74250230166828,
      website: "https://www.facebook.com/DonJapanese/",
      image: "https://i.imgur.com/LbJse08.jpg",
      paragraphs: [
        "This Japanese food truck behind the UT Co-Op used to be an actual restaurant on 27th St. This place is infamous for having long lines, with very restrictive hours now, opening at noon and closing when they run out. And that's fast: on normal school days, at LEAST 40 people are lined up before opening. It's crazy.",
        "They also have less options at the food truck than they did the restaurant, as I had eaten fatty tuna and takoyaki at the restaurant. At the food truck, I always get their don chicken with fries (picture). It was $6 during the semester and absolutely BUSTED with a good portion size, but rose to $8 recently (maybe because the summer is less crowded, only 20 people waiting before opening).",
        "I find this place worth trying, but it always helps to be at least 30 minutes early if you come by so you don't have to wait so long.",
      ],
    },
    {
      name: "Pluckers Wing Bar",
      lat: 30.286321997712328,
      lng: -97.7450363738324,
      website: "https://www.pluckers.com/",
      image: "https://i.imgur.com/jjmZuRC.jpg",
      paragraphs: [
        "Pluckers is somewhat easy to run into in Texas, but it's placed really well in Rio Grande St, where a lot of students live near. So this is a very popular spot for groups of students to hang. It also has maaaaaany good wing flavors.",
        "But why I keep coming back here is because my friends always get the Monday deal, an all-you-can-eat bone-in wings buffet. I go with them, but I'm never efficient when it comes to the buffet while they're literally monsters, so I've stuck with their regular items: I mostly get their burgers and sandwiches, which are pricey but great quality.",
        "I never come here for boneless wings though. They're huge to the point where they're basically tenders, which I don't really like, and I'd have to eat them with utensils. I like smaller wings better, preferrably the size of Wingstop, so I can taste more skin instead of meat.",
      ],
    },
    {
      name: "Bao'd Up",
      lat: 30.28717470740734,
      lng: -97.7448838784513,
      website: "https://www.baodup.com/",
      image: "https://i.imgur.com/ryLa5Ba.jpg",
      paragraphs: [
        "A casual Asian eatery that is on Rio Grande St, close to many students just like Pluckers. While I tend to get meals here to treat myself, they're mostly a snack place with their variety of steamed baozi. (I'm sure the item on the picture was the chicken quarter combo, but I don't see it anymore on their menu... strange...)",
        "Many UT CS events that I've attended, especially hackathons, will order catering from this place, so there's always a pretty big supply for students. But the quality of catering is, of course, nothing compared to actually eating at the restaurant.",
      ],
    },
    {
      name: "Cabo Bob's",
      lat: 30.295755231667666,
      lng: -97.74414760385584,
      website: "https://cabobobs.com/",
      image: "https://i.imgur.com/WvgWGRX.jpg",
      paragraphs: [
        "Cabo Bob's is a burrito place that's pretty far from campus, at the intersection of Rio Grande and 29th St. I didn't realize until reading posts in r/austinfood that it was pretty hyped up in Austin as a favorite, so apparently we're lucky to have one within West Campus.",
        "Besides the fish-based items, it almost seems the same as Chipotle, with the same kinds of options and meats that are made in front of you. I ate a fried fish burrito (picture), which I really liked. Until I try the other meats, I'm not sure how the quality compares to Chipotle, but I will definitely want to come back for more fish.",
      ],
    },
  ],
  deals: [
    {
      name: "EastSide Tavern",
      lat: 30.258764814686867,
      lng: -97.72884901739155,
      website: "https://www.eastsidetavernaustin.com/",
      image: "https://i.imgur.com/zyZfpfd.jpg",
      paragraphs: [
        "Monday Special: $8 for the Eastside Burger with fries",
        "I believe the waiter told me that I could get any kind of burger for $8 on Monday (I might need confirmation again), but he still recommended I try the classic burger. The quality of it was great, and it was sufficient enough with the fries to fill me up. I think it's worth the $8 and would come back again!",
      ],
    },
    {
      name: "Lavaca Street Bar",
      lat: 30.24137870702838,
      lng: -97.78502300204927,
      website: "https://lavacasouthlamar.com/",
      image: "https://i.imgur.com/nrPRm37.jpg",
      paragraphs: [
        "Tuesday Special: $2 per street taco",
        "This is one place where I've found with Taco Tuesday, though it's a bar so I can't bring any friend under 21 in. I did like their street tacos: I got the Lucy tacos which are pork tacos (usually $4 so I got them half off), and I ordered 4 of them, so if you eat around the same as me, then I'd consider this an $8 deal.",
      ],
    },
    {
      name: "Drinks Lounge",
      lat: 30.256533357212277,
      lng: -97.72326110204897,
      website: "https://www.drinkslounge.bar/",
      image: "https://i.imgur.com/q5PLsY8.jpg",
      paragraphs: [
        "Thursday Special: $6 for the Drinks Lounge burger (the burger ONLY)",
        "Another bar which I can't bring friends under 21 in. I found this deal on r/austinfood, but the post had shown the burger and tots, with the title implying they were $6 together. Fries and tots are $3 extra, so if you can't eat a burger without either of those, this is a $9 deal. Make it worthwhile by getting a drink.",
      ],
    },
    {
      name: "Cuantos Tacos",
      lat: 30.27268900574792,
      lng: -97.72827160389822,
      website: "https://www.facebook.com/cuantostacos512/",
      image: "https://i.imgur.com/QFLuF0U.jpg",
      paragraphs: [
        "Friday Special: $8 for their torta",
        "I found this deal through r/austinfood, and their torta is definitely filling for me and worth $8. The list of ingredients is on their site and menu, and from what I've seen watching them make this torta, this torta is PACKED. It smacked though, and I highly recommend. I heard their normal menu is also really good.",
      ],
    },
  ],
  desserts: [
    {
      name: "Voodoo Doughnut",
      lat: 30.267820733304852,
      lng: -97.74083591567542,
      website: "https://www.voodoodoughnut.com/",
      image: "https://i.imgur.com/5vdDOsH.jpg",
      paragraphs: [
        "A popular donut shop in 6th St. I first heard about it when my best friend from San Antonio hyped it up, and I always hooked him up with donuts from here when returning to San Antonio.",
        "I've come here plenty of times to try new flavors. I really like the variety and unique flavors this place provides. Some flavors I've tried are rather... unique (the Bacon Maple Bar).",
        "(by the way, this isn't my picture, I didn't happen to have a good one, but I think this picture captures the variety)",
      ],
    },
    {
      name: "Bananarchy",
      lat: 30.288381173223502,
      lng: -97.74168848315303,
      website: "https://bananarchy.net/",
      image: "https://i.imgur.com/v1qp1S5.jpg",
      paragraphs: [
        "Frozen bananas... I've never seen a place of selling these before coming to Austin. This is a food truck hidden behind Space 24 Twenty on Guadalupe St. (right near UT), and next to Lucky Lab Coffee Co.",
        "This picture was when I luckily came to them on their anniversary on May 26, so it was BOGO free. I'm not sure what other deals they have. If you want to treat yourself, it's definitely worth getting the full banana over the half banana. Also, they have a good variety of flavors, with one special flavor rotating monthly (if I recall correctly).",
      ],
    },
    {
      name: "Gourdough's Big. Fat. Donuts.",
      lat: 30.249749061586023,
      lng: -97.75470837136396,
      website: "https://gourdoughs.com/",
      image: "https://i.imgur.com/5gLDWwT.jpg",
      paragraphs: [
        "A donut food truck deep down on S 1st St, which I found with my friends walking south of downtown at 2am. The donuts are really pricey, but also pretty big, loaded with toppings, and perfectly crisp!",
        "Definitely make sure you have room and a sweet tooth before treating yourself. These are pretty big, and if you're not the type to eat much dessert, these are all sharable portions.",
      ],
    },
    {
      name: "Jeni's Splendid Ice Creams",
      lat: 30.25203841732729,
      lng: -97.74894602903525,
      website: "https://jenis.com/",
      image: "https://i.imgur.com/w5GH6GF.jpg",
      paragraphs: [
        "This is definitely my favorite ice cream place so far in Austin. I usually go to the one in South Congress, but I believe the Domain also has a location. You can also buy pints of their flavors, but they're pretty expensive and I don't treat myself to their ice cream too often.",
        "Among all other ice cream places, this one has definitely piqued my curiosity the most with their flavors. I don't remember the exact flavor names, but I've had their popcorn flavor in the summer, as well as a cognac flavor closer to the winter."
      ],
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
        I took!). If a restaurant has multiple locations in Austin, I marked the
        one where I first tried it.
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
                    {location.paragraphs &&
                      location.paragraphs.map(paragraph => <p>{paragraph}</p>)}
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
