const router = require('express').Router();
const Post = require('../models/Post');
const User = require('../models/User');
const auth = require('../utils/auth');

router.get('/', async (req, res) => {
    try {
      const userData = await User.findAll({where: {user_id: req.session.user_id}});
      // create a where clause (find all where)

      const user = userData.get({ plain: true });
      console.log(user);
  
      res.render('dashboard-main', { user, content, loggedIn: req.session.loggedIn });
    } catch (err) {
      res.status(500).json(err);
      console.error(err);
    }
});

router.get('/new-post', async (req, res) => {
    try {
      const userData = await User.findByPk(req.session.user_id);
  
      const user = userData.get({ plain: true });
  
      res.render('dashboard-new-post', { user, content, loggedIn: req.session.loggedIn });
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