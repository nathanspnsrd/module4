import React from 'react';

import SubmissionForm from "./SubmissionForm"
import SubmittedImage from "./SubmittedImage"

import './App.css';
import { StoreContextConsumer } from './storeContext';

export default function App() {
  return (
      <div className="container">
        <SubmissionForm />
        <div>
          <StoreContextConsumer>
            {context => (
              context.completedSubmissions.map(completedSubmission => 
                <SubmittedImage {...completedSubmission} />         
              )
            )}
          </StoreContextConsumer>
        </div>
      </div>
  );
}

