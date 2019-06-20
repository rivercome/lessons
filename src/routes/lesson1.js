import React, { Component, Fragment } from 'react';
import Content from './IndexPage'
import VideoPlayer from '../components/video'
import 'video.js/dist/video-js.css'

export default class Lesson2 extends Component {
    render(){
        const videoJsOptions = {
            autoplay: false,
            controls: true,
            sources: [{
              src: 'http://www.somefor.cn/C3D%E5%8E%9F%E7%90%86.mp4',
              type: 'video/mp4',
              timeupdate: 10  
            }]
          }
        const something = (
            <div>
            <p>You can click the blue arrow buttons on the left and right panes to hide them and make more room for the video. You can search the transcript using the text box at the bottom. Scroll down this page for links to many useful resources. If you have any other suggestions for links, edits, or anything else, you'll find an "edit" link at the bottom of this (and every) notes panel.</p>
            <h2>Overview</h2>
            <p>To follow along with the lessons, you'll need to connect to a cloud GPU provider which has the fastai library installed (recommended; it should take only 5 minutes or so, and cost under $0.50/hour), or set up a computer with a suitable GPU yourself (which can take days to get working if you're not familiar with the process, so we don't recommend it). You'll also need to be familiar with the basics of the Jupyter Notebook environment we use for running deep learning experiments. Up to date tutorials and recommendations for these are available from the course website.
            <br />>
                The key outcome of this lesson is that we'll have trained an image classifier which can recognize pet breeds at state of the art accuracy. The key to this success is the use of transfer learning, which will be a key platform for much of this course. We'll also see how to analyze the model to understand its failure modes. In this case, we'll see that the places where the model is making mistakes is in the same areas that even breeding experts can make mistakes.
            <br />
            We'll discuss the overall approach of the course, which is somewhat unusual in being top-down rather than bottom-up. So rather than starting with theory, and only getting to practical applications later, instead we start with practical applications, and then gradually dig deeper and deeper in to them, learning the theory as needed. This approach takes more work for teachers to develop, but it's been shown to help students a lot, for example in education research at Harvard by David Perkins.
            <br />
            We also discuss how to set the most important hyper-parameter when training neural networks: the learning rate, using Leslie Smith's fantastic learning rate finder method. Finally, we'll look at the important but rarely discussed topic of labeling, and learn about some of the features that fastai provides for allowing you to easily add labels to your images.
            <br />
                If you want to more deeply understand how PyTorch really works, you may want to check out this official PyTorch tutorial by Jeremy—although we'd only suggest doing that once you've completed a few lessons.</p>

            <h2>Links</h2>
            <h3>Lesson resources</h3>
            <p>Course site, including setup guides for each platform
            Course repo
                fastai docs
                fastai datasets
                Notebooks:
                00_notebook_tutorial.ipynb
                lesson1-pets.ipynb
                Detailed lesson notes - thanks to @hiromi
                Lesson notes - thanks to @PoonamV (wiki thread - please help contribute!)
                Lesson discussion thread</p>
                <h3>Other resources</h3>
                <li>Thread on creating your own image dataset
                What you need to do deep learning (fast.ai blog post including some basics on what GPUs are and why they're needed)
                Original Paper for Oxford-IIIT Pet Dataset
                The Oxford-IIIT Pet Dataset
                What the Regular Expressions in the notebook meant
                Understanding Regular Expressions (12 minute video)
                Visualize Regular Expressions
                Interactive tutorial to learn Regular Expressions
                Beginners Tutorial of Regular Expression
                One-Cycle Policy Fitting paper
                Visualizing and Understanding Convolutional Networks (paper)
                Splunk and Tensorflow for Security
                Learning Rate Finder Paper</li>
          </div>
        )
        return(
            <Fragment>
                <Content
                LessonTitle="Lesson 1: Image classification"
                massContent={something}
                />
            <div style={{height: '50px'}} />>
            {/* <video { ...videoJsOptions } /> */}
            <VideoPlayer { ...videoJsOptions } />

            
            </Fragment>
        )
    }
}