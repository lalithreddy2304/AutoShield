# AutoShield

AutoShield is a Chrome extension designed to protect users from phishing and scam websites in real time by intervening at the moment of risky actions.

---

## Problem

Most online scams do not happen because detection tools are missing.  
They happen because users act quickly — clicking on payment links, logging in, or entering sensitive information on websites that appear legitimate.

Existing solutions are largely passive:
- They warn too late  
- They depend on users to manually verify websites  
- They fail at the most critical moment — when the user takes action  

---

## Solution

AutoShield focuses on real-time intervention instead of passive detection.

It runs directly inside the browser and monitors user interactions.  
When a sensitive action is triggered, it evaluates the environment and determines whether it is safe or potentially harmful.

---

## How It Works

1. The extension runs in the background on all websites  
2. It listens for sensitive actions such as:
   - Payment clicks  
   - Login attempts  
   - Form submissions  

3. When triggered, it evaluates:
   - Domain trust  
   - URL patterns  
   - Interaction context  

### Safe Environment
- Allows the action without interruption  
- Displays a subtle confirmation: "Secure Site Verified"  

### Suspicious Environment
- Blocks the action  
- Displays a warning popup  
- Explains why the environment may be unsafe  

---

## Key Idea

Prevent scams at the moment they happen, not after.

---

## Tech Stack

- HTML  
- CSS  
- JavaScript  
- Chrome Extensions API  

---

## How to Run

1. Clone this repository  
2. Open Chrome and navigate to:
   chrome://extensions/  

3. Enable Developer Mode  
4. Click "Load Unpacked"  
5. Select the project folder  

---

## Features

- Real-time scam detection  
- Non-intrusive experience on trusted websites  
- Immediate intervention on suspicious actions  
- Clear explanation of potential risks  
- Lightweight and fast  

---
