import React from 'react';

class Rating extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      rating: props.rating
    };
  }

  handleClick(rating) {
    this.setState({
      rating: rating
    });
  }

  render() {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      let className;
      if (this.state.rating >= i) {
        className = 'fa fa-star';
      } else {
        className = 'fa fa-star-o';
      }
      stars.push(
        <i
          className={className}
          key={i}
          onClick={() => this.handleClick(i)}
        ></i>
      );
    }
    return (
      <div>
        {stars}
      </div>
    );
  }
}

export default Rating;
