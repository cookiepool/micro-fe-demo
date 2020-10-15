import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.js';
import './assets/reset.scss';

import './public-path';

// ReactDOM.render(<App />, document.getElementById('root'));

// 声明渲染函数
function render(props) {
  props.onGlobalStateChange((state, prev) => {
    console.log(state);
  })
  ReactDOM.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
    document.getElementById('root')
  );
}

// 如果应用是独立运行的则直接运行（不作为子应用）
if (!window.__POWERED_BY_QIANKUN__) {
  console.log('APP');
  render();
}

// 调用qiankun的三个钩子函数
// bootstrap 只会在微应用初始化的时候调用一次，下次微应用重新进入时会直接调用 mount 钩子，不会再重复触发 bootstrap。
// 通常我们可以在这里做一些全局变量的初始化。
export async function bootstrap() {
  console.log("react app bootstraped");
}

// 触发应用的渲染方法
export async function mount(props) {
  console.log("react app mount", props);
  render(props);
}

// 卸载微应用的应用实例
export async function unmount() {
  console.log("react app unmount");  
  ReactDOM.unmountComponentAtNode(document.getElementById("root"));
}