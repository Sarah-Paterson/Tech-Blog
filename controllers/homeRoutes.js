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

router.get('/dashboard', async (req, res) => {
    try {
      const userData = await User.findByPk(req.session.user_id);
  
      const user = userData.get({ plain: true });
  
      res.render('dashboard-main', { user, content });
    } catch (err) {
      res.status(500).json(err);
      console.error(err);
    }
});

router.get('/dashboard/new-post', async (req, res) => {
    try {
      const userData = await User.findByPk(req.session.user_id);
  
      const user = userData.get({ plain: true });
  
      res.render('dashboard-new-post', { user, content });
    } catch (err) {
      res.status(500).json(err);
      console.error(err);
    }
});

router.get('/dashboard/edit-post/:id', auth, async (req, res) => {
  try {
    const postData = await Post.findByPk(req.params.id);

    const post = postData.get({ plain: true });
    res.render('dashboard-edit-post', { post, loggedIn: req.session.loggedIn });
  } catch (err) {
    console.error(err);
    res.status(500).json(err);
  }
});

module.exports = router;
