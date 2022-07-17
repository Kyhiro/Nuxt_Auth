var express = require('express');
var router = express.Router();
var jwt = require('jsonwebtoken')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


router.post('/login', function(req, res, next) {
  const { username, password } = req.body
  console.log('username', username)
  console.log('password', password)


  return res.status(200).json({
    token: jwt.sign({ userId: '1', username: username }, '@rks', { expiresIn: 3600 }),
    expiresIn: 3600
  })
});

router.get('/users', function(req, res, next) {
  const token = req.headers.authorization || ''
  if (!token) return res.status(401).json({ message: 'Unauthorized'})

  return res.status(200).json({
    users: [
      { name: 'Admin', email: 'anhtt.dev@gmail.com'},
      { name: 'Admin', email: 'anhtt.dev@gmail.com'},
      { name: 'Admin', email: 'anhtt.dev@gmail.com'},
      { name: 'Admin', email: 'anhtt.dev@gmail.com'},
      { name: 'Admin', email: 'anhtt.dev@gmail.com'},
      { name: 'Admin', email: 'anhtt.dev@gmail.com'},
      { name: 'Admin', email: 'anhtt.dev@gmail.com'},
      { name: 'Admin', email: 'anhtt.dev@gmail.com'},
      { name: 'Admin', email: 'anhtt.dev@gmail.com'},
    ]
  })
});

router.get('/users/current-user', function(req, res, next) {
  return res.status(200).json({
    user: { name: 'Admin', email: 'anhtt.dev@gmail.com'},
    request: req.headers
  })
});

router.post('/logout', function(req, res, next) {
  return res.status(200).json({})
});


module.exports = router;
