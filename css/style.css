/* ==================================================
   LIBERTY INCENTIVE — MAIN STYLESHEET
   ================================================== */

:root {
  --primary-blue: #0295ce;
  --primary-blue-dark: #007eb1;
  --navy: #082844;
  --navy-light: #123d5c;
  --orange: #f4a51c;
  --orange-dark: #df8f08;
  --white: #ffffff;
  --off-white: #f6f9fb;
  --light-blue: #eaf7fc;
  --light-grey: #e6edf1;
  --medium-grey: #72808b;
  --dark-text: #10283b;
  --header-height: 88px;
  --container-width: 1240px;
  --serif-font: Georgia, "Times New Roman", serif;
  --body-font: Arial, Helvetica, sans-serif;
  --transition: 0.3s ease;
}


/* ==================================================
   RESET AND GLOBAL STYLES
   ================================================== */

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

html {
  scroll-behavior: smooth;
  scroll-padding-top: var(--header-height);
}

body {
  background-color: var(--white);
  color: var(--dark-text);
  font-family: var(--body-font);
  line-height: 1.6;
  overflow-x: hidden;
}

body.mobile-menu-open {
  overflow: hidden;
}

img,
video {
  display: block;
  max-width: 100%;
}

a {
  color: inherit;
  text-decoration: none;
}

button,
input,
select,
textarea {
  font: inherit;
}

button {
  border: 0;
  cursor: pointer;
}

section {
  position: relative;
}


/* ==================================================
   HEADER
   ================================================== */

.site-header {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
  width: 100%;
  height: var(--header-height);
  background-color: var(--white);
  border-bottom: 1px solid rgba(8, 40, 68, 0.1);
  box-shadow: 0 4px 24px rgba(8, 40, 68, 0.06);
  transition:
    background-color var(--transition),
    box-shadow var(--transition);
}

.site-header.scrolled {
  box-shadow: 0 7px 30px rgba(8, 40, 68, 0.12);
}

.header-container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 28px;
  width: min(100% - 48px, var(--container-width));
  height: 100%;
  margin: 0 auto;
}

.logo-link {
  display: flex;
  flex-shrink: 0;
  align-items: center;
}

.site-logo {
  width: 137px;
  height: auto;
  object-fit: contain;
}


/* Desktop navigation */

.desktop-navigation {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 24px;
  margin-left: auto;
}

.desktop-navigation > a,
.dropdown-button {
  position: relative;
  display: inline-flex;
  align-items: center;
  gap: 6px;
  min-height: 44px;
  background: transparent;
  color: var(--navy);
  font-size: 13px;
  font-weight: 700;
  letter-spacing: 0.01em;
  white-space: nowrap;
  transition: color var(--transition);
}

.desktop-navigation > a::after,
.dropdown-button::after {
  position: absolute;
  right: 0;
  bottom: 3px;
  left: 0;
  width: 0;
  height: 2px;
  margin: auto;
  background-color: var(--orange);
  content: "";
  transition: width var(--transition);
}

.desktop-navigation > a:hover,
.desktop-navigation > a:focus-visible,
.dropdown-button:hover,
.dropdown-button:focus-visible {
  color: var(--primary-blue);
}

.desktop-navigation > a:hover::after,
.desktop-navigation > a:focus-visible::after,
.navigation-dropdown:hover .dropdown-button::after,
.navigation-dropdown:focus-within .dropdown-button::after {
  width: 100%;
}


/* Desktop dropdown */

.navigation-dropdown {
  position: relative;
}

.dropdown-arrow {
  display: inline-block;
  color: var(--primary-blue);
  font-size: 11px;
  transition: transform var(--transition);
}

.navigation-dropdown:hover .dropdown-arrow,
.navigation-dropdown:focus-within .dropdown-arrow {
  transform: rotate(180deg);
}

.dropdown-menu {
  position: absolute;
  top: calc(100% + 14px);
  left: 50%;
  display: grid;
  min-width: 230px;
  padding: 10px;
  visibility: hidden;
  background-color: var(--white);
  border: 1px solid rgba(8, 40, 68, 0.1);
  border-radius: 10px;
  box-shadow: 0 18px 45px rgba(8, 40, 68, 0.16);
  opacity: 0;
  transform: translate(-50%, 12px);
  transition:
    opacity var(--transition),
    transform var(--transition),
    visibility var(--transition);
}

.dropdown-menu::before {
  position: absolute;
  top: -16px;
  right: 0;
  left: 0;
  height: 16px;
  content: "";
}

.navigation-dropdown:hover .dropdown-menu,
.navigation-dropdown:focus-within .dropdown-menu,
.navigation-dropdown.is-open .dropdown-menu {
  visibility: visible;
  opacity: 1;
  transform: translate(-50%, 0);
}

.dropdown-menu a {
  padding: 11px 14px;
  border-radius: 7px;
  color: var(--navy);
  font-size: 13px;
  font-weight: 600;
  transition:
    background-color var(--transition),
    color var(--transition),
    padding-left var(--transition);
}

.dropdown-menu a:hover,
.dropdown-menu a:focus-visible {
  padding-left: 19px;
  background-color: var(--light-blue);
  color: var(--primary-blue);
}


/* Header actions */

.header-actions {
  display: flex;
  flex-shrink: 0;
  align-items: center;
  gap: 12px;
}

.language-selector {
  position: relative;
}

.language-button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 7px;
  min-width: 58px;
  height: 44px;
  padding: 0 13px;
  background-color: var(--white);
  border: 1px solid rgba(8, 40, 68, 0.2);
  border-radius: 8px;
  color: var(--navy);
  font-size: 13px;
  font-weight: 800;
  transition:
    border-color var(--transition),
    color var(--transition),
    background-color var(--transition);
}

.language-button:hover,
.language-button:focus-visible {
  background-color: var(--light-blue);
  border-color: var(--primary-blue);
  color: var(--primary-blue);
}

.language-arrow {
  font-size: 10px;
  transition: transform var(--transition);
}

.language-selector.is-open .language-arrow {
  transform: rotate(180deg);
}

.language-menu {
  position: absolute;
  top: calc(100% + 10px);
  right: 0;
  display: grid;
  min-width: 145px;
  padding: 8px;
  visibility: hidden;
  background-color: var(--white);
  border: 1px solid rgba(8, 40, 68, 0.1);
  border-radius: 9px;
  box-shadow: 0 16px 40px rgba(8, 40, 68, 0.15);
  opacity: 0;
  transform: translateY(10px);
  transition:
    opacity var(--transition),
    transform var(--transition),
    visibility var(--transition);
}

.language-selector.is-open .language-menu {
  visibility: visible;
  opacity: 1;
  transform: translateY(0);
}

.language-menu button {
  padding: 10px 12px;
  background-color: transparent;
  border-radius: 6px;
  color: var(--navy);
  text-align: left;
  transition:
    background-color var(--transition),
    color var(--transition);
}

.language-menu button:hover,
.language-menu button:focus-visible,
.language-menu button.active {
  background-color: var(--light-blue);
  color: var(--primary-blue);
}

.header-inquiry-button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 46px;
  padding: 0 20px;
  background-color: var(--orange);
  border: 1px solid var(--orange);
  border-radius: 8px;
  color: var(--navy);
  font-size: 12px;
  font-weight: 800;
  letter-spacing: 0.07em;
  text-transform: uppercase;
  transition:
    background-color var(--transition),
    border-color var(--transition),
    color var(--transition),
    transform var(--transition),
    box-shadow var(--transition);
}

.header-inquiry-button:hover,
.header-inquiry-button:focus-visible {
  background-color: var(--primary-blue);
  border-color: var(--primary-blue);
  color: var(--white);
  box-shadow: 0 10px 24px rgba(2, 149, 206, 0.25);
  transform: translateY(-2px);
}


/* Mobile menu button */

.mobile-menu-button {
  display: none;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 5px;
  width: 44px;
  height: 44px;
  background-color: var(--white);
  border: 1px solid rgba(8, 40, 68, 0.2);
  border-radius: 8px;
}

.mobile-menu-button span {
  width: 20px;
  height: 2px;
  background-color: var(--navy);
  border-radius: 5px;
  transition:
    transform var(--transition),
    opacity var(--transition);
}

.mobile-menu-button.is-active span:nth-child(1) {
  transform: translateY(7px) rotate(45deg);
}

.mobile-menu-button.is-active span:nth-child(2) {
  opacity: 0;
}

.mobile-menu-button.is-active span:nth-child(3) {
  transform: translateY(-7px) rotate(-45deg);
}


/* ==================================================
   MOBILE NAVIGATION
   ================================================== */

.mobile-navigation {
  position: fixed;
  top: var(--header-height);
  right: 0;
  z-index: 999;
  display: none;
  width: min(90%, 390px);
  height: calc(100vh - var(--header-height));
  padding: 22px;
  overflow-y: auto;
  background-color: var(--white);
  box-shadow: -12px 20px 35px rgba(8, 40, 68, 0.14);
  transform: translateX(105%);
  transition: transform 0.4s ease;
}

.mobile-navigation.is-open {
  transform: translateX(0);
}

.mobile-navigation > a,
.mobile-destinations-button {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  min-height: 53px;
  padding: 0 5px;
  background-color: transparent;
  border-bottom: 1px solid var(--light-grey);
  color: var(--navy);
  font-size: 15px;
  font-weight: 700;
  text-align: left;
}

.mobile-navigation > a:hover,
.mobile-destinations-button:hover {
  color: var(--primary-blue);
}

.mobile-dropdown-arrow {
  color: var(--primary-blue);
  transition: transform var(--transition);
}

.mobile-destinations.is-open .mobile-dropdown-arrow {
  transform: rotate(180deg);
}

.mobile-destinations-menu {
  display: grid;
  max-height: 0;
  padding-left: 14px;
  overflow: hidden;
  background-color: var(--off-white);
  opacity: 0;
  transition:
    max-height 0.4s ease,
    opacity var(--transition),
    padding var(--transition);
}

.mobile-destinations.is-open .mobile-destinations-menu {
  max-height: 520px;
  padding-top: 8px;
  padding-bottom: 8px;
  opacity: 1;
}

.mobile-destinations-menu a {
  padding: 10px 12px;
  border-radius: 6px;
  color: var(--navy-light);
  font-size: 14px;
  font-weight: 600;
}

.mobile-destinations-menu a:hover {
  background-color: var(--light-blue);
  color: var(--primary-blue);
}

.mobile-navigation .mobile-inquiry-button {
  justify-content: center;
  min-height: 50px;
  margin-top: 24px;
  padding: 0 18px;
  background-color: var(--orange);
  border: 1px solid var(--orange);
  border-radius: 8px;
  color: var(--navy);
  font-size: 13px;
  font-weight: 800;
  letter-spacing: 0.06em;
  text-transform: uppercase;
}

.mobile-navigation .mobile-inquiry-button:hover,
.mobile-navigation .mobile-inquiry-button:focus-visible {
  background-color: var(--primary-blue);
  border-color: var(--primary-blue);
  color: var(--white);
}


/* ==================================================
   HERO SECTION
   ================================================== */

.hero-section {
  position: relative;
  display: flex;
  align-items: center;
  min-height: 100svh;
  padding: calc(var(--header-height) + 70px) 0 85px;
  overflow: hidden;
  background-color: var(--navy);
}

.hero-video {
  position: absolute;
  inset: 0;
  z-index: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
}

.hero-overlay {
  position: absolute;
  inset: 0;
  z-index: 1;
  background:
    linear-gradient(
      90deg,
      rgba(5, 30, 51, 0.88) 0%,
      rgba(5, 30, 51, 0.7) 42%,
      rgba(5, 30, 51, 0.32) 72%,
      rgba(5, 30, 51, 0.2) 100%
    );
}

.hero-decoration {
  position: absolute;
  z-index: 2;
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 50%;
  pointer-events: none;
}

.hero-decoration-left {
  bottom: -230px;
  left: -250px;
  width: 600px;
  height: 600px;
}

.hero-decoration-right {
  top: 120px;
  right: -190px;
  width: 460px;
  height: 460px;
}

.hero-content {
  position: relative;
  z-index: 3;
  width: min(100% - 96px, var(--container-width));
  margin: 0 auto;
  color: var(--white);
}

.hero-eyebrow,
.section-eyebrow {
  display: flex;
  align-items: center;
  gap: 13px;
  margin-bottom: 20px;
  font-size: 12px;
  font-weight: 800;
  letter-spacing: 0.22em;
  text-transform: uppercase;
}

.hero-eyebrow {
  color: var(--white);
}

.hero-eyebrow::before,
.section-eyebrow::before {
  width: 42px;
  height: 2px;
  content: "";
}

.hero-eyebrow::before {
  background-color: var(--orange);
}

.hero-content h1 {
  max-width: 940px;
  margin-bottom: 25px;
  font-family: var(--serif-font);
  font-weight: 400;
  line-height: 0.94;
}

.hero-title-main {
  color: var(--white);
  font-size: clamp(66px, 7.6vw, 118px);
}

.hero-title-outline {
  color: transparent;
  font-size: clamp(52px, 6.2vw, 96px);
  -webkit-text-stroke: 1.4px rgba(255, 255, 255, 0.9);
}

.hero-description {
  max-width: 620px;
  margin-bottom: 33px;
  color: rgba(255, 255, 255, 0.92);
  font-size: 17px;
  line-height: 1.75;
}

.hero-buttons {
  display: flex;
  flex-wrap: wrap;
  gap: 14px;
}

.primary-button,
.secondary-button,
.about-button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 54px;
  padding: 0 28px;
  border-radius: 7px;
  font-size: 12px;
  font-weight: 800;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  transition:
    background-color var(--transition),
    border-color var(--transition),
    color var(--transition),
    transform var(--transition),
    box-shadow var(--transition);
}

.primary-button {
  background-color: var(--orange);
  border: 1px solid var(--orange);
  color: var(--navy);
}

.primary-button:hover,
.primary-button:focus-visible {
  background-color: var(--primary-blue);
  border-color: var(--primary-blue);
  color: var(--white);
  box-shadow: 0 12px 28px rgba(2, 149, 206, 0.24);
  transform: translateY(-2px);
}

.secondary-button {
  background-color: rgba(255, 255, 255, 0.08);
  border: 1px solid rgba(255, 255, 255, 0.7);
  color: var(--white);
  backdrop-filter: blur(7px);
}

.secondary-button:hover,
.secondary-button:focus-visible {
  background-color: var(--white);
  border-color: var(--white);
  color: var(--navy);
  transform: translateY(-2px);
}

.hero-side-label {
  position: absolute;
  top: 50%;
  right: 28px;
  z-index: 3;
  color: rgba(255, 255, 255, 0.82);
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  writing-mode: vertical-rl;
  transform: translateY(-50%);
}

.scroll-indicator {
  position: absolute;
  bottom: 27px;
  left: 50%;
  z-index: 3;
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 8px;
  color: rgba(255, 255, 255, 0.8);
  font-size: 9px;
  font-weight: 700;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  transform: translateX(-50%);
}

.scroll-line {
  position: relative;
  width: 1px;
  height: 32px;
  overflow: hidden;
  background-color: rgba(255, 255, 255, 0.35);
}

.scroll-line::after {
  position: absolute;
  top: -100%;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: var(--orange);
  content: "";
  animation: scrollLine 2s infinite;
}

@keyframes scrollLine {
  0% {
    transform: translateY(0);
  }

  100% {
    transform: translateY(200%);
  }
}


/* ==================================================
   ABOUT SECTION
   ================================================== */

.about-section {
  padding: 120px 0;
  overflow: hidden;
  background-color: var(--white);
}

.about-container {
  display: grid;
  grid-template-columns: minmax(0, 0.92fr) minmax(0, 1.08fr);
  align-items: center;
  gap: clamp(60px, 7vw, 105px);
  width: min(100% - 96px, var(--container-width));
  margin: 0 auto;
}

.about-image-column {
  position: relative;
}

.about-image-wrapper {
  position: relative;
  min-height: 630px;
}

