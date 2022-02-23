(function() {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 2430:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "vt": function() { return /* binding */ GA_TRACKING_ID; },
/* harmony export */   "LV": function() { return /* binding */ pageview; }
/* harmony export */ });
/* unused harmony export event */
const GA_TRACKING_ID = "G-69FMYE84S7"; // https://developers.google.com/analytics/devguides/collection/gtagjs/pages

const pageview = url => {
  window.gtag("config", GA_TRACKING_ID, {
    page_path: url
  });
}; // https://developers.google.com/analytics/devguides/collection/gtagjs/events

const event = ({
  action,
  category,
  label,
  value
}) => {
  window.gtag("event", action, {
    event_category: category,
    event_label: label,
    value: value
  });
};

/***/ }),

/***/ 7882:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ _app; }
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(6731);
// EXTERNAL MODULE: ./lib/gtag.js
var gtag = __webpack_require__(2430);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
// EXTERNAL MODULE: ./components/layout/nav-item.module.css
var nav_item_module = __webpack_require__(3062);
var nav_item_module_default = /*#__PURE__*/__webpack_require__.n(nav_item_module);
;// CONCATENATED MODULE: ./components/layout/nav-item.js



function NavItem(props) {
  // get url for Link and Nav name from props
  const {
    urlPath,
    navItemName
  } = props;
  return /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
    href: urlPath,
    children: /*#__PURE__*/jsx_runtime_.jsx("a", {
      children: /*#__PURE__*/jsx_runtime_.jsx("li", {
        className: (nav_item_module_default()).navItem,
        children: /*#__PURE__*/jsx_runtime_.jsx("nav", {
          children: navItemName
        })
      })
    })
  });
}
// EXTERNAL MODULE: ./components/layout/dropdown-menu.module.css
var dropdown_menu_module = __webpack_require__(2487);
var dropdown_menu_module_default = /*#__PURE__*/__webpack_require__.n(dropdown_menu_module);
;// CONCATENATED MODULE: ./components/layout/dropdown-menu.js




function DropdownMenu() {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    className: (dropdown_menu_module_default()).dropdown,
    children: [/*#__PURE__*/jsx_runtime_.jsx(NavItem, {
      navItemName: "Calculus 1",
      urlPath: "/courses/calculus-1",
      className: (dropdown_menu_module_default()).menuItem
    }), /*#__PURE__*/jsx_runtime_.jsx(NavItem, {
      navItemName: "Calculus 2",
      urlPath: "/courses/calculus-2",
      className: (dropdown_menu_module_default()).menuItem
    }), /*#__PURE__*/jsx_runtime_.jsx(NavItem, {
      navItemName: "Calculus 3",
      urlPath: "/courses/calculus-3",
      className: (dropdown_menu_module_default()).menuItem
    }), /*#__PURE__*/jsx_runtime_.jsx(NavItem, {
      navItemName: "MGT 100",
      urlPath: "/courses/mgt-100",
      className: (dropdown_menu_module_default()).menuItem
    })]
  });
}
;// CONCATENATED MODULE: external "@material-ui/icons/ArrowDropDown"
var ArrowDropDown_namespaceObject = require("@material-ui/icons/ArrowDropDown");;
var ArrowDropDown_default = /*#__PURE__*/__webpack_require__.n(ArrowDropDown_namespaceObject);
;// CONCATENATED MODULE: external "@material-ui/icons/ArrowRight"
var ArrowRight_namespaceObject = require("@material-ui/icons/ArrowRight");;
var ArrowRight_default = /*#__PURE__*/__webpack_require__.n(ArrowRight_namespaceObject);
// EXTERNAL MODULE: ./components/layout/menu.module.css
var menu_module = __webpack_require__(7426);
var menu_module_default = /*#__PURE__*/__webpack_require__.n(menu_module);
;// CONCATENATED MODULE: ./components/layout/menu.js







