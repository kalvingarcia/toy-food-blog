import React from 'react';

export default function Section({children, bg_image}) {
  return (
    <section style={{backgroundImage: `url(${bg_image})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover'}}>
      {children}
    </section>
  );
}
