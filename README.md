Creating a React Component Library to better learn react, styling in react and typescript.

Following this tutorial: https://dev.to/alexeagleson/how-to-create-and-publish-a-react-component-library-2oe

Additions from this tutorial: https://github.com/HarveyD/react-component-library (Adding scss variables and exporting them to make them available to projects consuming the library. Adding a node util file to generate new components.)

---

Easily add new components with: npm run create-component ComponentName

---

Publish library with: npm publish

---

Variables and typography can be used in projects consuming the library by adding this import to scss files:

@import "~@03gibbss/my-component-library/dist/variables";

@import "~@03gibbss/my-component-library/dist/typography";
