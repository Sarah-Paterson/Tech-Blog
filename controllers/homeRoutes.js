const router = require('express').Router();
const { User, Post, Comment } = require('../models');
const auth = require('../utils/auth');

router.get('/', async (req, res) => {
  try {
    const postData = await Post.findAll();
    const commentData = await Comment.findAll();

    const posts = postData.map((post) =>
      post.get({ plain: true })
    );

    const comments = commentData.map((comment) =>
      comment.get({ plain: true })
    );

    console.log(posts)
    console.log(comments)
    res.render('homepage', {
      posts,
      comments,
      loggedIn: req.session.loggedIn,
    });
    
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
  
    res.render('login', { loggedIn: req.session.loggedIn });
});
  
router.get('/signup', async (req, res) => {
    if (req.session.loggedIn) {
        res.redirect('/dashboard');
        return;
    }
      
    res.render('signup', { loggedIn: req.session.loggedIn });
});

module.exports = router;