.about-image-wrapper::before {
  position: absolute;
  top: -25px;
  left: -25px;
  z-index: 0;
  width: 48%;
  height: 42%;
  border-top: 3px solid var(--orange);
  border-left: 3px solid var(--orange);
  content: "";
}

.about-image {
  position: absolute;
  inset: 0;
  z-index: 1;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  border-radius: 3px 70px 3px 3px;
  box-shadow: 0 24px 55px rgba(8, 40, 68, 0.17);
  transition: transform 1.2s ease;
}

.about-image-wrapper:hover .about-image {
  transform: scale(1.015);
}

.about-image-accent {
  position: absolute;
  right: -25px;
  bottom: -25px;
  z-index: 0;
  width: 60%;
  height: 45%;
  background-color: var(--light-blue);
  border-radius: 0 0 30px 0;
}

.about-experience-card {
  position: absolute;
  right: -35px;
  bottom: 44px;
  z-index: 2;
  display: flex;
  align-items: center;
  gap: 16px;
  max-width: 260px;
  padding: 20px 22px;
  background-color: var(--orange);
  border-radius: 3px;
  box-shadow: 0 18px 40px rgba(244, 165, 28, 0.3);
  color: var(--navy);
}

.about-experience-card strong {
  flex-shrink: 0;
  padding-right: 15px;
  border-right: 1px solid rgba(8, 40, 68, 0.25);
  font-family: var(--serif-font);
  font-size: 30px;
  font-weight: 400;
  line-height: 1;
}

.about-experience-card span {
  min-width: 0;
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.05em;
  line-height: 1.45;
  overflow-wrap: anywhere;
  text-transform: uppercase;
}

.about-content {
  position: relative;
}

.about-content .section-eyebrow {
  margin-bottom: 18px;
  color: var(--orange);
}

.about-content .section-eyebrow::before {
  background-color: var(--orange);
}

.about-title {
  margin-bottom: 22px;
  color: var(--navy);
  font-family: var(--serif-font);
  font-size: clamp(39px, 4vw, 60px);
  font-weight: 400;
  line-height: 1.08;
}

.about-title span {
  display: block;
}

.about-title span:last-child {
  color: var(--primary-blue);
  font-style: italic;
}

.about-divider {
  width: 70px;
  height: 3px;
  margin-bottom: 27px;
  background-color: var(--primary-blue);
}

.about-description {
  max-width: 650px;
  margin-bottom: 15px;
  color: #4b5d69;
  font-size: 15.5px;
  line-height: 1.85;
}

.about-benefits {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  margin: 31px 0 32px;
  border-top: 1px solid var(--light-grey);
  border-left: 1px solid var(--light-grey);
}

.about-benefit {
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 13px;
  min-height: 112px;
  padding: 21px 18px;
  border-right: 1px solid var(--light-grey);
  border-bottom: 1px solid var(--light-grey);
  transition:
    background-color var(--transition),
    transform var(--transition),
    box-shadow var(--transition);
}

.about-benefit:hover {
  z-index: 1;
  background-color: #fff8eb;
  box-shadow: 0 12px 30px rgba(8, 40, 68, 0.08);
  transform: translateY(-3px);
}

.about-benefit-number {
  color: var(--orange);
  font-family: var(--serif-font);
  font-size: 21px;
  line-height: 1.2;
}

.about-benefit h3 {
  margin-bottom: 5px;
  color: var(--navy);
  font-size: 14px;
  font-weight: 800;
}

.about-benefit p {
  color: var(--medium-grey);
  font-size: 12.5px;
  line-height: 1.55;
}

.about-button {
  position: relative;
  min-height: 52px;
  overflow: hidden;
  background-color: var(--orange);
  border: 1px solid var(--orange);
  color: var(--navy);
}

.about-button:hover,
.about-button:focus-visible {
  background-color: var(--primary-blue);
  border-color: var(--primary-blue);
  color: var(--white);
  box-shadow: 0 12px 28px rgba(2, 149, 206, 0.24);
  transform: translateY(-2px);
}


/* ==================================================
   SERVICES SECTION
   ================================================== */

.services-section {
  padding: 120px 0;
  overflow: hidden;
  background:
    radial-gradient(
      circle at 92% 10%,
      rgba(2, 149, 206, 0.08),
      transparent 28%
    ),
    var(--off-white);
}

.services-container {
  width: min(100% - 96px, var(--container-width));
  margin: 0 auto;
}

.services-heading {
  max-width: 720px;
  margin: 0 auto 58px;
  text-align: center;
}

.services-eyebrow {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 13px;
  margin-bottom: 16px;
  color: var(--orange);
  font-size: 12px;
  font-weight: 800;
  letter-spacing: 0.22em;
  text-transform: uppercase;
}

.services-eyebrow::before,
.services-eyebrow::after {
  width: 34px;
  height: 2px;
  background-color: var(--orange);
  content: "";
}

.services-heading h2 {
  margin-bottom: 20px;
  color: var(--navy);
  font-family: var(--serif-font);
  font-size: clamp(42px, 4.4vw, 64px);
  font-weight: 400;
  line-height: 1.1;
}

.services-introduction {
  max-width: 650px;
  margin: 0 auto;
  color: var(--medium-grey);
  font-size: 16px;
  line-height: 1.8;
}

.services-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 22px;
}

.service-card {
  position: relative;
  display: flex;
  min-height: 375px;
  padding: 38px 32px 32px;
  overflow: hidden;
  flex-direction: column;
  background-color: var(--white);
  border: 1px solid rgba(8, 40, 68, 0.09);
  border-radius: 4px;
  box-shadow: 0 12px 35px rgba(8, 40, 68, 0.05);
  transition:
    transform 0.4s ease,
    box-shadow 0.4s ease,
    border-color 0.4s ease;
}

.service-card::before {
  position: absolute;
  top: 0;
  left: 0;
  width: 0;
  height: 4px;
  background-color: var(--orange);
  content: "";
  transition: width 0.45s ease;
}

.service-card::after {
  position: absolute;
  right: -75px;
  bottom: -75px;
  width: 160px;
  height: 160px;
  background-color: rgba(2, 149, 206, 0.05);
  border-radius: 50%;
  content: "";
  transition:
    background-color 0.4s ease,
    transform 0.5s ease;
}

.service-card:hover {
  border-color: rgba(2, 149, 206, 0.28);
  box-shadow: 0 22px 55px rgba(8, 40, 68, 0.12);
  transform: translateY(-9px);
}

.service-card:hover::before {
  width: 100%;
}

.service-card:hover::after {
  background-color: rgba(244, 165, 28, 0.1);
  transform: scale(1.18);
}

.service-number {
  position: absolute;
  top: 26px;
  right: 27px;
  color: rgba(8, 40, 68, 0.12);
  font-family: var(--serif-font);
  font-size: 33px;
  line-height: 1;
}

.service-icon {
  position: relative;
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 67px;
  height: 67px;
  margin-bottom: 27px;
  background-color: #fff6e6;
  border-radius: 50%;
  color: var(--orange);
  transition:
    background-color var(--transition),
    color var(--transition),
    transform var(--transition);
}

