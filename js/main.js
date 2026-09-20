/* ==================================================
   LIBERTY INCENTIVE
   Main JavaScript
   ================================================== */

document.documentElement.classList.add("js-enabled");


/* ==================================================
   1. TRANSLATIONS
   ================================================== */

const translations = {
  en: {
    /* Navigation */
    navAbout: "About Us",
    navArmenia: "Armenia",
    navDestinations: "Other Destinations",
    navBlog: "Blog",
    navGallery: "Gallery",
    navTeam: "Our Team",
    navContact: "Contact",

    /* Other destinations */
    destinationGeorgia: "Georgia",
    destinationCaucasus: "Combined Caucasus",
    destinationEgypt: "Egypt",
    destinationQatar: "Qatar",
    destinationCyprus: "Cyprus",
    destinationAlbania: "Albania",
    destinationTunisia: "Tunisia",
    destinationUAE: "UAE",

    /* General */
    planTrip: "Plan Your Trip",
    discoverArmenia: "Discover Armenia",
    explore: "Explore",
    learnMore: "Learn More",
    toursMenu: "Tours",

    /* Inquiry form */
    inquiryEyebrow: "Plan Your Trip",
    inquiryTitle: "Tell us about your dream journey.",
    inquiryIntroduction:
      "Share your travel plans and our local experts will create a personalized proposal for you.",
    inquiryContactLabel: "Prefer to contact us directly?",
    tripDetailsTitle: "Trip Details",
    contactDetailsTitle: "Contact Details",
    selectedPackageLabel: "Selected Package",
    customJourneyOption: "Custom journey / Not decided yet",
    packageOptionOne: "Armenia Discovery — 3 Nights / 4 Days",
    packageOptionTwo: "Classic Armenia — 4 Nights / 5 Days",
    packageOptionThree: "Armenian Highlights — 5 Nights / 6 Days",
    packageOptionFour: "Complete Armenia — 6 Nights / 7 Days",
    destinationLabel: "Destination",
    chooseDestination: "Choose a destination",
    hotelCategoryLabel: "Hotel Category",
    hotelFlexible: "Flexible / Not decided",
    hotelLuxury: "Luxury",
    arrivalDateLabel: "Arrival Date",
    departureDateLabel: "Departure Date",
    adultsLabel: "Adults",
    childrenLabel: "Children",
    childAgeLabel: "Child {number} age",
    interestsLabel: "Travel Interests",
    interestCulture: "Culture & History",
    interestNature: "Nature",
    interestAdventure: "Adventure",
    interestFoodWine: "Food & Wine",
    interestMice: "MICE & Events",
    interestFamily: "Family Travel",
    fullNameLabel: "Full Name",
    emailLabel: "Email Address",
    phoneLabel: "Phone / WhatsApp",
    messageLabel: "Tell Us More",
    messagePlaceholder:
      "Tell us about your preferred experiences, special requirements or questions.",
    privacyConsent:
      "I agree that Liberty Incentive may use this information to respond to my travel inquiry.",
    sendInquiry: "Send Inquiry",
    sendingInquiry: "Sending...",
    inquirySuccess:
      "Thank you! Your inquiry has been sent successfully. Our team will contact you soon.",
    inquiryError:
      "We could not send your inquiry. Please try again or contact us by email.",
    invalidDates:
      "The departure date must be later than the arrival date.",

    /* Hero */
    heroEyebrow: "Welcome to Armenia",
    heroTitleMain: "Armenia",
    heroTitleOutline: "Beyond the Ordinary",

    heroDescription:
      "Tailor-made journeys, authentic experiences and unforgettable moments created by local experts.",

    sideLabel: "Since 2011 · Yerevan, Armenia",

    /* About section */
    aboutEyebrow: "About Liberty Incentive",
    aboutTitleFirst: "More than a journey.",
    aboutTitleSecond: "An experience designed around you.",

    aboutDescriptionFirst:
      "Founded in 2011, Liberty Incentive is an experienced Armenian tour operator creating tailor-made journeys and professional travel solutions across Armenia and the region.",

    aboutDescriptionSecond:
      "Through local expertise, trusted partnerships and thoughtful service, we introduce travellers to Armenia’s ancient heritage, remarkable landscapes, traditions and genuine hospitality.",

    aboutSinceYear: "2011",
    aboutSinceText: "Creating memorable journeys",

    aboutBenefitOneTitle: "Since 2011",
    aboutBenefitOneText: "Creating memorable journeys",

    aboutBenefitTwoTitle: "Local Expertise",

    aboutBenefitTwoText:
      "Designed by people who know Armenia",

    aboutBenefitThreeTitle: "Tailor-Made",

    aboutBenefitThreeText:
      "Every journey shaped around the traveller",

    aboutBenefitFourTitle: "Multilingual Service",

    aboutBenefitFourText:
      "Professional support for international guests",

    aboutButton: "Discover Our Story",

    aboutPageTitle: "About Liberty Incentive | Armenia Travel Experts",
    aboutPageLabel: "Our Story",
    aboutPageHeroTitle: "Creating meaningful journeys since 2011.",
    aboutPageHeroText:
      "Local knowledge, international standards and genuine Armenian hospitality come together in every journey we design.",
    aboutStoryTitle: "A trusted partner in Armenia",
    aboutStoryOne:
      "Liberty Incentive was established in Yerevan in 2011 with one clear purpose: to introduce travelers to the true spirit of Armenia through thoughtful, professionally organized experiences.",
    aboutStoryTwo:
      "Over the years, we have developed a trusted international network and a strong local team. We create journeys for individual travelers, leisure groups, corporate clients, incentive programs and travel partners from around the world.",
    aboutVisionLabel: "Our Vision",
    aboutVisionTitle: "Travel should feel personal, seamless and memorable.",
    aboutVisionText:
      "We believe the best journeys go beyond famous landmarks. They create authentic connections with local people, traditions, landscapes, cuisine and stories—while every practical detail is handled with care.",
    aboutApproachTitle: "Our approach",
    aboutApproachOneTitle: "Local Knowledge",
    aboutApproachOneText: "Programs created by specialists who live in Armenia and understand every region.",
    aboutApproachTwoTitle: "Flexible Planning",
    aboutApproachTwoText: "Each itinerary is adapted to the guest's interests, schedule, comfort and budget.",
    aboutApproachThreeTitle: "Trusted Service",
    aboutApproachThreeText: "Carefully selected hotels, guides, transport and experiences supported by reliable partners.",
    aboutApproachFourTitle: "Complete Support",
    aboutApproachFourText: "Professional assistance before arrival, throughout the journey and until the final farewell.",
    aboutExpertiseTitle: "What we create",
    aboutExpertiseText:
      "From cultural journeys and active adventures to MICE, incentive travel and special events, we combine creativity with operational experience to deliver programs that work beautifully in practice.",
    aboutMissionLabel: "Our Mission",
    aboutMissionTitle: "To reveal the Armenia that stays with you.",
    aboutMissionText:
      "Our mission is to share Armenia's ancient heritage, remarkable landscapes, living traditions and genuine hospitality while making every journey comfortable, enriching and unforgettable.",
    aboutCtaTitle: "Let us create your Armenian story.",

    /* Services section */
    servicesEyebrow: "What We Offer",

    servicesTitle:
      "Everything for your perfect journey",

    servicesIntroduction:
      "From the first idea to the final farewell, our team carefully manages every detail of your journey.",

    serviceOneTitle: "Tailor-Made Journeys",

    serviceOneText:
      "Personalized itineraries designed around each traveller’s interests, schedule and budget.",

    serviceTwoTitle: "Group Tours",

    serviceTwoText:
      "Carefully organized cultural, leisure and special-interest programs for groups of every size.",

    serviceThreeTitle: "MICE & Incentives",

    serviceThreeText:
      "Professional solutions for meetings, conferences, incentive trips and corporate events.",

    serviceFourTitle: "Cultural Experiences",

    serviceFourText:
      "Authentic encounters with Armenia’s heritage, traditions, cuisine and local communities.",

    serviceFiveTitle: "Adventure & Active Travel",

    serviceFiveText:
      "Hiking, cycling, jeep tours, winter activities and outdoor experiences across Armenia.",

    serviceSixTitle:
      "Accommodation & Transportation",

    serviceSixText:
      "Carefully selected hotels, comfortable transportation, professional guides and complete ground support.",

    /* Discover Armenia section */
    armeniaEyebrow: "Discover Armenia",

    armeniaTitle:
      "A country of timeless beauty",

    armeniaIntroduction:
      "Explore ancient heritage, dramatic landscapes, vibrant cities and authentic experiences that make every journey through Armenia unforgettable.",

    armeniaCardYerevanSubtitle:
      "The Pink City",

    armeniaCardYerevanTitle:
      "Yerevan",

    armeniaCardGarniSubtitle:
      "Ancient Heritage",

    armeniaCardGarniTitle:
      "Garni",

    armeniaCardSevanSubtitle:
      "The Blue Pearl",

    armeniaCardSevanTitle:
      "Lake Sevan",

    armeniaCardDilijanSubtitle:
      "Forests & Monasteries",

    armeniaCardDilijanTitle:
      "Dilijan",

    armeniaCardTatevSubtitle:
      "Southern Armenia",

    armeniaCardTatevTitle:
      "Tatev",

    armeniaCardWineSubtitle:
      "Flavours & Traditions",

    armeniaCardWineTitle:
      "Wine Region",

    armeniaButton:
      "Plan Your Armenia Journey",

    /* Best-selling Armenia tours */
    toursEyebrow: "Best-Selling Armenia Tours",
    toursTitle: "Choose your journey through Armenia.",
    toursIntroduction:
      "Carefully designed private journeys combining Armenia's culture, landscapes, traditions and warm hospitality.",
    viewItinerary: "View Itinerary",
    requestThisTour: "Request This Tour",

    tourOneDuration: "3 Nights / 4 Days",
    tourOneLabel: "Essential Armenia",
    tourOneTitle: "Armenia Discovery",
    tourOneSummary:
      "Discover Yerevan, Tsaghkadzor and Lake Sevan on a compact introduction to Armenia.",
    tourOneDayOne:
      "Day 1: Arrival and transfer to the hotel. Overnight in Yerevan.",
    tourOneDayTwo:
      "Day 2: Yerevan city tour, GUM Market and Vernissage. Overnight in Yerevan.",
    tourOneDayThree:
      "Day 3: Yerevan – Tsaghkadzor – Lake Sevan – Sevanavank – Yerevan. Overnight in Yerevan.",
    tourOneDayFour:
      "Day 4: Transfer to the airport.",

    tourTwoDuration: "4 Nights / 5 Days",
    tourTwoLabel: "Culture & Nature",
    tourTwoTitle: "Classic Armenia",
    tourTwoSummary:
      "Explore Armenia's capital, mountain landscapes, Lake Sevan, Garni and the rock-carved Geghard Monastery.",
    tourTwoDayOne:
      "Day 1: Arrival and transfer to the hotel. Overnight in Yerevan.",
    tourTwoDayTwo:
      "Day 2: Yerevan city tour, GUM Market and Vernissage. Overnight in Yerevan.",
    tourTwoDayThree:
      "Day 3: Yerevan – Tsaghkadzor – Lake Sevan – Sevanavank – Yerevan. Overnight in Yerevan.",
    tourTwoDayFour:
      "Day 4: Yerevan – Charents Arch – Garni – Geghard – Symphony of Stones – Yerevan. Overnight in Yerevan.",
    tourTwoDayFive:
      "Day 5: Transfer to the airport.",

    tourThreeDuration: "5 Nights / 6 Days",
    tourThreeLabel: "Heritage & Wine",
    tourThreeTitle: "Armenian Highlights",
    tourThreeSummary:
      "Experience Armenia's celebrated monasteries, natural wonders, spa town and ancient winemaking heritage.",
    tourThreeDayOne:
      "Day 1: Arrival and transfer to the hotel. Overnight in Yerevan.",
    tourThreeDayTwo:
      "Day 2: Yerevan city tour, GUM Market and Vernissage. Overnight in Yerevan.",
    tourThreeDayThree:
      "Day 3: Yerevan – Tsaghkadzor – Lake Sevan – Sevanavank – Yerevan. Overnight in Yerevan.",
    tourThreeDayFour:
      "Day 4: Yerevan – Khor Virap – Areni Cave – Jermuk Mineral Water Gallery – Jermuk Waterfall – Areni Winery – Yerevan. Overnight in Yerevan.",
    tourThreeDayFive:
      "Day 5: Yerevan – Charents Arch – Garni – Geghard – Symphony of Stones – Yerevan. Overnight in Yerevan.",
    tourThreeDaySix:
      "Day 6: Transfer to the airport.",

    tourFourDuration: "6 Nights / 7 Days",
    tourFourLabel: "The Complete Journey",
    tourFourTitle: "Complete Armenia",
    tourFourSummary:
      "A complete journey through Armenia's history, landscapes, sacred landmarks, traditions and local hospitality.",
    tourFourDayOne:
      "Day 1: Arrival and transfer to the hotel. Overnight in Yerevan.",
    tourFourDayTwo:
      "Day 2: Yerevan city tour, GUM Market and Vernissage. Overnight in Yerevan.",
    tourFourDayThree:
      "Day 3: Yerevan – Tsaghkadzor – Lake Sevan – Sevanavank – Yerevan. Overnight in Yerevan.",
    tourFourDayFour:
      "Day 4: Yerevan – Khor Virap – Areni Cave – Jermuk Mineral Water Gallery – Jermuk Waterfall – Areni Winery – Yerevan. Overnight in Yerevan.",
    tourFourDayFive:
      "Day 5: Yerevan – Charents Arch – Garni – Geghard – Symphony of Stones – Yerevan. Overnight in Yerevan.",
    tourFourDaySix:
      "Day 6: Yerevan – Etchmiadzin – Zvartnots – Machanents Guest House – Yerevan. Overnight in Yerevan.",
    tourFourDaySeven:
      "Day 7: Transfer to the airport.",

    /* Travel inspiration */
    blogPageTitle: "Travel Inspiration | Liberty Incentive",
    blogHeroLabel: "The Liberty Journal",
    blogHeroTitle: "Stories and practical ideas for your Armenian journey.",
    blogHeroText: "Discover seasonal guides, special events and thoughtful travel advice created by local experts.",
    inspirationEyebrow: "Travel Inspiration",
    inspirationTitle: "Discover the best time to experience Armenia.",
    inspirationIntroduction:
      "Seasonal guides, inspiring experiences and practical ideas to help you plan an unforgettable journey through Armenia.",
    inspirationCategoryEvent: "Event",
    inspirationCategoryGuide: "Seasonal Guide",
    inspirationCategoryAdventure: "Winter Adventure",
    readArticle: "Read Article",
    backToInspiration: "← Back to Travel Inspiration",

    copyright: "© Liberty Incentive",

    balloonPageTitle: "Armenia International Balloon Festival | Liberty Incentive",
    autumnPageTitle: "Autumn in Armenia | Liberty Incentive",
    winterPageTitle: "Winter in Armenia | Liberty Incentive",
    balloonMeta: "October 6–11, 2026",
    balloonTitle: "Armenia International Balloon Festival",
    balloonExcerpt:
      "Watch Armenia's skies come alive with colorful hot-air balloons and discover how to include this spectacular experience in your journey.",
    balloonArticleOne:
      "From October 6 to 11, 2026, the Discover Armenia from the Sky festival will bring balloon pilots, colorful aircraft and visitors together for one of the country's most photogenic autumn events. Flights and displays reveal Yerevan and Armenia's landscapes from an unforgettable new perspective.",
    balloonDatesTitle: "Festival dates and experience",
    balloonDatesText:
      "The 2026 festival is scheduled for October 6–11. Visitors may see mass balloon launches, meet international pilots, photograph the balloons at sunrise or sunset and, when passenger places are officially available, book a flight for a panoramic view from above.",
    balloonWeatherTitle: "Weather, timing and photography",
    balloonArticleTwo:
      "October in Yerevan is often mild during the day, but sunrise activities can be distinctly cool. Ballooning depends on calm wind and safe visibility, so launch times and locations can change at short notice. Early morning and late afternoon usually provide the softest light for photography.",
    balloonPlanningTitle: "How to plan your visit",
    balloonArticleThree:
      "Bring warm layers, closed comfortable shoes, water and a charged phone or camera. Keep the festival day flexible because weather may delay a flight. The event can be combined with Yerevan sightseeing, Republic Square, the Cascade, Garni, Geghard or an autumn wine-country excursion.",
    balloonSafetyNote:
      "Important: exact launch sites, passenger-flight availability and daily schedules must be confirmed through the official organizers. All balloon operations are subject to weather and safety decisions.",

    autumnMeta: "September – November",
    autumnTitle: "Autumn in Armenia: Colors, Weather & Travel Tips",
    autumnExcerpt:
      "Explore Armenia during its most colorful season, from lively Yerevan to the golden forests and monasteries of Dilijan.",
    autumnArticleOne:
      "Autumn is one of the most atmospheric seasons for discovering Armenia. Yerevan stays lively with café terraces and cultural events, vineyards enter harvest season, and the forests of Dilijan and Lori turn gold, copper and deep red.",
    autumnWeatherTitle: "Typical autumn temperatures",
    autumnWeatherIntro: "Temperatures vary by year and elevation, but these approximate Yerevan ranges are useful for planning:",
    septemberLabel: "September",
    septemberTemp: "Days 20–28°C · Nights 10–16°C",
    septemberText: "Warm, sunny and ideal for city walks, Lake Sevan and outdoor dining.",
    octoberLabel: "October",
    octoberTemp: "Days 13–21°C · Nights 5–11°C",
    octoberText: "Cooler, richly colored and excellent for photography, wine experiences and hiking.",
    novemberLabel: "November",
    novemberTemp: "Days 6–13°C · Nights 0–5°C",
    novemberText: "Crisp and quieter, with colder evenings and the possibility of early mountain snow.",
    autumnHighlightsTitle: "Festivals and seasonal experiences",
    autumnArticleTwo:
      "Autumn brings grape harvesting, winery visits and seasonal food experiences in Vayots Dzor. Yerevan hosts concerts, exhibitions and city celebrations; in 2026, Erebuni–Yerevan celebrations are expected around October 11. Event programs should always be checked closer to travel.",
    autumnPlacesTitle: "Best places to visit in autumn",
    autumnPlacesOne: "Yerevan — café culture, museums, markets, parks and evening walks around Republic Square and the Cascade.",
    autumnPlacesTwo: "Dilijan and Haghartsin — forest roads, monastery views and some of Armenia's most vivid autumn colors.",
    autumnPlacesThree: "Areni and Vayots Dzor — vineyards, wine tastings, harvest flavors, Noravank and dramatic red-rock scenery.",
    autumnPlacesFour: "Lake Sevan — wide blue views and Sevanavank with fewer visitors; bring a warm layer because it is cooler by the lake.",
    autumnPlacesFive: "Lori, Haghpat and Sanahin — green valleys, UNESCO-listed monasteries and beautiful northern landscapes.",
    autumnPlacesSix: "Garni and Geghard — ancient heritage, gorge scenery and an easy cultural day trip from Yerevan.",
    autumnPackingTitle: "What to pack",
    autumnArticleThree:
      "Pack layers, a light waterproof jacket, sun protection and comfortable walking shoes. From mid-October onward, add a warmer coat for evenings and mountain regions. Build some flexibility into long drives, as daylight becomes shorter later in the season.",

    winterMeta: "December – March",
    winterTitle: "Winter in Armenia: Snow, Mountains & Adventure",
    winterExcerpt:
      "Discover skiing, ropeway rides, snowy landscapes, festive Yerevan and memorable mountain escapes across Armenia.",
    winterArticleOne:
      "Winter reveals a quieter and more dramatic Armenia: snow-covered mountains, warm restaurants, festive city lights and uncrowded cultural sites. A good itinerary combines outdoor adventure with museums, cuisine and comfortable evenings indoors.",
    winterWeatherTitle: "Typical winter temperatures",
    winterWeatherIntro: "These approximate Yerevan ranges are a guide; mountain resorts are colder and commonly remain below freezing:",
    decemberLabel: "December",
    decemberTemp: "Days 0–8°C · Nights -5–0°C",
    decemberText: "Festive lights and early snow, with colder conditions in the mountains.",
    januaryLabel: "January",
    januaryTemp: "Days -2–4°C · Nights -8–-3°C",
    januaryText: "Usually the coldest month and a strong period for snow-based activities.",
    februaryLabel: "February",
    februaryTemp: "Days 0–7°C · Nights -6–-1°C",
    februaryText: "Winter sports continue, while daylight gradually increases.",
    winterActivitiesTitle: "What to do in winter",
    winterActivityOne: "Ski or snowboard in Tsaghkadzor, and ride the ropeway for wide mountain views.",
    winterActivityTwo: "Try snowshoeing, snowmobile excursions or snowkiting where guided programs and conditions allow.",
    winterActivityThree: "Explore festive Yerevan, museums, the GUM Market, Vernissage, cafés and Armenian restaurants.",
    winterActivityFour: "Visit Gyumri for historic architecture, creative culture and hearty Shirak cuisine.",
    winterActivityFive: "See Lake Sevan's stark winter landscape or relax in Jermuk, subject to road and weather conditions.",
    winterActivitySix: "Combine monasteries and cultural sites with cooking classes, wine tastings or craft experiences indoors.",
    winterPlanningTitle: "Planning a comfortable winter journey",
    winterArticleTwo:
      "Snow quality and resort operations vary through the season, so check conditions before committing to ski days. Road journeys can take longer after snowfall, and some mountain visits may need to be adjusted for safety.",
    winterPackingTitle: "What to wear",
    winterArticleThree:
      "Bring thermal base layers, an insulated waterproof jacket, gloves, a hat and waterproof shoes with good grip. Sunglasses and sunscreen are useful in bright mountain snow. A flexible program and private transport make winter travel more comfortable.",
    weatherDisclaimer: "Temperatures are typical planning ranges, not a weather forecast; actual conditions vary by location, elevation and year."
  },

  hy: {
    /* Navigation */
    navAbout: "Մեր մասին",
    navArmenia: "Հայաստան",
    navDestinations: "Այլ ուղղություններ",
    navBlog: "Բլոգ",
    navGallery: "Պատկերասրահ",
    navTeam: "Մեր թիմը",
    navContact: "Կապ",

    /* Other destinations */
    destinationGeorgia: "Վրաստան",
    destinationCaucasus: "Համակցված Կովկաս",
    destinationEgypt: "Եգիպտոս",
    destinationQatar: "Քաթար",
    destinationCyprus: "Կիպրոս",
    destinationAlbania: "Ալբանիա",
    destinationTunisia: "Թունիս",
    destinationUAE: "ԱՄԷ",

    /* General */
    planTrip: "Պլանավորեք ուղևորությունը",
    discoverArmenia: "Բացահայտեք Հայաստանը",
    explore: "Բացահայտել",
    learnMore: "Իմանալ ավելին",
    toursMenu: "Տուրեր",

    /* Inquiry form */
    inquiryEyebrow: "Պլանավորեք Ձեր ուղևորությունը",
    inquiryTitle: "Պատմեք մեզ Ձեր երազանքի ճանապարհորդության մասին։",
    inquiryIntroduction:
      "Կիսվեք Ձեր ճանապարհորդական ծրագրերով, և մեր տեղացի մասնագետները Ձեզ համար կմշակեն անհատական առաջարկ։",
    inquiryContactLabel: "Նախընտրո՞ւմ եք կապվել մեզ հետ անմիջապես։",
    tripDetailsTitle: "Ուղևորության տվյալներ",
    contactDetailsTitle: "Կոնտակտային տվյալներ",
    selectedPackageLabel: "Ընտրված փաթեթ",
    customJourneyOption: "Անհատական ծրագիր / Դեռ որոշված չէ",
    packageOptionOne: "Բացահայտեք Հայաստանը — 3 գիշեր / 4 օր",
    packageOptionTwo: "Դասական Հայաստան — 4 գիշեր / 5 օր",
    packageOptionThree: "Հայաստանի լավագույնը — 5 գիշեր / 6 օր",
    packageOptionFour: "Ամբողջական Հայաստան — 6 գիշեր / 7 օր",
    destinationLabel: "Ուղղություն",
    chooseDestination: "Ընտրեք ուղղությունը",
    hotelCategoryLabel: "Հյուրանոցի կարգ",
    hotelFlexible: "Ճկուն / Դեռ որոշված չէ",
    hotelLuxury: "Լյուքս",
    arrivalDateLabel: "Ժամանման ամսաթիվ",
    departureDateLabel: "Մեկնման ամսաթիվ",
    adultsLabel: "Մեծահասակներ",
    childrenLabel: "Երեխաներ",
    childAgeLabel: "Երեխա {number}-ի տարիքը",
    interestsLabel: "Ճանապարհորդական հետաքրքրություններ",
    interestCulture: "Մշակույթ և պատմություն",
    interestNature: "Բնություն",
    interestAdventure: "Արկածներ",
    interestFoodWine: "Խոհանոց և գինի",
    interestMice: "MICE և միջոցառումներ",
    interestFamily: "Ընտանեկան ճանապարհորդություն",
    fullNameLabel: "Անուն, ազգանուն",
    emailLabel: "Էլ․ հասցե",
    phoneLabel: "Հեռախոս / WhatsApp",
    messageLabel: "Լրացուցիչ տեղեկություն",
    messagePlaceholder:
      "Պատմեք մեզ Ձեր նախընտրած փորձառությունների, հատուկ պահանջների կամ հարցերի մասին։",
    privacyConsent:
      "Համաձայն եմ, որ Liberty Incentive-ն օգտագործի այս տեղեկությունը իմ ճանապարհորդական հարցմանը պատասխանելու համար։",
    sendInquiry: "Ուղարկել հարցումը",
    sendingInquiry: "Ուղարկվում է...",
    inquirySuccess:
      "Շնորհակալություն։ Ձեր հարցումը հաջողությամբ ուղարկվել է։ Մեր թիմը շուտով կկապվի Ձեզ հետ։",
    inquiryError:
      "Չհաջողվեց ուղարկել հարցումը։ Խնդրում ենք կրկին փորձել կամ կապվել մեզ հետ էլեկտրոնային փոստով։",
    invalidDates:
      "Մեկնման ամսաթիվը պետք է լինի ժամանման ամսաթվից հետո։",

    /* Hero */
    heroEyebrow: "Բարի գալուստ Հայաստան",
    heroTitleMain: "Հայաստան",
    heroTitleOutline: "Սովորականից այն կողմ",

    heroDescription:
      "Անհատականացված ճանապարհորդություններ, իսկական փորձառություններ և անմոռանալի պահեր՝ ստեղծված տեղացի մասնագետների կողմից։",

    sideLabel:
      "2011 թվականից · Երևան, Հայաստան",

    /* About section */
    aboutEyebrow:
      "Liberty Incentive-ի մասին",

    aboutTitleFirst:
      "Ավելին, քան պարզապես ճանապարհորդություն։",

    aboutTitleSecond:
      "Ձեզ համար ստեղծված փորձառություն։",

    aboutDescriptionFirst:
      "2011 թվականին հիմնադրված Liberty Incentive-ը հայկական փորձառու տուրօպերատոր է, որն առաջարկում է անհատականացված ճանապարհորդություններ և մասնագիտական զբոսաշրջային ծառայություններ Հայաստանում ու տարածաշրջանում։",

    aboutDescriptionSecond:
      "Տեղական փորձի, վստահելի գործընկերների և հոգատար սպասարկման շնորհիվ մենք ճանապարհորդներին ներկայացնում ենք Հայաստանի հնագույն ժառանգությունը, տպավորիչ բնությունը, ավանդույթներն ու անկեղծ հյուրընկալությունը։",

    aboutSinceYear: "2011",

    aboutSinceText:
      "Ստեղծում ենք հիշարժան ճանապարհորդություններ",

    aboutBenefitOneTitle:
      "2011 թվականից",

    aboutBenefitOneText:
      "Ստեղծում ենք հիշարժան ճանապարհորդություններ",

    aboutBenefitTwoTitle:
      "Տեղական փորձ",

    aboutBenefitTwoText:
      "Ծրագրեր՝ մշակված Հայաստանը ճանաչող մասնագետների կողմից",

    aboutBenefitThreeTitle:
      "Անհատական մոտեցում",

    aboutBenefitThreeText:
      "Յուրաքանչյուր ճանապարհորդություն՝ ստեղծված հյուրի ցանկություններին համապատասխան",

    aboutBenefitFourTitle:
      "Բազմալեզու սպասարկում",

    aboutBenefitFourText:
      "Մասնագիտական աջակցություն միջազգային հյուրերին",

    aboutButton:
      "Բացահայտեք մեր պատմությունը",

    aboutPageTitle: "Liberty Incentive-ի մասին | Հայաստանի ճանապարհորդական մասնագետներ",
    aboutPageLabel: "Մեր պատմությունը",
    aboutPageHeroTitle: "Ստեղծում ենք բովանդակալից ճանապարհորդություններ 2011 թվականից։",
    aboutPageHeroText:
      "Տեղական գիտելիքը, միջազգային չափանիշները և հայկական անկեղծ հյուրընկալությունը միավորվում են մեր ստեղծած յուրաքանչյուր ճանապարհորդության մեջ։",
    aboutStoryTitle: "Ձեր վստահելի գործընկերը Հայաստանում",
    aboutStoryOne:
      "Liberty Incentive-ը հիմնադրվել է Երևանում 2011 թվականին՝ մեկ հստակ նպատակով․ ներկայացնել ճանապարհորդներին Հայաստանի իրական ոգին՝ մտածված և մասնագիտորեն կազմակերպված փորձառությունների միջոցով։",
    aboutStoryTwo:
      "Տարիների ընթացքում մենք ձևավորել ենք վստահելի միջազգային գործընկերային ցանց և ուժեղ տեղական թիմ։ Մենք ծրագրեր ենք ստեղծում անհատ ճանապարհորդների, հանգստի խմբերի, կորպորատիվ հաճախորդների, խրախուսական ծրագրերի և աշխարհի տարբեր երկրների զբոսաշրջային գործընկերների համար։",
    aboutVisionLabel: "Մեր տեսլականը",
    aboutVisionTitle: "Ճանապարհորդությունը պետք է լինի անհատական, անխափան և հիշարժան։",
    aboutVisionText:
      "Մենք հավատում ենք, որ լավագույն ճանապարհորդությունները չեն սահմանափակվում հայտնի տեսարժան վայրերով։ Դրանք իրական կապ են ստեղծում մարդկանց, ավանդույթների, բնության, խոհանոցի և պատմությունների հետ՝ միաժամանակ ապահովելով յուրաքանչյուր գործնական մանրուքի հոգատար կազմակերպումը։",
    aboutApproachTitle: "Մեր մոտեցումը",
    aboutApproachOneTitle: "Տեղական գիտելիք",
    aboutApproachOneText: "Ծրագրեր՝ ստեղծված Հայաստանում ապրող և երկրի յուրաքանչյուր շրջանը ճանաչող մասնագետների կողմից։",
    aboutApproachTwoTitle: "Ճկուն պլանավորում",
    aboutApproachTwoText: "Յուրաքանչյուր երթուղի հարմարեցվում է հյուրի հետաքրքրություններին, ժամանակացույցին, հարմարավետությանն ու բյուջեին։",
    aboutApproachThreeTitle: "Վստահելի սպասարկում",
    aboutApproachThreeText: "Խնամքով ընտրված հյուրանոցներ, զբոսավարներ, տրանսպորտ և փորձառություններ՝ վստահելի գործընկերների աջակցությամբ։",
    aboutApproachFourTitle: "Ամբողջական աջակցություն",
    aboutApproachFourText: "Մասնագիտական աջակցություն մինչև ժամանումը, ողջ ճանապարհորդության ընթացքում և մինչև վերջին հրաժեշտը։",
    aboutExpertiseTitle: "Ինչ ենք մենք ստեղծում",
    aboutExpertiseText:
      "Մշակութային ճանապարհորդություններից և ակտիվ արկածներից մինչև MICE, խրախուսական ուղևորություններ և հատուկ միջոցառումներ՝ մենք համադրում ենք ստեղծագործ մոտեցումն ու գործառնական փորձը՝ իրականում անթերի աշխատող ծրագրեր ապահովելու համար։",
    aboutMissionLabel: "Մեր առաքելությունը",
    aboutMissionTitle: "Բացահայտել այն Հայաստանը, որը կմնա Ձեր հիշողության մեջ։",
    aboutMissionText:
      "Մեր առաքելությունն է ներկայացնել Հայաստանի հնագույն ժառանգությունը, տպավորիչ բնությունը, կենդանի ավանդույթներն ու անկեղծ հյուրընկալությունը՝ յուրաքանչյուր ճանապարհորդություն դարձնելով հարմարավետ, բովանդակալից և անմոռանալի։",
    aboutCtaTitle: "Եկեք միասին ստեղծենք Ձեր հայկական պատմությունը։",

    /* Services section */
    servicesEyebrow:
      "Մեր ծառայությունները",

    servicesTitle:
      "Ամեն ինչ՝ Ձեր կատարյալ ճանապարհորդության համար",

    servicesIntroduction:
      "Առաջին գաղափարից մինչև հրաժեշտի պահը մեր թիմը հոգատարությամբ կազմակերպում է Ձեր ճանապարհորդության յուրաքանչյուր մանրուք։",

    serviceOneTitle:
      "Անհատականացված ճանապարհորդություններ",

    serviceOneText:
      "Ճամփորդական ծրագրեր՝ մշակված յուրաքանչյուր ճանապարհորդի հետաքրքրությունների, ժամանակացույցի և բյուջեի համաձայն։",

    serviceTwoTitle:
      "Խմբային տուրեր",

    serviceTwoText:
      "Մշակութային, ժամանցային և հատուկ հետաքրքրություններին համապատասխան ծրագրեր՝ տարբեր մեծության խմբերի համար։",

    serviceThreeTitle:
      "MICE և խրախուսական ուղևորություններ",

    serviceThreeText:
      "Մասնագիտական լուծումներ հանդիպումների, համաժողովների, խրախուսական ուղևորությունների և կորպորատիվ միջոցառումների համար։",

    serviceFourTitle:
      "Մշակութային փորձառություններ",

    serviceFourText:
      "Անմիջական ծանոթություն Հայաստանի ժառանգությանը, ավանդույթներին, խոհանոցին և տեղական համայնքներին։",

    serviceFiveTitle:
      "Արկածային և ակտիվ տուրիզմ",

    serviceFiveText:
      "Արշավներ, հեծանվային և ջիպ տուրեր, ձմեռային ակտիվություններ և բացօթյա փորձառություններ Հայաստանում։",

    serviceSixTitle:
      "Կացություն և տրանսպորտային ծառայություններ",

    serviceSixText:
      "Խնամքով ընտրված հյուրանոցներ, հարմարավետ տրանսպորտ, մասնագիտական զբոսավարներ և ամբողջական սպասարկում։",

    /* Discover Armenia section */
    armeniaEyebrow:
      "Բացահայտեք Հայաստանը",

    armeniaTitle:
      "Հավերժական գեղեցկության երկիր",

    armeniaIntroduction:
      "Բացահայտեք հնագույն ժառանգությունը, տպավորիչ բնապատկերները, կենսունակ քաղաքներն ու իսկական փորձառությունները, որոնք անմոռանալի են դարձնում յուրաքանչյուր ճանապարհորդություն Հայաստանում։",

    armeniaCardYerevanSubtitle:
      "Վարդագույն քաղաք",

    armeniaCardYerevanTitle:
      "Երևան",

    armeniaCardGarniSubtitle:
      "Հնագույն ժառանգություն",

    armeniaCardGarniTitle:
      "Գառնի",

    armeniaCardSevanSubtitle:
      "Կապույտ մարգարիտ",

    armeniaCardSevanTitle:
      "Սևանա լիճ",

    armeniaCardDilijanSubtitle:
      "Անտառներ և վանքեր",

    armeniaCardDilijanTitle:
      "Դիլիջան",

    armeniaCardTatevSubtitle:
      "Հարավային Հայաստան",

    armeniaCardTatevTitle:
      "Տաթև",

    armeniaCardWineSubtitle:
      "Համեր և ավանդույթներ",

    armeniaCardWineTitle:
      "Գինու տարածաշրջան",

    armeniaButton:
      "Պլանավորեք Ձեր ճանապարհորդությունը Հայաստանում",

    /* Best-selling Armenia tours */
    toursEyebrow: "Հայաստանի ամենապահանջված տուրերը",
    toursTitle: "Ընտրեք Ձեր ճանապարհորդությունը Հայաստանում։",
    toursIntroduction:
      "Խնամքով մշակված անհատական ծրագրեր, որոնք միավորում են Հայաստանի մշակույթը, բնությունը, ավանդույթներն ու ջերմ հյուրընկալությունը։",
    viewItinerary: "Դիտել ծրագիրը",
    requestThisTour: "Հարցում ուղարկել",

    tourOneDuration: "3 գիշեր / 4 օր",
    tourOneLabel: "Հայաստանի հիմնական տեսարժան վայրերը",
    tourOneTitle: "Բացահայտեք Հայաստանը",
    tourOneSummary:
      "Բացահայտեք Երևանը, Ծաղկաձորը և Սևանա լիճը՝ Հայաստանի հետ կարճ, բայց հագեցած ծանոթության ընթացքում։",
    tourOneDayOne:
      "Օր 1․ Ժամանում և տեղափոխում հյուրանոց։ Գիշերակաց Երևանում։",
    tourOneDayTwo:
      "Օր 2․ Երևանի տեսարժան վայրեր, ԳՈՒՄ շուկա և Վերնիսաժ։ Գիշերակաց Երևանում։",
    tourOneDayThree:
      "Օր 3․ Երևան – Ծաղկաձոր – Սևանա լիճ – Սևանավանք – Երևան։ Գիշերակաց Երևանում։",
    tourOneDayFour:
      "Օր 4․ Տեղափոխում օդանավակայան։",

    tourTwoDuration: "4 գիշեր / 5 օր",
    tourTwoLabel: "Մշակույթ և բնություն",
    tourTwoTitle: "Դասական Հայաստան",
    tourTwoSummary:
      "Բացահայտեք Հայաստանի մայրաքաղաքը, լեռնային բնապատկերները, Սևանա լիճը, Գառնին և ժայռափոր Գեղարդի վանքը։",
    tourTwoDayOne:
      "Օր 1․ Ժամանում և տեղափոխում հյուրանոց։ Գիշերակաց Երևանում։",
    tourTwoDayTwo:
      "Օր 2․ Երևանի տեսարժան վայրեր, ԳՈՒՄ շուկա և Վերնիսաժ։ Գիշերակաց Երևանում։",
    tourTwoDayThree:
      "Օր 3․ Երևան – Ծաղկաձոր – Սևանա լիճ – Սևանավանք – Երևան։ Գիշերակաց Երևանում։",
    tourTwoDayFour:
      "Օր 4․ Երևան – Չարենցի կամար – Գառնի – Գեղարդ – Քարերի սիմֆոնիա – Երևան։ Գիշերակաց Երևանում։",
    tourTwoDayFive:
      "Օր 5․ Տեղափոխում օդանավակայան։",

    tourThreeDuration: "5 գիշեր / 6 օր",
    tourThreeLabel: "Ժառանգություն և գինի",
    tourThreeTitle: "Հայաստանի լավագույնը",
    tourThreeSummary:
      "Բացահայտեք Հայաստանի հայտնի վանքերը, բնության հրաշքները, առողջարանային քաղաքն ու գինեգործական հնագույն ժառանգությունը։",
    tourThreeDayOne:
      "Օր 1․ Ժամանում և տեղափոխում հյուրանոց։ Գիշերակաց Երևանում։",
    tourThreeDayTwo:
      "Օր 2․ Երևանի տեսարժան վայրեր, ԳՈՒՄ շուկա և Վերնիսաժ։ Գիշերակաց Երևանում։",
    tourThreeDayThree:
      "Օր 3․ Երևան – Ծաղկաձոր – Սևանա լիճ – Սևանավանք – Երևան։ Գիշերակաց Երևանում։",
    tourThreeDayFour:
      "Օր 4․ Երևան – Խոր Վիրապ – Արենիի քարանձավ – Ջերմուկի հանքային ջրերի սրահ – Ջերմուկի ջրվեժ – Արենիի գինու գործարան – Երևան։ Գիշերակաց Երևանում։",
    tourThreeDayFive:
      "Օր 5․ Երևան – Չարենցի կամար – Գառնի – Գեղարդ – Քարերի սիմֆոնիա – Երևան։ Գիշերակաց Երևանում։",
    tourThreeDaySix:
      "Օր 6․ Տեղափոխում օդանավակայան։",

    tourFourDuration: "6 գիշեր / 7 օր",
    tourFourLabel: "Ամբողջական ճանապարհորդություն",
    tourFourTitle: "Ամբողջական Հայաստան",
    tourFourSummary:
      "Ամբողջական ճանապարհորդություն Հայաստանի պատմության, բնության, սրբավայրերի, ավանդույթների և տեղական հյուրընկալության աշխարհում։",
    tourFourDayOne:
      "Օր 1․ Ժամանում և տեղափոխում հյուրանոց։ Գիշերակաց Երևանում։",
    tourFourDayTwo:
      "Օր 2․ Երևանի տեսարժան վայրեր, ԳՈՒՄ շուկա և Վերնիսաժ։ Գիշերակաց Երևանում։",
    tourFourDayThree:
      "Օր 3․ Երևան – Ծաղկաձոր – Սևանա լիճ – Սևանավանք – Երևան։ Գիշերակաց Երևանում։",
    tourFourDayFour:
      "Օր 4․ Երևան – Խոր Վիրապ – Արենիի քարանձավ – Ջերմուկի հանքային ջրերի սրահ – Ջերմուկի ջրվեժ – Արենիի գինու գործարան – Երևան։ Գիշերակաց Երևանում։",
    tourFourDayFive:
      "Օր 5․ Երևան – Չարենցի կամար – Գառնի – Գեղարդ – Քարերի սիմֆոնիա – Երևան։ Գիշերակաց Երևանում։",
    tourFourDaySix:
      "Օր 6․ Երևան – Էջմիածին – Զվարթնոց – Մաչանենց հյուրատուն – Երևան։ Գիշերակաց Երևանում։",
    tourFourDaySeven:
      "Օր 7․ Տեղափոխում օդանավակայան։",

    /* Travel inspiration */
    blogPageTitle: "Ճանապարհորդական գաղափարներ | Liberty Incentive",
    blogHeroLabel: "Liberty-ի ճամփորդական օրագիր",
    blogHeroTitle: "Պատմություններ և գործնական գաղափարներ Ձեր հայկական ճանապարհորդության համար։",
    blogHeroText: "Բացահայտեք տեղացի մասնագետների պատրաստած սեզոնային ուղեցույցները, հատուկ միջոցառումներն ու օգտակար ճանապարհորդական խորհուրդները։",
    inspirationEyebrow: "Ճանապարհորդական գաղափարներ",
    inspirationTitle: "Բացահայտեք Հայաստանը այցելելու լավագույն ժամանակը։",
    inspirationIntroduction:
      "Սեզոնային ուղեցույցներ, ոգեշնչող փորձառություններ և գործնական խորհուրդներ՝ Հայաստանում անմոռանալի ճանապարհորդություն պլանավորելու համար։",
    inspirationCategoryEvent: "Միջոցառում",
    inspirationCategoryGuide: "Սեզոնային ուղեցույց",
    inspirationCategoryAdventure: "Ձմեռային արկածներ",
    readArticle: "Կարդալ հոդվածը",
    backToInspiration: "← Վերադառնալ ճանապարհորդական գաղափարներին",

    copyright: "© Liberty Incentive",

    balloonPageTitle: "Հայաստանի օդապարիկների միջազգային փառատոն | Liberty Incentive",
    autumnPageTitle: "Աշունը Հայաստանում | Liberty Incentive",
    winterPageTitle: "Ձմեռը Հայաստանում | Liberty Incentive",
    balloonMeta: "2026 թ․ հոկտեմբերի 6–11",
    balloonTitle: "Հայաստանի օդապարիկների միջազգային փառատոն",
    balloonExcerpt:
      "Տեսեք, թե ինչպես են գունավոր օդապարիկները լցնում Հայաստանի երկինքը, և բացահայտեք՝ ինչպես ներառել այս տպավորիչ փորձառությունը Ձեր ճանապարհորդության մեջ։",
    balloonArticleOne:
      "2026 թվականի հոկտեմբերի 6-ից 11-ը «Բացահայտիր Հայաստանը երկնքից» փառատոնը կմիավորի օդապարիկների օդաչուների, գունավոր օդանավերի և այցելուների՝ դառնալով երկրի ամենատպավորիչ աշնանային միջոցառումներից մեկը։ Թռիչքներն ու ցուցադրությունները Երևանն ու Հայաստանի բնապատկերները ներկայացնում են անմոռանալի նոր տեսանկյունից։",
    balloonDatesTitle: "Փառատոնի օրերը և փորձառությունը",
    balloonDatesText:
      "2026 թվականի փառատոնը նախատեսված է հոկտեմբերի 6–11-ը։ Այցելուները կարող են դիտել օդապարիկների խմբային թռիչքները, հանդիպել միջազգային օդաչուների, լուսանկարել օդապարիկները արևածագին կամ մայրամուտին և, պաշտոնապես հասանելի լինելու դեպքում, ամրագրել ուղևորային թռիչք։",
    balloonWeatherTitle: "Եղանակ, ժամեր և լուսանկարչություն",
    balloonArticleTwo:
      "Հոկտեմբերին Երևանում ցերեկները հաճախ մեղմ են, սակայն արևածագի ժամերին կարող է բավական զով լինել։ Օդապարիկների թռիչքը պահանջում է թույլ քամի և լավ տեսանելիություն, ուստի մեկնարկի ժամը և վայրը կարող են փոխվել կարճ ժամանակում։ Վաղ առավոտը և ուշ կեսօրը սովորաբար ապահովում են լավագույն լույսը լուսանկարների համար։",
    balloonPlanningTitle: "Ինչպես պլանավորել այցելությունը",
    balloonArticleThree:
      "Վերցրեք տաք շերտավոր հագուստ, փակ հարմարավետ կոշիկ, ջուր և լիցքավորված հեռախոս կամ տեսախցիկ։ Փառատոնի օրը թողեք ճկուն, քանի որ եղանակը կարող է հետաձգել թռիչքը։ Միջոցառումը կարելի է համադրել Երևանի տեսարժան վայրերի, Հանրապետության հրապարակի, Կասկադի, Գառնիի, Գեղարդի կամ գինու տարածաշրջան այցելության հետ։",
    balloonSafetyNote:
      "Կարևոր է․ թռիչքների ճշգրիտ վայրերը, ուղևորային թռիչքների հասանելիությունը և ամենօրյա ժամանակացույցը պետք է ճշտել պաշտոնական կազմակերպիչներից։ Բոլոր թռիչքները կախված են եղանակից և անվտանգության որոշումներից։",

    autumnMeta: "Սեպտեմբեր – նոյեմբեր",
    autumnTitle: "Աշունը Հայաստանում․ գույներ, եղանակ և ճանապարհորդական խորհուրդներ",
    autumnExcerpt:
      "Բացահայտեք Հայաստանը տարվա ամենագունեղ եղանակին՝ աշխույժ Երևանից մինչև Դիլիջանի ոսկեգույն անտառներն ու վանքերը։",
    autumnArticleOne:
      "Աշունը Հայաստանը բացահայտելու ամենամթնոլորտային եղանակներից մեկն է։ Երևանը շարունակում է ապրել սրճարանների բացօթյա հատվածներով և մշակութային միջոցառումներով, խաղողի այգիներում սկսվում է բերքահավաքը, իսկ Դիլիջանի ու Լոռու անտառները ներկվում են ոսկեգույն, պղնձագույն և մուգ կարմիր երանգներով։",
    autumnWeatherTitle: "Աշնան բնորոշ ջերմաստիճանները",
    autumnWeatherIntro: "Ջերմաստիճանը տարբերվում է ըստ տարվա և բարձրության, սակայն Երևանի այս մոտավոր միջակայքերը օգտակար են պլանավորման համար․",
    septemberLabel: "Սեպտեմբեր",
    septemberTemp: "Ցերեկը՝ 20–28°C · գիշերը՝ 10–16°C",
    septemberText: "Տաք և արևոտ շրջան՝ քաղաքային զբոսանքների, Սևանա լճի և բացօթյա ընթրիքների համար։",
    octoberLabel: "Հոկտեմբեր",
    octoberTemp: "Ցերեկը՝ 13–21°C · գիշերը՝ 5–11°C",
    octoberText: "Ավելի զով ու գունեղ՝ հարմար լուսանկարչության, գինու փորձառությունների և քայլարշավների համար։",
    novemberLabel: "Նոյեմբեր",
    novemberTemp: "Ցերեկը՝ 6–13°C · գիշերը՝ 0–5°C",
    novemberText: "Թարմ և ավելի հանգիստ շրջան՝ ցուրտ երեկոներով ու լեռներում վաղ ձյան հնարավորությամբ։",
    autumnHighlightsTitle: "Փառատոններ և սեզոնային փորձառություններ",
    autumnArticleTwo:
      "Աշունը բերում է խաղողի բերքահավաք, գինեգործարանների այցելություններ և սեզոնային խոհանոցային փորձառություններ Վայոց ձորում։ Երևանում անցկացվում են համերգներ, ցուցահանդեսներ ու քաղաքի տոնական միջոցառումներ․ 2026 թվականին Էրեբունի–Երևանի տոնակատարությունները սպասվում են հոկտեմբերի 11-ի շրջանում։ Ծրագիրը պետք է ճշտել ճանապարհորդությանը մոտ։",
    autumnPlacesTitle: "Աշնանը այցելելու լավագույն վայրերը",
    autumnPlacesOne: "Երևան — սրճարաններ, թանգարաններ, շուկաներ, այգիներ և երեկոյան զբոսանքներ Հանրապետության հրապարակում ու Կասկադում։",
    autumnPlacesTwo: "Դիլիջան և Հաղարծին — անտառային ճանապարհներ, վանական տեսարաններ և Հայաստանի ամենավառ աշնանային գույները։",
    autumnPlacesThree: "Արենի և Վայոց ձոր — խաղողի այգիներ, գինու համտեսներ, բերքահավաքի համեր, Նորավանք և կարմիր ժայռեր։",
    autumnPlacesFour: "Սևանա լիճ — կապույտ համայնապատկեր և Սևանավանք՝ ավելի քիչ այցելուներով․ լճի մոտ ավելի զով է, ուստի վերցրեք տաք հագուստ։",
    autumnPlacesFive: "Լոռի, Հաղպատ և Սանահին — կանաչ հովիտներ, ՅՈՒՆԵՍԿՕ-ի վանքեր և հյուսիսային գեղեցիկ բնապատկերներ։",
    autumnPlacesSix: "Գառնի և Գեղարդ — հնագույն ժառանգություն, կիրճի տեսարաններ և հարմար մեկօրյա մշակութային ուղևորություն Երևանից։",
    autumnPackingTitle: "Ինչ վերցնել Ձեզ հետ",
    autumnArticleThree:
      "Վերցրեք շերտավոր հագուստ, թեթև անջրանցիկ բաճկոն, արևապաշտպան միջոցներ և հարմարավետ քայլքի կոշիկ։ Հոկտեմբերի կեսից հետո երեկոների ու լեռնային շրջանների համար անհրաժեշտ է ավելի տաք վերարկու։ Ուշ աշնանը երկար ճանապարհները պլանավորելիս հաշվի առեք կարճացող լուսային օրը։",

    winterMeta: "Դեկտեմբեր – մարտ",
    winterTitle: "Ձմեռը Հայաստանում․ ձյուն, լեռներ և արկածներ",
    winterExcerpt:
      "Բացահայտեք դահուկավազքը, ճոպանուղիները, ձյունապատ բնապատկերները, տոնական Երևանը և անմոռանալի հանգիստը լեռներում։",
    winterArticleOne:
      "Ձմեռը բացահայտում է ավելի հանգիստ ու դրամատիկ Հայաստան՝ ձյունածածկ լեռներով, ջերմ ռեստորաններով, տոնական քաղաքային լույսերով և քիչ այցելուներով մշակութային վայրերով։ Լավ ծրագիրը համատեղում է բացօթյա արկածները թանգարանների, խոհանոցի և հարմարավետ երեկոների հետ։",
    winterWeatherTitle: "Ձմռան բնորոշ ջերմաստիճանները",
    winterWeatherIntro: "Սրանք Երևանի մոտավոր միջակայքերն են․ լեռնային հանգստավայրերում ավելի ցուրտ է և ջերմաստիճանը հաճախ զրոյից ցածր է․",
    decemberLabel: "Դեկտեմբեր",
    decemberTemp: "Ցերեկը՝ 0–8°C · գիշերը՝ -5–0°C",
    decemberText: "Տոնական լույսեր և առաջին ձյունը, իսկ լեռներում՝ ավելի ցուրտ պայմաններ։",
    januaryLabel: "Հունվար",
    januaryTemp: "Ցերեկը՝ -2–4°C · գիշերը՝ -8–-3°C",
    januaryText: "Սովորաբար ամենացուրտ ամիսն է և հարմար շրջան ձմեռային ակտիվությունների համար։",
    februaryLabel: "Փետրվար",
    februaryTemp: "Ցերեկը՝ 0–7°C · գիշերը՝ -6–-1°C",
    februaryText: "Ձմեռային սպորտը շարունակվում է, իսկ լուսային օրը աստիճանաբար երկարում է։",
    winterActivitiesTitle: "Ինչ անել ձմռանը",
    winterActivityOne: "Դահուկ կամ սնոուբորդ Ծաղկաձորում և ճոպանուղի՝ լեռնային լայն համայնապատկերը վայելելու համար։",
    winterActivityTwo: "Ձյունակոշիկներով քայլարշավ, ձնագնաց կամ սնոուքայթինգ՝ ուղեկցվող ծրագրերի և համապատասխան պայմանների դեպքում։",
    winterActivityThree: "Տոնական Երևան, թանգարաններ, ԳՈՒՄ շուկա, Վերնիսաժ, սրճարաններ և հայկական ռեստորաններ։",
    winterActivityFour: "Գյումրի՝ պատմական ճարտարապետության, ստեղծագործ մշակույթի և Շիրակի հարուստ խոհանոցի համար։",
    winterActivityFive: "Սևանա լճի խիստ ձմեռային տեսարաններ կամ հանգիստ Ջերմուկում՝ ճանապարհային և եղանակային պայմաններից կախված։",
    winterActivitySix: "Վանքերի և մշակութային վայրերի այցելությունները համադրեք խոհարարական դասերի, գինու համտեսների կամ արհեստների հետ։",
    winterPlanningTitle: "Հարմարավետ ձմեռային ուղևորության պլանավորում",
    winterArticleTwo:
      "Ձյան որակը և հանգստավայրերի աշխատանքը տարբերվում են սեզոնի ընթացքում, ուստի դահուկային օրերը ամրագրելուց առաջ ստուգեք պայմանները։ Ձյունից հետո ճանապարհը կարող է ավելի երկար տևել, իսկ որոշ լեռնային այցելություններ անվտանգության համար կարող են փոփոխվել։",
    winterPackingTitle: "Ինչ հագնել",
    winterArticleThree:
      "Վերցրեք ջերմապահպան ներքնաշերտ, մեկուսացված անջրանցիկ բաճկոն, ձեռնոցներ, գլխարկ և լավ կպչունությամբ անջրանցիկ կոշիկ։ Լեռներում արևային ակնոցն ու արևապաշտպան քսուքը նույնպես օգտակար են։ Ճկուն ծրագիրն ու անհատական տրանսպորտը ձմեռային ուղևորությունն ավելի հարմարավետ են դարձնում։",
    weatherDisclaimer: "Ջերմաստիճանները պլանավորման համար բնորոշ միջակայքեր են, ոչ թե եղանակի կանխատեսում․ իրական պայմանները տարբերվում են ըստ վայրի, բարձրության և տարվա։"
  }
};


