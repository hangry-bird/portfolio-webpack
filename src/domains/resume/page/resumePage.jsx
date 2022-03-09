//App.tsx
import React, { useState } from 'react';
import ResumeTitle from '../container/resumeTitle';
import ResumeAboutMe from '../container/resumeAboutMe';
import ResumeSkill from '../container/resumeSkill';
import ResumeExperience from '../container/resumeExperience';
import ResumeTMI from '../container/resumeTMI';
import ResumeFooter from '../container/resumeFooter';

const ResumePage = () => {

  return (
    <div className="resume-page">
        <ResumeTitle />
        <ResumeAboutMe />
        <ResumeSkill />
        <ResumeExperience />
        <ResumeTMI />
        <ResumeFooter />
    </div>
  );
}

export default ResumePage;