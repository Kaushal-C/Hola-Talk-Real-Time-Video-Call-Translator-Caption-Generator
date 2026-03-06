Real-Time Video Call Translator & Caption Generator

A real-time video communication platform that provides live translation and caption generation during video calls.
This application enables users speaking different languages to communicate seamlessly by translating speech in real-time and displaying translated captions.

Built with modern technologies like Next.js, LiveKit, Prisma, and Google Translate API, the platform offers secure authentication, low-latency video streaming, and intelligent speech processing.

🚀 Features
🎥 Real-Time Video Calls
High-quality video communication using LiveKit
🌐 Live Speech Translation
Automatically translates spoken language during calls
💬 Real-Time Caption Generation
Converts speech into captions using speech recognition

🔐 Secure Authentication
User authentication with NextAuth
⚡ Fast & Scalable Architecture
Built with Next.js and modern full-stack architecture

🔄 Live Updates
Real-time communication with Pusher
🧠 AI Processing
Uses OpenAI for language processing and summarization

🛠️ Tech Stack

Frontend
Next.js 13
React 18
TailwindCSS
Framer Motion
Headless UI

Backend
Next.js API Routes
tRPC
Prisma ORM

Real-Time Communication

LiveKit – Video streaming
Pusher – Real-time messaging

Language Processing

Web Speech –  Real-time speech recognisation
Microsoft Azure – Real-time translation of text


Database

Prisma
PostgreSQL / MySQL

📂 Project Structure
real-time-video-call-translator-caption-generator
│
├── prisma/                # Database schema
├── public/                # Static files
├── src/
│   ├── components/        # Reusable UI components
│   ├── pages/             # Next.js pages
│   ├── server/            # Backend logic
│   ├── styles/            # Tailwind styles
│   └── utils/             # Helper functions
│
├── package.json
├── next.config.mjs
└── README.md

⚙️ Installation
1️⃣ Clone the Repository
git clone https://github.com/yourusername/real-time-video-call-translator-caption-generator.git

cd real-time-video-call-translator-caption-generator
2️⃣ Install Dependencies
yarn install

or

npm install
3️⃣ Setup Environment Variables

Create a .env file in the root directory:

DATABASE_URL=

NEXTAUTH_SECRET=
NEXTAUTH_URL=

GOOGLE_TRANSLATE_API_KEY=

LIVEKIT_API_KEY=
LIVEKIT_API_SECRET=
LIVEKIT_URL=

OPENAI_API_KEY=

PUSHER_APP_ID=
PUSHER_KEY=
PUSHER_SECRET=
PUSHER_CLUSTER=
4️⃣ Run Prisma
npx prisma generate
npx prisma migrate dev
5️⃣ Start Development Server
yarn dev

or

npm run dev

The application will run on:

http://localhost:3000
📸 How It Works

User logs into the platform.

User joins a video call room.

Speech is captured using speech recognition.

The speech text is:

Converted into captions

Translated into another language.

Translated captions are displayed live during the call.

🔐 Authentication

Authentication is handled using NextAuth, allowing secure login and session management.

Supported authentication providers can include:

Google

Email

Credentials

📦 Deployment

You can deploy this application using:

Vercel

AWS

Docker

For Vercel deployment:

vercel
