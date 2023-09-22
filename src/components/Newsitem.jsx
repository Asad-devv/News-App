import React, { Component } from "react";

export class Newsitem extends Component {
  render() {
    let {title,discription,imgUrl,newsUrl,author,date} = this.props
    return (
      
        <div className="card">
          <img src={imgUrl} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text"><small className="text-muted">By {author==null ? "Unknown" :author } on {date.substring(0,10)}</small></p>
            <p className="card-text">
              {discription}
            </p>
            <a href={newsUrl} target='_blank' className=" btn-sm btn btn-dark">
              Read More
            </a>
          </div>
        </div>
     
    );
  }
}

export default Newsitem;
