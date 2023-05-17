const fetch = require("node-fetch");
const apiUrl = `https://openlibrary.org/works/`;

module.exports = {
  getBook
};

async function getBook(req, res) {
  try {
    const book = await fetch(`${apiUrl}${req.params.id}`);
    console.log(book);
    res.json(book);
  } catch (error) {
    res.status(400).json(error);
  }
}
