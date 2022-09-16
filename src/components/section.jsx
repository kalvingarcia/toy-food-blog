import React from 'react';

export default function Section({className, color, children}) {
  var style = {
    overflow: 'hidden',
    backgroundColor: color
  }

  return (
    <section className={className} style={style}>
      {children}
    </section>
  );
}