/* ==================================================
   2. ELEMENTS
   ================================================== */

const siteHeader =
  document.getElementById("site-header");

const languageSelector =
  document.querySelector(".language-selector");

const languageButton =
  document.getElementById("language-button");

const currentLanguageElement =
  document.getElementById("current-language");

const languageOptions =
  document.querySelectorAll("[data-language]");

const mobileMenuButton =
  document.getElementById("mobile-menu-button");

const mobileNavigation =
  document.getElementById("mobile-navigation");

const mobileDestinations =
  document.querySelector(".mobile-destinations");

const mobileDestinationsButton =
  document.getElementById(
    "mobile-destinations-button"
  );

const desktopDropdown =
  document.querySelector(".navigation-dropdown");

const desktopDropdownButton =
  document.querySelector(".dropdown-button");

const mobileNavigationLinks =
  document.querySelectorAll(
    ".mobile-navigation a"
  );

const aboutSection =
  document.querySelector(".about-section");

const servicesSection =
  document.querySelector(".services-section");

const armeniaSection =
  document.querySelector(".armenia-section");

const toursSection =
  document.querySelector(".tours-section");

const tourOpenButtons =
  document.querySelectorAll("[data-tour-open]");

const tourCloseButtons =
  document.querySelectorAll("[data-tour-close]");

