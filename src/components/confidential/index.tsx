import React from 'react';
import styles from './index.less';

export default function (props: any) {
  return (
    <span className={styles.confidential} onClick={props.onClick}>
      {props.children}
    </span>
  );
}
