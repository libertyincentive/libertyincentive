document.addEventListener("DOMContentLoaded", function () {

  /* ======================================================
     ELEMENTS
     ====================================================== */

  const siteHeader = document.getElementById("site-header");

  const mobileMenuButton =
    document.getElementById("mobile-menu-button");

  const mobileNavigation =
    document.getElementById("mobile-navigation");

  const languageButton =
    document.getElementById("language-button");

  const languageMenu =
    document.getElementById("language-menu");

  const languageOptions =
    document.querySelectorAll("[data-language]");

  const mobileNavigationLinks =
    document.querySelectorAll(".mobile-navigation a");

  const heroVideo =
    document.querySelector(".hero-video");


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

  window.addEventListener("scroll", updateHeader, {
    passive: true
  });


  /* ======================================================
     MOBILE MENU
     ====================================================== */

  function openMobileMenu() {

    mobileMenuButton.classList.add("active");
    mobileNavigation.classList.add("open");

    mobileMenuButton.setAttribute("aria-expanded", "true");
    mobileMenuButton.setAttribute(
      "aria-label",
      "Close navigation menu"
    );

    document.body.classList.add("menu-open");

  }


  function closeMobileMenu() {

    mobileMenuButton.classList.remove("active");
    mobileNavigation.classList.remove("open");

    mobileMenuButton.setAttribute("aria-expanded", "false");
    mobileMenuButton.setAttribute(
      "aria-label",
      "Open navigation menu"
    );

    document.body.classList.remove("menu-open");

  }


  mobileMenuButton.addEventListener("click", function () {

    const menuIsOpen =
      mobileNavigation.classList.contains("open");

    if (menuIsOpen) {
      closeMobileMenu();
    } else {
      openMobileMenu();
    }

  });


  mobileNavigationLinks.forEach(function (link) {

    link.addEventListener("click", function () {
      closeMobileMenu();
    });

  });


  /* ======================================================
     LANGUAGE SELECTOR
     ====================================================== */

  function closeLanguageMenu() {

    languageMenu.classList.remove("open");
    languageButton.setAttribute("aria-expanded", "false");

  }


  languageButton.addEventListener("click", function (event) {

    event.stopPropagation();

    const languageMenuIsOpen =
      languageMenu.classList.contains("open");

    languageMenu.classList.toggle("open");

    languageButton.setAttribute(
      "aria-expanded",
      String(!languageMenuIsOpen)
    );

  });


  languageOptions.forEach(function (option) {

    option.addEventListener("click", function () {

      const selectedLanguage =
        option.getAttribute("data-language");

      if (selectedLanguage === "hy") {
        languageButton.firstChild.textContent = "AM ";
        document.documentElement.lang = "hy";
      } else {
        languageButton.firstChild.textContent = "EN ";
        document.documentElement.lang = "en";
      }

      /*
        The complete Armenian translations will be added
        after the English homepage sections are finished.
      */

      closeLanguageMenu();

    });

  });


  /* ======================================================
     CLOSE MENUS WHEN CLICKING OUTSIDE
     ====================================================== */

  document.addEventListener("click", function (event) {

    const clickInsideLanguageSelector =
      event.target.closest(".language-selector");

    if (!clickInsideLanguageSelector) {
      closeLanguageMenu();
    }

  });


  /* ======================================================
     ESCAPE KEY
     ====================================================== */

  document.addEventListener("keydown", function (event) {

    if (event.key === "Escape") {

      closeMobileMenu();
      closeLanguageMenu();

    }

  });


  /* ======================================================
     WINDOW RESIZE
     ====================================================== */

  window.addEventListener("resize", function () {

    if (window.innerWidth > 1240) {
      closeMobileMenu();
    }

  });


  /* ======================================================
     HERO VIDEO
     ====================================================== */

  if (heroVideo) {

    heroVideo.muted = true;

    const playPromise = heroVideo.play();

    if (playPromise !== undefined) {

      playPromise.catch(function () {

        /*
          Some browsers may pause autoplay until the user
          interacts with the page.
        */

      });

    }

  }

});
