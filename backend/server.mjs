import Express from "express";
import cors from "cors"
import openai from "openai";
import dotenv from "dotenv"
dotenv.config();
const configuration = new openai.Configuration({
  apiKey: process.env.API_KEY ,
});
const openAi = new openai.OpenAIApi(configuration);
const app = Express();

const port = 2000;

app.use(cors())
app.get("/test/", (req, res) => {
  console.log("test endpoint!")
  res.send("hello");
});

app.get("/completion/:prompt", async (req, res) => {
  console.log("completion endpoint")
  const api_res = await openAi.createCompletion({
    model: "text-davinci-003",
    prompt: req.params.prompt,
    temperature: 0.4,
    max_tokens: 500,
  });
  console.log(api_res.data)
  res.send(api_res.data)
});



app.listen(port, () => {
  console.log(`server on ${port}`);
});
