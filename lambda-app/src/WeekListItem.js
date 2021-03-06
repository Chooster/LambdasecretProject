import React, { Component } from 'react';
import WeekItemTitle from './WeekItemTitle';

class WeekListItem extends Component {
  constructor() {
    super();

    this.state = {
      showContent: false
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({
      showContent: !this.state.showContent
    });
  }

  render() {
    let visible = this.state.showContent ? "showCont" : "hideCont";
    return(
      <li>
        <p onClick={this.handleClick}>Week {this.props.data.week}</p>
        <ul className={visible}>
          {this.props.data.topic.map((element, idx) => {
            return (
              <WeekItemTitle key={idx} data={element}/>
            );
          })}
        </ul>
      </li>
    );
  }
}

export default WeekListItem;
