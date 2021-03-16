// const express = require('express');

// function createRouter(db) {
//   const router = express.Router();
//   const owner = '';
//   router.get('/user', function (req, res, next) {
//     db.query(
//       'INSERT INTO user ( u_name, password) VALUES ("fjp@gmail.com","fjp")',

//       (error, results) => {
//         if (error) {
//           console.log(error);
//           res.status(500).json({status: 'error'});
//         } else {
//           res.status(200).json(results);
//         }
//       }
//     );
//   });

//   return router;
// }

// module.exports = createRouter;


const express = require("express");
const router = express.Router();
const mysqlConnection = require("./connection");
router.get("/", (req, res) => {
  mysqlConnection.query("SELECT * from alarmdetails", (err, rows, fields) => {
  if (!err) {
    res.send(rows);
  } else {
    console.log(err);
  }
});
});

module.exports = router;