const tourModals =
  document.querySelectorAll(".tour-modal");

const travelInspirationSection =
  document.querySelector(".travel-inspiration-section");

const articleOpenButtons =
  document.querySelectorAll("[data-article]");

const articleCloseButtons =
  document.querySelectorAll("[data-close-article]");

const articleModals =
  document.querySelectorAll(".article-modal");

const heroVideo =
  document.querySelector(".hero-video");

const inquiryForm =
  document.getElementById("inquiry-form");

const selectedPackageField =
  document.getElementById("selected-package");

const destinationField =
  document.getElementById("destination");

const childrenField =
  document.getElementById("children");

const childrenAgesContainer =
  document.getElementById("children-ages");

const arrivalDateField =
  document.getElementById("arrival-date");

const departureDateField =
  document.getElementById("departure-date");

const inquirySubmitButton =
  document.getElementById("inquiry-submit-button");

const formStatus =
  document.getElementById("form-status");

let activeLanguage = "en";


/* ==================================================
   3. LANGUAGE FUNCTIONS
   ================================================== */

function updateLanguage(language) {
  const selectedTranslations =
    translations[language];

  if (!selectedTranslations) {
    return;
  }

  activeLanguage = language;

  document
    .querySelectorAll("[data-i18n]")
    .forEach((element) => {
      const translationKey =
        element.dataset.i18n;

      const translatedText =
        selectedTranslations[translationKey];

      if (translatedText !== undefined) {
        element.textContent = translatedText;
      }
    });

  document
    .querySelectorAll("[data-i18n-placeholder]")
    .forEach((element) => {
      const translationKey =
        element.dataset.i18nPlaceholder;

      const translatedText =
        selectedTranslations[translationKey];

      if (translatedText !== undefined) {
        element.placeholder = translatedText;
      }
    });

  renderChildrenAgeFields();

  document.documentElement.lang =
    language === "hy" ? "hy" : "en";

  if (currentLanguageElement) {
    currentLanguageElement.textContent =
      language === "hy" ? "HY" : "EN";
  }

  languageOptions.forEach((option) => {
    const isActive =
      option.dataset.language === language;

    option.classList.toggle(
      "active",
      isActive
    );

    option.setAttribute(
      "aria-pressed",
      isActive ? "true" : "false"
    );
  });

  localStorage.setItem(
    "libertyIncentiveLanguage",
    language
  );

  closeLanguageMenu();
}


