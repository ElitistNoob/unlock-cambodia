// const titleSpan = word => {
//   return <span>word</span>;
// };

const tourData = [
  {
    id: 1,
    title: "Angkor Temple Tour",
    tagline: "Explore the remnants of the Khmer Empire",
    images: [
      require("./components/assets/angkor-temple-tour.jpg"),
      require("./components/assets/angkor-tour-1.jpg"),
      require("./components/assets/angkor-tour-2.jpg"),
      require("./components/assets/angkor-tour-3.jpg"),
    ],
    highlights: [
      "Angkor Wat",
      "Bayon",
      "Angkor Thom",
      "Terrace of Elephants & the Leper King",
      "Ta Prohm",
      "Banteay Kdei",
    ],
    inclusion: [
      "Hotel pick up and drop off",
      "Experienced Temple Guide",
      "Transportation (Tuk-Tuk or Minivan)",
      "Free Water while touring",
    ],
    exclusion: ["Angkor Temple Passes"],
    price: 35,
    minimumPax: 2,
    schedule: "Daily",
    length: "8am - 3pm",
    warning:
      "*Please wear suitable clothing and follow the temple dress regulations. If your unsure please ask your guide before leaving",
    shortDesc:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi eu eros ante. Maecenas malesuada vitae risus finibus pellentesque. Duis faucibus. ",
    fullDesc:
      "Unlock one of the 8 man made wonders of the world on our incredible Angelina Jolie ‘Tomb Raider’ temple tour. On this tour you will see all the main sights of Bayon, Angkor Thom, Banteay Kdei and the magnificent sight of Angkor Wat; by far the most famous of them all, often compared to sites such as Machu Picchu (Peru) and Petra (Jordan) it’s definitely a bucket list tour.",
  },
  {
    id: 2,
    title: "Floating Villages Unlocked",
    tagline: "Explore the remnants of the Khmer Empire",
    images: [
      require("./components/assets/angkor-temple-tour.jpg"),
      require("./components/assets/angkor-tour-1.jpg"),
      require("./components/assets/angkor-tour-2.jpg"),
      require("./components/assets/angkor-tour-3.jpg"),
    ],
    highlights: [
      "Floating Villages",
      "Floating Market",
      "Angkor Local canoe boat ride through the floating forest",
      "Terrace of Elephants & the Leper King",
      "Bird life on the water",
    ],
    inclusion: [
      "Hotel pick up and drop off",
      "Experienced Temple Guide",
      "Transportation (Tuk-Tuk or Minivan)",
    ],
    exclusion: ["-"],
    price: 40,
    minimumPax: 2,
    schedule: "Daily",
    length: "8am - 3pm",
    warning: "",
    itinerary:
      "Departing at 8am you journey to the enigmatic and enchanting temple of Bayon. Beginning our tour here we can avoid the crowds and see the temple at its quietest. Its 54 towers are each topped off with the four faces of Avalokiteshvara (Buddha of Compassion), which bears more than a passing resemblance to the king himself.",
    shortDesc:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi eu eros ante. Maecenas malesuada vitae risus finibus pellentesque. Duis faucibus. ",
    fullDesc:
      "Spend an enjoyable day on water by Unlocking the fascinating unspoiled floating community of Kampong Khleang. Discover a completely different side of Siem Reap and experience a truly unique way of life on water. Marvel at the Tonle Sap, the largest freshwater lake in SE Asia and explore the flooded forest and floating community by canoe. This tour is perfect for explorers, photographers and those that love their bird life.",
  },
  {
    id: 3,
    title: "Wildlife Temple Gibbon Adventure",
    tagline: "Explore the remnants of the Khmer Empire",
    images: [
      require("./components/assets/angkor-temple-tour.jpg"),
      require("./components/assets/angkor-tour-1.jpg"),
      require("./components/assets/angkor-tour-2.jpg"),
      require("./components/assets/angkor-tour-3.jpg"),
    ],
    highlights: [
      "Gibbons Sighting",
      "Hidden Temple Exploration",
      "Incredible wildlife photography",
    ],
    inclusion: [
      "Hotel pick up and drop off",
      "Experienced Temple Guide",
      "Transportation (Tuk-Tuk & Bicycle)",
      "Refreshment drinks",
    ],
    exclusion: ["Angkor Temple Passes"],
    price: 32,
    minimumPax: 2,
    schedule: "Daily",
    length: "7am - 11:30am",
    warning:
      "We recommend getting the 3-day pass, as this can be used to visit the main temple sites on other days",
    itinerary:
      "Departing at 8am you journey to the enigmatic and enchanting temple of Bayon. Beginning our tour here we can avoid the crowds and see the temple at its quietest. Its 54 towers are each topped off with the four faces of Avalokiteshvara (Buddha of Compassion), which bears more than a passing resemblance to the king himself.",
    shortDesc:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi eu eros ante. Maecenas malesuada vitae risus finibus pellentesque. Duis faucibus. ",
    fullDesc:
      "Marvel at the fascinating gibbons swinging effortlessly through the trees above your head. This morning tour is incredible rewarding and perfect for all you animal lovers out there. There will be opportunities to not only see the gibbons but also bird life and other wildlife along the shade trail before becoming a real ‘Indiana Jones’ by discovering a hidden remote temple seldom visited by tourists. Unlock your wild side on this truly mesmerizing adventure experience.",
  },
  {
    id: 4,
    title: "Beng Mealea Tour",
    tagline: "A long forgotten slumbering giant",
    images: [
      require("./components/assets/angkor-temple-tour.jpg"),
      require("./components/assets/angkor-tour-1.jpg"),
      require("./components/assets/angkor-tour-2.jpg"),
      require("./components/assets/angkor-tour-3.jpg"),
    ],
    highlights: ["Beng Mealea Temple"],
    inclusion: [
      "Hotel pick up and drop off",
      "Experienced Temple Guide",
      "Transportation (Minivan)",
      "Snacks & Drinks",
    ],
    exclusion: ["Angkor Temple Passes"],
    price: 56,
    minimumPax: 2,
    schedule: "Daily",
    length: "7am - 12pm",
    warning:
      "We recommend getting the 3-day pass, as this can be used to visit the main temple sites on other days",
    itinerary:
      "Departing at 8am you journey to the enigmatic and enchanting temple of Bayon. Beginning our tour here we can avoid the crowds and see the temple at its quietest. Its 54 towers are each topped off with the four faces of Avalokiteshvara (Buddha of Compassion), which bears more than a passing resemblance to the king himself.",
    shortDesc:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi eu eros ante. Maecenas malesuada vitae risus finibus pellentesque. Duis faucibus. ",
    fullDesc:
      "Love your temples then you will love the opportunity to Unlock the mythical Beng Mealea temple; a slumbering giant lost for centuries in the forest of Cambodia. It is the most accessible of Angkor’s lost temples and is a mirror image of Angkor Wat itself; but it is utterly consumed by the voracious appetite of nature, which makes the temple absolutely fascinating to explore. ",
  },
  {
    id: 5,
    title: "Monk Water Blessing",
    tagline: "Experience this tradional Khmer ceremony",
    images: [
      require("./components/assets/angkor-temple-tour.jpg"),
      require("./components/assets/angkor-tour-1.jpg"),
      require("./components/assets/angkor-tour-2.jpg"),
      require("./components/assets/angkor-tour-3.jpg"),
    ],
    highlights: ["Beng Mealea Temple"],
    inclusion: [
      "Visiting a traditional Cambodia Pagoda",
      "Private Monks Blessing",
    ],
    exclusion: ["-"],
    price: 35,
    minimumPax: 2,
    schedule: "Daily",
    length: "1 hour",
    warning:
      "Bring a change of clothes if you have chosen the full covering experience.",
    itinerary:
      "Departing at 8am you journey to the enigmatic and enchanting temple of Bayon. Beginning our tour here we can avoid the crowds and see the temple at its quietest. Its 54 towers are each topped off with the four faces of Avalokiteshvara (Buddha of Compassion), which bears more than a passing resemblance to the king himself.",
    shortDesc:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi eu eros ante. Maecenas malesuada vitae risus finibus pellentesque. Duis faucibus. ",
    fullDesc:
      "A water blessing is meant to bring you good luck and is a sacred ritual performed in Pagodas all across Cambodia. For the blessing you can choose between a light sprinkling or a full complete covering experience, with the cleansing ceremony performed by a monk in the grounds of an active pagoda. This is experience is a wonderful way to connect with the local customs and allows you to reflect on your time in Cambodia.",
  },
  {
    id: 6,
    title: "Romantic Sunset Drinks",
    tagline: "Experience this tradional Khmer ceremony",
    images: [
      require("./components/assets/angkor-temple-tour.jpg"),
      require("./components/assets/angkor-tour-1.jpg"),
      require("./components/assets/angkor-tour-2.jpg"),
      require("./components/assets/angkor-tour-3.jpg"),
    ],
    highlights: ["Romantic Sunset spot"],
    inclusion: [
      "1 Bottle of chilled wine per couple",
      "Selection of finger food ",
      "Experienced Logistic Guide",
      "Transportation (Tuk-Tuk)",
    ],
    exclusion: ["-"],
    price: 35,
    minimumPax: 2,
    schedule: "Daily",
    length: "4pm - 6:30pm",
    warning:
      "Additional bottles of wine can be pre ordered at $20 per bottle (Red and White available)",
    itinerary:
      "Departing at 8am you journey to the enigmatic and enchanting temple of Bayon. Beginning our tour here we can avoid the crowds and see the temple at its quietest. Its 54 towers are each topped off with the four faces of Avalokiteshvara (Buddha of Compassion), which bears more than a passing resemblance to the king himself.",
    shortDesc:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi eu eros ante. Maecenas malesuada vitae risus finibus pellentesque. Duis faucibus. ",
    fullDesc:
      "Unlock the romance of Cambodia’s sunsets and immerse yourselves in the beautiful Cambodian countryside, watch the sun go down and toast yourselves with a chilled glass of wine accompanied with some delicious Cambodian treats. Unlock one of two beautiful locations; either a hilltop that boasts spectacular view across rice fields with the Tonle Sap Lake as a backdrop or a stunning rural rice field location. Whichever location you chose you will enjoy an incredible private and romantic experience with the one you love.",
  },
];

export default tourData;
