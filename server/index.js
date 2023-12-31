
import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import dotenv from "dotenv";
import helmet from "helmet";
import morgan from 'morgan';
import openAiRoutes from "./routes/openai.js";
import authRoutes from "./routes/auth.js";
import { OpenAI } from 'openai';


/* CONFIGURATIONS */
dotenv.config();
const app = express();
app.use(express.json());
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));
app.use(morgan("common"));
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());


// export const openai = new OpenAI({
//   apiKey: process.env.OPENAI_API_KEY,
// });


// Your OpenAI API key
const apiKey = 'sk-zkk255md977svwGV3CSpT3BlbkFJ7A0aW112DXA1z8mLYOM';

export const openai = new OpenAI({ apiKey });

// Now you can use the `openai` object to make API requests.



/* ROUTES */
app.use("/openai", openAiRoutes);
app.use("/auth", authRoutes);

/* SERVER SETUP */
const PORT = process.env.PORT || 9000
app.listen(PORT, () => {
  console.log(`Example app listening at http://localhost:${PORT}`);
});
