# 📨 Delayed Message Sender App

A simple yet practical React + TypeScript app that lets users schedule a message to be sent after a delay — with an option to cancel before it goes out.

This project is part of the **30 Apps in 30 Days Challenge** by [@codejavid](https://linkedin.com/in/codejavid), Founder of [StozAcademy](https://www.youtube.com/@stozacademy).

---

## ✨ Features

- Type a message and specify a delay time
- Message is sent after the delay using `setTimeout()`
- Cancel the message before it's sent with `clearTimeout()`
- Real-world UX design with "Undo" logic
- Clean, responsive UI with TailwindCSS and ShadCN
- Works smoothly on both desktop and mobile

---

## 🧠 What I Learned

- How `setTimeout()` and `clearTimeout()` work in React
- Using `useState` for dynamic delay, message, and timer logic
- Conditional rendering: toggling between "Send" and "Cancel"
- Thoughtful UI building using **TailwindCSS + ShadCN UI**
- Component and page-level structuring in a React project
- Real-world UX thinking with cancelation & loading feedback

---

## 🛠 Tech Stack

- ⚛️ React + Vite (TypeScript)
- 🎨 Tailwind CSS
- 🧩 ShadCN UI Components

---

## 🧪 My Improvements

As part of my learning, I made several enhancements beyond the base challenge:
- 📱 Improved UI responsiveness for mobile and desktop
- ⏳ Added loading animation and visual feedback while sending
- 🎨 Polished the overall user experience with subtle UI tweaks

---

## 🚀 Getting Started

### Prerequisites

- Node.js (v16 or higher recommended)
- npm / yarn / pnpm

### Installation

```bash
# Clone the repository
git clone https://github.com/r-madhan-1306/dm-delay.git
cd dm-delay

# Install dependencies
npm install

# Start the dev server
npm run dev
```
Now visit [http://localhost:5173](http://localhost:5173) to view the app in your browser.

---

## 📁 Project Structure


```txt
src/
├── components/
│   └── MessageForm.tsx
├── pages/
│   └── Home.tsx
├── App.tsx
├── main.tsx
├── index.css

```



---

## 📌 Part of

This app is **Day 1** of the **#30Apps30Days** challenge.  
Stay tuned as I build 29 more powerful and creative apps from scratch.

---

## 🙌 Special Thanks

Huge thanks to **[@codejavid](https://linkedin.com/in/codejavid)** and the **StozAcademy** community for inspiring this challenge.

Follow the full journey and subscribe to the [YouTube Channel](https://www.youtube.com/@stozacademy) to learn along.

---

## 📄 License

This project is open source and available under the **MIT License**.
