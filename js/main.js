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
      "Day 7: Transfer to the airport."
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
      "Օր 7․ Տեղափոխում օդանավակայան։"
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

const heroVideo =
  document.querySelector(".hero-video");


/* ==================================================
   3. LANGUAGE FUNCTIONS
   ================================================== */

function updateLanguage(language) {
  const selectedTranslations =
    translations[language];

  if (!selectedTranslations) {
    return;
  }

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
   10. HEADER SCROLL EFFECT
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
   11. SECTION ANIMATIONS
   ================================================== */

const animatedSections = [
  aboutSection,
  servicesSection,
  armeniaSection,
  toursSection
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
   12. HERO VIDEO
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
   13. WINDOW RESIZE
   ================================================== */

window.addEventListener("resize", () => {
  if (window.innerWidth > 1020) {
    closeMobileMenu();
  }
});


/* ==================================================
   14. INITIAL LANGUAGE
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
