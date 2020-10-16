import React from 'react';
import { onGlobalStateChange, setGlobalState } from '../index';

class About extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 0,
      curValue: 0
    },
    this.styleOne = {
      width: "130px",
      height: "45px"
    },
    this.styleTwo = {
      fontSize: "24px",
      marginTop: "24px"
    },
    this.qiankunApp = window.__POWERED_BY_QIANKUN__ ? true : false
  }
  
  componentDidMount() {
    if(window.__POWERED_BY_QIANKUN__) {
      onGlobalStateChange((state, prev) => {
        console.log(state, prev);
        this.setState({
          value: prev.num,
          curValue: state.num
        })
      }, true)
    }
  }

  // 使用这种语法需要借助@babel/plugin-proposal-class-properties插件进行转换
  modifiyVar = () => {
    let num = this.state.curValue;
    setGlobalState({ num: ++num });
  }

  render() {
    return (
      <div className="all-wraper">
        <p>这是About页面</p>
        <hr/>
        {
          this.qiankunApp && <div>
            <button style={ this.styleOne } onClick={ this.modifiyVar }>修改数值</button>
            <p style={ this.styleTwo }>修改过后的值-传递给主应用：{ this.state.curValue }</p>
            <p style={ this.styleTwo }>来自主应用Vue的值：{ this.state.value }</p>
          </div>
        }
        
      </div>
    )
  }
}

export default About;