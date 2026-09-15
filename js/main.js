document.addEventListener("DOMContentLoaded", function () {

  /* ======================================================
     ELEMENTS
     ====================================================== */

  const siteHeader =
    document.getElementById("site-header");

  const mobileMenuButton =
    document.getElementById("mobile-menu-button");

  const mobileNavigation =
    document.getElementById("mobile-navigation");

  const languageButton =
    document.getElementById("language-button");

  const currentLanguage =
    document.getElementById("current-language");

  const languageMenu =
    document.getElementById("language-menu");

  const languageOptions =
    document.querySelectorAll("[data-language]");

  const mobileNavigationLinks =
    document.querySelectorAll(".mobile-navigation a");

  const heroVideo =
    document.querySelector(".hero-video");


  /* ======================================================
     TRANSLATIONS
     ====================================================== */

  const translations = {

    en: {

      navAbout: "About Us",
      navArmenia: "Armenia",
      navDestinations: "Destinations",
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

      sideLabel:
        "Since 2011 · Yerevan, Armenia",

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
      navDestinations: "Ուղղություններ",
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

      sideLabel:
        "2011 թվականից · Երևան, Հայաստան",

      explore: "Բացահայտել",

      companyName: "Liberty Incentive",

      nextSectionTitle:
        "Ձեր ճանապարհորդությունը Հայաստանում սկսվում է այստեղ։",

      nextSectionDescription:
        "Գլխավոր էջի հաջորդ բաժինները կավելացվեն այստեղ՝ քայլ առ քայլ։"

    }

  };


  /* ======================================================
     APPLY LANGUAGE
     ====================================================== */

  function applyLanguage(language) {

    const selectedTranslations =
      translations[language];

    if (!selectedTranslations) {
      return;
    }


    document
      .querySelectorAll("[data-i18n]")
      .forEach(function (element) {

        const translationKey =
          element.getAttribute("data-i18n");

        const translatedText =
          selectedTranslations[translationKey];

        if (translatedText) {
          element.textContent = translatedText;
        }

      });


    if (language === "hy") {

      currentLanguage.textContent = "AM";

      document.documentElement.lang = "hy";

      document.title =
        "Liberty Incentive | Բացահայտեք Հայաստանը";

    } else {

      currentLanguage.textContent = "EN";

      document.documentElement.lang = "en";

      document.title =
        "Liberty Incentive | Discover Armenia";

    }


    localStorage.setItem(
      "libertyLanguage",
      language
    );

  }


  /* ======================================================
     LOAD SAVED LANGUAGE
     ====================================================== */

  const savedLanguage =
    localStorage.getItem("libertyLanguage") || "en";

  applyLanguage(savedLanguage);


  /* ======================================================
     SCROLLING HEADER
     ====================================================== */

  function updateHeader() {

    if (window.scrollY > 30) {

      siteHeader.classList.add("scrolled");

    } else {

      siteHeader.classList.remove("scrolled");

    }

  }

  updateHeader();

  window.addEventListener(
    "scroll",
    updateHeader,
    {
      passive: true
    }
  );


  /* ======================================================
     MOBILE MENU
     ====================================================== */

  function openMobileMenu() {

    mobileMenuButton.classList.add("active");
    mobileNavigation.classList.add("open");

    mobileMenuButton.setAttribute(
      "aria-expanded",
      "true"
    );

    mobileMenuButton.setAttribute(
      "aria-label",
      "Close navigation menu"
    );

    document.body.classList.add("menu-open");

  }


  function closeMobileMenu() {

    mobileMenuButton.classList.remove("active");
    mobileNavigation.classList.remove("open");

    mobileMenuButton.setAttribute(
      "aria-expanded",
      "false"
    );

    mobileMenuButton.setAttribute(
      "aria-label",
      "Open navigation menu"
    );

    document.body.classList.remove("menu-open");

  }


  mobileMenuButton.addEventListener(
    "click",
    function () {

      const menuIsOpen =
        mobileNavigation.classList.contains("open");

      if (menuIsOpen) {

        closeMobileMenu();

      } else {

        openMobileMenu();

      }

    }
  );


  mobileNavigationLinks.forEach(
    function (link) {

      link.addEventListener(
        "click",
        function () {

          closeMobileMenu();

        }
      );

    }
  );


  /* ======================================================
     LANGUAGE MENU
     ====================================================== */

  function openLanguageMenu() {

    languageMenu.classList.add("open");

    languageButton.setAttribute(
      "aria-expanded",
      "true"
    );

  }


  function closeLanguageMenu() {

    languageMenu.classList.remove("open");

    languageButton.setAttribute(
      "aria-expanded",
      "false"
    );

  }


  languageButton.addEventListener(
    "click",
    function (event) {

      event.stopPropagation();

      const menuIsOpen =
        languageMenu.classList.contains("open");

      if (menuIsOpen) {

        closeLanguageMenu();

      } else {

        openLanguageMenu();

      }

    }
  );


  languageOptions.forEach(
    function (option) {

      option.addEventListener(
        "click",
        function () {

          const selectedLanguage =
            option.getAttribute("data-language");

          applyLanguage(selectedLanguage);
          closeLanguageMenu();

        }
      );

    }
  );


  /* ======================================================
     CLOSE LANGUAGE MENU WHEN CLICKING OUTSIDE
     ====================================================== */

  document.addEventListener(
    "click",
    function (event) {

      const clickInsideLanguageSelector =
        event.target.closest(".language-selector");

      if (!clickInsideLanguageSelector) {

        closeLanguageMenu();

      }

    }
  );


  /* ======================================================
     ESCAPE KEY
     ====================================================== */

  document.addEventListener(
    "keydown",
    function (event) {

      if (event.key === "Escape") {

        closeMobileMenu();
        closeLanguageMenu();

      }

    }
  );


  /* ======================================================
     WINDOW RESIZE
     ====================================================== */

  window.addEventListener(
    "resize",
    function () {

      if (window.innerWidth > 1240) {

        closeMobileMenu();

      }

    }
  );


  /* ======================================================
     HERO VIDEO
     ====================================================== */

  if (heroVideo) {

    heroVideo.muted = true;

    const playPromise =
      heroVideo.play();

    if (playPromise !== undefined) {

      playPromise.catch(function () {

        /*
          Some browsers may wait for user interaction
          before starting the background video.
        */

      });

    }

  }

});
