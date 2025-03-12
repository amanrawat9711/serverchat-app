const corsOptions = {
  origin: [
    "http://localhost:5173",
    "http://localhost:4173",
    process.env.CLIENT_URL,
    "https://clientchatapp-gvkp.vercel.app",
    "https://clientchatapp-gvkp-1tr3ta411-amanrawat9711s-projects.vercel.app",
  ].filter(Boolean),
  methods: ["PUT", "POST", "DELETE", "GET"],
  credentials: true,
};

const CHAT_TOKEN = "chat-token";

export { corsOptions, CHAT_TOKEN };
