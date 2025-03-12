const corsOptions = {
  origin: [
    "http://localhost:5173",
    "http://localhost:4173",
    process.env.CLIENT_URL || "https://clientchatapp-9pls.vercel.app",
  ],
  methods:["PUT","POST","DELETE","GET"],
  credentials: true,
};

const CHAT_TOKEN="chat-token"

export { corsOptions ,CHAT_TOKEN};
