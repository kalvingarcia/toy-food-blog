import React from 'react';

export default function Footer({}) {
  return (
    <div style={{backgroundColor: 'yellow'}}>
      <div className="row">
        <div className="col-sm">
          <span>Contact Us</span>
        </div>
        <div className="col-sm">
          <span>Something Here too</span>
        </div>
        <div className="col-sm">
          <ul>
            <span>Our Socials</span>
            <li>
              <span>Twitter</span>
            </li>
            <li>
              <span>Instagram</span>
            </li>
            <li>
              <span>Facebook</span>
            </li>
          </ul>
        </div>
      </div>
      <div>
        <span>Designed by Sam Rodriguez</span>
        <span>Built by Kalvin Garcia</span>
      </div>
    </div>
  );
}
