import React from 'react';

export default function Section({className, height, color, children}) {
  var style = {
    overflow: 'hidden',
    height: height,
    backgroundColor: color
  }

  return (
    <section className={className} style={style}>
      {children}
    </section>
  );
}
