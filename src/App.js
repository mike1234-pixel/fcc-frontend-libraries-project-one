import React from "react";
import "./App.css";
import data from "./data.json"; // data parsed by react - JSON.parse() not needed
import { CSSTransition, TransitionGroup } from "react-transition-group";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      quote: "",
      author: "",
      img: "",
      class: "",
      appear: true,
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
        <TransitionGroup className="img-container">
          <CSSTransition
            key={this.state.quote}
            in={this.state.appear}
            appear={true}
            timeout={1000}
            classNames="fade"
          >
            <img
              src={"../Images/" + this.state.img}
              style={{ width: 100, height: 100 }}
              id="img"
              alt={this.state.img}
            ></img>
          </CSSTransition>
        </TransitionGroup>
      </div>
    );
  }
}

export default App;
