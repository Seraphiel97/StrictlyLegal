const User = require('../../models/user')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')

module.exports = {
  create,
  checkToken,
  login
}

async function create(req, res){
  try {
    if (req.body.adminKey === process.env.ADMIN_KEY) {
      req.body.isAdmin = true
      const user = await User.create(req.body)
      const token = createJWT(user)
      res.json(token)
    } else {
      const user = await User.create(req.body)
      const token = createJWT(user)
      res.json(token)
    }
  } catch (error) {
    res.status(400).json(error)
  }
}

function checkToken(req, res) {
  // req.user will always be there for you when a token is sent
  console.log('req.user', req.user);
  res.json(req.exp);
}

function createJWT(user){
  return jwt.sign(
    {user},
    process.env.SECRET,
    { expiresIn: '24hr'}
  )
}

async function login(req, res) {
  try {
    // Find the user by their email address
    const user = await User.findOne({email: req.body.email});
    if (!user) throw new Error();
    // Check if the password matches
    const match = await bcrypt.compare(req.body.password, user.password);
    if (!match) throw new Error();
    res.json( createJWT(user) );
  } catch {
    res.status(400).json('Bad Credentials');
  }
}