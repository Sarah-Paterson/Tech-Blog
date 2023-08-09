const router = require('express').Router();
const { User } = require('../models/User');

router.get('/', async (req, res) => {
    try {
        res.render('homepage');
    } catch (err) {
        res.status(500).json(err);
    }
});

router.get('/login', async (req, res) => {
    try {
      if (req.session.loggedIn) {
        res.redirect('/dashboard');
        return;
      }
      res.render('login');
    } catch (err) {
      res.status(500).json(err);
    }
});

router.get('/signup', async (req, res) => {
    try {
      res.render('signup');
    } catch (err) {
      res.status(500).json(err);
    }
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

router.get('/dashboard/edit-post', async (req, res) => {
    try {
      const userData = await User.findByPk(req.session.user_id);
  
      const user = userData.get({ plain: true });
  
      res.render('dashboard-edit-post', { user, content });
    } catch (err) {
      res.status(500).json(err);
      console.error(err);
    }
});

module.exports = router;
