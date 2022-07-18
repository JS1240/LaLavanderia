import React from 'react';

import { images } from '../../constants';
import './AboutUs.css';

const AboutUs = () => (
  <div className="app__aboutus app__bg flex__center section__padding" id="about">

    <div className="app__aboutus-content flex__center">
      <div className="app__aboutus-content_about">
        <h1 className="headtext__cormorant">O Nama</h1>
        <img src={images.perilica} alt="about_perilica" className="perilica__img" />
        <p className="p__opensans">Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
      molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum</p>
        <button type="button" className="custom__button">Saznaj Više</button>
      </div>

      <div className="app__aboutus-content_iron flex__center">
        <img src={images.pegla} alt="about_iron" />
      </div>

      <div className="app__aboutus-content_history">
        <h1 className="headtext__cormorant">Naša Povijest</h1>
        <img src={images.perilica} alt="about_perilica" className="perilica__img" />
        <p className="p__opensans">Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
      molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum</p>
        <button type="button" className="custom__button">Saznaj Više</button>
      </div>

    </div>
  </div>
);

export default AboutUs;
