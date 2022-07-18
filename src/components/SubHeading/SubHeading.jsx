import React from 'react';

import { images } from '../../constants';

const SubHeading = ({ title }) => (
  <div style={{ marginBottom: '1rem' }}>
    <p className="p__cormorant"><img src={images.perilica} alt="perilica" className="perilica__img" />{title}</p>
    
  </div>
);

export default SubHeading;
