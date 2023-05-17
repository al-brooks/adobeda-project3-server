const apiUrl = `https://openlibrary.org/works/`;

module.exports = {
  getBook
};

async function getBook(req, res) {
  try {
    const reqUrl = apiUrl + req.params.id + ".json";
    const response = await fetch(reqUrl);
    const data = await response.json();

    res.send(data);
  } catch (error) {
    res.status(400).json(error);
  }
}
