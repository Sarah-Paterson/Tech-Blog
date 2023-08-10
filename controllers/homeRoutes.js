const router = require('express').Router();
const Post = require('../models/Post');
const User = require('../models/User');
const auth = require('../utils/auth');

router.get('/', async (req, res) => {
  try {
    const postData = await Post.findAll();

    const posts = postData.map((post) =>
      post.get({ plain: true })
    );
    console.log(posts)
    res.render('homepage', { posts });
    
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.get('/login', (req, res) => {
    if (req.session.loggedIn) {
      res.redirect('/dashboard');
      return;
    }
  
    res.render('login');
});
  
router.get('/signup', async (req, res) => {
    if (req.session.loggedIn) {
        res.redirect('/dashboard');
        return;
    }
      
    res.render('signup');
});

module.exports = router;
