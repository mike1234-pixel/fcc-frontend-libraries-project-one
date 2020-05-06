import React from "react";
import "./App.css";
import data from "./data.json"; // data parsed by react - JSON.parse() not needed

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      quote: "",
      author: "",
      img: "",
      class: "",
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    const randomNum = Math.floor(Math.random() * 4);

    const randomQuotes = data;

    this.setState((state) => ({
      quote: randomQuotes[randomNum].quote,
      author: randomQuotes[randomNum].author,
      img: randomQuotes[randomNum].img,
      class: randomQuotes[randomNum].class,
    }));
  }

  componentDidMount() {
    window.addEventListener("load", this.handleClick);
  }

  render() {
    console.log(this.state.img);

    return (
      <div id="quote-box" className={this.state.class}>
        <a id="new-quote" onClick={this.handleClick}>
          New Quote
        </a>
        <p id="text">{this.state.quote}</p>
        <p id="author">{this.state.author}</p>
        <a id="tweet-quote" href="twitter.com/intent/tweet">
          Tweet Quote
        </a>
      </div>
    );
  }
}

export default App;
