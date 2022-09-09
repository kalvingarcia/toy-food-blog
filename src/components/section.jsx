import React from 'react';

export default function Section({className, height, children}) {
  var style = {
    overflow: 'hidden',
    height: height
  }

  return (
    <section className={className} style={style}>
      {children}
    </section>
  );
}
