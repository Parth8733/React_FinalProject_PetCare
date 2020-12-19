import React, { useEffect } from 'react';
import Styles from './styles';

const Header = ({title}) => {
  useEffect(() => {
    document.title = title || 'Default tab title if the title property is falsey.';
  });

  return (
    <Styles.Header>
   
   <h1>{title}</h1>
      
    </Styles.Header>
  );
}
 
export default Header;