import React from 'react';

import { Background, Company, Label, Logo, Title } from '../../components';
import './Template.css';

const Template = () => (
  <div className="Template">
    <div className="Template-document">
      <div className="Template-draggable-area">
        <Background />
        <Label />
        <Title />
        <Company />
        <Logo />
      </div>
    </div>
  </div>
);

export default Template;
