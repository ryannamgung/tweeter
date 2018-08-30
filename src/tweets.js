import React, { Component } from 'react'
import tweetArray from './tweetArray'
import Tweet from './tweet'
// import Search from './search'

class Tweets extends Component {
  constructor() {
    super()
    this.state = {
      tweets: tweetArray,
      searchTerm: ''
    }
    this.updateSearchTerm = this.updateSearchTerm.bind(this)
  }

  updateSearchTerm(e) {
    this.setState({
      searchTerm: e.target.value
    })
  }


  render() {
    const filteredTweets = this.state.tweets.filter(tweetStr=>(tweetStr.includes(this.state.searchTerm)))
    const reactTweets = filteredTweets.map((v, i) => (<Tweet key={i} message={v}/>))

    return (
      <div>
      <div>
      <label htmlFor="filter">Search: </label>
        <input type="text" id="filter"
          value={this.state.search}
          onChange={this.updateSearchTerm}/>
      </div>

      <div>{reactTweets}</div>
      </div>
    )
  }
}

export default Tweets
