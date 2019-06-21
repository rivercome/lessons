import React, { Component, Fragment } from 'react';

import Content from './IndexPage'
import VideoPlayer from '../components/video'
import 'video.js/dist/video-js.css'
export default class Lesson2 extends Component {

    componentDidMount(){
        var videoObj = document.querySelector('video')
        console.log('1111', videoObj.currentTime)
        videoObj.currentTime = 65
    }


    render(){
        const videoJsOptions = {
            autoplay: false,
            controls: true,
            sources: [{
              src: 'http://www.somefor.cn/C3D%E5%8E%9F%E7%90%86.mp4',
              type: 'video/mp4',
            }]
          }
        const something = (
            <div>
                <h2>Overview</h2>
                <p>We start today's lesson learning how to build your own image classification model using your own data, including topics such as:
                
                Image collection
                Parallel downloading
                Creating a validation set, and
                Data cleaning, using the model to help us find data problems.
                I'll demonstrate all these steps as I create a model that can take on the vital task of differentiating teddy bears from grizzly bears. Once we've got our data set in order, we'll then learn how to productionize our teddy-finder, and make it available online.
                
                We've had some great additions since this lesson was recorded, so be sure to check out:

                The production starter kits on the course web ch as this one for deploying to Render.com
                The new interactive GUI in the lesson noteboong the model to find and fix mislabeled or incorrectly-collected images.
                In the second half of the lesson we'll trainmodel from scratch, creating our own gradient descent loop. In the process, we'll be learning lots of new jargon, so be sure you've got a good place to take notes, since we'll be referring to this new terminology throughout the course (and there will be lots more introduced in every lesson from here on).</p>
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
                 LessonTitle="Lesson 2: Data cleaning and production; SGD from scratch"
                 massContent={something}
                />

            <div style={{height: '50px'}} />>
            <VideoPlayer { ...videoJsOptions } />
            </Fragment>
        )
    }
}