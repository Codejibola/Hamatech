// My MongoDb connection string:mongodb+srv://Jibola:#1Test@digitalautorepairs.euhxps8.mongodb.net/?retryWrites=true&w=majority&appName=DigitalAutoRepairs


// This web server serves static files and handles routing for a web application and also serves api routes
import express from "express";
import cors from "cors";
import path, { dirname } from "path";
import { fileURLToPath } from "url";

// Routes & APIs
import getServices from "./APIs/servicesAPI.js";
import getShop from "./APIs/shopAPI.js";
import authRouter from "./Routes/Admin/Auth.js";
import productRouter from "./Routes/Admin/Products.js";
import servicesRouter from "./Routes/Admin/Services.js";

// __dirname for ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

class WebServer {
  #foldername;
  #routes;
  #port;

  constructor(port, foldername, routes) {
    this.#foldername = foldername;
    this.#routes = routes;
    this.#port = process.env.PORT || port;
    this.app = express();

    // ✅ CORS (frontend local + deployed)
    const allowedOrigins = [
      "http://localhost:5174",
      "https://hamatech.vercel.app",
    ];
    this.app.use(
      cors({
        origin: allowedOrigins,
        methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
        allowedHeaders: ["Content-Type", "Authorization"],
        credentials: true,
      })
    );
    this.app.options("*", cors()); // ✅ Handle preflight

    // ✅ Middleware
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use("/uploads", express.static(path.join(__dirname, "uploads")));
  }

  start() {
    // ✅ Static assets only if folder exists
    this.app.use(express.static(path.join(__dirname, this.#foldername)));

    // ✅ HTML routes
    this.#routes.forEach(({ route, file }) => {
      this.app.get(route, (req, res) => {
        res.sendFile(path.join(__dirname, this.#foldername, file), (err) => {
          if (err) {
            console.error(`Error serving ${file}:`, err.message);
            res.status(404).json({ message: "File not found" });
          }
        });
      });
    });

    // ✅ Default root (in case no index.html in Render)
    this.app.get("/", (req, res) => {
      res.json({ message: "Backend is live ✅" });
    });

    // 404 fallback
    this.app.use((req, res) => {
      res.status(404).json({ message: "Route not found" });
    });
  }

  addGet(path, handler) {
    this.app.get(path, handler);
  }

  addPost(path, handler) {
    this.app.post(path, handler);
  }

  use(path, router) {
    this.app.use(path, router);
  }

  listen() {
    this.app.listen(this.#port, () => {
      console.log(`🚀 Server running on port ${this.#port}`);
    });
  }
}

// ✅ Initialize server
const HamatechServer = new WebServer(3000, "public", [
  { route: "/about", file: "about.html" },
]);

// ✅ API routes
HamatechServer.use("/api/admin", authRouter);
HamatechServer.use("/api/admin", productRouter);
HamatechServer.use("/api/admin", servicesRouter);

// ✅ Additional routes
HamatechServer.addGet("/services", getServices);
HamatechServer.addGet("/shop", getShop);

HamatechServer.start();
HamatechServer.listen();
