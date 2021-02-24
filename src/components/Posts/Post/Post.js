import React from "react";
import { Card, CardActions, CardContent, CardMedia, Button, Typography } from '@material-ui/core';
import moment from 'moment';

import useStyles from "./styles";
const Post = ({ post }) => {
    const classes = useStyles();
    return ( <
        Card className = { classes.card } >
        <
        CardMedia className = { classes.media }
        image = { Post.selectedFile }
        title = { Post.title } >
        < /CardMedia> <
        div className = { classes.overlay } >
        <
        Typography variant = "h6" > { post.creator } < /Typography> <
        Typography variant = "body2" > { moment(post.createdAt).fromNow() } <
        /Typography> <
        /div> <
        div className = { classes.overlay2 } >
        <
        Button style = {
            { color: "white" } }
        size = "small"
        onClick = {
            () => {} }
        fontSize = "default" >
        < /Button> <
        /div> <
        div className = { classes.details } >
        <
        Typography variant = "body2"
        color = "textSecondary" > { post.tags.map((tag) => `#${tag} `) } <
        /Typography> <
        /div> <
        CardContent >
        <
        Typography className = { classes.title }
        variant = "h5"
        gutterBottom > { post.message } <
        /Typography> <
        /CardContent> <
        CardActions className = { classes.cardActions } >
        <
        Button size = "small"
        color = "primary"
        onClick = { post.likeCount }
        fontSize = "small" > Like < /Button> <
        Button size = "small"
        color = "primary"
        onClick = { post.likeCount }
        fontSize = "small" > Like < /Button> <
        /CardActions> <
        /Card>
    );
}

export default Post;