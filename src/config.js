module.exports = {
  siteTitle: 'James Robertson | Software Engineer',
  siteDescription:
    'James Robertson is a software engineer based in Huntsville, AL who loves technology and building beautiful and intuitive websites and applicaitons.',
  siteKeywords:
    'James Robertson, jamesurobertson, software engineer, front-end engineer, web developer, javascript, southeastern',
  siteUrl: 'https://www.jamesurobertson.com',
  siteLanguage: 'en_US',
  googleAnalyticsID: 'UA-45666519-2',
  googleVerification: 'DCl7VAf9tcz6eD9gb67NfkNnJ1PKRNcg8qQiwpbx9Lk',
  name: 'James Robertson',
  location: 'Huntsville, AL',
  email: 'jamesurobertson@gmail.com',
  github: 'https://github.com/jamesurobertson',
  socialMedia: [
    {
      name: 'GitHub',
      url: 'https://github.com/jamesurobertson',
    },
    {
      name: 'Linkedin',
      url: 'https://www.linkedin.com/in/james-robertson-31b623116/',
    },
  ],

  navLinks: [
    {
      name: 'About',
      url: '/#about',
    },
    {
      name: 'Projects',
      url: '/#projects',
    },
    {
      name: 'Contact',
      url: '/#contact',
    },
  ],

  navHeight: 100,

  colors: {
    green: '#64ffda',
    navy: '#0a192f',
    darkNavy: '#020c1b',
  },

  srConfig: (delay = 200) => ({
    origin: 'bottom',
    distance: '20px',
    duration: 500,
    delay,
    rotate: { x: 0, y: 0, z: 0 },
    opacity: 0,
    scale: 1,
    easing: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
    mobile: true,
    reset: false,
    useDelay: 'always',
    viewFactor: 0.25,
    viewOffset: { top: 0, right: 0, bottom: 0, left: 0 },
  }),
};
