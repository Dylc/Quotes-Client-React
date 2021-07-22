**Table of Contents**

- [Run](#run)
- [Build](#build)
- [Serve](#serve)
  - [Own Server](#own-server)

#Quotes app

## Run

To run locally you need to configure path to backend server in the `src/app/axios.ts` folder and run `npm install && npm start`

## Build

Run `npm run build` to create build dir in the root of the project that will create staic files
See more [here](https://create-react-app.dev/docs/deployment/#static-server "here")

I was have to added `"homepage": "./",` to the project.json. See more [here](https://create-react-app.dev/docs/deployment/#serving-the-same-build-from-different-paths "here")

## Serve

There are a couple of options in the create-react-app deployemnt page [section](https://create-react-app.dev/docs/deployment/#serving-the-same-build-from-different-paths "section").

### Own Server

If you prefer server files on you own server use the following commands

1. Create tar `tar -cvf build.tar ./build`
2. Copy to your server `scp ./build.tar <username>@<serverIP>:<fullPath>`
3. Enter to your server and cd to path
4. Unarchive `tar -xvf build.tar `
5. For nginx see [this](https://futurestud.io/tutorials/nginx-how-to-serve-a-static-html-page#:~:text=To%20serve%20static%20files%20with,which%20contains%20all%20the%20files. "this") tutorial how to server statyic files