function Menu(props) {
  // Set useState var for dropdown
  const {
    0: showDropdown,
    1: setShowDropdown
  } = (0,external_react_.useState)(); // Get token when page loads

  if (false) { var token; }

  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    className: (menu_module_default()).navigation,
    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: (menu_module_default()).menuItems,
      children: [/*#__PURE__*/jsx_runtime_.jsx("nav", {
        onClick: () => setShowDropdown(!showDropdown),
        children: "Courses"
      }), /*#__PURE__*/jsx_runtime_.jsx((ArrowDropDown_default()), {
        className: (menu_module_default()).icon,
        width: "20px"
      }), showDropdown && props.children]
    }), /*#__PURE__*/jsx_runtime_.jsx("div", {
      children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
        href: `/about`,
        children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("a", {
          className: (menu_module_default()).menuItems,
          children: [/*#__PURE__*/jsx_runtime_.jsx("nav", {
            children: "About"
          }), /*#__PURE__*/jsx_runtime_.jsx((ArrowRight_default()), {
            className: (menu_module_default()).icon,
            width: "20px"
          })]
        })
      })
    }), /*#__PURE__*/jsx_runtime_.jsx("div", {
      children: token && /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
        href: `/profile`,
        children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("a", {
          className: (menu_module_default()).menuItems,
          children: [/*#__PURE__*/jsx_runtime_.jsx("nav", {
            children: "Profile"
          }), /*#__PURE__*/jsx_runtime_.jsx((ArrowRight_default()), {
            className: (menu_module_default()).icon,
            width: "20px"
          })]
        })
      })
    })]
  });
}
// EXTERNAL MODULE: ./components/search/search-row.module.css
var search_row_module = __webpack_require__(7129);
var search_row_module_default = /*#__PURE__*/__webpack_require__.n(search_row_module);
;// CONCATENATED MODULE: ./components/search/search-row.js




function SearchRow({
  album
}) {
  return /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
    href: "/album/?slug=${album.slug}",
    as: `/album/${album.slug}`,
    children: /*#__PURE__*/jsx_runtime_.jsx("a", {
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: (search_row_module_default()).fullRow,
        children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: (search_row_module_default()).albumRow,
          children: [/*#__PURE__*/jsx_runtime_.jsx("img", {
            src: album.album_cover,
            alt: `${album.album_name}: ${album.artist}`,
            className: (search_row_module_default()).albumCover
          }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: (search_row_module_default()).text,
            children: [/*#__PURE__*/jsx_runtime_.jsx("h2", {
              children: album.album_name
            }), /*#__PURE__*/jsx_runtime_.jsx("h3", {
              children: album.artist
            })]
          })]
        }), /*#__PURE__*/jsx_runtime_.jsx("hr", {})]
      })
    })
  });
}
// EXTERNAL MODULE: ./components/search/search-list.module.css
var search_list_module = __webpack_require__(6811);
var search_list_module_default = /*#__PURE__*/__webpack_require__.n(search_list_module);
;// CONCATENATED MODULE: ./components/search/search-list.js



function SearchList({
  albums
}) {
  // make sure albums is an array and then map it to search row
  if (Array.isArray(albums)) {
    return /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: (search_list_module_default()).list,
      children: albums.map(album => /*#__PURE__*/jsx_runtime_.jsx(SearchRow, {
        album: album
      }, album.objectID))
    });
  } else {
    return null;
  }
}
;// CONCATENATED MODULE: external "@material-ui/icons/Search"
var Search_namespaceObject = require("@material-ui/icons/Search");;
var Search_default = /*#__PURE__*/__webpack_require__.n(Search_namespaceObject);
// EXTERNAL MODULE: ./components/search/search-bar.module.css
var search_bar_module = __webpack_require__(7570);
var search_bar_module_default = /*#__PURE__*/__webpack_require__.n(search_bar_module);
;// CONCATENATED MODULE: ./components/search/search-bar.js






