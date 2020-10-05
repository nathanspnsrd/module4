import React from 'react';

import SubmissionForm from "./SubmissionForm"
import SubmittedImages from "./SubmittedImages"

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
                <SubmittedImages {...completedSubmission} />         
              )
            )}
          </StoreContextConsumer>
        </div>
      </div>
  );
}

