import React from 'react';

export default function Block({className, children}) {
  var style = {
    overflow: 'hidden'
  }

  return (
    <div className={className} style={style}>
      {children}
    </div>
  );
}
