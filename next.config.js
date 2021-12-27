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
        NEXT_CONTENTFUL_ACCESS_TOKEN:
          "Fp-0k4Pyqy_-RmQ73jmMwF5ddCn0sJOg8skPqVbQ3Qo",
        api: "beatly-music-api",
        development: "prod",
        albumService: "ji13d7wouf.execute-api.us-east-1.amazonaws.com",
        criticService: "63zrqq4iqb.execute-api.us-east-1.amazonaws.com",
        featuredArtistService: "mko05pi9b5.execute-api.us-east-1.amazonaws.com",
        userReviewService: "lll9ilxoe0.execute-api.us-east-1.amazonaws.com",
        userListService: "pr9pj7k6da.execute-api.us-east-1.amazonaws.com",
        userService: "cl8zbj04cl.execute-api.us-east-1.amazonaws.com",
        lastFMToken: "ec92e125438f6137cd37c26c3a11ecc7",
        applicationID: "NJM2Y9BTGK",
        algoliaApiKey: "cb3b061c2fcf1fa9b26943491dd87719",
      },
    };
  }

  return {
    images: {
      domains: ["images.ctfassets.net", "media.beatlymusic.com", "i0.wp.com"],
    },
    env: {
      NEXT_CONTENTFUL_SPACE_ID: "1sd1fciwmtcv",
      NEXT_CONTENTFUL_ACCESS_TOKEN:
        "Fp-0k4Pyqy_-RmQ73jmMwF5ddCn0sJOg8skPqVbQ3Qo",
      api: "beatly-music-api",
      development: "prod",
      albumService: "ji13d7wouf.execute-api.us-east-1.amazonaws.com",
      criticService: "63zrqq4iqb.execute-api.us-east-1.amazonaws.com",
      featuredArtistService: "mko05pi9b5.execute-api.us-east-1.amazonaws.com",
      userReviewService: "lll9ilxoe0.execute-api.us-east-1.amazonaws.com",
      userListService: "pr9pj7k6da.execute-api.us-east-1.amazonaws.com",
      userService: "cl8zbj04cl.execute-api.us-east-1.amazonaws.com",
      lastFMToken: "ec92e125438f6137cd37c26c3a11ecc7",
      applicationID: "NJM2Y9BTGK",
      algoliaApiKey: "cb3b061c2fcf1fa9b26943491dd87719",
    },
  };
};
