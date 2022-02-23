(function() {
var exports = {};
exports.id = 355;
exports.ids = [355];
exports.modules = {

/***/ 9621:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ CoursePage; },
  "getStaticPaths": function() { return /* binding */ getStaticPaths; },
  "getStaticProps": function() { return /* binding */ getStaticProps; }
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(701);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
// EXTERNAL MODULE: ./components/header/course.module.css
var course_module = __webpack_require__(7638);
var course_module_default = /*#__PURE__*/__webpack_require__.n(course_module);
;// CONCATENATED MODULE: ./components/header/course.js




function CourseHeader({
  cover,
  title,
  description,
  lessons
}) {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("main", {
    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: (course_module_default()).coursePreview,
      children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("section", {
        className: (course_module_default()).cover,
        children: [/*#__PURE__*/jsx_runtime_.jsx("img", {
          src: cover
        }), /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: (course_module_default()).playBtn,
          children: /*#__PURE__*/jsx_runtime_.jsx(next_image.default, {
            src: "/play.svg",
            width: 45,
            height: 45
          })
        })]
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("section", {
        className: (course_module_default()).text,
        children: [/*#__PURE__*/jsx_runtime_.jsx("h2", {
          children: title
        }), /*#__PURE__*/jsx_runtime_.jsx("h5", {
          children: `${lessons.length} sections - 3 hours of videos`
        }), /*#__PURE__*/jsx_runtime_.jsx("p", {
          children: description
        })]
      })]
    }), /*#__PURE__*/jsx_runtime_.jsx("hr", {
      className: (course_module_default()).divider
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: (course_module_default()).lessons,
      children: [/*#__PURE__*/jsx_runtime_.jsx("h5", {
        children: `${lessons.length} lessons`
      }), /*#__PURE__*/jsx_runtime_.jsx("p", {
        children: "All techniques are explained step-by-step, in a beginner-friendly format so that you can easily follow in a cohesive way."
      })]
    })]
  });
}
// EXTERNAL MODULE: ./components/course/lesson-row.module.css
var lesson_row_module = __webpack_require__(9821);
var lesson_row_module_default = /*#__PURE__*/__webpack_require__.n(lesson_row_module);
;// CONCATENATED MODULE: ./components/course/lesson-row.js



function LessonRow({
  index,
  lesson
}) {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    className: (lesson_row_module_default()).container,
    children: [/*#__PURE__*/jsx_runtime_.jsx("section", {
      className: (lesson_row_module_default()).circle,
      children: /*#__PURE__*/jsx_runtime_.jsx("p", {
        className: (lesson_row_module_default()).inner,
        children: index + 1
      })
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("section", {
      className: (lesson_row_module_default()).text,
      children: [/*#__PURE__*/jsx_runtime_.jsx("h5", {
        children: lesson.title
      }), /*#__PURE__*/jsx_runtime_.jsx("p", {
        children: lesson.description
      })]
    }), /*#__PURE__*/jsx_runtime_.jsx("section", {
      className: (lesson_row_module_default()).timeBackground,
      children: /*#__PURE__*/jsx_runtime_.jsx("p", {
        className: (lesson_row_module_default()).length,
        children: lesson.length
      })
    })]
  });
}
// EXTERNAL MODULE: ./components/course/lessons-container.module.css
var lessons_container_module = __webpack_require__(4977);
var lessons_container_module_default = /*#__PURE__*/__webpack_require__.n(lessons_container_module);
;// CONCATENATED MODULE: ./components/course/lessons-container.js




function LessonsContainer({
  lessons
}) {
  const half = Math.ceil(lessons.length / 2);
  const firstHalf = lessons.slice(0, half);
  const secondHalf = lessons.slice(-half);
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    className: (lessons_container_module_default()).container,
    children: [/*#__PURE__*/jsx_runtime_.jsx("section", {
      children: firstHalf.map((lesson, index) => {
        return /*#__PURE__*/jsx_runtime_.jsx(LessonRow, {
          index: index,
          lesson: lesson
        }, lesson.id);
      })
    }), /*#__PURE__*/jsx_runtime_.jsx("section", {
      children: secondHalf.map((lesson, index) => {
        return /*#__PURE__*/jsx_runtime_.jsx(LessonRow, {
          index: index + half,
          lesson: lesson
        }, lesson.id);
      })
    })]
  });
}
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(6731);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
;// CONCATENATED MODULE: ./pages/courses/[slug].js







