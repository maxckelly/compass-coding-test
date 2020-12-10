import React from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';

// Route controller
import { UnprotectedRoutes } from './Routes';

// Pages
import SurveysPage from './../pages/SurveysPage';
import SurveysQuestionPage from './../pages/SurveysQuestionsPage';

const AppRouter = () => {
  return (
    <Router>
      <div>
        <Switch>
          <UnprotectedRoutes 
            path="/"
            component={SurveysPage}
            pageTitle="Compass Surveys Page"
            exact
          />
          <UnprotectedRoutes 
            path="/survey/:id"
            component={SurveysQuestionPage}
            pageTitle="Survey Questions"
            exact
          />
        </Switch>
      </div>
    </Router>
  )
}; 

export default AppRouter;
