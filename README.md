# Global Payment App

This app is designed to make payments easily accessible worldwide, including for individuals without smartphones or internet access. Users can transfer money across borders, generate QR codes for payments or withdrawals, and use USSD to access their funds. The app leverages the **Interledger Open Payments API** and **TigerBeetle** for seamless transaction handling. It is built with **React** on the frontend and **Node.js** (Express) on the backend.

---

## Table of Contents
1. [Features](#features)
2. [Tech Stack](#tech-stack)
3. [Installation](#installation)
4. [Usage](#usage)
5. [API Endpoints](#api-endpoints)
6. [Environment Variables](#environment-variables)
7. [Development](#development)
8. [FAQ](#faq)

---

## Features

- **Global Payments:** Users can transfer funds across countries.
- **QR Code Transactions:** Users can generate QR codes to buy items or withdraw money at participating stores.
- **USSD Support:** Individuals without internet access or smartphones can manage their funds via USSD codes.
- **Store Withdrawals:** Recipients can withdraw funds at local stores in their region.

---

## Tech Stack

- **Frontend:** React
- **Backend:** Node.js, Express.js
- **Payments API:** Interledger Open Payments API
- **Database & Ledger:** TigerBeetle
- **USSD:** Integration for non-smartphone users

---

## Installation

### Prerequisites

Make sure you have the following installed:

- **Node.js** (v16.x or later)
- **NPM** (v7.x or later)
- **Nodemon** (for backend development)
- **TigerBeetle** (for payment ledger)
- **React** (for frontend development)

### Clone the repository
```bash
git clone https://github.com/interledger_hack.git
cd interledger_hack

Install dependencies for the backend

Navigate to the backend directory:

cd back_end
npm install

Install dependencies for the frontend

Navigate to the frontend directory:

cd front_end
npm install

	Note: The node_modules folder is not included in the repository, so you will need to run npm install to download dependencies.

Usage

Backend (Express + Node.js)

Start the backend server with Nodemon:

cd backend
npm run start

This will run the backend server and watch for any changes using Nodemon.

Frontend (React)

Start the frontend server:

cd frontend
npm run dev

Now, your React frontend will run on localhost:5173, and the backend on localhost:3000.

Environment Variables

Create a .env file in the backend directory with the following:

# Open Payments API
OPEN_PAYMENTS_API_KEY=your-open-payments-api-key
OPEN_PAYMENTS_API_URL=https://lip.interledger-test.dev/your-account
OPEN_PAYMENTS_API_KEY_ID=your-open-payments-api-key-id


Development

Running the Backend Server

To run the backend in development mode with Nodemon, use:

npm run start

Running the Frontend Server

To run the frontend in development mode:

npm run dev

Both servers will automatically reload when you make changes.


How do users without smartphones or internet access access their funds?

Users without smartphones or internet access can use USSD codes to interact with their accounts. They will be able to check their balance, withdraw money, and transfer funds through their mobile carrier’s USSD system.

How does the QR code feature work?

Users can generate a QR code linked to their account, which can be used for:

	•	In-store purchases.
	•	Withdrawals at stores that support the app.