function SearchBar() {
  //Set empty array for search results
  const {
    0: searchResults,
    1: setSearchResults
  } = (0,external_react_.useState)([]);

  const handleChange = async event => {
    event.preventDefault();
    let formattedSearch = event.target.value + ""; // replace spaces in search term with "%20"

    formattedSearch.replace(/ /g, "%20");
    const beatlyURL = `https://${process.env.applicationID}-dsn.algolia.net/1/indexes/beatly_index?query=${formattedSearch}&hitsPerPage=7`; //Include Algolia app ID and key with search request

    const response = await fetch(beatlyURL, {
      headers: {
        "X-Algolia-API-Key": process.env.algoliaApiKey,
        "X-Algolia-Application-Id": process.env.applicationID
      }
    });
    const data = await response.json();
    await setSearchResults(data.hits);
  };

  return /*#__PURE__*/jsx_runtime_.jsx("div", {
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("form", {
      className: (search_bar_module_default()).searchBar // onChange={handleChange}
      ,
      onSubmit: e => e.preventDefault(),
      children: [/*#__PURE__*/jsx_runtime_.jsx((Search_default()), {
        className: (search_bar_module_default()).icon,
        width: "25px"
      }), /*#__PURE__*/jsx_runtime_.jsx("input", {
        id: "searchTerm",
        type: "text",
        placeholder: "Search...",
        required: true
      }), /*#__PURE__*/jsx_runtime_.jsx(SearchList, {
        albums: searchResults,
        width: "25px"
      })]
    })
  });
}
;// CONCATENATED MODULE: external "@material-ui/icons/Close"
var Close_namespaceObject = require("@material-ui/icons/Close");;
var Close_default = /*#__PURE__*/__webpack_require__.n(Close_namespaceObject);
;// CONCATENATED MODULE: external "@material-ui/icons/Menu"
var Menu_namespaceObject = require("@material-ui/icons/Menu");;
var Menu_default = /*#__PURE__*/__webpack_require__.n(Menu_namespaceObject);
// EXTERNAL MODULE: ./components/layout/header.module.css
var header_module = __webpack_require__(4005);
var header_module_default = /*#__PURE__*/__webpack_require__.n(header_module);
;// CONCATENATED MODULE: ./components/layout/header.js












function Header() {
  // Create useState vars for menu and search
  const {
    0: menu,
    1: setMenu
  } = (0,external_react_.useState)(false);
  const {
    0: search,
    1: setSearch
  } = (0,external_react_.useState)(false); // Show and hide menu

  const showMenu = () => setMenu(!menu); // Show and hide search


  const showSearch = () => setSearch(!search);

  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("header", {
    className: (header_module_default()).navbar,
    children: [!menu && /*#__PURE__*/jsx_runtime_.jsx((Menu_default()), {
      className: (header_module_default()).menuIcon,
      onClick: showMenu,
      width: "25px"
    }), menu && /*#__PURE__*/jsx_runtime_.jsx((Close_default()), {
      className: (header_module_default()).menuIcon,
      onClick: showMenu,
      width: "25px"
    }), /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: (header_module_default()).navlinksDesktop,
      children: /*#__PURE__*/jsx_runtime_.jsx(Menu, {
        children: /*#__PURE__*/jsx_runtime_.jsx(DropdownMenu, {})
      })
    }), menu && /*#__PURE__*/jsx_runtime_.jsx(Menu, {
      className: (header_module_default()).navlinksMobile,
      children: /*#__PURE__*/jsx_runtime_.jsx(DropdownMenu, {})
    }), /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
      href: "/",
      children: /*#__PURE__*/jsx_runtime_.jsx("a", {
        className: (header_module_default()).logo,
        children: /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: (header_module_default()).logoIcon,
          children: /*#__PURE__*/jsx_runtime_.jsx(next_image.default, {
            src: "/images/logo/logo.png",
            alt: "Beatly Music Icon",
            width: 166,
            height: 45
          })
        })
      })
    }), /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: (header_module_default()).searchDesktop,
      children: /*#__PURE__*/jsx_runtime_.jsx(SearchBar, {})
    }), search && /*#__PURE__*/jsx_runtime_.jsx(SearchBar, {
      className: (header_module_default()).searchActive
    }), !search && /*#__PURE__*/jsx_runtime_.jsx((Search_default()), {
      className: (header_module_default()).searchIcon,
      onClick: showSearch,
      width: "25px"
    }), search && /*#__PURE__*/jsx_runtime_.jsx((Close_default()), {
      className: (header_module_default()).searchIcon,
      onClick: showSearch,
      width: "25px"
    })]
  });
}
// EXTERNAL MODULE: ./components/layout/footer.module.css
var footer_module = __webpack_require__(222);
var footer_module_default = /*#__PURE__*/__webpack_require__.n(footer_module);
;// CONCATENATED MODULE: ./components/layout/footer.js





