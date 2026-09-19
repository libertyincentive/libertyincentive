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

    /* Destinations */
    destinationGeorgia: "Georgia",
    destinationCaucasus: "Combined Caucasus",
    destinationEgypt: "Egypt",
    destinationQatar: "Qatar",
    destinationCyprus: "Cyprus",
    destinationAlbania: "Albania",
    destinationTunisia: "Tunisia",
    destinationUAE: "UAE",

    /* General buttons */
    planTrip: "Plan Your Trip",
    discoverArmenia: "Discover Armenia",
    explore: "Explore",

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
    aboutBenefitTwoText: "Designed by people who know Armenia",

    aboutBenefitThreeTitle: "Tailor-Made",
    aboutBenefitThreeText:
      "Every journey shaped around the traveller",

    aboutBenefitFourTitle: "Multilingual Service",
    aboutBenefitFourText:
      "Professional support for international guests",

    aboutButton: "Discover Our Story"
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

    /* Destinations */
    destinationGeorgia: "Վրաստան",
    destinationCaucasus: "Համակցված Կովկաս",
    destinationEgypt: "Եգիպտոս",
    destinationQatar: "Քաթար",
    destinationCyprus: "Կիպրոս",
    destinationAlbania: "Ալբանիա",
    destinationTunisia: "Թունիս",
    destinationUAE: "ԱՄԷ",

    /* General buttons */
    planTrip: "Պլանավորեք ուղևորությունը",
    discoverArmenia: "Բացահայտեք Հայաստանը",
    explore: "Բացահայտել",

    /* Hero */
    heroEyebrow: "Բարի գալուստ Հայաստան",
    heroTitleMain: "Հայաստան",
    heroTitleOutline: "Սովորականից այն կողմ",
    heroDescription:
      "Անհատականացված ճանապարհորդություններ, իսկական փորձառություններ և անմոռանալի պահեր՝ ստեղծված տեղացի մասնագետների կողմից։",
    sideLabel: "2011 թվականից · Երևան, Հայաստան",

    /* About section */
    aboutEyebrow: "Liberty Incentive-ի մասին",
    aboutTitleFirst: "Ավելին, քան պարզապես ճանապարհորդություն։",
    aboutTitleSecond: "Ձեզ համար ստեղծված փորձառություն։",

    aboutDescriptionFirst:
      "2011 թվականին հիմնադրված Liberty Incentive-ը հայկական փորձառու տուրօպերատոր է, որն առաջարկում է անհատականացված ճանապարհորդություններ և մասնագիտական զբոսաշրջային ծառայություններ Հայաստանում ու տարածաշրջանում։",

    aboutDescriptionSecond:
      "Տեղական փորձի, վստահելի գործընկերների և հոգատար սպասարկման շնորհիվ մենք ճանապարհորդներին ներկայացնում ենք Հայաստանի հնագույն ժառանգությունը, տպավորիչ բնությունը, ավանդույթներն ու անկեղծ հյուրընկալությունը։",

    aboutSinceYear: "2011",
    aboutSinceText: "Ստեղծում ենք հիշարժան ճանապարհորդություններ",

    aboutBenefitOneTitle: "2011 թվականից",
    aboutBenefitOneText:
      "Ստեղծում ենք հիշարժան ճանապարհորդություններ",

    aboutBenefitTwoTitle: "Տեղական փորձ",
    aboutBenefitTwoText:
      "Ծրագրեր՝ մշակված Հայաստանը ճանաչող մասնագետների կողմից",

    aboutBenefitThreeTitle: "Անհատական մոտեցում",
    aboutBenefitThreeText:
      "Յուրաքանչյուր ճանապարհորդություն՝ ստեղծված հյուրի ցանկություններին համապատասխան",

    aboutBenefitFourTitle: "Բազմալեզու սպասարկում",
    aboutBenefitFourText:
      "Մասնագիտական աջակցություն միջազգային հյուրերին",

    aboutButton: "Բացահայտեք մեր պատմությունը"
  }
};


/* ==================================================
   2. ELEMENTS
   ================================================== */

const siteHeader = document.getElementById("site-header");

const languageSelector = document.querySelector(".language-selector");
const languageButton = document.getElementById("language-button");
const languageMenu = document.getElementById("language-menu");
const currentLanguageElement =
  document.getElementById("current-language");
const languageOptions = document.querySelectorAll(
  "[data-language]"
);

const mobileMenuButton =
  document.getElementById("mobile-menu-button");
const mobileNavigation =
  document.getElementById("mobile-navigation");

const mobileDestinations =
  document.querySelector(".mobile-destinations");
const mobileDestinationsButton =
  document.getElementById("mobile-destinations-button");
const mobileDestinationsMenu =
  document.getElementById("mobile-destinations-menu");

const desktopDropdown =
  document.querySelector(".navigation-dropdown");
const desktopDropdownButton =
  document.querySelector(".dropdown-button");

const mobileNavigationLinks =
  document.querySelectorAll(".mobile-navigation a");

const aboutSection =
  document.querySelector(".about-section");

const heroVideo =
  document.querySelector(".hero-video");


/* ==================================================
   3. LANGUAGE FUNCTIONS
   ================================================== */

function updateLanguage(language) {
  const selectedTranslations = translations[language];

  if (!selectedTranslations) {
    return;
  }

  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const translationKey = element.dataset.i18n;
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

    option.classList.toggle("active", isActive);
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
  languageButton.setAttribute("aria-expanded", "true");
}

function closeLanguageMenu() {
  if (!languageSelector || !languageButton) {
    return;
  }

  languageSelector.classList.remove("is-open");
  languageButton.setAttribute("aria-expanded", "false");
}

function toggleLanguageMenu() {
  if (!languageSelector) {
    return;
  }

  const isOpen =
    languageSelector.classList.contains("is-open");

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

  document.body.classList.add("mobile-menu-open");
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

  document.body.classList.remove("mobile-menu-open");

  closeMobileDestinations();
}

function toggleMobileMenu() {
  if (!mobileNavigation) {
    return;
  }

  const isOpen =
    mobileNavigation.classList.contains("is-open");

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
   6. MOBILE DESTINATIONS DROPDOWN
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

  mobileDestinations.classList.remove("is-open");

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
    mobileDestinations.classList.contains("is-open");

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
   7. DESKTOP DESTINATIONS DROPDOWN
   ================================================== */

function closeDesktopDropdown() {
  if (!desktopDropdown || !desktopDropdownButton) {
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
        desktopDropdown.classList.contains("is-open");

      if (isOpen) {
        closeDesktopDropdown();
      } else {
        desktopDropdown.classList.add("is-open");

        desktopDropdownButton.setAttribute(
          "aria-expanded",
          "true"
        );
      }
    }
  );
}


/* ==================================================
   8. CLOSE MENUS WHEN CLICKING OUTSIDE
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


/* ==================================================
   9. CLOSE MENUS WITH ESCAPE KEY
   ================================================== */

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    closeLanguageMenu();
    closeDesktopDropdown();
    closeMobileMenu();
  }
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
   11. ABOUT SECTION ANIMATION
   ================================================== */

if (aboutSection) {
  const aboutObserver =
    new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(
              "is-visible"
            );

            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.16
      }
    );

  aboutObserver.observe(aboutSection);
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
          If autoplay is blocked, the poster image
          remains visible as the hero background.
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
