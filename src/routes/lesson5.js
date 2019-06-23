import React, { Component, Fragment } from 'react';

import Content from './IndexPage'
import VideoPlayer from '../components/video'
import 'video.js/dist/video-js.css'
export default class Lesson5 extends Component {

    componentDidMount(){
        var videoObj = document.querySelector('video')
        console.log('1111', videoObj.currentTime)
        videoObj.currentTime = 208
    }


    render(){
        const videoJsOptions = {
            autoplay: false,
            controls: true,
            width: '900px',
            sources: [{
              src: 'http://www.somefor.cn/C3D%E5%8E%9F%E7%90%86.mp4',
              type: 'video/mp4',
            }]
          }
        const something = (
            <div>
                <h2>Overview</h2>
                <p>In lesson 5 we put all the pieces of training together to understand exactly what is going on when we talk about back propagation. We'll use this knowledge to create and train a simple neural network from scratch.

                We'll also see how we can look inside the weights of an embedding layer, to find out what our model has learned about our categorical variables. This will let us get some insights into which movies we should probably avoid at all costs…

                Although embeddings are most widely known in the context of word embeddings for NLP, they are at least as important for categorical variables in general, such as for tabular data or collaborative filtering. They can even be used with non-neural models with great success.</p>
                <h2>Resources</h2>
                <h3>Lesson resources</h3>
                <li>Notebooks:</li>
                <li>Detailed lesson notes - thanks to @hiromi</li>
                <h3>Other resources</h3>
                </div>
        )
        return(
            <Fragment>
                <Content 
                 LessonTitle="Lesson 5: Back propagation; Accelerated SGD; Neural net from scratch"
                 massContent={something}
                />

            <div style={{height: '50px'}} />>
            <VideoPlayer { ...videoJsOptions } />
            </Fragment>
        )
    }
}