const Post = require('../models/Post');

const postData = [
  {
    title: "Why MVC is so important",
    content: "MVC allows developers to maintain a true separation of concerns, devising their code between the Model layer for data, the View layer for design, and the Controller layer for application logic.",
    author: "Xandromus",
    date: "5/8/2020"
  },
  {
    title: "Authentication vs. Authorization",
    content: "There is a difference between authententication and authorization. Authentication means confirming your own identitiy, wheras authorization means being allowed access to the system.",
    author: "Xandromus",
    date: "5/8/2020"
  },
  {
    title: "Object-Relational Mapping",
    content: "I have really loved learning about ORMs. It's really simplified the way I create queries in SQL!",
    author: "Lernantino",
    date: "5/8/2020"
  }
];

const seedPost = () => Post.bulkCreate(postData);

module.exports = seedPost;