function Footer() {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("footer", {
    children: [/*#__PURE__*/jsx_runtime_.jsx("hr", {
      className: (footer_module_default()).divider
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: (footer_module_default()).navigation,
      children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("section", {
        className: (footer_module_default()).links,
        children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: (footer_module_default()).pages,
          children: [/*#__PURE__*/jsx_runtime_.jsx("h3", {
            children: "Pages"
          }), /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
            href: "/home",
            children: /*#__PURE__*/jsx_runtime_.jsx("p", {
              className: (footer_module_default()).footerItem,
              children: "Home"
            })
          }), /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
            href: "/about",
            children: /*#__PURE__*/jsx_runtime_.jsx("p", {
              className: (footer_module_default()).footerItem,
              children: "About"
            })
          }), /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
            href: "/learn",
            children: /*#__PURE__*/jsx_runtime_.jsx("p", {
              className: (footer_module_default()).footerItem,
              children: "Learn"
            })
          })]
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: (footer_module_default()).socials,
          children: [/*#__PURE__*/jsx_runtime_.jsx("h3", {
            children: "Socials"
          }), /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
            href: "https://www.twitter.com/BeatlyMusic/",
            passHref: true,
            children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
              className: (footer_module_default()).socialLink,
              children: [/*#__PURE__*/jsx_runtime_.jsx(next_image.default, {
                src: "/social-media-icons/twitter.svg",
                alt: "Twitter icon",
                width: 20,
                height: 20
              }), /*#__PURE__*/jsx_runtime_.jsx("p", {
                children: "Twitter"
              })]
            })
          }), /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
            href: "https://www.instagram.com/beatly.music/",
            passHref: true,
            children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
              className: (footer_module_default()).socialLink,
              children: [/*#__PURE__*/jsx_runtime_.jsx(next_image.default, {
                src: "/social-media-icons/discord.svg",
                alt: "Discord icon",
                width: 20,
                height: 20
              }), /*#__PURE__*/jsx_runtime_.jsx("p", {
                children: "Discord"
              })]
            })
          })]
        })]
      }), /*#__PURE__*/jsx_runtime_.jsx("section", {
        className: (footer_module_default()).missionStatement,
        children: /*#__PURE__*/jsx_runtime_.jsx("p", {
          children: "Our mission is to provide a free, world-class education to anyone, anywhere."
        })
      })]
    }), /*#__PURE__*/jsx_runtime_.jsx("hr", {
      className: (footer_module_default()).dividerTwo
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("section", {
      className: (footer_module_default()).copyright,
      children: [/*#__PURE__*/jsx_runtime_.jsx(next_image.default, {
        src: "/images/logo/logo.png",
        alt: "Logo",
        width: 130,
        height: 37
      }), /*#__PURE__*/jsx_runtime_.jsx("h3", {
        children: "Copyright \xA9 2022"
      })]
    })]
  });
}
// EXTERNAL MODULE: ./components/layout/layout.module.css
var layout_module = __webpack_require__(2287);
var layout_module_default = /*#__PURE__*/__webpack_require__.n(layout_module);
;// CONCATENATED MODULE: ./components/layout/layout.js






function Layout(props) {
  // Create useState var for the page url
  const {
    0: pageURL,
    1: setPageURL
  } = (0,external_react_.useState)(); // Get href of page

  (0,external_react_.useEffect)(() => {
    setPageURL(window.location.href);
  });
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(external_react_.Fragment, {
    children: [/*#__PURE__*/jsx_runtime_.jsx("header", {
      className: (layout_module_default()).header,
      children: /*#__PURE__*/jsx_runtime_.jsx(Header, {})
    }, pageURL), /*#__PURE__*/jsx_runtime_.jsx("main", {
      className: (layout_module_default()).body,
      children: props.children
    }), /*#__PURE__*/jsx_runtime_.jsx(Footer, {
      className: (layout_module_default()).bottom
    })]
  });
}
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(701);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
;// CONCATENATED MODULE: ./pages/_app.js



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }








function MyApp({
  Component,
  pageProps
}) {
  const isProduction = true;

  if (isProduction) {
    const router = (0,router_.useRouter)();
    (0,external_react_.useEffect)(() => {
      const handleRouteChange = url => {
        gtag/* pageview */.LV(url);
      };

      router.events.on("routeChangeComplete", handleRouteChange);
      return () => {
        router.events.off("routeChangeComplete", handleRouteChange);
      };
    }, [router.events]);
  }

  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(Layout, {
    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)((head_default()), {
      children: [/*#__PURE__*/jsx_runtime_.jsx("meta", {
        name: "viewport",
        content: "initial-scale=1.0, width=device-width"
      }), /*#__PURE__*/jsx_runtime_.jsx("meta", {
        charSet: "UTF-8"
      }), /*#__PURE__*/jsx_runtime_.jsx("link", {
        rel: "apple-touch-icon",
        sizes: "180x180",
        href: "/favicons/apple-touch-icon.png"
      }), /*#__PURE__*/jsx_runtime_.jsx("link", {
        rel: "icon",
        type: "image/png",
        sizes: "32x32",
        href: "/favicons/favicon-32x32.png"
      }), /*#__PURE__*/jsx_runtime_.jsx("link", {
        rel: "icon",
        type: "image/png",
        sizes: "16x16",
        href: "/favicons/favicon-16x16.png"
      }), /*#__PURE__*/jsx_runtime_.jsx("link", {
        rel: "manifest",
        href: "/favicons/site.webmanifest"
      })]
    }), /*#__PURE__*/jsx_runtime_.jsx(Component, _objectSpread({}, pageProps))]
  });
}