/* ==================================================
   4. LANGUAGE MENU
   ================================================== */

function openLanguageMenu() {
  if (!languageSelector || !languageButton) {
    return;
  }

  languageSelector.classList.add("is-open");

  languageButton.setAttribute(
    "aria-expanded",
    "true"
  );
}

function closeLanguageMenu() {
  if (!languageSelector || !languageButton) {
    return;
  }

  languageSelector.classList.remove("is-open");

  languageButton.setAttribute(
    "aria-expanded",
    "false"
  );
}

function toggleLanguageMenu() {
  if (!languageSelector) {
    return;
  }

  const isOpen =
    languageSelector.classList.contains(
      "is-open"
    );

  if (isOpen) {
    closeLanguageMenu();
  } else {
    openLanguageMenu();
  }
}

if (languageButton) {
  languageButton.addEventListener(
    "click",
    (event) => {
      event.stopPropagation();
      toggleLanguageMenu();
    }
  );
}

languageOptions.forEach((option) => {
  option.addEventListener("click", () => {
    const selectedLanguage =
      option.dataset.language;

    updateLanguage(selectedLanguage);
  });
});


/* ==================================================
   5. MOBILE MENU
   ================================================== */

function openMobileMenu() {
  if (!mobileNavigation || !mobileMenuButton) {
    return;
  }

  mobileNavigation.classList.add("is-open");
  mobileMenuButton.classList.add("is-active");

  mobileMenuButton.setAttribute(
    "aria-expanded",
    "true"
  );

  document.body.classList.add(
    "mobile-menu-open"
  );
}

