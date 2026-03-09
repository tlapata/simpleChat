# Simple Chat (Node.js + React + WebSockets)

A lightweight real-time chat application built with **Node.js, React, and WebSockets**.
It demonstrates a basic client–server architecture where multiple users can connect and exchange messages instantly.

---

## Features

* Real-time messaging using **WebSockets**
* **React** frontend interface
* **Node.js** backend server
* Multiple clients can connect simultaneously
* Lightweight and easy to run locally

---

## Tech Stack

* **Node.js**
* **WebSockets (ws)**
* **React**
* **JavaScript**

---

## Project Structure

```
server/
  server.js

client/
  src/
  package.json
```

---

## Installation

### 1. Clone the repository

```bash
git clone <repo-url>
cd simple-chat
```

### 2. Install server dependencies

```bash
cd server
npm install
```

### 3. Install client dependencies

```bash
cd ../client
npm install
```

---

## Running the Application

### Start the WebSocket server

```bash
cd server
node server.js
```

### Start the React client

```bash
cd client
npm start
```

The app should now be available in your browser.

---

## How It Works

1. The **Node.js server** creates a WebSocket server.
2. The **React client** connects to the WebSocket endpoint.
3. When a user sends a message:

   * It is sent to the server
   * The server **broadcasts the message to all connected clients**
4. All users see the message instantly.

---

## Possible Improvements

* Usernames / authentication
* Chat rooms
* Message persistence (database)
* Message timestamps
* Typing indicators
* Better UI styling
