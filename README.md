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
