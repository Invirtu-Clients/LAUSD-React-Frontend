

# Glitch Gaming Platform React Frontend
##### Powered By Invirtu

This repository holds the frontend code for the Glitch Gaming Platform, which is written in Javascript and React. The Glitch Gaming Platform is an open-source project to help people easily create their own esports and live streaming websites.

## Understanding the Basics

### React
React is a frontend framework for building interfaces for websites. It takes a declarative and functional approach by breaking the app up into reusable components. React is just a frontend tool and should be accompanied by a backend.

#### Invirtu/BingeWave

Invirtu is a Live Media as a Service platform for developing live streaming, video conferencing, audio conferencing, and AR apps through no-code and low-code. It will handle all of the live-streaming components in Glitch.

## Backend
If you have not already setup your backend, you can create a backend here: [https://github.com/Glitch-Gaming-Platform/Glitch-PHP-Backend](https://github.com/Glitch-Gaming-Platform/Glitch-PHP-Backend)

It is recommended to get the backend working first and your React application will require the backend to function properly.

## Installing Locally
To install locally and run, you will require the following:

 1. Node to be installed on you computer
 2. Knowledge of basic command line
 3. A working backend for React to connect with

To start, on your command line, clone the repo to your local computer.

    git clone https://github.com/Glitch-Gaming-Platform/Glitch-React-Frontend.git

Go into the cloned folder and copy the sample .env.local file to .env as such:

    cd glitch-react-frontend
    cp .env.local .env

Now we need to install all the required packages for the application. Run the following on the command line:

    npm install

With the packages installed, you can now boot up React with the following command:

    npm start

Your React application will boot up, and you will be able to connect with your backend. 

## Getting Your First Livestream Working

With both your backend and frontend setup, the next step is to get your first live stream working. Start by:
1. Registering for an account
2. Connect Twitch, Facebook, and Youtube if you want multi-stream
3. Create a Live Stream
4. Prepare to broadcast your game to others

Depending on your console, the complicated part might be streaming your gaming sessions. To live stream, you will have to share your screen, and different consoles have different approaches to screen sharing.

### Playstation



## License

  The project is open-sourced software licensed under the [MIT license](https://opensource.org/licenses/MIT).