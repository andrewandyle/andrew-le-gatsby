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
} from "../styles/life/austin-food.styles"

import Layout from "../components/layout"
import SEO from "../components/seo"

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
      name: "Ramen Tatsu-Ya",
      lat: 30.254073927993062,
      lng: -97.7632452051524,
      website: "https://ramen-tatsuya.com/",
      image: "https://i.imgur.com/OyP109h.jpg",
      paragraphs: [
        "Ramen Tatsu-Ya is THE social ramen joint in Austin, no contest. I've gone here multiple times with my UT friends. And even after trying many different ramen places, this one still stands out.",
        "The most popular items here are always the tonkotsu ramen (the picture shows the sho-yu variant). I always like ordering bombs as well as extra noodles (which I find necessary, since I never get filled without them).",
      ],
    },
    {
      name: "Kura Revolving Sushi Bar",
      lat: 30.337420981776642,
      lng: -97.71720600374279,
      website: "https://kurasushi.com/",
      image: "https://i.imgur.com/Av5VBy7.jpg",
      paragraphs: [
        "Kura seems to be the go-to whenever I invite my friends to Austin or we have a good occasion to celebrate. And we're all satisfied with the visit every time. If you've never been to other Kura locations across the U.S., give it a shot here.",
        "I love going to Kura for two reasons: because I can try many different rolls at once and diversify my palette, and because you can eat as little or as much as you want, so it doesn't matter how much your friends can eat. I tend to get carried away here with plates, and I always seem to get takoyaki or beef ojyu.",
      ],
    },
    {
      name: "Tumble22",
      lat: 30.27806008590229,
      lng: -97.77169128855552,
      website: "http://tumble22.com/",
      image: "https://i.imgur.com/BvVnh4R.jpg",
      paragraphs: [
        "Definitely my favorite chicken joint in Austin, and one with a broad range of spice levels! A friend recommended it to me after telling me that even his virtual co-workers across the U.S. knew about this place, so it's apparently a big deal!",
        "The spiciest levels are no joke, so definitely take caution if you don't know how much you can handle! I've had both the tenders and OG chicken sandwich, and I always pair them with a side of dirty fries!",
        "They also have good happy hour deals on weekdays from 3-6pm, so I recommend dropping by for a slightly early dinner if possible!",
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
        "This is one place I've found with Taco Tuesday, though it's a bar so I can't bring any friend under 21 in. I did like their street tacos: I got the Lucy tacos which are pork tacos (usually $4 so I got them half off), and I ordered 4 of them, so if you eat around the same as me, then I'd consider this an $8 deal.",
      ],
    },
    {
      name: "Cenote",
      lat: 30.26048171572688,
      lng: -97.7336649153879,
      website: "https://cenoteaustin.com/home/",
      image: "https://i.imgur.com/eoXQMBf.jpg",
      paragraphs: [
        "Thursday Special: Buy one burger, get one free (fries included); pictured burger (Cenote Smoker Burger) is $12, so $6 each",
        "I found this coffee shop on r/austinfood with the mention of BOGO free every Thursday, so I went and tried it with my friend. We both thought the quality was great! A 1/3 pound burger with fries for $6 is a really good deal, plus you can try other types of burgers with this deal! If you're ever in Austin with friends on a Thursday, I find this place worth hitting up.",
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
      image: "https://i.imgur.com/vw6Xmob.jpg",
      paragraphs: [
        "A popular donut shop in 6th St. I first heard about it when my best friend from San Antonio hyped it up, and I always hooked him up with donuts from here when returning to San Antonio.",
        "I've come here plenty of times to try new flavors. I really like the variety and unique flavors this place provides. Some flavors I've tried are rather... unique (the Bacon Maple Bar).",
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
        "Among all other ice cream places, this one has definitely piqued my curiosity the most with their flavors. I don't remember the exact flavor names, but I've had their popcorn flavor in the summer, as well as a cognac flavor closer to the winter.",
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
    <Layout back="/">
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
            <div>
              <img
                src="https://i.pinimg.com/originals/4e/24/f5/4e24f523182e09376bfe8424d556610a.png"
                style={{ filter: "invert()", width: 100, marginBottom: 15 }}
                alt="Restaurant"
              />
              Click a restaurant to see a picture!
            </div>
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
