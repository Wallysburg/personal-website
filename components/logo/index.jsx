import React from 'react';
import logo from './img/profile.jpeg';
import styles from './styles.module.css';

import 'react-github-button/assets/style.css';

const Logo = ({height, width}) => (<img className={styles.logo} src={logo} height={height} width={width} />);

export default Logo;
