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


## Using-Chromatic

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
                                            






