import React, { Component, Fragment } from 'react';

import Content from './IndexPage'

export default class Lesson2 extends Component {
    render(){
        const something = (
            <div>
                <h2>Overview</h2>
                <p>Lots to cover today! We start lesson 3 looking at an interesting dataset: Planet's Understanding the Amazon from Space. In order to get this data in to the shape we need it for modeling, we'll use one of fastai's most powerful (and unique!) tools: the data block API. We'll be coming back to this API many times over the coming lessons, and mastery of it will make you a real fastai superstar! Once you've finished this lesson, if you're ready to learn more about the data block API, have a look at this great article: Finding Data Block Nirvana, by Wayde Gilliam.

                One important feature of the Planet dataset is that it is a multi-label dataset. That is: each satellite image can contain multiple labels, whereas previous datasets we've looked at have had exactly one label per image. We'll look at what changes we need to make to work with multi-label datasets.

                Next, we will look at image segmentation, which is the process of labeling every pixel in an image with a category that shows what kind of object is portrayed by that pixel. We will use similar techniques to the earlier image classification models, with a few tweaks. fastai makes image segmentation modeling and interpretation just as easy as image classification, so there won't be too many tweaks required.

                We will be using the popular Camvid dataset for this part of the lesson. In future lessons, we will come back to it and show a few extra tricks. Our final Camvid model will have dramatically lower error than any model we've been able to find in the academic literature!

                What if your dependent variable is a continuous value, instead of a category? We answer that question next, looking at a keypoint dataset, and building a model that predicts face keypoints with high accuracy.</p>
                <h2>Resources</h2>
                <h3>Lesson resources</h3>
                <p>Lesson notes from @PoonamV
                Detailed lesson notes by @hiromi
                The notebooks for this lesson require fastai 1.0.21 or later. Please conda install -c fastai fastai (or the equivalent for your platform), and of course remember to git pull to get the latest notebooks
                Notebooks:
                lesson3-planet.ipynb
                lesson3-camvid.ipynb
                lesson3-imdb.ipynb
                lesson3-head-pose.ipynb
                Lesson 3 in-class discussion
                Links to different parts in video by @melonkernel</p>
                </div>
        )
        return(
            <Fragment>
                <Content
                   LessonTitle="Lesson 3: Data blocks; Multi-label classification; Segmentation"
                   massContent={something}
                />
            </Fragment>
        )
    }
}