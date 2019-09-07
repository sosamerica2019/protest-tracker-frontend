import React from 'react';
import Linkify from 'react-linkify';

function Paragraph(props) {
  return (
    <p>
      {props.text.split('\n').map((text, key) => {
        return <Linkify key={key}>{text}<br /></Linkify>;
      })}
    </p>
  );
}

export default Paragraph;
