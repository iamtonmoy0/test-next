create next app command:

```
yarn create next-app
```

There are basically 2 types of rendering .

1. Server side (SSR)
2. Client side (CSR) #like typical react app

Route:---
for creating route all we have to create an folder in the app directory and inside the folder we have to create page.js file and made it a component .
the page.js file should be lowercase in letter and export name depends on the use case

Nested Route:----
in nested route you need to make a folder into the page director and make a js file called page.js and the folder name should be lowercase and the word should be separated by minus(-) not use space .

Example:

```
/dashboard
  |----/add-product
  |      |-page.js
  |-----page.js
```

Dynamic Layout:----
To create dynamic layout we need to create a new layout.js file into the page folder . and define the children as props.
then it will show the layout int the specific route.

Catch All Route:---
[id] ---dynamic route
[...segment] ---catch all route
[[...segment]]----route with previous segment


------0-------
