// My MongoDb connection string:mongodb+srv://Jibola:#1Test@digitalautorepairs.euhxps8.mongodb.net/?retryWrites=true&w=majority&appName=DigitalAutoRepairs



const express = require('express');
const path = require('path');

class WebServer {
    #foldername;
    #routes;
    #port;

    constructor(port, foldername, routes) {
        this.#foldername = foldername;
        this.#routes = routes; // Array of { route, file }
        this.#port = process.env.PORT || port;
        this.app = express();
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

    listen() {
        this.app.listen(this.#port, () => {
            console.log(`Server running on port ${this.#port}`);
        });
    }
}

