//App.tsx
import React, { useState } from 'react';

const ResumeMiddleTitle = (props) => {
  return (
    <div className="resume-middle-title">
      <h2>{props.title}</h2>
      {
        props.subTitle ? 
          <h4 style={{paddingLeft: '12px'}}>{props.subTitle}</h4> : 
          <></>
      }
      
    </div>
  );
}

export default ResumeMiddleTitle;