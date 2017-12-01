import React from 'react';

import { Background } from '../../components';
import './Template.css';

const Template = () => (
  <div className="Template">
    <div className="Template-document">
      <div className="Template-draggable-area">
        <Background />
      </div>
    </div>
  </div>
);

export default Template;
