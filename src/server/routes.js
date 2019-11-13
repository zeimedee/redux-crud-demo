const express = require('express');
const routes = express.Router();
let Post = require('./blog.models');


routes.route('/').get((req,res)=>{
    Post.find((err, post)=>{
        if(err){
            console.log(err);
        }
        else{
            res.json(post);
        }

    });
});

routes.route('/post').post((req,res)=>{
     let post = new Post(req.body);
     post.save()
         .then(()=>{
             res.status(200).json({'post':'post added successfully'});
         })
         .catch(()=>{
             req.status(400).send('post failed to add')
         });
});

module.exports = routes;