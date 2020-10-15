import React from 'react';

class Movies extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 100
    }
  }
  
  render() {
    return (
      <div className="all-wraper">
        <p>这是About页面</p>
        <hr/>
        <div>
          <button>修改数值</button>
          <p>{ this.state.value }</p>
        </div>
      </div>
    )
  }
}

export default Movies;