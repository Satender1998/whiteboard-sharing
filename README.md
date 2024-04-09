# Real-Time Collaborative Whiteboard

This is a real-time collaborative whiteboard application built using React, Node.js, Express, and Socket.IO. Users can create a new whiteboard session or join an existing one. The whiteboard supports drawing using different colors and brush sizes, with the ability to undo/redo the last action. Users can see the cursors of other connected users moving in real-time, indicating their drawing actions. Additionally, users can collaborate through live chat while drawing on the whiteboard.

## Table of Contents

1. [Whiteboard Sharing - Real-Time Collaborative Whiteboard](#whiteboard-sharing---real-time-collaborative-whiteboard)
   - 1.1. [Deployed Link](#deployed-link)
2. [Summary](#summary)
   - 2.1. [Features](#features)
3. [Technologies Used](#technologies-used)
   - 3.1. [Frontend](#frontend)
   - 3.2. [Backend](#backend)
   - 3.3. [Deployment Technology](#deployment-technology)
4. [Setting Up the Application](#setting-up-the-application)
   - 4.1. [Prerequisites](#prerequisites)
   - 4.2. [Steps to Run Locally](#steps-to-run-locally)
5. [Summary](#summary)
   - 5.1. [Features](#features)

## Technologies Used

### Frontend

- **React**: JavaScript library for building user interfaces.

### Backend

- **Node.js**: JavaScript runtime for server-side development.
- **Express**: Fast, unopinionated, minimalist web framework for Node.js.
- **Socket.IO**: Real-time bidirectional event-based communication library.

## Setting Up the Application

### Prerequisites

- Node.js installed on your machine.

### Steps to Run Locally

1. **Clone the Repository**

   ```bash
   git clone https://github.com/Satender1998/whiteboard-sharing.git
   ```

2. **Move to Folder**
   ```bash
   cd frontend
   ```
3. **Install Dependencies**

   ```bash
   yarn install

   ```

4. **Run the Project**

   ```bash
   yarn dev
   ```

The project will now be running locally on http://localhost:5173.

1. **For Backend**

2. **Move to folder**

   ```bash
   cd backend

   ```

3. **Install Dependencies**

   ```bash
   yarn install

   ```

4. **Run the Project**

   ```bash
   yarn dev
   ```

The project will now be running locally on http://localhost:5000.

## Summary

This is a real-time collaborative whiteboard application where users can create a new whiteboard session or join an existing one. The whiteboard supports drawing using different colors and brush sizes, with the ability to undo/redo the last action. Users can see the cursors of other connected users moving in real-time, indicating their drawing actions. Additionally, users can collaborate through live chat while drawing on the whiteboard.

### Features:

1. **Real-Time Collaboration**
   Create or join whiteboard sessions.
   Draw using different colors and brush sizes.
   Undo/redo the last action.
   See other users' cursors moving in real-time.
   Collaborate through live chat.
