const { Router } = require("express");
const collection = Router();
const fs = require('fs');

collection.get("/", (req, res) => {
  fs.readFile('./collection.json', 'utf8' , (err, data) => {
    if (err) {
      console.error(err)
      return
    }
    console.log(data);
    res.send(data);
  })

});

module.exports = collection;
