import React, { Component } from 'react';
import tweetArray from './tweetArray'
import Tweet from './tweet'

class Tweets extends Component{
  render(){
    const tweets = tweetArray.map((v, i) => (<Tweet key={i} message={v}/>))

    return (<div>{tweets}</div>)
  }
}

export default Tweets
