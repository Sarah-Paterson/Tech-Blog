const router = require('express').Router();
const { User, Post, Comment } = require('../models');
const auth = require('../utils/auth');

router.get('/', auth, async (req, res) => {
    try {
      const userData = await User.findAll({where: {id: req.session.id}});
      const postData = await Post.findAll();

      // const user = userData.get({ plain: true });
      const user = userData.map((aUser) =>
      aUser.get({ plain: true }));

      const posts = postData.map((post) =>
      post.get({ plain: true }));
      
      console.log(user);
  
      res.render('dashboard-main', { user, posts, loggedIn: req.session.loggedIn });
    } catch (err) {
      res.status(500).json(err);
      console.error(err);
    }
});

router.get('/new-post', auth, async (req, res) => {
    try {
      const userData = await User.findByPk(req.session.user_id);
  
      const user = userData.get({ plain: true });
  
      res.render('dashboard-new-post', { user, posts, loggedIn: req.session.loggedIn });
    } catch (err) {
      res.status(500).json(err);
      console.error(err);
    }
});

router.get('/edit-post/:id', auth, async (req, res) => {
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