function closeMobileMenu() {
  if (!mobileNavigation || !mobileMenuButton) {
    return;
  }

  mobileNavigation.classList.remove("is-open");
  mobileMenuButton.classList.remove("is-active");

  mobileMenuButton.setAttribute(
    "aria-expanded",
    "false"
  );

  document.body.classList.remove(
    "mobile-menu-open"
  );

  closeMobileDestinations();
}

function toggleMobileMenu() {
  if (!mobileNavigation) {
    return;
  }

  const isOpen =
    mobileNavigation.classList.contains(
      "is-open"
    );

  if (isOpen) {
    closeMobileMenu();
  } else {
    openMobileMenu();
  }
}

if (mobileMenuButton) {
  mobileMenuButton.addEventListener(
    "click",
    (event) => {
      event.stopPropagation();
      toggleMobileMenu();
      closeLanguageMenu();
    }
  );
}

mobileNavigationLinks.forEach((link) => {
  link.addEventListener("click", () => {
    closeMobileMenu();
  });
});


/* ==================================================
   6. MOBILE DESTINATIONS
   ================================================== */

function openMobileDestinations() {
  if (
    !mobileDestinations ||
    !mobileDestinationsButton
  ) {
    return;
  }

  mobileDestinations.classList.add("is-open");

  mobileDestinationsButton.setAttribute(
    "aria-expanded",
    "true"
  );
}