/* harmony default export */ var _app = (MyApp);

/***/ }),

/***/ 2487:
/***/ (function(module) {

// Exports
module.exports = {
	"dropdown": "dropdown-menu_dropdown__1zbl_",
	"menuItem": "dropdown-menu_menuItem__2Voe2"
};


/***/ }),

/***/ 222:
/***/ (function(module) {

// Exports
module.exports = {
	"divider": "footer_divider__3A1O5",
	"navigation": "footer_navigation__ywExa",
	"links": "footer_links__2cXD6",
	"pages": "footer_pages__DQenm",
	"socialLink": "footer_socialLink__2H3wt",
	"missionStatement": "footer_missionStatement__1EaOl",
	"dividerTwo": "footer_dividerTwo__3sxpx",
	"copyright": "footer_copyright__9AvTB"
};


/***/ }),

/***/ 4005:
/***/ (function(module) {

// Exports
module.exports = {
	"navbar": "header_navbar__IFxB8",
	"menuIcon": "header_menuIcon__iadHR",
	"logo": "header_logo__quFtT",
	"searchIcon": "header_searchIcon__1xa8N",
	"navlinksMobile": "header_navlinksMobile__WMcqP",
	"navlinksDesktop": "header_navlinksDesktop__11DMY",
	"searchDesktop": "header_searchDesktop__15RhC",
	"logoIcon": "header_logoIcon__hu6sG"
};


/***/ }),

/***/ 2287:
/***/ (function(module) {

// Exports
module.exports = {
	"body": "layout_body__2IZRo",
	"bottom": "layout_bottom__2fQaZ",
	"header": "layout_header__1vGpu",
	"container": "layout_container__2yT5o"
};


/***/ }),

/***/ 7426:
/***/ (function(module) {

// Exports
module.exports = {
	"menuItems": "menu_menuItems__3qh4Y",
	"navigation": "menu_navigation__mUtor",
	"icon": "menu_icon__yQe9J"
};


/***/ }),

/***/ 3062:
/***/ (function(module) {

// Exports
module.exports = {
	"navItem": "nav-item_navItem__1yQfm"
};


/***/ }),

/***/ 7570:
/***/ (function(module) {

// Exports
module.exports = {
	"searchBar": "search-bar_searchBar__35HuN",
	"icon": "search-bar_icon__3uUdj"
};


/***/ }),

/***/ 6811:
/***/ (function(module) {

// Exports
module.exports = {
	"list": "search-list_list__3TH6I"
};


/***/ }),

/***/ 7129:
/***/ (function(module) {

// Exports
module.exports = {
	"albumRow": "search-row_albumRow__2Y1de",
	"text": "search-row_text__cW5rS",
	"albumCover": "search-row_albumCover__Uk6D4",
	"fullRow": "search-row_fullRow__3l7Nh"
};


/***/ }),

/***/ 5273:
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/head.js");;

/***/ }),

/***/ 8417:
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/router-context.js");;

/***/ }),

/***/ 2238:
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/router/utils/get-asset-path-from-route.js");;

/***/ }),

/***/ 5519:
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/to-base-64.js");;

/***/ }),

/***/ 444:
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/server/image-config.js");;

/***/ }),

/***/ 701:
/***/ (function(module) {

"use strict";
module.exports = require("next/head");;

/***/ }),

/***/ 6731:
/***/ (function(module) {

"use strict";
module.exports = require("next/router");;

/***/ }),

/***/ 9297:
/***/ (function(module) {

"use strict";
module.exports = require("react");;

/***/ }),

/***/ 5282:
/***/ (function(module) {

"use strict";
module.exports = require("react/jsx-runtime");;

/***/ }),

/***/ 4453:
/***/ (function() {

/* (ignored) */

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = __webpack_require__.X(0, [943,675,664], function() { return __webpack_exec__(7882); });
module.exports = __webpack_exports__;

})();