import React, { Component } from "react";
import Loading from "./loading";
import Newsitem from "./Newsitem";
import PropTypes from 'prop-types'
import InfiniteScroll from 'react-infinite-scroll-component';

export class News extends Component {
  static defaultProps={
    country : "in",
    pagesize : 9,
    category : "sports"
  }
  constructor() {
    super();
    this.state = {
      articles: [],
      loading: false,
      page : 1,
      totalResults : 0 

    };
  }
  updateNews = async () =>{
    let url =
    `https://newsapi.org/v2/top-headlines?country=us&category=${this.props.category}&apiKey=2e331b24728349198874c9edd7491ee1&page=${this.state.page}&pagesize=10`;
    this.setState({loading:true})
  let data = await fetch(url);
  this.props.setProgress(70)
  let parsedData = await data.json();
  this.props.setProgress(100)
  console.log(parsedData);

  this.setState({ articles: parsedData.articles,totalArticles : parsedData.totalResults , loading : false });
  }
  async componentDidMount() {
    this.props.setProgress(30)
     this.updateNews()
  }
  fetchMoreData = async () => {
    this.setState({
      page : this.state.page+1
    })
    let url =
    `https://newsapi.org/v2/top-headlines?country=us&category=${this.props.category}&apiKey=2e331b24728349198874c9edd7491ee1&page=${this.state.page}&pagesize=10`;
    this.setState({loading:true})
  let data = await fetch(url);
  let parsedData = await data.json();
  console.log(parsedData);

  this.setState({ articles: this.state.articles.concat(parsedData.articles),totalArticles : parsedData.totalResults , loading : false }
    )}
  
  render() {
    return (
      <div className="container my-3">
        <h2>Monkey headlines</h2>
        {(this.state.loading) && <Loading/>} 


<InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles.length !== this.totalResults}
          loader={<Loading/>}>

          <div className="row">
          {this.state.articles.map((element) => {
            return (
              <div className="col-md-4" key={element.url}>
                <Newsitem
                  title={element.title}
                  discription={element.description}
                  imgUrl={element.urlToImage}
                  newsUrl={element.url}
                  author = {element.author}
                  date = {element.publishedAt}
                />
              </div>
            );
          })}
          </div>
        </InfiniteScroll>
      </div>
    );
  }
}

export default News;



