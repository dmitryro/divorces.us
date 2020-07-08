import { observer } from 'mobx-react';
import React, {useEffect, useState} from 'react';
import { Grid, Row, Col } from "react-styled-flexboxgrid";
import { List, ListItem, withStyles } from "@material-ui/core";
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Button from "components/CustomButtons/Button.jsx";
import { FaTwitter, FaFacebookSquare, FaGooglePlusG, FaGithub } from 'react-icons/fa';
import layoutStore from 'store/layoutStore/index.ts';
import blogStore from 'store/blogStore/index.ts';

const blogStyle = {
}

const shareStyle = {
    fontSize: '0.7em'
}

const postBlock = {
    marginTop: '1.0em',
    marginBottom: '2.0em', 
    textAlign: 'left'
}


const align = {
    minHeight:'30em',
    width:'100%',
    backgroundColor:'#F3F3F3',
    color: '#000000',
    fontSize: '1.2em',
}


function Blog({ ...props }) {
    let entries = [];
    blogStore.readPosts();    
    var posts = blogStore.posts;

    useEffect(() =>  {
        if (posts.length === 0) {
              blogStore.readPosts();
              //posts = blogStore.posts;
        } else {
        }
                
    });

//    var posts = blogStore.posts;   
    for(var i=0; i<posts.length; i++) {
       entries.push(<div style={postBlock}>
                    <GridContainer>
                       <GridItem xs={12} sm={12} md={1}></GridItem>
                       <GridItem xs={12} sm={12} md={2}>Title:</GridItem>
                       <GridItem xs={12} sm={12} md={8}>{posts[i].title}</GridItem>
                       <GridItem xs={12} sm={12} md={1}></GridItem>
                    </GridContainer>
                    <GridContainer>
                       <GridItem xs={12} sm={12} md={1}></GridItem>
                       <GridItem xs={12} sm={12} md={2}>Link:</GridItem>
                       <GridItem xs={12} sm={12} md={8}>{posts[i].link}</GridItem>
                       <GridItem xs={12} sm={12} md={1}></GridItem>
                    </GridContainer>
                    <GridContainer>
                       <GridItem xs={12} sm={12} md={1}></GridItem>
                       <GridItem xs={12} sm={12} md={2}>Posted by:</GridItem>
                       <GridItem xs={12} sm={12} md={8}>{posts[i]['author'].first_name} {posts[i]['author'].last_name}</GridItem>
                       <GridItem xs={12} sm={12} md={1}></GridItem>
                    </GridContainer>
                    <GridContainer>
                       <GridItem xs={12} sm={12} md={1}></GridItem>
                       <GridItem xs={12} sm={12} md={10}>{posts[i].body}</GridItem>
                       <GridItem xs={12} sm={12} md={1}></GridItem>
                    </GridContainer>
                    <GridContainer justify="left" style={shareStyle}>
                       <GridItem xs={12} sm={12} md={1}></GridItem>
                       <GridItem xs={12} sm={12} md={2}>
                            <Button size="sm" color="facebook">
                              <FaFacebookSquare />{" "}
                              Share
                            </Button>
                       </GridItem>
                       <GridItem xs={12} sm={12} md={2}>
                            <Button  size="sm" color="twitter">
                              <FaTwitter /> Tweet
                            </Button>
                       </GridItem>
                       <GridItem xs={12} sm={12} md={2}>
                            <Button size="sm" color="google">
                              <FaGooglePlusG size="small"/>
                              Share
                            </Button>                       
                       </GridItem>
                  </GridContainer>

                   </div>);
    }

    return(<div>
                 {entries}
           </div>);
}

export default withStyles(blogStyle)(observer(Blog));
