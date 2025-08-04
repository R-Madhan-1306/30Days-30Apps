# 📝 Firebase Notes App

A real-time Notes App built with React, TailwindCSS, ShadCN UI, and Firebase Firestore. Users can add, view, and delete notes — all synced instantly across sessions.

This project is part of the **30 Apps in 30 Days Challenge** by [@codejavid](https://linkedin.com/in/codejavid), Founder of [StozAcademy](https://www.youtube.com/@stozacademy).

---

## ✨ Features

- Create and save short notes instantly
- Real-time syncing with Firebase Firestore (`onSnapshot`)
- Responsive two-column note display
- Clean, modern UI using **TailwindCSS** and **ShadCN UI**
- Glassmorphic styling with gradients and soft shadows
- Delete notes with one click and instant feedback

---

## 🧠 What I Learned

- Setting up and integrating **Firebase Firestore**
- Using `addDoc()`, `collection()`, `deleteDoc()` from Firestore SDK
- Handling real-time updates using `onSnapshot()`
- Managing state in React with `useState` and `useEffect`
- Structuring reusable components: `NoteForm`, `NoteList`
- Designing beautiful UIs with **TailwindCSS + ShadCN**
- Modular folder structure with `lib/firebase.ts`

---

## 🛠 Tech Stack

- ⚛️ React + Vite (TypeScript)
- 🎨 Tailwind CSS
- 🧩 ShadCN UI Components
- 🔥 Firebase Firestore

---

## 🧪 My Improvements

As part of my learning, I introduced additional UI/UX enhancements:
- 🎨 Glassmorphism with gradient backgrounds
- 🧼 Cleaner and more polished component styling
- 🖼️ Responsive grid layout for multi-note views
- 🚫 Empty state placeholder: *“No notes yet”*

---

## 🚀 Getting Started

### Prerequisites

- Node.js (v16 or higher)
- Firebase account + project
- npm / yarn / pnpm

### Firebase Setup

1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Create a new project
3. Enable **Firestore Database**
4. Add a web app and grab the config object
5. Create a file: `src/lib/firebase.ts` and paste your config like this:

```ts
// src/lib/firebase.ts
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "...",
  authDomain: "...",
  projectId: "...",
  storageBucket: "...",
  messagingSenderId: "...",
  appId: "..."
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
```

## 🚀 Installation

```bash
# Clone the repository
git clone https://github.com/r-madhan-1306/firebase-notes-app.git
cd firebase-notes-app

# Install dependencies
npm install

# Start the dev server
npm run dev
```

Now visit http://localhost:5173 to use the app in your browser.

---

## 📁 Project Structure

```txt
src/
├── components/
│   ├── NoteForm.tsx
│   └── NoteList.tsx
├── lib/
│   └── firebase.ts
├── pages/
│   └── Home.tsx
├── App.tsx
├── main.tsx
├── index.css
```

## 📌 Part of

This app is **Day 4** of the **#30Apps30Days** challenge.  
Follow along as I build 26 more real-world apps — one every day!

---

## 🙌 Special Thanks

Huge thanks to **[@codejavid](https://linkedin.com/in/codejavid)** and the **StozAcademy** community for this amazing learning initiative.

Subscribe to the [StozAcademy YouTube Channel](https://www.youtube.com/@stozacademy) for more app-building walkthroughs.

---

## 📄 License

This project is open source and available under the **MIT License**.
