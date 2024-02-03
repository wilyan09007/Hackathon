// server.js

const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');
const cheerio = require('cheerio');

const app = express();
const port = 3001;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.post('/scrape', async (req, res) => {
  try {
    const url = req.body.url;
    const response = await axios.get(url);
    const $ = cheerio.load(response.data);

    const title = $('title').text().trim();
    const paragraphs = $('p').toArray().map((p) => $(p).text());
    const summary = paragraphs.slice(0, 3).join(' '); // Adjust the number of paragraphs for the summary

    res.json({ title, summary });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
