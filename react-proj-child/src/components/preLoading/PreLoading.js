import React from 'react';
import styles from './preLoading.scss';

const PreLoading = () => {
  return (
    <div className={ styles['common-wraper']}>
      <img className={ styles['loading-gif'] } src={ require("./loading_green.gif") } alt="加载中..."/>
    </div>
  )
}

export default PreLoading;