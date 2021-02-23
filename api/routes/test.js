const express = require('express');
const router = express.Router();

//In side this file each route will be handled individually.
//Example 1: hit this url (localhost:3000/api/test/index)
router.get('/index', (req, res) =>{
  return res.status(200).json({
    message: "Hello There"
  });
})

// Example 2: hit this url (localhost:3000/api/test/papa)
router.get('/papa', (req, res) => {
  return res.send("My name is Papa. I need to send Philip Gh1000.00");
})

module.exports = router;
//Exporting all the routes
