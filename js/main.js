/* =========================================================
   LIBERTY INCENTIVE — MAIN JAVASCRIPT
   ========================================================= */

document.addEventListener("DOMContentLoaded", function () {

  /* =======================================================
     1. TRANSLATIONS
     ======================================================= */

  const translations = {
    en: {
      navAbout: "About Us",
      navArmenia: "Armenia",
      navDestinations: "Other Destinations",
      navBlog: "Blog",
      navGallery: "Gallery",
      navTeam: "Our Team",
      navContact: "Contact",

      destinationGeorgia: "Georgia",
      destinationCaucasus: "Combined Caucasus",
      destinationEgypt: "Egypt",
      destinationQatar: "Qatar",
      destinationCyprus: "Cyprus",
      destinationAlbania: "Albania",
      destinationTunisia: "Tunisia",
      destinationUAE: "UAE",

      planTrip: "Plan Your Trip",

      heroEyebrow: "Welcome to Armenia",
      heroTitleMain: "Armenia,",
      heroTitleOutline: "Beyond the Ordinary",

      heroDescription:
        "Tailor-made journeys, authentic experiences and unforgettable moments created by local experts.",

      discoverArmenia: "Discover Armenia",
      sideLabel: "Since 2011 · Yerevan, Armenia",
      explore: "Explore",

      companyName: "Liberty Incentive",

      nextSectionTitle:
        "Your journey through Armenia starts here.",

      nextSectionDescription:
        "The next homepage sections will be added here step by step."
    },

    hy: {
      navAbout: "Մեր մասին",
      navArmenia: "Հայաստան",
      navDestinations: "Այլ ուղղություններ",
      navBlog: "Բլոգ",
      navGallery: "Պատկերասրահ",
      navTeam: "Մեր թիմը",
      navContact: "Կապ",

      destinationGeorgia: "Վրաստան",
      destinationCaucasus: "Համակցված Կովկաս",
      destinationEgypt: "Եգիպտոս",
      destinationQatar: "Կատար",
      destinationCyprus: "Կիպրոս",
      destinationAlbania: "Ալբանիա",
      destinationTunisia: "Թունիս",
      destinationUAE: "ԱՄԷ",

      planTrip: "Պլանավորել ուղևորությունը",

      heroEyebrow: "Բարի գալուստ Հայաստան",
      heroTitleMain: "Հայաստան,",
      heroTitleOutline: "Սովորականից այն կողմ",

      heroDescription:
        "Անհատականացված ճամփորդություններ, իսկական փորձառություններ և անմոռանալի պահեր՝ ստեղծված տեղացի մասնագետների կողմից։",

      discoverArmenia: "Բացահայտեք Հայաստանը",
      sideLabel: "2011 թվականից · Երևան, Հայաստան",
      explore: "Բացահայտել",

      companyName: "Liberty Incentive",

      nextSectionTitle:
        "Ձեր ճանապարհորդությունը Հայաստանում սկսվում է այստեղ։",

      nextSectionDescription:
        "Գլխավոր էջի հաջորդ բաժինները կավելացվեն այստեղ քայլ առ քայլ։"
    }
  };


  /* =======================================================
     2. SELECT PAGE ELEMENTS
     ======================================================= */

  const siteHeader =
    document.getElementById("site-header");

  const languageButton =
    document.getElementById("language-button");

  const languageMenu =
    document.getElementById("language-menu");

  const currentLanguageText =
    document.getElementById("current-language");

  const languageOptions =
    document.querySelectorAll("[data-language]");

  const mobileMenuButton =
    document.getElementById("mobile-menu-button");

  const mobileNavigation =
    document.getElementById("mobile-navigation");

  const mobileDestinationsButton =
    document.getElementById("mobile-destinations-button");

  const mobileDestinationsMenu =
    document.getElementById("mobile-destinations-menu");

  const mobileNavigationLinks =
    document.querySelectorAll(
      ".mobile-navigation a"
    );

  const heroVideo =
    document.querySelector(".hero-video");


  /* =======================================================
     3. CHANGE WEBSITE LANGUAGE
     ======================================================= */

  function changeLanguage(language) {

    const selectedTranslations =
      translations[language];

    if (!selectedTranslations) {
      return;
    }

    const translatableElements =
      document.querySelectorAll("[data-i18n]");

    translatableElements.forEach(function (element) {

      const translationKey =
        element.getAttribute("data-i18n");

      if (selectedTranslations[translationKey]) {
        element.textContent =
          selectedTranslations[translationKey];
      }

    });

    document.documentElement.lang =
      language === "hy" ? "hy" : "en";

    if (currentLanguageText) {
      currentLanguageText.textContent =
        language === "hy" ? "AM" : "EN";
    }

    try {
      localStorage.setItem(
        "libertyLanguage",
        language
      );
    } catch (error) {
      console.log(
        "The language preference could not be saved."
      );
    }

    closeLanguageMenu();
  }


  /* =======================================================
     4. LOAD SAVED LANGUAGE
     ======================================================= */

  let savedLanguage = "en";

  try {
    savedLanguage =
      localStorage.getItem("libertyLanguage") || "en";
  } catch (error) {
    savedLanguage = "en";
  }

  changeLanguage(savedLanguage);


  /* =======================================================
     5. LANGUAGE MENU
     ======================================================= */

  function openLanguageMenu() {

    if (!languageMenu || !languageButton) {
      return;
    }

    languageMenu.classList.add("open");

    languageButton.setAttribute(
      "aria-expanded",
      "true"
    );
  }

  function closeLanguageMenu() {

    if (!languageMenu || !languageButton) {
      return;
    }

    languageMenu.classList.remove("open");

    languageButton.setAttribute(
      "aria-expanded",
      "false"
    );
  }

  function toggleLanguageMenu() {

    if (!languageMenu) {
      return;
    }

    const menuIsOpen =
      languageMenu.classList.contains("open");

    if (menuIsOpen) {
      closeLanguageMenu();
    } else {
      openLanguageMenu();
    }
  }

  if (languageButton) {

    languageButton.addEventListener(
      "click",
      function (event) {

        event.stopPropagation();

        toggleLanguageMenu();
      }
    );
  }

  languageOptions.forEach(function (option) {

    option.addEventListener(
      "click",
      function () {

        const selectedLanguage =
          option.getAttribute("data-language");

        changeLanguage(selectedLanguage);
      }
    );
  });


  /* =======================================================
     6. MOBILE MAIN MENU
     ======================================================= */

  function openMobileMenu() {

    if (!mobileNavigation || !mobileMenuButton) {
      return;
    }

    mobileNavigation.classList.add("open");
    mobileMenuButton.classList.add("active");

    mobileMenuButton.setAttribute(
      "aria-expanded",
      "true"
    );

    mobileMenuButton.setAttribute(
      "aria-label",
      "Close navigation menu"
    );

    document.body.classList.add(
      "mobile-menu-open"
    );

    closeLanguageMenu();
  }

  function closeMobileMenu() {

    if (!mobileNavigation || !mobileMenuButton) {
      return;
    }

    mobileNavigation.classList.remove("open");
    mobileMenuButton.classList.remove("active");

    mobileMenuButton.setAttribute(
      "aria-expanded",
      "false"
    );

    mobileMenuButton.setAttribute(
      "aria-label",
      "Open navigation menu"
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

    const menuIsOpen =
      mobileNavigation.classList.contains("open");

    if (menuIsOpen) {
      closeMobileMenu();
    } else {
      openMobileMenu();
    }
  }

  if (mobileMenuButton) {

    mobileMenuButton.addEventListener(
      "click",
      function (event) {

        event.stopPropagation();

        toggleMobileMenu();
      }
    );
  }


  /* =======================================================
     7. MOBILE DESTINATIONS SUBMENU
     ======================================================= */

  function openMobileDestinations() {

    if (
      !mobileDestinationsMenu ||
      !mobileDestinationsButton
    ) {
      return;
    }

    mobileDestinationsMenu.classList.add("open");

    mobileDestinationsButton.setAttribute(
      "aria-expanded",
      "true"
    );
  }

  function closeMobileDestinations() {

    if (
      !mobileDestinationsMenu ||
      !mobileDestinationsButton
    ) {
      return;
    }

    mobileDestinationsMenu.classList.remove("open");

    mobileDestinationsButton.setAttribute(
      "aria-expanded",
      "false"
    );
  }

  function toggleMobileDestinations() {

    if (!mobileDestinationsMenu) {
      return;
    }

    const destinationsAreOpen =
      mobileDestinationsMenu.classList.contains("open");

    if (destinationsAreOpen) {
      closeMobileDestinations();
    } else {
      openMobileDestinations();
    }
  }

  if (mobileDestinationsButton) {

    mobileDestinationsButton.addEventListener(
      "click",
      function (event) {

        event.stopPropagation();

        toggleMobileDestinations();
      }
    );
  }


  /* =======================================================
     8. CLOSE MOBILE MENU AFTER CHOOSING A LINK
     ======================================================= */

  mobileNavigationLinks.forEach(function (link) {

    link.addEventListener(
      "click",
      function () {

        closeMobileMenu();
      }
    );
  });


  /* =======================================================
     9. HEADER STYLE WHILE SCROLLING
     ======================================================= */

  function updateHeaderOnScroll() {

    if (!siteHeader) {
      return;
    }

    if (window.scrollY > 30) {
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


  /* =======================================================
     10. CLOSE MENUS WHEN CLICKING OUTSIDE
     ======================================================= */

  document.addEventListener(
    "click",
    function (event) {

      const clickedInsideLanguageSelector =
        event.target.closest(".language-selector");

      if (!clickedInsideLanguageSelector) {
        closeLanguageMenu();
      }
    }
  );


  /* =======================================================
     11. CLOSE MENUS WITH ESCAPE KEY
     ======================================================= */

  document.addEventListener(
    "keydown",
    function (event) {

      if (event.key === "Escape") {
        closeLanguageMenu();
        closeMobileMenu();
      }
    }
  );


  /* =======================================================
     12. RESET MOBILE MENU WHEN SCREEN BECOMES DESKTOP
     ======================================================= */

  window.addEventListener(
    "resize",
    function () {

      if (window.innerWidth > 980) {
        closeMobileMenu();
      }
    }
  );


  /* =======================================================
     13. HERO VIDEO PLAYBACK
     ======================================================= */

  if (heroVideo) {

    heroVideo.muted = true;

    const videoPlayback =
      heroVideo.play();

    if (
      videoPlayback !== undefined
    ) {
      videoPlayback.catch(
        function () {
          console.log(
            "The browser is waiting before playing the video."
          );
        }
      );
    }
  }

});
