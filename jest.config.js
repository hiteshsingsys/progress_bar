module.exports = {
  preset: '@vue/cli-plugin-unit-jest',
  "moduleFileExtensions": [
      "js",
      "json",
      // tell Jest to handle `*.vue` files
      "vue"
    ],
    "transform": {
      // process `*.vue` files with `vue-jest`
      ".*\\.(vue)$": "vue-jest",
      "^.+\\.(js|jsx|vue)$": "babel-jest"
    },
    "moduleNameMapper": {
      "^@/(.*)$": "<rootDir>/src/$1"
    },
    "transformIgnorePatterns": ["/node_modules/(?!(gsap)/)"],
    "collectCoverage": true,
    "collectCoverageFrom": ["<rootDir>/src/views/**/*.{js,vue}", "<rootDir>/src/components/**/*.{js,vue}", "!**/node_modules/**"],
     "coverageReporters": ["html", "text-summary"]
}