.service-icon svg {
  width: 36px;
  height: 36px;
  fill: none;
  stroke: currentColor;
  stroke-width: 2;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.service-card:hover .service-icon {
  background-color: var(--primary-blue);
  color: var(--white);
  transform: rotate(-4deg) scale(1.06);
}

.service-card h3 {
  position: relative;
  z-index: 1;
  margin-bottom: 14px;
  color: var(--navy);
  font-family: var(--serif-font);
  font-size: 25px;
  font-weight: 400;
  line-height: 1.25;
}

.service-card p {
  position: relative;
  z-index: 1;
  margin-bottom: 25px;
  color: var(--medium-grey);
  font-size: 14px;
  line-height: 1.75;
}

.service-link {
  position: relative;
  z-index: 1;
  display: inline-flex;
  align-items: center;
  gap: 9px;
  width: fit-content;
  margin-top: auto;
  color: var(--navy);
  font-size: 11px;
  font-weight: 800;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  transition:
    color var(--transition),
    gap var(--transition);
}

.service-link::after {
  position: absolute;
  right: 0;
  bottom: -5px;
  left: 0;
  width: 0;
  height: 2px;
  background-color: var(--orange);
  content: "";
  transition: width var(--transition);
}

.service-link span {
  color: var(--orange);
  font-size: 18px;
  line-height: 1;
}

.service-link:hover,
.service-link:focus-visible {
  gap: 14px;
  color: var(--primary-blue);
}

.service-link:hover::after,
.service-link:focus-visible::after {
  width: 100%;
}


/* ==================================================
   ANIMATIONS
   ================================================== */

.about-image-column,
.about-content,
.services-heading,
.service-card {
  opacity: 1;
  transform: translateY(0);
}

.js-enabled .about-image-column,
.js-enabled .about-content,
.js-enabled .services-heading,
.js-enabled .service-card {
  opacity: 0;
  transform: translateY(30px);
  transition:
    opacity 0.8s ease,
    transform 0.8s ease;
}

.js-enabled .about-content {
  transition-delay: 0.15s;
}

.js-enabled .about-section.is-visible .about-image-column,
.js-enabled .about-section.is-visible .about-content,
.js-enabled .services-section.is-visible .services-heading,
.js-enabled .services-section.is-visible .service-card {
  opacity: 1;
  transform: translateY(0);
}

.js-enabled .services-section.is-visible .service-card:nth-child(1) {
  transition-delay: 0.08s;
}

.js-enabled .services-section.is-visible .service-card:nth-child(2) {
  transition-delay: 0.16s;
}

.js-enabled .services-section.is-visible .service-card:nth-child(3) {
  transition-delay: 0.24s;
}

.js-enabled .services-section.is-visible .service-card:nth-child(4) {
  transition-delay: 0.32s;
}

.js-enabled .services-section.is-visible .service-card:nth-child(5) {
  transition-delay: 0.4s;
}

.js-enabled .services-section.is-visible .service-card:nth-child(6) {
  transition-delay: 0.48s;
}


/* Future sections */

.section-placeholder {
  min-height: 1px;
}


/* ==================================================
   TABLET
   ================================================== */

@media (max-width: 1160px) {
  .desktop-navigation {
    gap: 15px;
  }

  .desktop-navigation > a,
  .dropdown-button {
    font-size: 12px;
  }

  .header-container {
    width: min(100% - 32px, var(--container-width));
    gap: 18px;
  }

  .site-logo {
    width: 123px;
  }

  .header-inquiry-button {
    padding: 0 15px;
  }

  .about-container {
    width: min(100% - 64px, var(--container-width));
    gap: 60px;
  }

  .about-image-wrapper {
    min-height: 590px;
  }

  .services-container {
    width: min(100% - 64px, var(--container-width));
  }

  .service-card {
    padding: 34px 26px 28px;
  }

  .service-card h3 {
    font-size: 23px;
  }
}


@media (max-width: 1020px) {
  :root {
    --header-height: 78px;
  }

  .desktop-navigation,
  .header-inquiry-button {
    display: none;
  }

  .mobile-menu-button {
    display: flex;
  }

  .mobile-navigation {
    display: block;
  }

  .site-logo {
    width: 125px;
  }

  .hero-content {
    width: min(100% - 64px, var(--container-width));
  }

  .hero-side-label {
    display: none;
  }

  .about-section {
    padding: 95px 0;
  }

  .about-container {
    grid-template-columns: minmax(0, 0.9fr) minmax(0, 1.1fr);
    width: min(100% - 54px, var(--container-width));
    gap: 45px;
  }

  .about-image-wrapper {
    min-height: 560px;
  }

  .about-experience-card {
    right: -20px;
  }

  .about-benefits {
    grid-template-columns: 1fr;
  }

  .about-benefit {
    min-height: auto;
  }

  .services-section {
    padding: 95px 0;
  }

  .services-container {
    width: min(100% - 54px, var(--container-width));
  }

  .services-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}


/* ==================================================
   MOBILE
   ================================================== */

@media (max-width: 760px) {
  :root {
    --header-height: 72px;
  }

  .header-container {
    width: calc(100% - 28px);
  }

  .site-logo {
    width: 112px;
  }

  .language-button {
    min-width: 53px;
    height: 41px;
    padding: 0 10px;
  }

  .mobile-menu-button {
    width: 41px;
    height: 41px;
  }

  .hero-section {
    min-height: 100svh;
    padding:
      calc(var(--header-height) + 62px)
      0
      75px;
  }

  .hero-video {
    object-position: center center;
  }

  .hero-overlay {
    background:
      linear-gradient(
        180deg,
        rgba(5, 30, 51, 0.48) 0%,
        rgba(5, 30, 51, 0.68) 43%,
        rgba(5, 30, 51, 0.9) 100%
      );
  }

  .hero-content {
    align-self: flex-end;
    width: calc(100% - 38px);
    margin-bottom: 18px;
  }

  .hero-eyebrow {
    margin-bottom: 15px;
    font-size: 10px;
    letter-spacing: 0.17em;
  }

  .hero-eyebrow::before {
    width: 30px;
  }

  .hero-content h1 {
    margin-bottom: 20px;
    line-height: 0.98;
  }

  .hero-title-main {
    font-size: clamp(53px, 17vw, 76px);
  }

  .hero-title-outline {
    font-size: clamp(39px, 12.2vw, 58px);
    -webkit-text-stroke: 1px rgba(255, 255, 255, 0.9);
  }

  .hero-description {
    max-width: 500px;
    margin-bottom: 25px;
    font-size: 14px;
    line-height: 1.65;
  }

  .hero-buttons {
    gap: 10px;
  }

  .primary-button,
  .secondary-button {
    min-height: 49px;
    padding: 0 19px;
    font-size: 10px;
  }

  .hero-decoration-right {
    top: 145px;
    right: -230px;
  }

  .scroll-indicator {
    display: none;
  }

  .about-section {
    padding: 78px 0;
  }

  .about-container {
    grid-template-columns: 1fr;
    width: calc(100% - 38px);
    gap: 62px;
  }

  .about-image-wrapper {
    min-height: 510px;
  }

  .about-image-wrapper::before {
    top: -15px;
    left: -10px;
  }

  .about-image {
    border-radius: 3px 48px 3px 3px;
  }

  .about-image-accent {
    right: -10px;
    bottom: -15px;
  }

  .about-experience-card {
    right: 12px;
    bottom: -30px;
    max-width: 235px;
    padding: 17px 18px;
  }

  .about-experience-card strong {
    font-size: 26px;
  }

  .about-experience-card span {
    font-size: 10px;
  }

  .about-content .section-eyebrow {
    margin-bottom: 14px;
    font-size: 10px;
    letter-spacing: 0.17em;
  }

  .section-eyebrow::before {
    width: 31px;
  }

  .about-title {
    margin-bottom: 19px;
    font-size: clamp(36px, 11vw, 50px);
  }

  .about-description {
    font-size: 14px;
    line-height: 1.78;
  }

  .about-benefits {
    grid-template-columns: 1fr;
    margin-top: 26px;
  }

  .about-benefit {
    padding: 18px 15px;
  }

  .about-button {
    width: 100%;
  }

  .services-section {
    padding: 78px 0;
  }

  .services-container {
    width: calc(100% - 38px);
  }

  .services-heading {
    margin-bottom: 40px;
  }

  .services-eyebrow {
    font-size: 10px;
    letter-spacing: 0.17em;
  }

  .services-eyebrow::before,
  .services-eyebrow::after {
    width: 24px;
  }

  .services-heading h2 {
    font-size: clamp(37px, 10.5vw, 49px);
  }

  .services-introduction {
    font-size: 14px;
    line-height: 1.7;
  }

  .services-grid {
    grid-template-columns: 1fr;
    gap: 17px;
  }

  .service-card {
    min-height: 340px;
    padding: 32px 25px 27px;
  }

  .service-card h3 {
    font-size: 24px;
  }
}


@media (max-width: 480px) {
  .header-actions {
    gap: 8px;
  }

  .site-logo {
    width: 103px;
  }

  .language-menu {
    right: -48px;
  }

  .mobile-navigation {
    width: 100%;
  }

  .hero-content {
    width: calc(100% - 30px);
  }

  .hero-title-main {
    font-size: 51px;
  }

  .hero-title-outline {
    font-size: 39px;
  }

  .hero-buttons {
    display: grid;
    grid-template-columns: 1fr;
  }

  .primary-button,
  .secondary-button {
    width: 100%;
  }

  .about-container,
  .services-container {
    width: calc(100% - 30px);
  }

  .about-image-wrapper {
    min-height: 430px;
  }

  .about-experience-card {
    right: 8px;
    left: 18px;
    justify-content: center;
    max-width: none;
  }

  .about-title {
    font-size: 38px;
  }
}


/* ==================================================
   ARMENIAN LANGUAGE ADJUSTMENTS
   ================================================== */

html[lang="hy"] body {
  font-family: Arial, Helvetica, sans-serif;
}

html[lang="hy"] .hero-content h1,
html[lang="hy"] .about-title,
html[lang="hy"] .services-heading h2,
html[lang="hy"] .service-card h3,
html[lang="hy"] .about-experience-card strong {
  font-family: Georgia, "Times New Roman", serif;
}

html[lang="hy"] .hero-title-main {
  font-size: clamp(52px, 6.4vw, 96px);
}

html[lang="hy"] .hero-title-outline {
  font-size: clamp(38px, 4.8vw, 72px);
}

html[lang="hy"] .about-title {
  font-size: clamp(35px, 3.5vw, 52px);
}


/* Armenian header */

html[lang="hy"] .desktop-navigation {
  gap: 17px;
}

html[lang="hy"] .desktop-navigation > a,
html[lang="hy"] .dropdown-button {
  font-size: 11px;
}

html[lang="hy"] .header-inquiry-button {
  padding-right: 15px;
  padding-left: 15px;
  font-size: 10px;
  letter-spacing: 0.03em;
}

html[lang="hy"] .mobile-navigation .mobile-inquiry-button {
  font-size: 11px;
  letter-spacing: 0.03em;
}


/* Armenian About card */

html[lang="hy"] .about-experience-card {
  right: -25px;
  max-width: 330px;
  gap: 12px;
  padding: 18px 20px;
}

html[lang="hy"] .about-experience-card strong {
  flex-shrink: 0;
  padding-right: 12px;
  font-size: 27px;
}

html[lang="hy"] .about-experience-card span {
  min-width: 0;
  font-size: 9px;
  letter-spacing: 0;
  line-height: 1.45;
  overflow-wrap: anywhere;
  text-transform: none;
}


/* Armenian Services */

html[lang="hy"] .services-heading h2 {
  font-size: clamp(35px, 3.8vw, 54px);
}

html[lang="hy"] .service-card h3 {
  font-size: 21px;
}

html[lang="hy"] .service-link {
  font-size: 10px;
  letter-spacing: 0.04em;
}


@media (max-width: 760px) {
  html[lang="hy"] .about-experience-card {
    right: 10px;
    left: 10px;
    max-width: none;
    padding: 16px;
  }

  html[lang="hy"] .about-experience-card span {
    font-size: 9px;
  }

  html[lang="hy"] .services-heading h2 {
    font-size: 36px;
  }

  html[lang="hy"] .service-card h3 {
    font-size: 21px;
  }
}


/* ==================================================
   ACCESSIBILITY AND REDUCED MOTION
   ================================================== */

a:focus-visible,
button:focus-visible {
  outline: 3px solid rgba(244, 165, 28, 0.45);
  outline-offset: 3px;
}

@media (prefers-reduced-motion: reduce) {
  html {
    scroll-behavior: auto;
  }

  *,
  *::before,
  *::after {
    scroll-behavior: auto !important;
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }

  .about-image-wrapper:hover .about-image {
    transform: none;
  }

  .service-card:hover {
    transform: none;
  }
}


/* ==================================================
   STANDALONE ARTICLE PAGES
   ================================================== */

/* ==================================================
   ABOUT PAGE
   ================================================== */

.about-page-main { padding-top: var(--header-height); background: var(--white); }
.about-page-container { width: min(100% - 48px, 1120px); margin: 0 auto; }

.about-page-hero { position: relative; display: flex; min-height: 610px; align-items: flex-end; overflow: hidden; background: var(--navy); }
.about-page-hero > img { position: absolute; inset: 0; width: 100%; height: 100%; object-fit: cover; }
.about-page-hero-overlay { position: absolute; inset: 0; background: linear-gradient(90deg, rgba(5, 41, 67, .9) 0%, rgba(5, 41, 67, .55) 48%, rgba(5, 41, 67, .12) 100%), linear-gradient(0deg, rgba(5, 41, 67, .5), transparent 55%); }
.about-page-hero-content { position: relative; z-index: 1; width: min(100% - 48px, 1120px); margin: 0 auto; padding: 90px 0 76px; color: var(--white); }
.about-page-hero-content > p { margin-bottom: 16px; color: var(--orange); font-size: 12px; font-weight: 800; letter-spacing: .18em; text-transform: uppercase; }
.about-page-hero h1 { max-width: 760px; font-family: var(--serif-font); font-size: clamp(48px, 6.5vw, 82px); font-weight: 500; line-height: 1.04; letter-spacing: -.045em; }
.about-page-year { display: flex; align-items: center; gap: 18px; margin-top: 32px; }
.about-page-year strong { color: var(--orange); font-size: 30px; }
.about-page-year span { max-width: 190px; color: rgba(255,255,255,.78); font-size: 13px; line-height: 1.5; }

.about-story-section, .about-vision-section, .about-approach-section, .about-expertise-section { padding: 104px 0; }
.about-story-grid, .about-expertise-grid { display: grid; grid-template-columns: .85fr 1.15fr; gap: 80px; align-items: start; }
.about-page-kicker { display: flex; align-items: center; gap: 12px; margin-bottom: 18px; color: var(--orange-dark); font-size: 11px; font-weight: 800; letter-spacing: .16em; text-transform: uppercase; }
.about-page-kicker::before { width: 34px; height: 2px; background: var(--orange); content: ""; }
.about-story-section h2, .about-vision-section h2, .about-expertise-section h2, .about-mission-section h2 { color: var(--navy); font-family: var(--serif-font); font-size: clamp(38px, 5vw, 62px); font-weight: 500; line-height: 1.1; letter-spacing: -.035em; }
.about-story-copy p, .about-vision-copy > p:last-child, .about-expertise-grid > p { margin-bottom: 22px; color: #4f6372; font-size: 17px; line-height: 1.85; }
.about-story-copy .about-intro { color: var(--navy); font-family: var(--serif-font); font-size: 27px; line-height: 1.5; }

.about-vision-section { background: var(--off-white); }
.about-vision-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 72px; align-items: center; }
.about-vision-image { min-height: 540px; overflow: hidden; border-radius: 4px 80px 4px 4px; }
.about-vision-image img { width: 100%; height: 100%; min-height: 540px; object-fit: cover; }
.about-vision-copy h2 { margin-bottom: 26px; }

.about-approach-section { background: #063557; color: var(--white); }
.about-approach-section .about-page-kicker { color: var(--orange); }
.about-approach-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 18px; margin-top: 36px; }
.about-approach-grid article { min-height: 280px; padding: 30px 26px; border: 1px solid rgba(255,255,255,.13); background: rgba(255,255,255,.055); }
.about-approach-grid span { color: var(--orange); font-size: 12px; font-weight: 800; }
.about-approach-grid h3 { margin: 64px 0 14px; font-family: var(--serif-font); font-size: 28px; font-weight: 500; }
.about-approach-grid p { color: rgba(255,255,255,.7); font-size: 14px; line-height: 1.7; }

.about-expertise-grid { align-items: center; }
.about-expertise-grid > p { margin: 0; padding-left: 34px; border-left: 3px solid var(--orange); font-size: 20px; }
.about-mission-section { padding: 110px 24px; background: linear-gradient(135deg, #eff8fc, #ffffff); text-align: center; }
.about-mission-section .about-page-container { max-width: 850px; }
.about-mission-section .about-page-kicker { justify-content: center; }
.about-mission-section h2 { margin-bottom: 24px; }
.about-mission-section > div > p:not(.about-page-kicker) { margin: 0 auto 34px; max-width: 720px; color: #4f6372; font-size: 17px; line-height: 1.85; }

@media screen and (max-width: 900px) {
  .about-story-grid, .about-expertise-grid, .about-vision-grid { grid-template-columns: 1fr; gap: 42px; }
  .about-approach-grid { grid-template-columns: repeat(2, 1fr); }
  .about-vision-image, .about-vision-image img { min-height: 430px; }
  .about-expertise-grid > p { padding: 0 0 0 24px; }
}

@media screen and (max-width: 600px) {
  .about-page-container, .about-page-hero-content { width: calc(100% - 32px); }
  .about-page-hero { min-height: 520px; }
  .about-page-hero-content { padding: 64px 0 52px; }
  .about-page-hero h1 { font-size: 45px; }
  .about-story-section, .about-vision-section, .about-approach-section, .about-expertise-section { padding: 72px 0; }
  .about-approach-grid { grid-template-columns: 1fr; }
  .about-approach-grid article { min-height: 230px; }
  .about-approach-grid h3 { margin-top: 42px; }
  .about-vision-image, .about-vision-image img { min-height: 350px; }
  .about-mission-section { padding: 78px 16px; }
}

/* Redesigned editorial About page */
.about-editorial-hero { display: grid; grid-template-columns: minmax(0, .88fr) minmax(480px, 1.12fr); min-height: 650px; background: #f7fafb; }
.about-editorial-copy { display: flex; flex-direction: column; justify-content: center; padding: 76px clamp(34px, 6vw, 96px); }
.about-editorial-copy h1 { max-width: 620px; color: var(--navy); font-family: var(--serif-font); font-size: clamp(50px, 5.6vw, 78px); font-weight: 500; line-height: 1.02; letter-spacing: -.05em; }
.about-editorial-lead { max-width: 570px; margin-top: 28px; color: #516675; font-size: 17px; line-height: 1.8; }
.about-editorial-signature { display: flex; align-items: center; gap: 18px; margin-top: 38px; padding-top: 26px; border-top: 1px solid #dce7ec; }
.about-editorial-signature strong { color: var(--primary-blue); font-family: var(--serif-font); font-size: 38px; }
.about-editorial-signature span { max-width: 170px; color: #697d8a; font-size: 12px; font-weight: 700; line-height: 1.5; text-transform: uppercase; }
.about-editorial-image { min-height: 650px; overflow: hidden; }
.about-editorial-image img { width: 100%; height: 100%; object-fit: cover; }

.about-new-intro { padding: 110px 0; }
.about-new-intro-grid { display: grid; grid-template-columns: .9fr 1.1fr; gap: 90px; }
.about-new-intro h2, .about-armenia-copy h2, .about-tours-heading h2, .about-capabilities-grid h2, .about-closing-section h2 { color: var(--navy); font-family: var(--serif-font); font-size: clamp(38px, 4.7vw, 61px); font-weight: 500; line-height: 1.1; letter-spacing: -.035em; }
.about-new-intro-grid p, .about-armenia-copy > p:not(.about-page-kicker), .about-tours-heading > p, .about-capabilities-grid p { margin-bottom: 22px; color: #4f6372; font-size: 17px; line-height: 1.85; }

.about-edge-section { padding: 0 0 110px; }
.about-edge-card { position: relative; padding: 54px 64px 58px 154px; overflow: hidden; background: var(--navy); color: var(--white); }
.about-edge-card::before { position: absolute; top: 16px; left: 44px; color: rgba(2,149,206,.35); content: "“"; font-family: var(--serif-font); font-size: 170px; line-height: 1; }
.about-edge-card > p { margin-bottom: 15px; color: var(--orange); font-size: 11px; font-weight: 800; letter-spacing: .18em; text-transform: uppercase; }
.about-edge-card blockquote { max-width: 850px; font-family: var(--serif-font); font-size: clamp(27px, 3.2vw, 42px); line-height: 1.4; }

.about-armenia-section { padding: 110px 0; background: var(--off-white); }
.about-armenia-grid { display: grid; grid-template-columns: .9fr 1.1fr; gap: 80px; align-items: center; }
.about-armenia-image { min-height: 620px; overflow: hidden; border-radius: 2px 90px 2px 2px; }
.about-armenia-image img { width: 100%; height: 100%; min-height: 620px; object-fit: cover; }
.about-armenia-copy h2 { margin-bottom: 28px; }

.about-goals-section { padding: 104px 0; background: #063557; color: var(--white); }
.about-goals-section .about-page-kicker { color: var(--orange); }
.about-goals-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 18px; margin-top: 34px; }
.about-goals-grid article { min-height: 270px; padding: 32px; border: 1px solid rgba(255,255,255,.14); background: rgba(255,255,255,.05); }
.about-goals-grid span { color: var(--orange); font-size: 12px; font-weight: 800; }
.about-goals-grid p { margin-top: 76px; font-family: var(--serif-font); font-size: 24px; line-height: 1.5; }

.about-tours-section { padding: 110px 0; }
.about-tours-heading { display: grid; grid-template-columns: 1fr .8fr; gap: 70px; align-items: end; margin-bottom: 48px; }
.about-tours-heading > p { margin: 0; padding-left: 24px; border-left: 3px solid var(--orange); }
.about-tour-categories { display: grid; grid-template-columns: repeat(2, 1fr); border-top: 1px solid #dce6eb; }
.about-tour-categories p { position: relative; padding: 24px 22px 24px 50px; border-right: 1px solid #dce6eb; border-bottom: 1px solid #dce6eb; color: var(--navy); font-size: 15px; font-weight: 700; line-height: 1.6; }
.about-tour-categories p::before { position: absolute; left: 20px; color: var(--primary-blue); content: "✦"; }

.about-capabilities-section { padding: 104px 0; background: #f2f8fb; }
.about-capabilities-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 24px; }
.about-capabilities-grid article { padding: 48px; background: var(--white); box-shadow: 0 16px 45px rgba(6,53,87,.07); }
.about-capabilities-grid span { display: block; margin-bottom: 44px; color: var(--orange-dark); font-size: 12px; font-weight: 800; }
.about-capabilities-grid h2 { margin-bottom: 24px; font-size: clamp(32px, 3.5vw, 45px); }

.about-options-section { padding: 110px 0; }
.about-options-grid { display: grid; grid-template-columns: 1.15fr .85fr; gap: 80px; align-items: center; }
.about-options-grid blockquote { color: var(--navy); font-family: var(--serif-font); font-size: clamp(31px, 4vw, 51px); line-height: 1.3; }
.about-options-grid ul { margin: 0; padding: 0; list-style: none; }
.about-options-grid li { padding: 19px 0; border-bottom: 1px solid #dce6eb; color: #405969; font-size: 16px; font-weight: 700; }
.about-options-grid li::before { margin-right: 15px; color: var(--orange); content: "✓"; }

.about-closing-section { padding: 108px 24px; background: linear-gradient(135deg, #eaf6fb, #ffffff); text-align: center; }
.about-closing-section .about-page-container { max-width: 850px; }
.about-closing-section h2 { margin-bottom: 24px; }
.about-closing-section p { max-width: 690px; margin: 0 auto 36px; color: #4f6372; font-size: 17px; line-height: 1.8; }

@media screen and (max-width: 900px) {
  .about-editorial-hero { grid-template-columns: 1fr; }
  .about-editorial-image { min-height: 460px; order: -1; }
  .about-editorial-copy { padding: 64px 36px; }
  .about-new-intro-grid, .about-armenia-grid, .about-tours-heading, .about-options-grid { grid-template-columns: 1fr; gap: 42px; }
  .about-goals-grid { grid-template-columns: 1fr; }
  .about-goals-grid article { min-height: 210px; }
  .about-goals-grid p { margin-top: 46px; }
  .about-armenia-image, .about-armenia-image img { min-height: 470px; }
}

@media screen and (max-width: 600px) {
  .about-editorial-image { min-height: 320px; }
  .about-editorial-copy { padding: 50px 20px; }
  .about-editorial-copy h1 { font-size: 44px; }
  .about-new-intro, .about-armenia-section, .about-goals-section, .about-tours-section, .about-capabilities-section, .about-options-section { padding: 72px 0; }
  .about-edge-section { padding-bottom: 72px; }
  .about-edge-card { width: calc(100% - 28px); padding: 42px 24px; }
  .about-edge-card::before { display: none; }
  .about-tour-categories, .about-capabilities-grid { grid-template-columns: 1fr; }
  .about-tour-categories p { border-right: 0; }
  .about-capabilities-grid article { padding: 34px 26px; }
  .about-armenia-image, .about-armenia-image img { min-height: 350px; }
  .about-closing-section { padding: 76px 16px; }
}

/* Light classic About page */
.about-classic-hero { position: relative; display: flex; min-height: 620px; align-items: flex-end; overflow: hidden; background: #edf7fb; }
.about-classic-hero > img { position: absolute; inset: 0; width: 100%; height: 100%; object-fit: cover; }
.about-classic-overlay { position: absolute; inset: 0; background: linear-gradient(90deg, rgba(255,255,255,.96) 0%, rgba(255,255,255,.8) 42%, rgba(255,255,255,.12) 76%), linear-gradient(0deg, rgba(255,255,255,.55), transparent 60%); }
.about-classic-hero-content { position: relative; z-index: 1; width: min(100% - 48px, 1120px); margin: 0 auto; padding: 90px 0 72px; }
.about-classic-hero-content > p:first-child { margin-bottom: 16px; color: #e98f10; font-size: 12px; font-weight: 800; letter-spacing: .18em; text-transform: uppercase; }
.about-classic-hero h1 { max-width: 680px; color: #16465d; font-family: var(--serif-font); font-size: clamp(48px, 6vw, 78px); font-weight: 500; line-height: 1.04; letter-spacing: -.045em; }
.about-classic-hero-content > p:nth-of-type(2) { max-width: 610px; margin-top: 24px; color: #405d6b; font-size: 17px; line-height: 1.8; }
.about-classic-year { display: flex; align-items: center; gap: 18px; margin-top: 30px; }
.about-classic-year strong { color: #0295ce; font-family: var(--serif-font); font-size: 38px; }
.about-classic-year span { max-width: 170px; color: #627b87; font-size: 12px; font-weight: 700; line-height: 1.5; text-transform: uppercase; }

.about-company-section { padding: 105px 0; background: #fff; }
.about-company-grid { display: grid; grid-template-columns: .9fr 1.1fr; gap: 88px; }
.about-company-grid h2, .about-purpose-grid h2, .about-classic-armenia h2, .about-classic-tours h2, .about-classic-details h2, .about-classic-closing h2 { color: #16465d; font-family: var(--serif-font); font-size: clamp(37px, 4.7vw, 60px); font-weight: 500; line-height: 1.1; letter-spacing: -.035em; }
.about-company-copy p, .about-purpose-grid article > p:last-child, .about-classic-armenia-grid > div:last-child > p:not(.about-page-kicker), .about-classic-tours-heading > p, .about-classic-details p { margin-bottom: 22px; color: #526a76; font-size: 17px; line-height: 1.85; }

.about-classic-edge { padding: 0 0 100px; background: #fff; }
.about-classic-edge-grid { display: grid; grid-template-columns: 170px 1fr; gap: 45px; padding: 52px 58px; border-left: 5px solid #f4a11e; background: linear-gradient(135deg, #eaf7fc, #f8fcfe); box-shadow: 0 16px 45px rgba(2,149,206,.08); }
.about-classic-edge-grid > p { color: #0295ce; font-size: 12px; font-weight: 900; letter-spacing: .18em; text-transform: uppercase; }
.about-classic-edge-grid blockquote { color: #16465d; font-family: var(--serif-font); font-size: clamp(27px, 3vw, 40px); line-height: 1.4; }

.about-purpose-section { padding: 104px 0; background: #f6fafc; }
.about-purpose-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 22px; }
.about-purpose-grid article { padding: 48px; border-top: 4px solid #0295ce; background: #fff; box-shadow: 0 14px 40px rgba(24,70,93,.07); }
.about-purpose-grid article:nth-child(2) { border-top-color: #f4a11e; }
.about-purpose-grid article > span { display: block; margin-bottom: 38px; color: #0295ce; font-size: 12px; font-weight: 900; }
.about-purpose-grid h2 { margin-bottom: 24px; font-size: clamp(32px, 3.8vw, 48px); }

.about-classic-armenia { padding: 110px 0; background: #fff; }
.about-classic-armenia-grid { display: grid; grid-template-columns: .92fr 1.08fr; gap: 78px; align-items: center; }
.about-classic-armenia-image { min-height: 570px; overflow: hidden; border-radius: 3px 70px 3px 3px; }
.about-classic-armenia-image img { width: 100%; height: 100%; min-height: 570px; object-fit: cover; }
.about-classic-armenia h2 { margin-bottom: 28px; }

.about-classic-goals { padding: 104px 0; background: #edf8fc; }
.about-classic-goals-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 18px; margin-top: 36px; }
.about-classic-goals-grid article { min-height: 245px; padding: 32px; border: 1px solid rgba(2,149,206,.18); background: #fff; }
.about-classic-goals-grid span { color: #0295ce; font-size: 12px; font-weight: 900; }
.about-classic-goals-grid p { margin-top: 62px; color: #16465d; font-family: var(--serif-font); font-size: 23px; line-height: 1.5; }

.about-classic-tours { padding: 110px 0; background: #fff; }
.about-classic-tours-heading { display: grid; grid-template-columns: 1fr .75fr; gap: 70px; align-items: end; margin-bottom: 48px; }
.about-classic-tours-heading > p { margin: 0; padding-left: 24px; border-left: 3px solid #f4a11e; }
.about-classic-tour-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 14px; }
.about-classic-tour-grid article { min-height: 155px; padding: 25px; background: #f6fafc; transition: transform .25s ease, box-shadow .25s ease; }
.about-classic-tour-grid article:hover { transform: translateY(-4px); box-shadow: 0 14px 30px rgba(2,149,206,.1); }
.about-classic-tour-grid span { color: #f4a11e; font-size: 11px; font-weight: 900; }
.about-classic-tour-grid p { margin-top: 32px; color: #16465d; font-size: 15px; font-weight: 750; line-height: 1.6; }

.about-classic-details { padding: 104px 0; background: #f5fafc; }
.about-classic-details-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 24px; }
.about-classic-details article { padding: 45px; background: #fff; box-shadow: 0 16px 40px rgba(24,70,93,.06); }
.about-detail-icon { display: grid; width: 52px; height: 52px; margin-bottom: 38px; place-items: center; border-radius: 50%; background: #e7f6fc; color: #0295ce; font-size: 23px; }
.about-classic-details h2 { margin-bottom: 24px; font-size: clamp(31px, 3.4vw, 44px); }

.about-classic-options { padding: 110px 0; background: #fff; }
.about-classic-options-grid { display: grid; grid-template-columns: 1.12fr .88fr; gap: 80px; align-items: center; }
.about-classic-options blockquote { color: #16465d; font-family: var(--serif-font); font-size: clamp(30px, 4vw, 50px); line-height: 1.3; }
.about-classic-options ul { margin: 0; padding: 0; list-style: none; }
.about-classic-options li { padding: 18px 0; border-bottom: 1px solid #dce8ed; color: #46616e; font-size: 16px; font-weight: 700; }
.about-classic-options li::before { margin-right: 14px; color: #f4a11e; content: "✓"; }

.about-classic-closing { padding: 105px 24px; background: linear-gradient(135deg, #dff3fb, #fff); text-align: center; }
.about-classic-closing .about-page-container { max-width: 850px; }
.about-classic-closing h2 { margin-bottom: 23px; }
.about-classic-closing p { max-width: 700px; margin: 0 auto 35px; color: #526a76; font-size: 17px; line-height: 1.8; }

@media screen and (max-width: 900px) {
  .about-company-grid, .about-classic-armenia-grid, .about-classic-tours-heading, .about-classic-options-grid { grid-template-columns: 1fr; gap: 42px; }
  .about-purpose-grid, .about-classic-details-grid { grid-template-columns: 1fr; }
  .about-classic-goals-grid { grid-template-columns: 1fr; }
  .about-classic-tour-grid { grid-template-columns: repeat(2, 1fr); }
  .about-classic-armenia-image, .about-classic-armenia-image img { min-height: 450px; }
}

@media screen and (max-width: 600px) {
  .about-classic-hero { min-height: 560px; }
  .about-classic-overlay { background: linear-gradient(90deg, rgba(255,255,255,.94), rgba(255,255,255,.64)); }
  .about-classic-hero-content { width: calc(100% - 32px); padding: 58px 0 48px; }
  .about-classic-hero h1 { font-size: 44px; }
  .about-company-section, .about-purpose-section, .about-classic-armenia, .about-classic-goals, .about-classic-tours, .about-classic-details, .about-classic-options { padding: 72px 0; }
  .about-classic-edge { padding-bottom: 72px; }
  .about-classic-edge-grid { grid-template-columns: 1fr; gap: 18px; padding: 34px 25px; }
  .about-purpose-grid article, .about-classic-details article { padding: 32px 25px; }
  .about-classic-tour-grid { grid-template-columns: 1fr; }
  .about-classic-armenia-image, .about-classic-armenia-image img { min-height: 340px; }
  .about-classic-closing { padding: 76px 16px; }
}

/* Compact About page layout */
.about-page-main .about-page-container { width: min(100% - 48px, 980px); }
.about-company-section { padding: 78px 0 72px; }
.about-company-grid { grid-template-columns: .85fr 1.15fr; gap: 60px; }
.about-company-grid h2, .about-purpose-grid h2, .about-classic-armenia h2, .about-classic-tours h2 { font-size: clamp(34px, 4.1vw, 52px); }
.about-company-copy p, .about-purpose-grid article > p:last-child, .about-classic-armenia-grid > div:last-child > p:not(.about-page-kicker), .about-classic-tours-heading > p { font-size: 16px; line-height: 1.75; }
.about-classic-armenia { padding: 78px 0; background: #f7fbfd; }
.about-classic-armenia-grid { grid-template-columns: .92fr 1.08fr; gap: 56px; }
.about-classic-armenia-image, .about-classic-armenia-image img { min-height: 430px; }
.about-purpose-section { padding: 78px 0; }
.about-purpose-grid article { padding: 38px; }
.about-purpose-grid article > span { margin-bottom: 28px; }
.about-classic-goals { padding: 78px 0; }
.about-classic-goals-grid article { min-height: 210px; padding: 28px; }
.about-classic-goals-grid p { margin-top: 44px; font-size: 21px; }
.about-classic-tours { padding: 80px 0; }
.about-classic-tours-heading { gap: 50px; margin-bottom: 38px; }
.about-classic-tour-grid article { min-height: 135px; padding: 22px; }
.about-classic-tour-grid p { margin-top: 24px; }
.about-classic-options { padding: 82px 0; background: #f7fbfd; }
.about-classic-options-grid { gap: 58px; }
.about-classic-options blockquote { font-size: clamp(28px, 3.6vw, 43px); }

@media screen and (max-width: 900px) {
  .about-page-main .about-page-container { width: min(100% - 40px, 760px); }
  .about-company-grid, .about-classic-armenia-grid { grid-template-columns: 1fr; gap: 36px; }
}

@media screen and (max-width: 600px) {
  .about-page-main .about-page-container { width: calc(100% - 28px); }
  .about-company-section, .about-classic-armenia, .about-purpose-section, .about-classic-goals, .about-classic-tours, .about-classic-options { padding: 58px 0; }
  .about-classic-armenia-image, .about-classic-armenia-image img { min-height: 300px; }
}

/* ==================================================
   DESTINATION DETAIL PAGE
   ================================================== */
.destination-page-main { padding-top: var(--header-height); background: #fff; }
.destination-page-container { width: min(100% - 48px, 980px); margin: 0 auto; }
.destination-hero { position: relative; display: flex; min-height: 610px; align-items: flex-end; overflow: hidden; background: #dceff7; }
.destination-hero > img { position: absolute; inset: 0; width: 100%; height: 100%; object-fit: cover; }
.destination-hero-overlay { position: absolute; inset: 0; background: linear-gradient(0deg, rgba(10,35,48,.72) 0%, rgba(10,35,48,.12) 64%), linear-gradient(90deg, rgba(10,35,48,.25), transparent 65%); }
.destination-hero-content { position: relative; z-index: 1; width: min(100% - 48px, 980px); margin: 0 auto; padding: 74px 0; color: #fff; }
.destination-hero-content > p:first-child { margin-bottom: 12px; color: #f4a11e; font-size: 12px; font-weight: 900; letter-spacing: .18em; text-transform: uppercase; }
.destination-hero h1 { font-family: var(--serif-font); font-size: clamp(66px, 10vw, 120px); font-weight: 500; line-height: .95; letter-spacing: -.055em; }
.destination-hero-content > p:last-child { max-width: 600px; margin-top: 22px; color: rgba(255,255,255,.88); font-size: 18px; line-height: 1.7; }
.destination-intro { padding: 70px 0 78px; }
.destination-back-link { display: inline-flex; margin-bottom: 32px; color: #0295ce; font-size: 12px; font-weight: 800; letter-spacing: .06em; text-transform: uppercase; }
.destination-intro p { max-width: 850px; color: #16465d; font-family: var(--serif-font); font-size: clamp(26px, 3.7vw, 40px); line-height: 1.5; }
.destination-story { padding: 82px 0; background: #f5fafc; }
.destination-story-grid { display: grid; grid-template-columns: .82fr 1.18fr; gap: 65px; }
.destination-kicker { display: flex; align-items: center; gap: 11px; margin-bottom: 15px; color: #e98f10; font-size: 11px; font-weight: 900; letter-spacing: .15em; text-transform: uppercase; }
.destination-kicker::before { width: 32px; height: 2px; background: #f4a11e; content: ""; }
.destination-story h2, .destination-section-heading h2 { color: #16465d; font-family: var(--serif-font); font-size: clamp(37px, 4.8vw, 56px); font-weight: 500; line-height: 1.12; letter-spacing: -.035em; }
.destination-story-grid > div:last-child > p { margin-bottom: 20px; color: #526a76; font-size: 16px; line-height: 1.8; }
.destination-facts { display: grid; grid-template-columns: 1fr 1fr; gap: 14px; margin-top: 30px; }
.destination-facts div { padding: 22px; border-left: 3px solid #0295ce; background: #fff; }
.destination-facts span { display: block; margin-bottom: 7px; color: #718792; font-size: 11px; font-weight: 800; letter-spacing: .1em; text-transform: uppercase; }
.destination-facts strong { color: #16465d; font-family: var(--serif-font); font-size: 27px; }
.destination-sights { padding: 88px 0; }
.destination-section-heading { max-width: 650px; margin-bottom: 42px; }
.destination-sights-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 15px; }
.destination-sights-grid article { min-height: 255px; padding: 27px 24px; border: 1px solid #dce8ed; background: #fff; transition: transform .25s ease, box-shadow .25s ease; }
.destination-sights-grid article:hover { transform: translateY(-4px); box-shadow: 0 16px 34px rgba(2,149,206,.1); }
.destination-sights-grid span { color: #0295ce; font-size: 11px; font-weight: 900; }
.destination-sights-grid h3 { margin: 48px 0 14px; color: #16465d; font-family: var(--serif-font); font-size: 25px; font-weight: 500; }
.destination-sights-grid p { color: #607783; font-size: 14px; line-height: 1.7; }
.destination-experiences { padding: 82px 0; background: #eaf7fc; }
.destination-experience-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 22px; }
.destination-experience-grid article { padding: 38px; background: #fff; }
.destination-experience-grid article > p:last-child { color: #526a76; font-size: 16px; line-height: 1.8; }
.destination-planning { padding: 84px 0; }
.destination-planning-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 50px; align-items: start; }
.destination-planning-grid > div > p:last-child, .destination-planning-grid aside > p:last-child { color: #526a76; font-size: 16px; line-height: 1.8; }
.destination-planning-grid aside { padding: 30px; border-left: 4px solid #f4a11e; background: #f8fbfc; }

@media screen and (max-width: 800px) {
  .destination-story-grid, .destination-experience-grid, .destination-planning-grid { grid-template-columns: 1fr; gap: 38px; }
  .destination-sights-grid { grid-template-columns: repeat(2, 1fr); }
}
@media screen and (max-width: 560px) {
  .destination-page-container, .destination-hero-content { width: calc(100% - 28px); }
  .destination-hero { min-height: 500px; }
  .destination-hero-content { padding: 52px 0; }
  .destination-hero h1 { font-size: 70px; }
  .destination-intro, .destination-story, .destination-sights, .destination-experiences, .destination-planning { padding: 58px 0; }
  .destination-sights-grid { grid-template-columns: 1fr; }
  .destination-facts { grid-template-columns: 1fr; }
  .destination-sights-grid article { min-height: 220px; }
}

.article-page-main {
  padding-top: var(--header-height);
  background-color: var(--white);
}

.article-page-hero {
  position: relative;
  display: flex;
  min-height: clamp(500px, 68vh, 720px);
  align-items: flex-end;
  overflow: hidden;
  background-color: var(--navy);
}

.article-page-hero > img {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.article-page-hero-overlay {
  position: absolute;
  inset: 0;
  background:
    linear-gradient(180deg, rgba(8, 40, 68, 0.12) 5%, rgba(8, 40, 68, 0.88) 100%),
    linear-gradient(90deg, rgba(8, 40, 68, 0.45), transparent 68%);
}

.article-page-hero-content {
  position: relative;
  z-index: 1;
  width: min(100% - 48px, 1000px);
  margin: 0 auto;
  padding: 80px 0;
  color: var(--white);
}

.article-page-category {
  display: inline-flex;
  margin-bottom: 16px;
  padding: 8px 14px;
  background-color: var(--orange);
  color: var(--navy);
  border-radius: 999px;
  font-size: 11px;
  font-weight: 800;
  line-height: 1;
  letter-spacing: 0.09em;
  text-transform: uppercase;
}

.article-page-meta {
  margin-bottom: 10px;
  color: rgba(255, 255, 255, 0.82);
  font-size: 13px;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

.article-page-hero h1 {
  max-width: 880px;
  font-family: var(--serif-font);
  font-size: clamp(46px, 6.4vw, 82px);
  font-weight: 500;
  line-height: 1.03;
  letter-spacing: -0.045em;
}

.article-page-content {
  width: min(100% - 48px, 820px);
  margin: 0 auto;
  padding: 82px 0 100px;
}

.article-back-link {
  display: inline-flex;
  align-items: center;
  margin-bottom: 38px;
  color: var(--primary-blue-dark);
  font-size: 13px;
  font-weight: 800;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  transition:
    color var(--transition),
    transform var(--transition);
}

.article-back-link:hover,
.article-back-link:focus-visible {
  color: var(--orange-dark);
  transform: translateX(-4px);
}

.article-page-content .article-page-lead {
  margin-bottom: 34px;
  color: var(--navy);
  font-family: var(--serif-font);
  font-size: clamp(25px, 3vw, 36px);
  font-weight: 500;
  line-height: 1.45;
}

.article-page-content > p:not(.article-page-lead) {
  margin-bottom: 28px;
  color: #4f6372;
  font-size: 18px;
  line-height: 1.9;
}

.article-page-content h2 {
  margin: 54px 0 20px;
  color: var(--navy);
  font-family: var(--serif-font);
  font-size: clamp(31px, 4vw, 46px);
  font-weight: 500;
  line-height: 1.17;
  letter-spacing: -0.025em;
}

.season-weather-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 16px;
  margin: 26px 0 42px;
}

.weather-card {
  padding: 24px 22px;
  border: 1px solid rgba(2, 149, 206, 0.18);
  border-radius: 16px;
  background: linear-gradient(145deg, #ffffff, #f2f9fc);
  box-shadow: 0 12px 30px rgba(6, 53, 87, 0.07);
}

.weather-card h3 { margin-bottom: 10px; color: var(--navy); font-size: 20px; }
.weather-card strong { display: block; margin-bottom: 12px; color: var(--primary-blue-dark); font-size: 14px; line-height: 1.55; }
.weather-card p { color: #4f6372; font-size: 14px; line-height: 1.65; }

.article-feature-list {
  display: grid;
  gap: 13px;
  margin: 24px 0 38px;
  padding: 0;
  list-style: none;
}

.article-feature-list li {
  position: relative;
  padding: 18px 20px 18px 52px;
  border-left: 3px solid var(--orange);
  border-radius: 0 12px 12px 0;
  background-color: #f5f9fb;
  color: #405969;
  font-size: 16px;
  line-height: 1.7;
}

.article-feature-list li::before { position: absolute; top: 20px; left: 20px; color: var(--primary-blue); content: "✓"; font-weight: 900; }

.article-note {
  margin: 38px 0 12px;
  padding: 22px 24px;
  border-radius: 14px;
  background-color: rgba(244, 161, 30, 0.13);
  color: var(--navy);
  font-size: 15px;
  font-weight: 650;
  line-height: 1.75;
}

.article-back-link-bottom {
  margin: 32px 0 0;
  padding-top: 30px;
  border-top: 1px solid var(--light-grey);
}

.article-simple-footer {
  padding: 30px 24px;
  background-color: var(--navy);
  color: rgba(255, 255, 255, 0.72);
  text-align: center;
  font-size: 13px;
}

@media screen and (max-width: 760px) {
  .season-weather-grid { grid-template-columns: 1fr; }

  .article-page-hero {
    min-height: 560px;
  }

  .article-page-hero-content {
    width: min(100% - 32px, 1000px);
    padding: 60px 0;
  }

  .article-page-hero h1 {
    font-size: clamp(42px, 12vw, 60px);
  }

  .article-page-content {
    width: min(100% - 36px, 820px);
    padding: 60px 0 76px;
  }

  .article-page-content .article-page-lead {
    font-size: 26px;
  }

  .article-page-content > p:not(.article-page-lead) {
    font-size: 16px;
    line-height: 1.85;
  }

  .article-page-content h2 {
    margin-top: 42px;
    font-size: 33px;
  }

  .article-feature-list li { padding: 16px 16px 16px 46px; font-size: 15px; }
}

@media screen and (max-width: 420px) {
  .article-page-hero {
    min-height: 500px;
  }

  .article-page-hero-content {
    width: min(100% - 24px, 1000px);
    padding-bottom: 46px;
  }

  .article-page-hero h1 {
    font-size: 40px;
  }

  .article-page-content {
    width: min(100% - 28px, 820px);
    padding-top: 48px;
  }
}


/* ==================================================
   TRAVEL INSPIRATION / BLOG
   ================================================== */

.blog-page-main {
  padding-top: var(--header-height);
  background-color: var(--off-white);
}

.blog-page-hero {
  padding: 68px 24px 62px;
  border-bottom: 1px solid rgba(2, 149, 206, 0.16);
  background:
    radial-gradient(circle at 88% 10%, rgba(2, 149, 206, 0.1), transparent 32%),
    linear-gradient(135deg, #ffffff 0%, #f3f9fc 100%);
  color: var(--navy);
  text-align: left;
}

.blog-page-hero-inner {
  width: min(100%, 1120px);
  margin: 0 auto;
}

.blog-page-label {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 14px;
  color: var(--orange-dark);
  font-size: 12px;
  font-weight: 800;
  letter-spacing: 0.18em;
  text-transform: uppercase;
}

.blog-page-label::before {
  width: 38px;
  height: 2px;
  background-color: var(--orange);
  content: "";
}

.blog-page-hero h1 {
  max-width: 820px;
  margin: 0;
  font-family: var(--serif-font);
  font-size: clamp(38px, 4.8vw, 62px);
  font-weight: 500;
  line-height: 1.08;
  letter-spacing: -0.035em;
}

.blog-page-hero p:last-child {
  max-width: 680px;
  margin: 0 auto;
  color: rgba(255, 255, 255, 0.82);
  font-size: 18px;
  line-height: 1.8;
}

.blog-page-main .travel-inspiration-section {
  padding-top: 92px;
}

.blog-page-main .travel-inspiration-heading {
  display: none;
}

.desktop-navigation a[aria-current="page"],
.mobile-navigation a[aria-current="page"] {
  color: var(--primary-blue);
}

@media screen and (max-width: 760px) {
  .blog-page-hero { padding: 48px 20px 44px; }
  .blog-page-hero h1 { font-size: clamp(34px, 10vw, 48px); }
  .blog-page-main .travel-inspiration-section { padding-top: 68px; }
}

.travel-inspiration-section {
  padding: 112px 0;
  background:
    radial-gradient(circle at 8% 12%, rgba(2, 149, 206, 0.08), transparent 28%),
    linear-gradient(180deg, var(--white) 0%, var(--off-white) 100%);
}

.travel-inspiration-container {
  width: min(100% - 48px, var(--container-width));
  margin: 0 auto;
}

.travel-inspiration-heading {
  max-width: 760px;
  margin: 0 auto 52px;
  text-align: center;
}

.travel-inspiration-heading .section-eyebrow {
  justify-content: center;
}

.travel-inspiration-heading .section-eyebrow::before {
  display: none;
}

.travel-inspiration-heading h2 {
  margin: 13px 0 18px;
  color: var(--navy);
  font-family: var(--serif-font);
  font-size: clamp(38px, 4.2vw, 60px);
  font-weight: 500;
  line-height: 1.08;
  letter-spacing: -0.035em;
}

.travel-inspiration-heading > p:last-child {
  max-width: 650px;
  margin: 0 auto;
  color: var(--medium-grey);
  font-size: 17px;
  line-height: 1.8;
}

.inspiration-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 28px;
}

.inspiration-card {
  display: flex;
  min-width: 0;
  flex-direction: column;
  overflow: hidden;
  background-color: var(--white);
  border: 1px solid rgba(8, 40, 68, 0.09);
  border-radius: 22px;
  box-shadow: 0 18px 50px rgba(8, 40, 68, 0.09);
  transition:
    transform var(--transition),
    box-shadow var(--transition),
    border-color var(--transition);
}

.inspiration-card:hover {
  transform: translateY(-8px);
  border-color: rgba(2, 149, 206, 0.24);
  box-shadow: 0 26px 65px rgba(8, 40, 68, 0.15);
}

.inspiration-image-wrapper {
  position: relative;
  aspect-ratio: 4 / 3;
  overflow: hidden;
  background-color: var(--light-grey);
}

.inspiration-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.7s ease;
}

.inspiration-card:hover .inspiration-image {
  transform: scale(1.055);
}

.inspiration-category {
  position: absolute;
  top: 18px;
  left: 18px;
  padding: 8px 13px;
  background-color: rgba(255, 255, 255, 0.94);
  color: var(--primary-blue-dark);
  border-radius: 999px;
  box-shadow: 0 8px 24px rgba(8, 40, 68, 0.14);
  font-size: 11px;
  font-weight: 800;
  line-height: 1;
  letter-spacing: 0.09em;
  text-transform: uppercase;
}

.inspiration-card-content {
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: flex-start;
  padding: 29px 28px 30px;
}

.inspiration-meta {
  margin-bottom: 10px;
  color: var(--orange-dark);
  font-size: 12px;
  font-weight: 800;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

.inspiration-card-content h3 {
  margin-bottom: 14px;
  color: var(--navy);
  font-family: var(--serif-font);
  font-size: clamp(24px, 2.05vw, 31px);
  font-weight: 600;
  line-height: 1.2;
  letter-spacing: -0.02em;
}

.inspiration-card-content > p:not(.inspiration-meta) {
  margin-bottom: 25px;
  color: var(--medium-grey);
  font-size: 15px;
  line-height: 1.75;
}

.read-article-button,
.article-inquiry-button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 48px;
  margin-top: auto;
  padding: 13px 21px;
  background-color: var(--orange);
  color: var(--navy);
  border-radius: 8px;
  font-size: 12px;
  font-weight: 800;
  letter-spacing: 0.07em;
  text-transform: uppercase;
  transition:
    background-color var(--transition),
    color var(--transition),
    transform var(--transition),
    box-shadow var(--transition);
}

.read-article-button::after {
  margin-left: 10px;
  content: "→";
  font-size: 17px;
  line-height: 1;
  transition: transform var(--transition);
}

.read-article-button:hover,
.read-article-button:focus-visible,
.article-inquiry-button:hover,
.article-inquiry-button:focus-visible {
  background-color: var(--orange-dark);
  box-shadow: 0 10px 25px rgba(223, 143, 8, 0.28);
  transform: translateY(-2px);
}

.read-article-button:hover::after,
.read-article-button:focus-visible::after {
  transform: translateX(4px);
}

.read-article-button:focus-visible,
.article-inquiry-button:focus-visible,
.article-modal-close:focus-visible {
  outline: 3px solid rgba(2, 149, 206, 0.35);
  outline-offset: 3px;
}


/* Article popups */

body.article-modal-open {
  overflow: hidden;
}

.article-modal[hidden] {
  display: none;
}

.article-modal {
  position: fixed;
  inset: 0;
  z-index: 2500;
  display: grid;
  place-items: center;
  padding: 32px;
}

.article-modal-backdrop {
  position: absolute;
  inset: 0;
  background-color: rgba(5, 28, 47, 0.82);
  backdrop-filter: blur(6px);
}

.article-modal-content {
  position: relative;
  z-index: 1;
  display: grid;
  grid-template-columns: minmax(300px, 0.84fr) minmax(420px, 1.16fr);
  width: min(100%, 1080px);
  height: min(86vh, 780px);
  min-height: 0;
  overflow: hidden;
  background-color: var(--white);
  border-radius: 24px;
  box-shadow: 0 35px 100px rgba(0, 0, 0, 0.32);
  animation: articleModalEnter 0.32s ease both;
}

.article-modal-image {
  width: 100%;
  height: 100%;
  min-height: 0;
  object-fit: cover;
}

.article-modal-body {
  min-width: 0;
  min-height: 0;
  overflow-y: auto;
  overscroll-behavior: contain;
  -webkit-overflow-scrolling: touch;
  padding: 58px 52px 50px;
  scrollbar-color: var(--primary-blue) var(--light-grey);
  scrollbar-width: thin;
}

.article-modal-category {
  margin-bottom: 12px;
  color: var(--orange-dark);
  font-size: 12px;
  font-weight: 800;
  letter-spacing: 0.1em;
  text-transform: uppercase;
}

.article-modal-body h2 {
  margin-bottom: 24px;
  padding-right: 25px;
  color: var(--navy);
  font-family: var(--serif-font);
  font-size: clamp(32px, 3.3vw, 48px);
  font-weight: 500;
  line-height: 1.12;
  letter-spacing: -0.03em;
}

.article-modal-body > p:not(.article-modal-category) {
  margin-bottom: 18px;
  color: #4f6372;
  font-size: 15px;
  line-height: 1.8;
}

.article-inquiry-button {
  margin-top: 12px;
}

.article-modal-close {
  position: absolute;
  top: 18px;
  right: 18px;
  z-index: 3;
  display: grid;
  width: 44px;
  height: 44px;
  place-items: center;
  background-color: var(--navy);
  color: var(--white);
  border-radius: 50%;
  box-shadow: 0 8px 24px rgba(8, 40, 68, 0.22);
  font-size: 28px;
  font-weight: 300;
  line-height: 1;
  transition:
    background-color var(--transition),
    transform var(--transition);
}

.article-modal-close:hover,
.article-modal-close:focus-visible {
  background-color: var(--primary-blue);
  transform: rotate(5deg);
}

@keyframes articleModalEnter {
  from {
    opacity: 0;
    transform: translateY(20px) scale(0.98);
  }

  to {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
}


/* Travel inspiration — responsive */

@media screen and (max-width: 1050px) {
  .inspiration-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .inspiration-card:last-child {
    grid-column: 1 / -1;
    width: calc(50% - 14px);
    justify-self: center;
  }

  .article-modal-content {
    grid-template-columns: minmax(260px, 0.72fr) minmax(390px, 1.28fr);
  }

  .article-modal-body {
    padding: 54px 38px 42px;
  }
}

@media screen and (max-width: 760px) {
  .travel-inspiration-section {
    padding: 80px 0;
  }

  .travel-inspiration-container {
    width: min(100% - 32px, var(--container-width));
  }

  .travel-inspiration-heading {
    margin-bottom: 34px;
    text-align: left;
  }

  .travel-inspiration-heading .section-eyebrow {
    justify-content: flex-start;
  }

  .travel-inspiration-heading h2 {
    font-size: clamp(34px, 10.5vw, 47px);
  }

  .travel-inspiration-heading > p:last-child {
    margin: 0;
    font-size: 16px;
  }

  .inspiration-grid {
    grid-template-columns: 1fr;
    gap: 22px;
  }

  .inspiration-card:last-child {
    grid-column: auto;
    width: 100%;
  }

  .inspiration-image-wrapper {
    aspect-ratio: 16 / 11;
  }

  .inspiration-card-content {
    padding: 25px 23px 27px;
  }

  .inspiration-card-content h3 {
    font-size: 27px;
  }

  .article-modal {
    align-items: end;
    padding: 14px;
  }

  .article-modal-content {
    display: block;
    height: calc(100dvh - 28px);
    max-height: none;
    overflow-y: auto;
    overscroll-behavior: contain;
    -webkit-overflow-scrolling: touch;
    border-radius: 20px;
  }

  .article-modal-image {
    height: 260px;
    min-height: 0;
  }

  .article-modal-body {
    overflow: visible;
    padding: 34px 24px 32px;
  }

  .article-modal-body h2 {
    padding-right: 0;
    font-size: 34px;
  }

  .article-modal-close {
    position: sticky;
    top: 12px;
    float: right;
    margin: 12px 12px -56px 0;
  }
}

@media screen and (max-width: 420px) {
  .travel-inspiration-container {
    width: min(100% - 24px, var(--container-width));
  }

  .inspiration-image-wrapper {
    aspect-ratio: 4 / 3;
  }

  .inspiration-category {
    top: 14px;
    left: 14px;
  }

  .article-modal {
    padding: 8px;
  }

  .article-modal-content {
    height: calc(100dvh - 16px);
    max-height: none;
  }

  .article-modal-image {
    height: 220px;
  }

  .article-modal-body {
    padding: 30px 20px 28px;
  }

  .article-modal-body h2 {
    font-size: 30px;
  }
}

@media (prefers-reduced-motion: reduce) {
  .inspiration-card,
  .inspiration-image,
  .read-article-button,
  .read-article-button::after,
  .article-inquiry-button,
  .article-modal-content,
  .article-modal-close {
    animation: none;
    transition: none;
  }
}


/* =========================================================
   PLAN YOUR TRIP / INQUIRY FORM
   ========================================================= */

.inquiry-section {
  padding: 112px 0;
  background: var(--navy);
  color: var(--white);
}

.inquiry-container {
  display: grid;
  width: min(var(--container-width), calc(100% - 48px));
  margin: 0 auto;
  grid-template-columns: minmax(280px, 0.72fr) minmax(0, 1.28fr);
  align-items: start;
  gap: clamp(52px, 7vw, 100px);
}

.inquiry-introduction {
  position: sticky;
  top: calc(var(--header-height) + 35px);
}

.inquiry-eyebrow {
  display: flex;
  margin-bottom: 18px;
  align-items: center;
  gap: 14px;
  color: var(--orange);
  font-size: 12px;
  font-weight: 800;
  letter-spacing: 0.17em;
  text-transform: uppercase;
}

.inquiry-eyebrow::before {
  width: 42px;
  height: 2px;
  background: var(--orange);
  content: "";
}

.inquiry-introduction h2 {
  max-width: 520px;
  margin-bottom: 25px;
  font-family: var(--serif-font);
  font-size: clamp(45px, 5vw, 70px);
  font-weight: 500;
  line-height: 1.05;
}

.inquiry-introduction > p:not(.inquiry-eyebrow) {
  max-width: 470px;
  color: rgba(255, 255, 255, 0.72);
  font-size: 17px;
  line-height: 1.8;
}

.inquiry-contact-note {
  display: flex;
  margin-top: 45px;
  padding-top: 27px;
  flex-direction: column;
  align-items: flex-start;
  gap: 5px;
  border-top: 1px solid rgba(255, 255, 255, 0.16);
}

.inquiry-contact-note span {
  margin-bottom: 7px;
  color: rgba(255, 255, 255, 0.6);
  font-size: 12px;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

.inquiry-contact-note a {
  color: var(--white);
  font-size: 16px;
  transition: color var(--transition);
}

.inquiry-contact-note a:hover {
  color: var(--orange);
}

.inquiry-form {
  position: relative;
  padding: clamp(28px, 4vw, 52px);
  background: var(--white);
  color: var(--dark-text);
  box-shadow: 0 28px 70px rgba(0, 0, 0, 0.22);
}

.inquiry-honeypot {
  position: absolute;
  left: -9999px;
  width: 1px;
  height: 1px;
  overflow: hidden;
}

.form-section-heading {
  display: flex;
  margin-bottom: 27px;
  align-items: center;
  gap: 14px;
}

.form-section-heading-contact {
  margin-top: 45px;
}

.form-section-heading > span {
  display: grid;
  width: 36px;
  height: 36px;
  flex: 0 0 36px;
  place-items: center;
  background: var(--light-blue);
  border-radius: 50%;
  color: var(--primary-blue-dark);
  font-size: 11px;
  font-weight: 800;
}

.form-section-heading h3 {
  color: var(--navy);
  font-family: var(--serif-font);
  font-size: 29px;
  font-weight: 500;
}

.form-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 22px;
}

.form-field {
  display: flex;
  min-width: 0;
  flex-direction: column;
  gap: 8px;
}

.form-field-full {
  grid-column: 1 / -1;
}

.form-field label,
.form-field legend {
  color: var(--navy);
  font-size: 11px;
  font-weight: 800;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

.form-field input,
.form-field select,
.form-field textarea,
.child-age-field input {
  width: 100%;
  min-height: 52px;
  padding: 13px 14px;
  background: var(--off-white);
  border: 1px solid #d8e2e8;
  border-radius: 0;
  color: var(--dark-text);
  outline: none;
  transition:
    border-color var(--transition),
    box-shadow var(--transition),
    background var(--transition);
}

.form-field textarea {
  min-height: 130px;
  resize: vertical;
}

.form-field input:focus,
.form-field select:focus,
.form-field textarea:focus,
.child-age-field input:focus {
  background: var(--white);
  border-color: var(--primary-blue);
  box-shadow: 0 0 0 3px rgba(2, 149, 206, 0.12);
}

.form-field input::placeholder,
.form-field textarea::placeholder {
  color: #93a0a9;
}

.interests-fieldset {
  padding: 0;
  border: 0;
}

.interests-fieldset legend {
  margin-bottom: 11px;
}

.interest-options {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}

.interest-options label {
  position: relative;
  cursor: pointer;
}

.interest-options input {
  position: absolute;
  opacity: 0;
  pointer-events: none;
}

.interest-options span {
  display: inline-flex;
  min-height: 40px;
  padding: 9px 13px;
  align-items: center;
  background: var(--off-white);
  border: 1px solid #d8e2e8;
  color: #51626e;
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 0;
  text-transform: none;
  transition:
    background var(--transition),
    border-color var(--transition),
    color var(--transition);
}

.interest-options input:checked + span {
  background: var(--primary-blue);
  border-color: var(--primary-blue);
  color: var(--white);
}

.interest-options input:focus-visible + span {
  outline: 3px solid rgba(2, 149, 206, 0.25);
  outline-offset: 2px;
}

.children-ages:not(:empty) {
  display: grid;
  padding: 18px;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 14px;
  background: var(--light-blue);
}

.child-age-field {
  display: flex;
  flex-direction: column;
  gap: 7px;
}

.child-age-field label {
  color: var(--navy);
  font-size: 10px;
  font-weight: 800;
  letter-spacing: 0.06em;
  text-transform: uppercase;
}

.child-age-field input {
  min-height: 46px;
  background: var(--white);
}

.privacy-consent {
  display: flex;
  margin: 28px 0 23px;
  align-items: flex-start;
  gap: 11px;
  color: var(--medium-grey);
  cursor: pointer;
  font-size: 13px;
  line-height: 1.55;
}

.privacy-consent input {
  width: 17px;
  height: 17px;
  margin-top: 2px;
  flex: 0 0 17px;
  accent-color: var(--primary-blue);
}

.inquiry-submit-button {
  display: inline-flex;
  min-width: 190px;
  min-height: 54px;
  padding: 14px 23px;
  align-items: center;
  justify-content: center;
  gap: 15px;
  background: var(--orange);
  color: var(--navy);
  font-size: 11px;
  font-weight: 800;
  letter-spacing: 0.11em;
  text-transform: uppercase;
  transition:
    background var(--transition),
    color var(--transition),
    transform var(--transition),
    opacity var(--transition);
}

.inquiry-submit-button:hover:not(:disabled) {
  background: var(--navy);
  color: var(--white);
  transform: translateY(-2px);
}

.inquiry-submit-button:disabled {
  cursor: wait;
  opacity: 0.65;
}

.form-status {
  display: none;
  margin-top: 18px;
  padding: 13px 15px;
  font-size: 14px;
  line-height: 1.55;
}

.form-status.is-visible {
  display: block;
}

.form-status.is-success {
  background: #e5f7ec;
  color: #176838;
}

.form-status.is-error {
  background: #fff0ee;
  color: #a23227;
}

@media screen and (max-width: 900px) {

  .inquiry-section {
    padding: 82px 0;
  }

  .inquiry-container {
    width: min(100% - 36px, var(--container-width));
    grid-template-columns: 1fr;
    gap: 45px;
  }

  .inquiry-introduction {
    position: static;
  }

}

@media screen and (max-width: 600px) {

  .inquiry-section {
    padding: 68px 0;
  }

  .inquiry-container {
    width: calc(100% - 28px);
    gap: 34px;
  }

  .inquiry-introduction h2 {
    font-size: clamp(38px, 11vw, 49px);
  }

  .inquiry-introduction > p:not(.inquiry-eyebrow) {
    font-size: 15px;
  }

  .inquiry-contact-note {
    margin-top: 30px;
  }

  .inquiry-form {
    padding: 27px 19px;
  }

  .form-grid,
  .children-ages:not(:empty) {
    grid-template-columns: 1fr;
  }

  .form-grid {
    gap: 18px;
  }

  .form-section-heading-contact {
    margin-top: 38px;
  }

  .form-section-heading h3 {
    font-size: 26px;
  }

  .interest-options {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .interest-options span {
    width: 100%;
    height: 100%;
    justify-content: center;
    text-align: center;
  }

  .inquiry-submit-button {
    width: 100%;
  }

}


/* =========================================================
   BEST-SELLING ARMENIA TOURS
   ========================================================= */

.tours-section {
  padding: 112px 0;
  background:
    radial-gradient(circle at 92% 6%, rgba(2, 149, 206, 0.09), transparent 28%),
    var(--off-white);
  overflow: hidden;
}

.tours-container {
  width: min(var(--container-width), calc(100% - 48px));
  margin: 0 auto;
}

.tours-heading {
  display: grid;
  grid-template-columns: minmax(0, 1.25fr) minmax(280px, 0.75fr);
  align-items: end;
  gap: 70px;
  margin-bottom: 52px;
}

.tours-heading .section-eyebrow {
  margin-bottom: 16px;
  color: var(--orange-dark);
  font-size: 12px;
  font-weight: 800;
  letter-spacing: 0.16em;
  text-transform: uppercase;
}

.tours-heading h2 {
  max-width: 760px;
  color: var(--navy);
  font-family: var(--serif-font);
  font-size: clamp(44px, 4.5vw, 68px);
  font-weight: 500;
  line-height: 1.06;
}

.tours-introduction {
  max-width: 440px;
  color: var(--medium-grey);
  font-size: 17px;
  line-height: 1.75;
}

.tours-grid {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 22px;
}

.tour-card {
  display: flex;
  min-width: 0;
  flex-direction: column;
  background: var(--white);
  border: 1px solid rgba(8, 40, 68, 0.1);
  border-radius: 4px;
  box-shadow: 0 14px 38px rgba(8, 40, 68, 0.08);
  overflow: hidden;
  transition:
    transform var(--transition),
    box-shadow var(--transition);
}

.tour-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 22px 48px rgba(8, 40, 68, 0.15);
}

.tour-card-image-wrap {
  position: relative;
  aspect-ratio: 3 / 2;
  background: var(--light-grey);
  overflow: hidden;
}

.tour-card-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.65s ease;
}

.tour-card:hover .tour-card-image {
  transform: scale(1.045);
}

.tour-duration {
  position: absolute;
  right: 14px;
  bottom: 14px;
  padding: 9px 13px;
  background: var(--orange);
  color: var(--navy);
  font-size: 11px;
  font-weight: 800;
  letter-spacing: 0.08em;
  line-height: 1;
  text-transform: uppercase;
  box-shadow: 0 8px 22px rgba(8, 40, 68, 0.18);
}

.tour-card-content {
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: flex-start;
  padding: 28px 24px 25px;
}

.tour-card-label {
  margin-bottom: 9px;
  color: var(--primary-blue-dark);
  font-size: 10px;
  font-weight: 800;
  letter-spacing: 0.14em;
  text-transform: uppercase;
}

.tour-card-content h3 {
  margin-bottom: 13px;
  color: var(--navy);
  font-family: var(--serif-font);
  font-size: 29px;
  font-weight: 500;
  line-height: 1.12;
}

.tour-card-content > p:not(.tour-card-label) {
  margin-bottom: 24px;
  color: var(--medium-grey);
  font-size: 14px;
  line-height: 1.7;
}

.tour-details-button {
  display: inline-flex;
  min-height: 46px;
  margin-top: auto;
  padding: 13px 19px;
  align-items: center;
  justify-content: center;
  background: var(--orange);
  color: var(--navy);
  font-size: 11px;
  font-weight: 800;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  transition:
    background var(--transition),
    color var(--transition),
    transform var(--transition);
}

.tour-details-button:hover,
.tour-details-button:focus-visible {
  background: var(--navy);
  color: var(--white);
  transform: translateY(-2px);
}

.tour-details-button:focus-visible,
.tour-modal-close:focus-visible,
.tour-modal-inquiry:focus-visible {
  outline: 3px solid rgba(2, 149, 206, 0.4);
  outline-offset: 3px;
}


/* =========================================================
   TOUR ITINERARY MODALS
   ========================================================= */

body.tour-modal-open {
  overflow: hidden;
}

.tour-modal {
  position: fixed;
  z-index: 2000;
  inset: 0;
  display: flex;
  padding: 30px;
  align-items: center;
  justify-content: center;
  visibility: hidden;
  opacity: 0;
  pointer-events: none;
  transition:
    opacity 0.25s ease,
    visibility 0.25s ease;
}

.tour-modal.is-open {
  visibility: visible;
  opacity: 1;
  pointer-events: auto;
}

.tour-modal-backdrop {
  position: absolute;
  inset: 0;
  background: rgba(4, 25, 42, 0.78);
  backdrop-filter: blur(6px);
}

.tour-modal-dialog {
  position: relative;
  z-index: 1;
  width: min(760px, 100%);
  max-height: min(820px, calc(100vh - 60px));
  padding: 46px 48px 42px;
  background: var(--white);
  border-top: 5px solid var(--orange);
  box-shadow: 0 30px 80px rgba(0, 0, 0, 0.28);
  overflow-y: auto;
  transform: translateY(22px) scale(0.985);
  transition: transform 0.3s ease;
}

.tour-modal.is-open .tour-modal-dialog {
  transform: translateY(0) scale(1);
}

.tour-modal-close {
  position: absolute;
  top: 17px;
  right: 18px;
  display: grid;
  width: 42px;
  height: 42px;
  place-items: center;
  background: var(--off-white);
  color: var(--navy);
  font-size: 27px;
  font-weight: 300;
  line-height: 1;
  transition:
    background var(--transition),
    color var(--transition);
}

.tour-modal-close:hover {
  background: var(--navy);
  color: var(--white);
}

.tour-modal-duration {
  margin: 0 60px 9px 0;
  color: var(--primary-blue-dark);
  font-size: 11px;
  font-weight: 800;
  letter-spacing: 0.14em;
  text-transform: uppercase;
}

.tour-modal-dialog h2 {
  margin: 0 55px 28px 0;
  color: var(--navy);
  font-family: var(--serif-font);
  font-size: clamp(36px, 5vw, 54px);
  font-weight: 500;
  line-height: 1.08;
}

.tour-itinerary {
  display: grid;
  gap: 0;
  margin: 0 0 31px;
  padding: 0;
  list-style: none;
  counter-reset: itinerary-day;
}

.tour-itinerary li {
  position: relative;
  padding: 18px 8px 18px 54px;
  border-top: 1px solid var(--light-grey);
  color: #4e5e69;
  font-size: 15px;
  line-height: 1.65;
  counter-increment: itinerary-day;
}

.tour-itinerary li::before {
  position: absolute;
  top: 17px;
  left: 4px;
  display: grid;
  width: 34px;
  height: 34px;
  place-items: center;
  background: var(--light-blue);
  border-radius: 50%;
  color: var(--primary-blue-dark);
  content: counter(itinerary-day);
  font-size: 12px;
  font-weight: 800;
}

.tour-itinerary li:last-child {
  border-bottom: 1px solid var(--light-grey);
}

.tour-itinerary strong {
  color: var(--navy);
}

.tour-modal-inquiry {
  display: inline-flex;
  min-height: 50px;
  padding: 14px 24px;
  align-items: center;
  justify-content: center;
  background: var(--orange);
  color: var(--navy);
  font-size: 11px;
  font-weight: 800;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  transition:
    background var(--transition),
    color var(--transition),
    transform var(--transition);
}

.tour-modal-inquiry:hover {
  background: var(--navy);
  color: var(--white);
  transform: translateY(-2px);
}


/* =========================================================
   TOURS — RESPONSIVE
   ========================================================= */

@media screen and (max-width: 1100px) {

  .tours-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 24px;
  }

  .tour-card-content h3 {
    font-size: 32px;
  }

}

@media screen and (max-width: 820px) {

  .tours-section {
    padding: 82px 0;
  }

  .tours-container {
    width: min(100% - 36px, var(--container-width));
  }

  .tours-heading {
    grid-template-columns: 1fr;
    gap: 20px;
    margin-bottom: 38px;
  }

  .tours-introduction {
    max-width: 650px;
  }

  .tour-modal {
    padding: 20px;
  }

  .tour-modal-dialog {
    max-height: calc(100vh - 40px);
    padding: 42px 32px 34px;
  }

}

@media screen and (max-width: 600px) {

  .tours-section {
    padding: 68px 0;
  }

  .tours-container {
    width: calc(100% - 28px);
  }

  .tours-heading h2 {
    font-size: clamp(36px, 11vw, 48px);
  }

  .tours-introduction {
    font-size: 15px;
  }

  .tours-grid {
    grid-template-columns: 1fr;
    gap: 18px;
  }

  .tour-card-content {
    padding: 25px 21px 23px;
  }

  .tour-card-content h3 {
    font-size: 30px;
  }

  .tour-details-button {
    width: 100%;
  }

  .tour-modal {
    padding: 10px;
    align-items: flex-end;
  }

  .tour-modal-dialog {
    width: 100%;
    max-height: calc(100dvh - 20px);
    padding: 40px 20px 25px;
    border-radius: 4px 4px 0 0;
  }

  .tour-modal-close {
    top: 13px;
    right: 13px;
    width: 38px;
    height: 38px;
  }

  .tour-modal-dialog h2 {
    margin-right: 42px;
    font-size: 36px;
  }

  .tour-itinerary li {
    padding: 17px 2px 17px 47px;
    font-size: 14px;
  }

  .tour-itinerary li::before {
    left: 0;
    width: 31px;
    height: 31px;
  }

  .tour-modal-inquiry {
    width: 100%;
  }

}

@media (prefers-reduced-motion: reduce) {

  .tour-card,
  .tour-card-image,
  .tour-details-button,
  .tour-modal,
  .tour-modal-dialog,
  .tour-modal-inquiry {
    transition: none;
  }

  .tour-card:hover,
  .tour-card:hover .tour-card-image {
    transform: none;
  }

}

/* =========================================================
   DISCOVER ARMENIA SECTION
   ========================================================= */

.armenia-section {
  position: relative;
  width: 100%;
  padding: 110px 0;
  overflow: hidden;
  background-color: #ffffff;
}

.armenia-container {
  width: min(1280px, calc(100% - 80px));
  margin: 0 auto;
}


/* =========================================================
   SECTION HEADING
   ========================================================= */

.armenia-heading {
  display: grid;
  grid-template-columns: minmax(0, 1.2fr) minmax(300px, 0.8fr);
  align-items: end;
  gap: 70px;
  margin-bottom: 55px;
}

.armenia-heading-content {
  min-width: 0;
}

.armenia-eyebrow {
  display: flex;
  align-items: center;
  gap: 14px;
  margin: 0 0 18px;
  color: #f29a17;
  font-size: 13px;
  font-weight: 800;
  line-height: 1.4;
  letter-spacing: 0.18em;
  text-transform: uppercase;
}

.armenia-eyebrow::before {
  width: 42px;
  height: 2px;
  flex-shrink: 0;
  background-color: #f29a17;
  content: "";
}

.armenia-heading h2 {
  max-width: 680px;
  margin: 0;
  color: #063557;
  font-family: Georgia, "Times New Roman", serif;
  font-size: clamp(44px, 5vw, 74px);
  font-weight: 500;
  line-height: 1.04;
  letter-spacing: -0.035em;
}

.armenia-introduction {
  max-width: 490px;
  margin: 0 0 7px;
  color: #526475;
  font-size: 17px;
  line-height: 1.85;
}


/* =========================================================
   DESTINATION GRID
   ========================================================= */

.armenia-destinations-grid {
  display: grid;
  grid-template-columns: repeat(12, minmax(0, 1fr));
  grid-auto-rows: 280px;
  gap: 18px;
}

.armenia-destination-card {
  position: relative;
  grid-column: span 4;
  min-width: 0;
  overflow: hidden;
  border-radius: 3px;
  background-color: #063557;
  color: #ffffff;
  text-decoration: none;
  isolation: isolate;
}

.armenia-card-large {
  grid-column: span 8;
  grid-row: span 2;
}

.armenia-card-wide {
  grid-column: span 4;
}


/* =========================================================
   DESTINATION IMAGES
   ========================================================= */

.armenia-destination-card img {
  position: absolute;
  inset: 0;
  z-index: -3;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  transition:
    transform 0.8s cubic-bezier(0.2, 0.7, 0.2, 1),
    filter 0.8s ease;
}

.armenia-destination-card:hover img {
  transform: scale(1.07);
  filter: saturate(1.05);
}

.armenia-card-overlay {
  position: absolute;
  inset: 0;
  z-index: -2;
  background:
    linear-gradient(
      180deg,
      rgba(4, 29, 49, 0.05) 15%,
      rgba(4, 29, 49, 0.2) 48%,
      rgba(4, 29, 49, 0.88) 100%
    );
  transition: background 0.4s ease;
}

.armenia-destination-card:hover .armenia-card-overlay {
  background:
    linear-gradient(
      180deg,
      rgba(4, 29, 49, 0.03) 10%,
      rgba(4, 29, 49, 0.14) 42%,
      rgba(4, 29, 49, 0.92) 100%
    );
}


/* =========================================================
   CARD CONTENT
   ========================================================= */

.armenia-card-content {
  position: absolute;
  right: 0;
  bottom: 0;
  left: 0;
  display: grid;
  grid-template-columns: auto minmax(0, 1fr) auto;
  align-items: end;
  gap: 16px;
  padding: 28px;
}

.armenia-card-large .armenia-card-content {
  padding: 38px;
}

.armenia-card-number {
  margin-bottom: 6px;
  color: rgba(255, 255, 255, 0.72);
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.16em;
}

.armenia-card-content p {
  margin: 0 0 6px;
  color: #f4a11e;
  font-size: 11px;
  font-weight: 800;
  line-height: 1.4;
  letter-spacing: 0.16em;
  text-transform: uppercase;
}

.armenia-card-content h3 {
  margin: 0;
  color: #ffffff;
  font-family: Georgia, "Times New Roman", serif;
  font-size: clamp(27px, 2.5vw, 42px);
  font-weight: 500;
  line-height: 1.1;
  letter-spacing: -0.025em;
}

.armenia-card-large .armenia-card-content h3 {
  font-size: clamp(38px, 4vw, 64px);
}

.armenia-card-arrow {
  display: grid;
  width: 46px;
  height: 46px;
  flex-shrink: 0;
  place-items: center;
  margin-bottom: 2px;
  border: 1px solid rgba(255, 255, 255, 0.55);
  border-radius: 50%;
  color: #ffffff;
  font-size: 20px;
  line-height: 1;
  transition:
    color 0.3s ease,
    border-color 0.3s ease,
    background-color 0.3s ease,
    transform 0.3s ease;
}

.armenia-destination-card:hover .armenia-card-arrow {
  border-color: #f4a11e;
  background-color: #f4a11e;
  color: #062f50;
  transform: translate(3px, -3px);
}


/* =========================================================
   SECTION BUTTON
   ========================================================= */

.armenia-action {
  display: flex;
  justify-content: center;
  margin-top: 50px;
}

.armenia-button {
  position: relative;
  display: inline-flex;
  min-height: 56px;
  align-items: center;
  justify-content: center;
  padding: 15px 32px;
  overflow: hidden;
  border: 2px solid #f4a11e;
  border-radius: 3px;
  background-color: #f4a11e;
  color: #062f50;
  font-size: 12px;
  font-weight: 800;
  letter-spacing: 0.12em;
  text-align: center;
  text-decoration: none;
  text-transform: uppercase;
  transition:
    color 0.3s ease,
    border-color 0.3s ease,
    background-color 0.3s ease,
    transform 0.3s ease,
    box-shadow 0.3s ease;
}

.armenia-button:hover {
  border-color: #063557;
  background-color: #063557;
  color: #ffffff;
  transform: translateY(-3px);
  box-shadow: 0 14px 30px rgba(6, 53, 87, 0.18);
}


/* =========================================================
   KEYBOARD ACCESSIBILITY
   ========================================================= */

.armenia-destination-card:focus-visible,
.armenia-button:focus-visible {
  outline: 3px solid #f4a11e;
  outline-offset: 4px;
}


/* =========================================================
   LARGE TABLET
   ========================================================= */

@media screen and (max-width: 1100px) {

  .armenia-section {
    padding: 90px 0;
  }

  .armenia-container {
    width: min(100% - 48px, 1000px);
  }

  .armenia-heading {
    grid-template-columns: 1fr 0.8fr;
    gap: 45px;
  }

  .armenia-destinations-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    grid-auto-rows: 340px;
  }

  .armenia-destination-card {
    grid-column: span 1;
    grid-row: span 1;
  }

  .armenia-card-large {
    grid-column: span 2;
    grid-row: span 1;
    min-height: 460px;
  }

  .armenia-card-wide {
    grid-column: span 2;
  }

}


/* =========================================================
   TABLET
   ========================================================= */

@media screen and (max-width: 800px) {

  .armenia-section {
    padding: 78px 0;
  }

  .armenia-container {
    width: min(100% - 36px, 720px);
  }

  .armenia-heading {
    grid-template-columns: 1fr;
    gap: 24px;
    margin-bottom: 40px;
  }

  .armenia-heading h2 {
    font-size: clamp(39px, 8vw, 58px);
  }

  .armenia-introduction {
    max-width: 620px;
    font-size: 16px;
    line-height: 1.75;
  }

  .armenia-destinations-grid {
    grid-auto-rows: 310px;
    gap: 14px;
  }

  .armenia-card-large {
    min-height: 420px;
  }

  .armenia-card-content,
  .armenia-card-large .armenia-card-content {
    padding: 25px;
  }

  .armenia-card-content h3,
  .armenia-card-large .armenia-card-content h3 {
    font-size: 34px;
  }

}


/* =========================================================
   MOBILE
   ========================================================= */

@media screen and (max-width: 600px) {

  .armenia-section {
    padding: 68px 0;
  }

  .armenia-container {
    width: calc(100% - 28px);
  }

  .armenia-heading {
    gap: 20px;
    margin-bottom: 32px;
  }

  .armenia-eyebrow {
    gap: 11px;
    margin-bottom: 14px;
    font-size: 11px;
    letter-spacing: 0.15em;
  }

  .armenia-eyebrow::before {
    width: 30px;
  }

  .armenia-heading h2 {
    font-size: clamp(36px, 11vw, 48px);
    line-height: 1.08;
  }

  .armenia-introduction {
    font-size: 15px;
    line-height: 1.7;
  }

  .armenia-destinations-grid {
    grid-template-columns: 1fr;
    grid-auto-rows: auto;
    gap: 12px;
  }

  .armenia-destination-card,
  .armenia-card-large,
  .armenia-card-wide {
    grid-column: span 1;
    grid-row: span 1;
    min-height: 390px;
  }

  .armenia-card-content,
  .armenia-card-large .armenia-card-content {
    grid-template-columns: minmax(0, 1fr) auto;
    gap: 14px;
    padding: 23px 20px;
  }

  .armenia-card-number {
    display: none;
  }

  .armenia-card-content p {
    margin-bottom: 5px;
    font-size: 10px;
    letter-spacing: 0.13em;
  }

  .armenia-card-content h3,
  .armenia-card-large .armenia-card-content h3 {
    font-size: 33px;
  }

  .armenia-card-arrow {
    width: 42px;
    height: 42px;
    font-size: 18px;
  }

  .armenia-action {
    margin-top: 34px;
  }

  .armenia-button {
    width: 100%;
    min-height: 55px;
    padding: 14px 22px;
    font-size: 11px;
  }

}


/* =========================================================
   SMALL MOBILE
   ========================================================= */

@media screen and (max-width: 390px) {

  .armenia-container {
    width: calc(100% - 22px);
  }

  .armenia-heading h2 {
    font-size: 35px;
  }

  .armenia-destination-card,
  .armenia-card-large,
  .armenia-card-wide {
    min-height: 350px;
  }

  .armenia-card-content,
  .armenia-card-large .armenia-card-content {
    padding: 20px 17px;
  }

  .armenia-card-content h3,
  .armenia-card-large .armenia-card-content h3 {
    font-size: 29px;
  }

}


/* =========================================================
   REDUCED MOTION
   ========================================================= */

@media (prefers-reduced-motion: reduce) {

  .armenia-destination-card img,
  .armenia-card-arrow,
  .armenia-button {
    transition: none;
  }

  .armenia-destination-card:hover img {
    transform: none;
  }

}


/* =========================================================
   OUR TEAM PAGE
   ========================================================= */

.team-page-main {
  background: #f7f9fb;
  color: #0b3150;
}


/* =========================================================
   GALLERY PAGE
   ========================================================= */

.gallery-page-main {
  min-height: 100vh;
  background: #f7f9fb;
  color: #0b3150;
}


/* =========================================================
   CONTACT PAGE
   ========================================================= */

.contact-page-main {
  min-height: 100vh;
  background: #f7f9fb;
}

.contact-page-container {
  width: min(1160px, calc(100% - 48px));
  margin: 0 auto;
}

.contact-hero {
  padding: 150px 0 72px;
  background: linear-gradient(135deg, #ffffff 0%, #edf8fc 100%);
  border-bottom: 1px solid rgba(2, 149, 206, 0.14);
}

.contact-hero-grid {
  display: grid;
  grid-template-columns: 1.1fr 0.9fr;
  gap: 72px;
  align-items: end;
}

.contact-kicker {
  margin: 0 0 17px;
  color: #ef9f16;
  font-size: 12px;
  font-weight: 800;
  letter-spacing: 0.18em;
  text-transform: uppercase;
}

.contact-hero h1 {
  max-width: 700px;
  margin: 0;
  color: #0b3150;
  font-family: Georgia, "Times New Roman", serif;
  font-size: clamp(48px, 6.5vw, 78px);
  font-weight: 500;
  line-height: 1;
}

.contact-hero-grid > p {
  margin: 0;
  color: #506b7e;
  font-size: 17px;
  line-height: 1.8;
}

.contact-options {
  padding: 48px 0 20px;
}

.contact-options-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 18px;
}

.contact-option-card {
  display: flex;
  min-width: 0;
  padding: 26px;
  gap: 18px;
  align-items: center;
  color: #0b3150;
  text-decoration: none;
  background: #ffffff;
  border: 1px solid rgba(11, 49, 80, 0.1);
  border-radius: 16px;
  box-shadow: 0 14px 36px rgba(11, 49, 80, 0.06);
  transition: transform 0.2s ease, border-color 0.2s ease;
}

.contact-option-card:hover {
  border-color: rgba(2, 149, 206, 0.5);
  transform: translateY(-3px);
}

.contact-option-icon {
  display: grid;
  flex: 0 0 48px;
  width: 48px;
  height: 48px;
  place-items: center;
  color: #ffffff;
  font-size: 19px;
  font-weight: 800;
  background: #0295ce;
  border-radius: 50%;
}

.contact-option-card p {
  margin: 0 0 6px;
  color: #ef9f16;
  font-size: 10px;
  font-weight: 800;
  letter-spacing: 0.13em;
  text-transform: uppercase;
}

.contact-option-card strong {
  display: block;
  overflow: hidden;
  font-size: 15px;
  text-overflow: ellipsis;
}

.contact-inquiry-section {
  padding-top: 58px;
}

.contact-map-section {
  padding: 24px 0 10px;
}

.contact-map-card {
  display: grid;
  overflow: hidden;
  grid-template-columns: 0.9fr 1.1fr;
  color: #0b3150;
  text-decoration: none;
  background: #ffffff;
  border: 1px solid rgba(11, 49, 80, 0.1);
  border-radius: 20px;
  box-shadow: 0 16px 42px rgba(11, 49, 80, 0.07);
}

.contact-map-visual {
  position: relative;
  min-height: 300px;
  overflow: hidden;
  background-color: #dff1f7;
  background-image:
    linear-gradient(32deg, transparent 45%, rgba(255, 255, 255, 0.92) 46%, rgba(255, 255, 255, 0.92) 51%, transparent 52%),
    linear-gradient(148deg, transparent 42%, rgba(255, 255, 255, 0.78) 43%, rgba(255, 255, 255, 0.78) 48%, transparent 49%),
    linear-gradient(90deg, rgba(2, 149, 206, 0.08) 1px, transparent 1px),
    linear-gradient(rgba(2, 149, 206, 0.08) 1px, transparent 1px);
  background-size: auto, auto, 36px 36px, 36px 36px;
}

.contact-map-visual::before,
.contact-map-visual::after {
  position: absolute;
  content: "";
  background: rgba(239, 159, 22, 0.22);
  border-radius: 44% 56% 51% 49%;
}

.contact-map-visual::before {
  width: 120px;
  height: 78px;
  left: 11%;
  top: 18%;
}

.contact-map-visual::after {
  width: 150px;
  height: 95px;
  right: 8%;
  bottom: 13%;
}

.contact-map-pin {
  position: absolute;
  z-index: 1;
  top: 50%;
  left: 52%;
  display: grid;
  width: 52px;
  height: 52px;
  place-items: center;
  color: #ffffff;
  background: #ef9f16;
  border: 7px solid rgba(255, 255, 255, 0.94);
  border-radius: 50% 50% 50% 0;
  box-shadow: 0 10px 28px rgba(11, 49, 80, 0.23);
  transform: translate(-50%, -65%) rotate(-45deg);
}

.contact-map-pin::first-letter {
  transform: rotate(45deg);
}

.contact-map-copy {
  display: flex;
  padding: 46px;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
}

.contact-map-copy h2 {
  margin: 0 0 15px;
  color: #0b3150;
  font-family: Georgia, "Times New Roman", serif;
  font-size: clamp(32px, 4vw, 48px);
  font-weight: 500;
}

.contact-map-copy > div > p:last-child {
  max-width: 520px;
  margin: 0;
  color: #587183;
  line-height: 1.75;
}

.contact-map-button {
  display: inline-flex;
  margin-top: 28px;
  padding: 13px 18px;
  gap: 14px;
  align-items: center;
  color: #ffffff;
  font-size: 12px;
  font-weight: 800;
  letter-spacing: 0.06em;
  background: #0295ce;
  border-radius: 8px;
}

.contact-response-note {
  display: flex;
  margin-top: 28px;
  padding: 18px;
  gap: 12px;
  align-items: flex-start;
  color: #315469;
  background: rgba(2, 149, 206, 0.08);
  border-radius: 12px;
}

.contact-response-note span {
  color: #0295ce;
  font-weight: 900;
}

.contact-response-note p {
  margin: 0;
  font-size: 14px;
  line-height: 1.6;
}

@media screen and (max-width: 900px) {
  .contact-hero-grid,
  .contact-options-grid,
  .contact-map-card {
    grid-template-columns: 1fr;
    gap: 18px;
  }

  .contact-map-copy {
    padding: 36px;
  }
}

@media screen and (max-width: 600px) {
  .contact-page-container {
    width: min(100% - 28px, 1160px);
  }

  .contact-hero {
    padding: 122px 0 52px;
  }

  .contact-hero-grid > p {
    font-size: 15px;
  }

  .contact-options {
    padding-top: 32px;
  }

  .contact-option-card {
    padding: 21px;
  }

  .contact-map-visual {
    min-height: 230px;
  }

  .contact-map-copy {
    padding: 30px 24px 34px;
  }
}

.gallery-page-container {
  width: min(1200px, calc(100% - 48px));
  margin: 0 auto;
}

.gallery-hero {
  padding: 150px 0 70px;
  background: linear-gradient(135deg, #ffffff, #edf8fc);
  border-bottom: 1px solid rgba(2, 149, 206, 0.14);
}

.gallery-hero-grid {
  display: grid;
  grid-template-columns: 1.15fr 0.85fr;
  gap: 70px;
  align-items: end;
}

.gallery-kicker {
  margin: 0 0 16px;
  color: #ef9f16;
  font-size: 12px;
  font-weight: 800;
  letter-spacing: 0.18em;
  text-transform: uppercase;
}

.gallery-hero h1 {
  margin: 0;
  color: #0b3150;
  font-family: Georgia, "Times New Roman", serif;
  font-size: clamp(48px, 6.5vw, 78px);
  font-weight: 500;
  line-height: 1;
}

.gallery-hero-grid > p {
  margin: 0;
  color: #506b7e;
  font-size: 17px;
  line-height: 1.8;
}

.gallery-content {
  padding: 56px 0 96px;
}

.gallery-filters {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-bottom: 34px;
}

.gallery-filter {
  padding: 11px 19px;
  color: #34566d;
  font: inherit;
  font-size: 13px;
  font-weight: 700;
  background: #ffffff;
  border: 1px solid rgba(11, 49, 80, 0.13);
  border-radius: 999px;
  cursor: pointer;
  transition: color 0.2s ease, background 0.2s ease, border-color 0.2s ease;
}

.gallery-filter:hover,
.gallery-filter.is-active {
  color: #ffffff;
  background: #0295ce;
  border-color: #0295ce;
}

.gallery-grid {
  display: grid;
  grid-auto-rows: 240px;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 18px;
}

.gallery-item {
  position: relative;
  min-width: 0;
  padding: 0;
  overflow: hidden;
  background: #dceef5;
  border: 0;
  border-radius: 16px;
  cursor: zoom-in;
}

.gallery-item[hidden] {
  display: none;
}

.gallery-item-large {
  grid-column: span 2;
}

.gallery-item-wide {
  grid-column: span 2;
}

.gallery-item-tall {
  grid-row: span 2;
}

.gallery-item img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.55s ease;
}

.gallery-item::after {
  position: absolute;
  inset: 35% 0 0;
  content: "";
  background: linear-gradient(to bottom, transparent, rgba(5, 31, 51, 0.76));
}

.gallery-item span {
  position: absolute;
  z-index: 1;
  right: 20px;
  bottom: 18px;
  left: 20px;
  color: #ffffff;
  font-size: 15px;
  font-weight: 700;
  line-height: 1.4;
  text-align: left;
}

.gallery-item:hover img {
  transform: scale(1.045);
}

.gallery-lightbox {
  position: fixed;
  z-index: 3000;
  inset: 0;
  display: none;
  padding: 42px 90px;
  align-items: center;
  justify-content: center;
  background: rgba(4, 25, 40, 0.94);
}

.gallery-lightbox.is-open {
  display: flex;
}

.gallery-lightbox figure {
  max-width: min(1100px, 100%);
  max-height: 88vh;
  margin: 0;
  text-align: center;
}

.gallery-lightbox img {
  display: block;
  max-width: 100%;
  max-height: 78vh;
  margin: 0 auto;
  object-fit: contain;
  border-radius: 10px;
}

.gallery-lightbox figcaption {
  margin-top: 15px;
  color: #ffffff;
  font-size: 15px;
}

.gallery-lightbox-close,
.gallery-lightbox-nav {
  position: absolute;
  color: #ffffff;
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.25);
  border-radius: 50%;
  cursor: pointer;
}

.gallery-lightbox-close {
  top: 24px;
  right: 28px;
  width: 46px;
  height: 46px;
  font-size: 28px;
}

.gallery-lightbox-nav {
  top: 50%;
  width: 48px;
  height: 48px;
  font-size: 34px;
  transform: translateY(-50%);
}

.gallery-lightbox-prev { left: 25px; }
.gallery-lightbox-next { right: 25px; }
.gallery-lightbox-open { overflow: hidden; }

@media screen and (max-width: 850px) {
  .gallery-hero-grid {
    grid-template-columns: 1fr;
    gap: 24px;
  }

  .gallery-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

@media screen and (max-width: 560px) {
  .gallery-page-container {
    width: min(100% - 28px, 1200px);
  }

  .gallery-hero {
    padding: 122px 0 52px;
  }

  .gallery-content {
    padding: 40px 0 68px;
  }

  .gallery-filters {
    gap: 8px;
  }

  .gallery-filter {
    padding: 9px 14px;
    font-size: 12px;
  }

  .gallery-grid {
    grid-auto-rows: 260px;
    grid-template-columns: 1fr;
  }

  .gallery-item-large,
  .gallery-item-wide,
  .gallery-item-tall {
    grid-column: auto;
    grid-row: auto;
  }

  .gallery-lightbox {
    padding: 70px 18px 42px;
  }

  .gallery-lightbox-nav {
    top: auto;
    bottom: 18px;
    transform: none;
  }

  .gallery-lightbox-prev { left: calc(50% - 58px); }
  .gallery-lightbox-next { right: calc(50% - 58px); }
}

.team-page-container {
  width: min(1160px, calc(100% - 48px));
  margin: 0 auto;
}

.team-hero {
  padding: 132px 0 66px;
  background: #f7f9fb;
  border-bottom: 1px solid rgba(2, 149, 206, 0.16);
}

.team-hero-inner {
  position: relative;
  max-width: 900px;
  padding: 54px 68px 58px;
  overflow: hidden;
  text-align: center;
  background: #ffffff;
  border: 1px solid rgba(11, 49, 80, 0.09);
  border-radius: 22px;
  box-shadow: 0 18px 50px rgba(11, 49, 80, 0.08);
}

.team-hero-inner::before {
  display: block;
  width: 54px;
  height: 4px;
  margin: 0 auto 25px;
  content: "";
  background: #ef9f16;
  border-radius: 999px;
}

.team-hero-inner::after {
  position: absolute;
  right: -65px;
  bottom: -80px;
  width: 190px;
  height: 190px;
  content: "";
  border: 1px solid rgba(2, 149, 206, 0.14);
  border-radius: 50%;
}

.team-eyebrow {
  position: relative;
  z-index: 1;
  margin: 0;
  color: #0b3150;
  font-family: Georgia, "Times New Roman", serif;
  font-size: clamp(32px, 4vw, 48px);
  font-weight: 500;
  line-height: 1.12;
  letter-spacing: -0.02em;
  text-transform: none;
}

.team-hero h1 {
  max-width: 760px;
  margin: 0;
  color: #0b3150;
  font-family: Georgia, "Times New Roman", serif;
  font-size: clamp(48px, 7vw, 82px);
  font-weight: 500;
  line-height: 0.98;
}

.team-hero-description {
  position: relative;
  z-index: 1;
  max-width: 690px;
  margin: 23px auto 0;
  color: #456276;
  font-size: 17px;
  line-height: 1.8;
}

.team-list-section {
  padding: 82px 0 96px;
}

.team-section-heading {
  text-align: center;
  margin-bottom: 46px;
}

.team-section-heading h2 {
  margin: 0;
  color: #0b3150;
  font-family: Georgia, "Times New Roman", serif;
  font-size: clamp(34px, 4.5vw, 58px);
  font-weight: 500;
  line-height: 1.08;
}

.team-section-heading p:last-child {
  max-width: 600px;
  margin: 0;
  color: #587183;
  font-size: 16px;
  line-height: 1.75;
}

.team-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 24px;
}

.team-card {
  overflow: hidden;
  background: #ffffff;
  border: 1px solid rgba(11, 49, 80, 0.1);
  border-radius: 18px;
  box-shadow: 0 16px 42px rgba(11, 49, 80, 0.07);
}

.team-photo-placeholder {
  position: relative;
  min-height: 320px;
  overflow: hidden;
  background:
    radial-gradient(circle at 78% 20%, rgba(239, 159, 22, 0.18), transparent 24%),
    linear-gradient(145deg, #eaf7fc 0%, #d7eef7 58%, #c7e5f1 100%);
}

.team-photo-placeholder::before,
.team-photo-placeholder::after {
  position: absolute;
  content: "";
  border: 1px solid rgba(2, 149, 206, 0.25);
  border-radius: 50%;
}

.team-photo-placeholder::before {
  width: 230px;
  height: 230px;
  right: -80px;
  bottom: -75px;
}

.team-photo-placeholder::after {
  width: 120px;
  height: 120px;
  left: -38px;
  top: 42px;
}

.team-card-content {
  display: flex;
  min-height: 105px;
  padding: 25px 26px 28px;
  align-items: center;
  justify-content: center;
  text-align: center;
  border-top: 3px solid #0295ce;
}

.team-card-number {
  display: block;
  margin-bottom: 9px;
  color: #ef9f16;
  font-size: 11px;
  font-weight: 800;
  letter-spacing: 0.16em;
}

.team-card h2 {
  margin: 0;
  color: #0b3150;
  font-size: 20px;
  line-height: 1.35;
}

.team-card:last-child {
  grid-column: 2;
}

.team-values {
  padding: 72px 0;
  background: #ffffff;
  border-top: 1px solid rgba(11, 49, 80, 0.08);
}

.team-values-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 22px;
}

.team-value {
  padding: 30px;
  background: #f7fbfd;
  border-radius: 16px;
}

.team-value h2 {
  margin: 0 0 12px;
  color: #0295ce;
  font-size: 20px;
}

.team-value p {
  margin: 0;
  color: #587183;
  line-height: 1.7;
}

@media screen and (max-width: 900px) {
  .team-values-grid {
    grid-template-columns: 1fr;
    gap: 22px;
  }

  .team-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .team-card:last-child {
    grid-column: auto;
  }
}

@media screen and (max-width: 600px) {
  .team-page-container {
    width: min(100% - 28px, 1160px);
  }

  .team-hero {
    padding: 112px 0 46px;
  }

  .team-hero-inner {
    padding: 40px 24px 42px;
    border-radius: 16px;
  }

  .team-hero-description {
    font-size: 15px;
  }

  .team-list-section {
    padding: 58px 0 70px;
  }

  .team-grid {
    grid-template-columns: 1fr;
  }

  .team-photo-placeholder {
    min-height: 300px;
  }
}
