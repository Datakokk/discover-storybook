# Getting Started with Storybook

Create project, you can run:

### `npx create-react-app my-project`
    npx create-react-app my-storybook –template=typescript

### `Remove react-scripts`
    yarn remove react-scripts

### `Delete the public folder`
    
### `we delete all the src files except the index.tsx`

### `we leave the indes.tsx file like this`
     export { Button } from './stories/Button'; //We do this for to avoid the react error

## Install Storybook
    
    npx storybook init

### `we leave the script part of the package.json file like this`

    "scripts": {
    "start": "start-storybook -p 6006",
    "build": "build-storybook",
    "storybook": "start-storybook -p 6006",
    "build-storybook": "build-storybook"
    }

### `we leave the script part of the package.json file like this`

    Remove:

    yarn remove @storybook/builder-webpack4

    yarn remove @storybook/manager-webpack4

    install:

    npm i @storybook/manager-webpack5

    npm i @storybook/builder-webpack5

    yarn add @mdx-js/react


    modify the config file:  ./storybook/main.js

    module.exports = {
      core: {
        builder: 'webpack5',
      },
    };


   Add to package.json:
   "resolutions": {
 	"@storybook/react-docgen-typescript-plugin": "npm:react-docgen-typescript-plugin@1.0.2"
   }

   Run yarn
   
    Fixed, storybook runs without deprecation warnings from the plugin
### `build storybook`

    yarn build //I changed the package.json file

### `OPTIONAL install 'http-server: a simple static HTTP server'`
    
    https://www.npmjs.com/package/http-server

    sudo npm install --global http-server

    We enter the folder created with build and executing the following command

    http-server -o

### `OPTIONAL install 'http-server: a simple static HTTP server'`
    
    https://www.netlify.com/

    sudo npm install --global http-server

    We enter the folder created with build and executing the following command

    http-server -o# myComponents-sb

## Deploy-storybook

    We use yarn build because we have configured package.json otherwise we must to use yarn build-storybook

    yarn build

### Deploy-storybook with Github

    In the .gitignore file add /storybook-static
    Rename storybook-static to docs

    1) To deploy docs in github pages we go to settings
    
    2) click en pages

    3) In source we leave "deploy from a branch"

    4) In branch select main an then the docs folder and click in "save"

    5) Refresh the page and ready

    6)  https://datakokk.github.io/discover-storybook/

## Github Actions + Semantic Versating + Automatic Npm Deploy + Storybook

### Modify the package.json like this:
    {
        "name": "cfcg-discover-storybook", 
        "version": "0.1.0",
        "private": false,
        "license": "MIT",
        "typings": "dist/index.js",
        "main": "dist/index.js",
        "homepage": "",
        "repository": {
          "url": "https://github.com/Datakokk/discover-storybook",
          "type": "git"
        },
        "release": {
          "branches": [
              "main"
          ]
        },
        "files": [
          "dist",
          "src"
        ],
        "dependencies": {
            ...........
    }

### Modify the TSConfig.json like this:
    It's important to install typescript in a global form.

    sudo apt install node-typescript

    check it with this command:

    tsc --version

    then modigy the TSConfig.json

    {
      "compilerOptions": {
        "outDir": "dist",
        "target": "es5",
        "lib": [
          "dom",
          "dom.iterable",
          "esnext"
        ],
        "declaration": true,
        "allowJs": true,
        "skipLibCheck": true,
        "esModuleInterop": true,
        "allowSyntheticDefaultImports": true,
        "strict": true,
        "forceConsistentCasingInFileNames": true,
        "noFallthroughCasesInSwitch": true,
        "module": "esnext",
        "moduleResolution": "node",
        "resolveJsonModule": true,
        "isolatedModules": true,
        "noEmit": false,
        "jsx": "react-jsx"
      },
      "include": [
        "src"
      ]
    }

### Run tsc command:   

    tsc 

    if we have feils, we must to check *.tsx and addes export to interfaces, delete the dist folder from our app, we must add all components in the index.tsx
    and run again tsc.

    tsc

### rimraf package:
    Ever time we need to create a dist folder its important to delete the old dist folder because typescript don't make it.
    this is the razon we will install this package

    https://www.npmjs.com/package/rimraf

    yarn add -D rimraf

### copyfiles package:
    Typescript only add files .tsx and .ts this is the razon we will to install copyfiles package, because we nees to copy files like .css .......

    https://www.npmjs.com/package/copyfiles

    yarn add -D copyfiles

### mofify scripts in package.json:
    We made this because we need to use they two packages we have installed

    "scripts": {
      "start": "start-storybook -p 6006",
      "build": "yarn clean && tsc && yarn copy-files", we run three commands
      "storybook": "start-storybook -p 6006",
      "build-storybook": "build-storybook",
      "chromatic": "npx chromatic --project-token=96fe6bd43a7b",
      "clean": "rimraf dist/", /** delete the dist folder */
      "copy-files": "copyfiles -u 1 src/**/*.css dist/" /** copy the css files inside of the dist folder */
    }

### add peerDependencies in package.json:
    When we added this dependences we oblige the person who has these dependencies installed on their machine

### Automatic Semantic versioning
    https://www.npmjs.com/package/semantic-release

    yarn add -D semantic-release

    then we add this to the package.json:

    "plugins": [
        "@semantic-release/commit-analyzer",
        "@semantic-release/release-notes-generator",
        "@semantic-release/changelog",
        "@semantic-release/github",
        "@semantic-release/npm",
        "@semantic-release/git"
    ],

    git add .
    git commit -m "feat: semantic-version added" // this semantic is very important.

    those is the semantic we must to use(Read documentation)
    ====================================
    Commit message	                                                            | Release type
    fix(pencil): stop graphite breaking when too much pressure applied	        | Patch Fix Release
    feat(pencil): add 'graphiteWidth' option	                                  | Minor Feature Release
    perf(pencil): remove graphiteWidth option
                                                                                |
    BREAKING CHANGE: The graphiteWidth option has been removed.                 |
    The default graphite width of 10mm is always used for performance reasons.	| Major Breaking Release
    (Note that the BREAKING CHANGE: token must be in the footer of the commit)

### Generate Token github
    In Github we generated a token y we give acces to the repo for 90 days

    In NPM we create a new token or something it must be PUBLISH 

    In our repository in Github click in settings scroll below in the left menu to fine SECRETS click in actions then click in NEW repository secret
    put the name and the token we have creted before and click in add.

    The same process with the npm_token created before we will add this token a github



## Using-Chromatic( optional )

    https://www.chromatic.com/

    1) Sign up with github account

    2) Choose a project from github

    3) Select discover storybook

    4) Run the next to commands:

        a) Get the Chromatic package:

            yarn add --dev chromatic

        b) Publish your Storybook

            npx chromatic --project-token=xxxxxxxxxxxx

    5) If we need to deploy again we use this command:

        yarn chromatic 

            or
        
        npm run chromatic
                                            






