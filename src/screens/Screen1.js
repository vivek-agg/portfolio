import React from 'react';
const profile_pic = require('./../../assests/images/profile_pic.png');

const Screen1 = () => (
  <>
    <div className="screen screen1">
      <div className="screen_content">
        <img
          className="screen_content_title-profilePic"
          src={require('./../../assests/images/profile_pic1.jpg').default}
        />
        {/* <div className="screen_content_title-wrapper"> */}
        <div className="screen_content_title">
          <p className="screen_content_title-greet">Hi, I am</p>
          <p className="screen_content_title-name">Vivek Aggarwal</p>
        </div>
        {/* </div> */}
        <p className="screen_content_title-subtitle">Full stack dev</p>
      </div>
    </div>
  </>
);

export default Screen1;
