# node-chat


This script implements a simple chat system using Node. The chat system is built on top of open source code at: https://github.com/tutsplus/nodejs-websockets-chat-service.
The code given by tutsplus seems to be not fully functional at the moment, and I had to make some quick changes to make it functional. Thus I'm presenting the modified version.


## Requirements


1. Node.js 
2. Express 3) 
3. Socket.io 
4. ejs

Note: Express is required to create a server Socket.io is required to send chat messages ejs is a template system that helps in rendering html templates.

## Installation


1. First install the node.js distribution for your operating system.

2. Once Node is installed, you can use npm (node package manager) to install the remaining dependencies. Open a command prompt and run the following commands:

⋅⋅* npm install express 
⋅⋅* npm install socket.i
⋅⋅* npm install ejs

3. Open a command window inside the 'chat' directory and type "node server.js". This will run the server on port 1200 of localhost. You can change the port from line 3 of server.js

4. Open a browser window and navigate to http://127.0.0.1:1200/

5. Set your name for chat

6. Open another browser window at http://127.0.0.1:1200/ and set your name

7. Send messages. You will be able to see messages across the two browser windows.


