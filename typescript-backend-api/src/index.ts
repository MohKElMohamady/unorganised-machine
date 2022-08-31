import express, { Application } from 'express';
import cors from "cors";
const app : Application = express();

/*
 * Initialising the application is done here via 
 */ 
app.use(cors({origin: '*'}));
app.use(express.json());


app.listen(65345, () => {
    console.log("Hello World");
});

