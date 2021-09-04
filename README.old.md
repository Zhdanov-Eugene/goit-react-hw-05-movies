# goit-react-hw-05-movies

npx create-react-app . --use-npm
npm install react-router-dom
npm install --save-dev netlify-cli
npx netlify init
----------------------------------------------------------------------------------------------------------

 user@zhdanov-11-07-21 MINGW64 /c/Projects/goit-react-hw-05-movies (main)
$ npx netlify init
Logging into your Netlify account...
Opening https://app.netlify.com/authorize?response_type=ticket&ticket=9051caddb4ddabfde9414a9651fdb81d

To see all available commands run: netlify help

? What would you like to do? +  Create & configure a new site
? Team: Zhdanov-Eugene's team
Choose a unique site name (e.g. the-awesome-Zhdanov-Eugene-site.netlify.app) or leave it blank for a random name. You can update the site name later.
? Site name (optional): 11222112ze

Site Created

Admin URL: https://app.netlify.com/sites/11222112ze
URL:       https://11222112ze.netlify.app
Site ID:   0336708b-01c3-4c8d-b253-c7f5099ded68

? Netlify CLI needs access to your GitHub account to configure Webhooks and Deploy Keys. What would you like to do? Authorize with GitHub through app.netlify.com
? Your build command (hugo build/yarn run build/etc): react-scripts build
? Directory to deploy (blank for current dir): build
? Netlify functions folder: netlify/functions
Adding deploy key to repository...
Deploy key added!

Creating Netlify GitHub Notification Hooks...
Netlify Notification Hooks configured!

Success! Netlify CI/CD Configured!

This site is now configured to automatically deploy from github branches & pull requests

Next steps:

  git push       Push to your git repository to trigger new site builds
  netlify open   Open the Netlify admin URL of your site
----------------------------------------------------------------------------------------------------------------
npm install --save husky lint-staged prettier
npm install --save-dev prettier eslint

adds fieles .huskyrc
{ "hooks": { "pre-commit": "lint-staged" } }


adds fieles .lintstagedrc
 { "src//.{json,css,scss,md}": ["prettier --write"],
"src//.{js,jsx,ts,tsx}": ["prettier --write", "eslint --fix"] }

npm install --save gh-pages

"scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test",
    "eject": "react-scripts eject",
    "prepare": "husky install",
    "predeploy": "npm run build",
    "deploy": "netlify deploy -p"
  },

"\*.{js,css,md}": "prettier --write"

npm install --save-dev prop-types
npm install --save-dev eslint
npx mrm@2 lint-staged

.prettierrc.json 
{ "printWidth": 80, "tabWidth": 2, "useTabs": false, "semi":
true, "singleQuote": true, "trailingComma": "all", "bracketSpacing": true,
"jsxBracketSameLine": false, "arrowParens": "avoid", "proseWrap": "always" }

в настройках искать codeActionsOnSave и вставить "editor.codeActionsOnSave": {
"source.fixAll.eslint": true }

npm install node-sass --save
npm i react-loader-spinner

npm install netlify-cli -g
 or -save 
 or npm install netlify-cli --save-dev
netlify login

netlify.toml
 [build] publish = "build"
[[redirects]] from = "/\*" to = "/index.html" status = 200

npm install modern-normalize
@import 'node_modules/modern-normalize/modern-normalize.css';

git status- какие изменения произошли

npm run start

work

npm run build
npm run deploy
Published :)

git add \*
git commit -m "Commit message"
git push origin main

https://create-react-app.dev/docs/deployment/#step-2-install-gh-pages-and-add-deploy-to-scripts-in-packagejson
