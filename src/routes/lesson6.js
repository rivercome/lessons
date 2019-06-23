import React, { Component, Fragment } from 'react';

import Content from './IndexPage'
import VideoPlayer from '../components/video'
import 'video.js/dist/video-js.css'
export default class Lesson6 extends Component {

    componentDidMount(){
        var videoObj = document.querySelector('video')
        console.log('1111', videoObj.currentTime)
        videoObj.currentTime = 24
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
                <p>Today we discuss some powerful techniques for improving training and avoiding over-fitting:

                Dropout: remove activations at random during training in order to regularize the model
                Data augmentation: modify model inputs during training in order to effectively increase data size
                Batch normalization: adjust the parameterization of a model in order to make the loss surface smoother.
                Next up, we'll learn all about convolutions, which can be thought of as a variant of matrix multiplication with tied weights, and are the operation at the heart of modern computer vision models (and, increasingly, other types of models too).

                We'll use this knowledge to create a class activated map, which is a heat-map that shows which parts of an image were most important in making a prediction.

                Finally, we'll cover a topic that many students have told us is the most interesting and surprising part of the course: data ethics. We'll learn about some of the ways in which models can go wrong, with a particular focus on feedback loops, why they cause problems, and how to avoid them. We'll also look at ways in which bias in data can lead to biased algorithms, and discuss questions that data scientists can and should be asking to help ensure that their work doesn't lead to unexpected negative outcomes.</p>
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
                 LessonTitle="Lesson 6: Regularization; Convolutions; Data ethics"
                 massContent={something}
                />

            <div style={{height: '50px'}} />>
            <VideoPlayer { ...videoJsOptions } />
            </Fragment>
        )
    }
}