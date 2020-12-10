import React from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';

// Route controller
import { UnprotectedRoutes } from './Routes';

// Pages
import SurveysPage from './../pages/SurveysPage';

const AppRouter = () => {
  return (
    <Router>
      <div>
        <Switch>
          <UnprotectedRoutes 
            path="/"
            component={SurveysPage}
            pageTitle="Surveys Page"
            exact
          />
          <UnprotectedRoutes 
            path="/survey"
            component={SurveysPage}
            pageTitle="Survey Questions"
            exact
          />
        </Switch>
      </div>
    </Router>
  )
}; 

export default AppRouter;
