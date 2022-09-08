import React from 'react';

export default function Section({style, children}) {
  return (
    <section style={style}>
      {children}
    </section>
  );
}
