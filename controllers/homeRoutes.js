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

    res.render('homepage', posts);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// GET one Post
// Use the custom middleware before allowing the user to access the Post
router.get('/dashboard/edit-post/:id', auth, async (req, res) => {
  try {
    const postData = await Post.findByPk(req.params.id);

    const Post = postData.get({ plain: true });
    res.render('dashboard-edit-post', { Post, loggedIn: req.session.loggedIn });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// GET one painting
// Use the custom middleware before allowing the user to access the painting
router.get('/painting/:id', auth, async (req, res) => {
  try {
    const dbPaintingData = await Painting.findByPk(req.params.id);

    const painting = dbPaintingData.get({ plain: true });

    res.render('painting', { painting, loggedIn: req.session.loggedIn });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.get('/login', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  }

  res.render('login');
});

module.exports = router;


// const router = require('express').Router();
// const { User } = require('../models/User');

// router.get('/', async (req, res) => {
//     try {
//         res.render('homepage');
//     } catch (err) {
//         res.status(500).json(err);
//     }
// });

// router.get('/login', async (req, res) => {
//     try {
//       if (req.session.loggedIn) {
//         res.redirect('/dashboard');
//         return;
//       }
//       res.render('login');
//     } catch (err) {
//       res.status(500).json(err);
//     }
// });

// router.get('/signup', async (req, res) => {
//     try {
//       res.render('signup');
//     } catch (err) {
//       res.status(500).json(err);
//     }
// });

// router.get('/dashboard', async (req, res) => {
//     try {
//       const userData = await User.findByPk(req.session.user_id);
  
//       const user = userData.get({ plain: true });
  
//       res.render('dashboard-main', { user, content });
//     } catch (err) {
//       res.status(500).json(err);
//       console.error(err);
//     }
// });

// router.get('/dashboard/new-post', async (req, res) => {
//     try {
//       const userData = await User.findByPk(req.session.user_id);
  
//       const user = userData.get({ plain: true });
  
//       res.render('dashboard-new-post', { user, content });
//     } catch (err) {
//       res.status(500).json(err);
//       console.error(err);
//     }
// });

// router.get('/dashboard/edit-post', async (req, res) => {
//     try {
//       const userData = await User.findByPk(req.session.user_id);
  
//       const user = userData.get({ plain: true });
  
//       res.render('dashboard-edit-post', { user, content });
//     } catch (err) {
//       res.status(500).json(err);
//       console.error(err);
//     }
// });

// module.exports = router;