function closeMobileDestinations() {
  if (
    !mobileDestinations ||
    !mobileDestinationsButton
  ) {
    return;
  }

  mobileDestinations.classList.remove(
    "is-open"
  );

  mobileDestinationsButton.setAttribute(
    "aria-expanded",
    "false"
  );
}

function toggleMobileDestinations() {
  if (!mobileDestinations) {
    return;
  }

  const isOpen =
    mobileDestinations.classList.contains(
      "is-open"
    );

  if (isOpen) {
    closeMobileDestinations();
  } else {
    openMobileDestinations();
  }
}

if (mobileDestinationsButton) {
  mobileDestinationsButton.addEventListener(
    "click",
    (event) => {
      event.stopPropagation();
      toggleMobileDestinations();
    }
  );
}


/* ==================================================
   7. DESKTOP DESTINATIONS
   ================================================== */

function closeDesktopDropdown() {
  if (
    !desktopDropdown ||
    !desktopDropdownButton
  ) {
    return;
  }

  desktopDropdown.classList.remove("is-open");

  desktopDropdownButton.setAttribute(
    "aria-expanded",
    "false"
  );
}

if (desktopDropdownButton) {
  desktopDropdownButton.addEventListener(
    "click",
    (event) => {
      event.stopPropagation();

      const isOpen =
        desktopDropdown.classList.contains(
          "is-open"
        );

      if (isOpen) {
        closeDesktopDropdown();
      } else {
        desktopDropdown.classList.add(
          "is-open"
        );

        desktopDropdownButton.setAttribute(
          "aria-expanded",
          "true"
        );
      }
    }
  );
}


