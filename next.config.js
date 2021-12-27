const { PHASE_DEVELOPMENT_SERVER } = require("next/constants");

module.exports = (phase) => {
  //require("./pages/sitemap.xml");

  if (phase === PHASE_DEVELOPMENT_SERVER) {
    return {
      images: {
        domains: ["images.ctfassets.net", "media.beatlymusic.com", "i0.wp.com"],
      },
      env: {
        NEXT_CONTENTFUL_SPACE_ID: "1sd1fciwmtcv",
        api: "beatly-music-api",
        development: "prod",
      },
    };
  }

  return {
    images: {
      domains: ["images.ctfassets.net", "media.beatlymusic.com", "i0.wp.com"],
    },
    env: {
      api: "beatly-music-api",
      development: "prod",
    },
  };
};
