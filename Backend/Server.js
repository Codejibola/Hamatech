// My MongoDb connection string:mongodb+srv://Jibola:#1Test@digitalautorepairs.euhxps8.mongodb.net/?retryWrites=true&w=majority&appName=DigitalAutoRepairs


// This web server serves static files and handles routing for a web application and also serves api routes
import cors from 'cors';
import getServices from './APIs/servicesAPI.js';
import getShop from './APIs/shopAPI.js';
// import getMessages from './APIs/messagesAPI.js';
import express from 'express';
import path, { dirname } from 'path';
import { fileURLToPath } from 'url';
import authRouter from './Routes/Admin/Auth.js';
import productRouter from './Routes/Admin/Products.js';
// Recreating __dirname for ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

class WebServer {
    #foldername;
    #routes;
    #port;

    constructor(port, foldername, routes) {
        this.#foldername = foldername;
        this.#routes = routes; // Array of { route, file }
        this.#port = process.env.PORT || port;
        this.app = express();
        this.app.use(cors());
    }

    start() {
        // Serve static assets (CSS, JS, images)
        this.app.use(express.static(path.join(__dirname, this.#foldername)));

        // Loop through each route
        this.#routes.forEach(({ route, file }) => {
            this.app.get(route, (req, res) => {
                res.sendFile(path.join(__dirname, this.#foldername, file), (err) => {
                    if (err) {
                        console.error(`Error serving ${file}:`, err);
                        res.status(404).send('File not found');
                    } else {
                        console.log(`Request received for ${route}`);
                    }
                });
            });
        });

        // 404 fallback
        this.app.use((req, res) => {
            res.status(404).sendFile(path.join(__dirname, this.#foldername, '404.html'));
        });
    }

    addGet(path, handler) {
        this.app.get(path, handler);
    }

    addPost(path, handler) {
        this.app.post(path, handler);
    }

    listen() {
        this.app.listen(this.#port, () => {
            console.log(`Server running on port ${this.#port}`);
        });
    }
}

const HamatechServer = new WebServer(
    3500,                // port
    "public",            // folder where your static files live
    [                    // routes (optional, since you're also using addGet)
        { route: "/", file: "index.html" },
        { route: "/about", file: "about.html" }
    ]
);

// API routes
HamatechServer.addGet("/services", getServices);
HamatechServer.addGet("/shop", getShop);
// HamatechServer.addGet("/messages", getMessages);

// Middleware to parse JSON bodies
HamatechServer.app.use(express.json());
HamatechServer.app.use("/uploads", express.static(path.join(__dirname, "uploads")));
HamatechServer.app.use('/api/admin', authRouter);
HamatechServer.app.use('/api/admin', productRouter);
HamatechServer.start();
HamatechServer.listen();