/* ==================================================
   8. CLOSE MENUS
   ================================================== */

document.addEventListener("click", (event) => {
  if (
    languageSelector &&
    !languageSelector.contains(event.target)
  ) {
    closeLanguageMenu();
  }

  if (
    desktopDropdown &&
    !desktopDropdown.contains(event.target)
  ) {
    closeDesktopDropdown();
  }
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    closeLanguageMenu();
    closeDesktopDropdown();
    closeMobileMenu();
    closeTourModal();
    closeArticleModal();
  }
});


/* ==================================================
   9. TOUR ITINERARY MODALS
   ================================================== */

let activeTourModal = null;
let lastTourTrigger = null;

function openTourModal(modalId, trigger) {
  const modal = document.getElementById(modalId);

  if (!modal || !modal.classList.contains("tour-modal")) {
    return;
  }

  closeTourModal(false);

  activeTourModal = modal;
  lastTourTrigger = trigger || null;

  modal.classList.add("is-open");
  modal.setAttribute("aria-hidden", "false");
  document.body.classList.add("tour-modal-open");

  const closeButton =
    modal.querySelector(".tour-modal-close");

  if (closeButton) {
    window.setTimeout(() => {
      closeButton.focus();
    }, 50);
  }
}

function closeTourModal(restoreFocus = true) {
  if (!activeTourModal) {
    return;
  }

  activeTourModal.classList.remove("is-open");
  activeTourModal.setAttribute("aria-hidden", "true");
  document.body.classList.remove("tour-modal-open");

  const triggerToRestore = lastTourTrigger;

  activeTourModal = null;
  lastTourTrigger = null;

  if (
    restoreFocus &&
    triggerToRestore &&
    typeof triggerToRestore.focus === "function"
  ) {
    triggerToRestore.focus();
  }
}

tourOpenButtons.forEach((button) => {
  button.addEventListener("click", () => {
    openTourModal(
      button.dataset.tourOpen,
      button
    );
  });
});

tourCloseButtons.forEach((button) => {
  button.addEventListener("click", () => {
    closeTourModal();
  });
});

