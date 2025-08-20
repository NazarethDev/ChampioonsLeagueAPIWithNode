import express, { json } from "express"
import router from "./routes";
import cors from "cors";


function creatApp() {
    const app = express()
    app.use(json());

    app.use("/api", router);

    const corsOptions = {
        origin: [],
        methods: ["GET", "POST", "UPDATE"]
    }

    app.use(cors(corsOptions));

    return app;
};

export default creatApp;