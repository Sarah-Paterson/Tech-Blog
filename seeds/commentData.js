const Comment = require('../models/Comment');

const commentData = [
  {
    comment: "MVC can be tricky at first but it's worth it in the end.",
    author: "Lernantino",
    date: "5/10/2020",
    post_id: 1,
  },
  {
    comment: "I know what you mean! It took me forever, but the more I practiced MVC, the better I got at it!",
    author: "Xandromus",
    date: "5/10/2020",
    post_id: 1,
  },
  {
    comment: "This has always tripped me up, but it makes sense",
    author: "Lernantino",
    date: "5/9/2020",
    post_id: 2,
  }
];

const seedComment = () => Comment.bulkCreate(commentData);

module.exports = seedComment;