tourModals.forEach((modal) => {
  const inquiryLink =
    modal.querySelector(".tour-modal-inquiry");

  if (inquiryLink) {
    inquiryLink.addEventListener("click", () => {
      if (selectedPackageField) {
        selectedPackageField.value =
          inquiryLink.dataset.package || "";
      }

      if (destinationField) {
        destinationField.value = "Armenia";
      }

      closeTourModal(false);
    });
  }

  modal.addEventListener("keydown", (event) => {
    if (event.key !== "Tab") {
      return;
    }

    const focusableElements = Array.from(
      modal.querySelectorAll(
        'button:not([disabled]), a[href], [tabindex]:not([tabindex="-1"])'
      )
    );

    if (focusableElements.length === 0) {
      return;
    }

    const firstElement = focusableElements[0];
    const lastElement =
      focusableElements[focusableElements.length - 1];

    if (
      event.shiftKey &&
      document.activeElement === firstElement
    ) {
      event.preventDefault();
      lastElement.focus();
    } else if (
      !event.shiftKey &&
      document.activeElement === lastElement
    ) {
      event.preventDefault();
      firstElement.focus();
    }
  });
});


/* ==================================================
   10. TRAVEL INSPIRATION ARTICLE MODALS
   ================================================== */

let activeArticleModal = null;
let lastArticleTrigger = null;

function openArticleModal(modalId, trigger) {
  const modal = document.getElementById(modalId);

  if (!modal || !modal.classList.contains("article-modal")) {
    return;
  }

  closeArticleModal(false);
  closeTourModal(false);

  activeArticleModal = modal;
  lastArticleTrigger = trigger || null;

  modal.hidden = false;
  modal.setAttribute("aria-hidden", "false");
  document.body.classList.add("article-modal-open");

  const closeButton =
    modal.querySelector(".article-modal-close");

  if (closeButton) {
    window.setTimeout(() => {
      closeButton.focus();
    }, 50);
  }
}

function closeArticleModal(restoreFocus = true) {
  if (!activeArticleModal) {
    return;
  }

  activeArticleModal.hidden = true;
  activeArticleModal.setAttribute("aria-hidden", "true");
  document.body.classList.remove("article-modal-open");

  const triggerToRestore = lastArticleTrigger;

  activeArticleModal = null;
  lastArticleTrigger = null;

  if (
    restoreFocus &&
    triggerToRestore &&
    typeof triggerToRestore.focus === "function"
  ) {
    triggerToRestore.focus();
  }
}

articleOpenButtons.forEach((button) => {
  button.addEventListener("click", () => {
    openArticleModal(
      button.dataset.article,
      button
    );
  });
});

articleCloseButtons.forEach((button) => {
  button.addEventListener("click", () => {
    closeArticleModal();
  });
});

articleModals.forEach((modal) => {
  const inquiryLink =
    modal.querySelector(".article-inquiry-button");

  if (inquiryLink) {
    inquiryLink.addEventListener("click", () => {
      closeArticleModal(false);
    });
  }

  modal.addEventListener("keydown", (event) => {
    if (event.key !== "Tab") {
      return;
    }

    const focusableElements = Array.from(
      modal.querySelectorAll(
        'button:not([disabled]), a[href], [tabindex]:not([tabindex="-1"])'
      )
    ).filter((element) => !element.hidden);

    if (focusableElements.length === 0) {
      return;
    }

    const firstElement = focusableElements[0];
    const lastElement =
      focusableElements[focusableElements.length - 1];

    if (
      event.shiftKey &&
      document.activeElement === firstElement
    ) {
      event.preventDefault();
      lastElement.focus();
    } else if (
      !event.shiftKey &&
      document.activeElement === lastElement
    ) {
      event.preventDefault();
      firstElement.focus();
    }
  });
});


/* ==================================================
   11. INQUIRY FORM
   ================================================== */

function renderChildrenAgeFields() {
  if (!childrenField || !childrenAgesContainer) {
    return;
  }

  const existingValues = Array.from(
    childrenAgesContainer.querySelectorAll("input")
  ).map((input) => input.value);

  const childrenCount = Math.min(
    Math.max(Number.parseInt(childrenField.value, 10) || 0, 0),
    10
  );

  childrenField.value = childrenCount;
  childrenAgesContainer.innerHTML = "";

  const labelTemplate =
    translations[activeLanguage].childAgeLabel;

  for (let index = 0; index < childrenCount; index += 1) {
    const wrapper = document.createElement("div");
    wrapper.className = "child-age-field";

    const label = document.createElement("label");
    const input = document.createElement("input");
    const inputId = `child-age-${index + 1}`;

    label.htmlFor = inputId;
    label.textContent = labelTemplate.replace(
      "{number}",
      String(index + 1)
    );

    input.id = inputId;
    input.name = `child_${index + 1}_age`;
    input.type = "number";
    input.min = "0";
    input.max = "17";
    input.required = true;
    input.inputMode = "numeric";
    input.value = existingValues[index] || "";

    wrapper.append(label, input);
    childrenAgesContainer.append(wrapper);
  }
}

function showFormStatus(type, message) {
  if (!formStatus) {
    return;
  }

  formStatus.textContent = message;
  formStatus.className = `form-status is-visible is-${type}`;
}

function clearFormStatus() {
  if (!formStatus) {
    return;
  }

  formStatus.textContent = "";
  formStatus.className = "form-status";
}

function setInquiryLoading(isLoading) {
  if (!inquirySubmitButton) {
    return;
  }

  inquirySubmitButton.disabled = isLoading;

  const buttonText =
    inquirySubmitButton.querySelector("[data-i18n='sendInquiry']");

  if (buttonText) {
    buttonText.textContent = isLoading
      ? translations[activeLanguage].sendingInquiry
      : translations[activeLanguage].sendInquiry;
  }
}

if (childrenField) {
  childrenField.addEventListener(
    "input",
    renderChildrenAgeFields
  );
}

if (arrivalDateField && departureDateField) {
  const today = new Date().toISOString().split("T")[0];

  arrivalDateField.min = today;
  departureDateField.min = today;

  arrivalDateField.addEventListener("change", () => {
    departureDateField.min = arrivalDateField.value || today;

    if (
      departureDateField.value &&
      departureDateField.value <= arrivalDateField.value
    ) {
      departureDateField.value = "";
    }
  });
}

if (inquiryForm) {
  inquiryForm.addEventListener("submit", async (event) => {
    event.preventDefault();
    clearFormStatus();

    if (
      arrivalDateField &&
      departureDateField &&
      arrivalDateField.value &&
      departureDateField.value &&
      departureDateField.value <= arrivalDateField.value
    ) {
      showFormStatus(
        "error",
        translations[activeLanguage].invalidDates
      );
      departureDateField.focus();
      return;
    }

    if (!inquiryForm.reportValidity()) {
      return;
    }

    setInquiryLoading(true);

    try {
      const response = await fetch(inquiryForm.action, {
        method: "POST",
        body: new FormData(inquiryForm),
        headers: {
          Accept: "application/json"
        }
      });

      if (!response.ok) {
        throw new Error("Form submission failed");
      }

      inquiryForm.reset();
      renderChildrenAgeFields();
      showFormStatus(
        "success",
        translations[activeLanguage].inquirySuccess
      );
    } catch (error) {
      showFormStatus(
        "error",
        translations[activeLanguage].inquiryError
      );
    } finally {
      setInquiryLoading(false);
    }
  });
}


/* ==================================================
   11. HEADER SCROLL EFFECT
   ================================================== */

function updateHeaderOnScroll() {
  if (!siteHeader) {
    return;
  }

  if (window.scrollY > 20) {
    siteHeader.classList.add("scrolled");
  } else {
    siteHeader.classList.remove("scrolled");
  }
}

window.addEventListener(
  "scroll",
  updateHeaderOnScroll,
  { passive: true }
);

updateHeaderOnScroll();


/* ==================================================
   12. SECTION ANIMATIONS
   ================================================== */

const animatedSections = [
  aboutSection,
  servicesSection,
  armeniaSection,
  toursSection,
  travelInspirationSection
].filter(Boolean);

if (
  "IntersectionObserver" in window &&
  animatedSections.length > 0
) {
  const sectionObserver =
    new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(
              "is-visible"
            );

            observer.unobserve(
              entry.target
            );
          }
        });
      },
      {
        threshold: 0.14
      }
    );

  animatedSections.forEach((section) => {
    sectionObserver.observe(section);
  });
} else {
  animatedSections.forEach((section) => {
    section.classList.add("is-visible");
  });
}


/* ==================================================
   13. HERO VIDEO
   ================================================== */

if (heroVideo) {
  heroVideo.muted = true;
  heroVideo.defaultMuted = true;

  const playHeroVideo = () => {
    const playPromise = heroVideo.play();

    if (
      playPromise !== undefined &&
      typeof playPromise.catch === "function"
    ) {
      playPromise.catch(() => {
        /*
          If autoplay is blocked, the poster
          remains visible.
        */
      });
    }
  };

  if (heroVideo.readyState >= 2) {
    playHeroVideo();
  } else {
    heroVideo.addEventListener(
      "canplay",
      playHeroVideo,
      { once: true }
    );
  }
}


/* ==================================================
   14. WINDOW RESIZE
   ================================================== */

window.addEventListener("resize", () => {
  if (window.innerWidth > 1020) {
    closeMobileMenu();
  }
});


/* ==================================================
   15. INITIAL LANGUAGE
   ================================================== */

const savedLanguage =
  localStorage.getItem(
    "libertyIncentiveLanguage"
  );

const browserLanguage =
  navigator.language
    .toLowerCase()
    .startsWith("hy")
    ? "hy"
    : "en";

const initialLanguage =
  savedLanguage === "en" ||
  savedLanguage === "hy"
    ? savedLanguage
    : browserLanguage;

updateLanguage(initialLanguage);