function CoursePage({
  course
}) {
  const router = (0,router_.useRouter)();

  if (router.isFallback) {
    return /*#__PURE__*/jsx_runtime_.jsx("div", {
      children: "Loading..."
    });
  }

  const sampleDescription = `Welcome to our course on ${course}. In this course we'll start off with a basic intro to the subject and then dive into harder more complex problems at the end. With this course, we'll take you from zero to hero in only a couple hours.`;
  const sampleLessons = [{
    id: 1,
    title: "Lesson 1",
    description: "Dive into the subject",
    length: "10:45"
  }, {
    id: 2,
    title: "Lesson 2",
    description: "In depth graphing",
    length: "9:55"
  }, {
    id: 3,
    title: "Lesson 3",
    description: "Complex math problems",
    length: "12:20"
  }, {
    id: 4,
    title: "Lesson 4",
    description: "Wrapping up the course",
    length: "14:40"
  }];
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(external_react_.Fragment, {
    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)((head_default()), {
      children: [/*#__PURE__*/jsx_runtime_.jsx("title", {
        children: "Leap Education | Math Course"
      }), /*#__PURE__*/jsx_runtime_.jsx("meta", {
        name: "description",
        content: "Learn college level math"
      })]
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      children: [/*#__PURE__*/jsx_runtime_.jsx(CourseHeader, {
        cover: "/images/covers/math.png",
        title: course,
        description: sampleDescription,
        lessons: sampleLessons
      }), /*#__PURE__*/jsx_runtime_.jsx(LessonsContainer, {
        lessons: sampleLessons
      })]
    })]
  });
} // This function gets called at build time

async function getStaticPaths() {
  return {
    paths: [{
      params: {
        slug: "Calculus 1"
      }
    }, {
      params: {
        slug: "Calculus 2"
      }
    }, {
      params: {
        slug: "Calculus 3"
      }
    }, {
      params: {
        slug: "MGT 100"
      }
    }],
    // Enable statically generating additional pages
    // For example: `/posts/3`
    fallback: true
  };
}
async function getStaticProps({
  params
}) {
  const slug = params.slug;
  const formattedCourse = (slug.charAt(0).toUpperCase() + slug.slice(1)).replace("-", " ");
  return {
    props: {
      course: formattedCourse
    },
    // revalidate every hour
    revalidate: 86400
  };
}

/***/ }),

/***/ 9821:
/***/ (function(module) {

// Exports
module.exports = {
	"container": "lesson-row_container__1hxZk",
	"circle": "lesson-row_circle__3b3_5",
	"inner": "lesson-row_inner__1uV5k",
	"text": "lesson-row_text__3F4TZ",
	"timeBackground": "lesson-row_timeBackground__3o-Fs",
	"length": "lesson-row_length__2fOpe"
};


/***/ }),

/***/ 4977:
/***/ (function(module) {

// Exports
module.exports = {
	"container": "lessons-container_container__1klzm"
};


/***/ }),

/***/ 7638:
/***/ (function(module) {

// Exports
module.exports = {
	"coursePreview": "course_coursePreview__C6gUE",
	"lessons": "course_lessons__3gK2F",
	"text": "course_text__1m8Hg",
	"divider": "course_divider__uWyf3",
	"cover": "course_cover__50BOt",
	"playBtn": "course_playBtn__3QUtI"
};


/***/ }),

/***/ 5273:
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/head.js");;

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

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = __webpack_require__.X(0, [943,675], function() { return __webpack_exec__(9621); });
module.exports = __webpack_exports__;

})();