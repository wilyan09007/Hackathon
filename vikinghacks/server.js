// defining the server port
const OpenAI = require("openai");
const port = 5000

// initializing installed dependencies
const express = require('express')
require('dotenv').config()
const app = express()
const cors = require('cors')
app.use(cors())

const openai = new OpenAI({ apiKey: process.env.REACT_APP_API_KEY });

async function generate_headline() {
  const completion = await openai.chat.completions.create({
    messages: [
      { role: "system", content: "Your job is to make headlines." },
      { role: "user", content: "Generate a headline. Also generate a short 1-2 sentence description which is more specific but not repetitive. Use fake names if necessary. only 1" },
    ],
    model: "gpt-3.5-turbo",
  });
  return completion.choices[0];
}


// listening for port 5000
app.listen(5000, ()=> console.log(`Server is running on ${port}` ))

// API request
app.get('/', (req,res)=>{    
    generate_headline().then(function (response) {
      console.log(response)
        res.json(response);
    }).catch(function (error) {
        console.error(error);
    });
})
