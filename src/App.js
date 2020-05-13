import React from "react";
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
    const randomNum = Math.floor(Math.random() * 31);

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
        <h1 className="app-heading">Lord of the Rings Movie Quotes</h1>
        <a id="new-quote" className="btn btn--white" onClick={this.handleClick}>
          New Quote
        </a>

        <TransitionGroup className="img-container">
          <CSSTransition
            key={this.state.quote}
            in={this.state.appear}
            appear={true}
            timeout={1000}
            classNames="fade"
          >
            {/* production */}
            <img
              src={"./Images/" + this.state.img}
              id="img"
              className="img"
              alt={this.state.author}
            ></img>
            {/* development */}
            {/* <img
              src={"../Images/" + this.state.img}
              id="img"
              className="img"
              alt={this.state.img}
            ></img> */}
          </CSSTransition>
        </TransitionGroup>

        <p id="text" className="top-margin">
          {this.state.quote}
        </p>

        <p id="author">{this.state.author}</p>
        <p className="footnote">Designed and built by Michael Tandy</p>
      </div>
    );
  }
}

export default App;
