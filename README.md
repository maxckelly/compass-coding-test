# Compass Survey Site

## Instructions 
- Step 1: `cd` into root folder
- Step 2: run `npm i` to install packages
- Step 3: run `npm start` to start server

## Packages
- React router dom: Controls the navigation for the whole site 
- React hook form: Easier to manage forms for quicker implementation and less overhead
- Axios: Handle all the calls to backend

## Navigation
- Navigation is all handled in `src/routes`.
- `Routes.js`: This file controls the auth routes. Currently all routes are open and no auth is required so we simply have unprotected routes. 
- `AppRouter.js`: Here we list all the routes and assign there pages. 

## Pages
### Survey page
  #### General Info
  - Surveys page is where we list all the surveys. We make a call to the server to return all surveys
  - Here we display the surveys in the order they're returned from the server. 
  - When the user clicks on the survey we pass the survey data through the routes state and display the data on the surveys page. We do this to avoid making another API call as it's likely users will click a survey and submit or return back.. 
  #### Components
  - In the surveys page we're using the `SurveyDisplayComponent` this takes `surveyTitle` and a `handleOnClick`
  #### Functions
  - `useEffect()` loads the surveys in on load
  - `displaySurveys()` Maps through survey array and displays the surveys 
  - `onSurveyPress(id, item)` Handles when the user clicks on the survey display component and directs them to that survey. This takes the survey `id` and survey `item` which we then pass through to the surveys page.  

### Surveys Question Page
  #### General Info 
  - In this page we're displaying the survey data, which we get from the route params passed through from the `SurveysPage.js`,
  - Here the user can see a number of questions, which have a number of options for the user to select from,
  - Finally the user then can one of the below buttons either press 'back' or 'submit',
  
  #### Components 
  - On this page we're using the `questionsCardComponent` which displays each individual question.
  - `ButtonComponent` here we're also displaying the two button components which control if the user wishes to submit the survey or return to the previous page. 

  #### Functions
  - `displayQuestions()` displays the question in the order they're returned from the server
  - `onSubmit()` handles when the user is submitting the survey and displays an alert on success which then navigates them to the SurveysPage screen

## Components
  ### Button Component 
  - Component takes a `title` param which displays within the button and a `handleOnClick` which handles should happen when the user clicks the button

  ### Checkbox Component 
  - This takes `label` param which displays next to the check box, `isChecked` param which controls if the check box should display checked or not, `onCheckboxChange` which handles what should happen when the checkbox is checked and unchecked.

  ### Navbar Component 
  - Component is rendered in `./routes/Routes.js` which is displayed across the site. It takes `pageTitle` that takes a string.

  ### Question Card Component 
  - Component takes `title` param which display the question title as a string, `subTitle` param which display the question string sub itle and the array of `options`
  - In the component we loop through the array of options and display the `CheckboxComponent` passing in the options text. 

  ### Survey Display Card Component
  - Component takes `surveyTitle` and a `handleOnClick`

  ## API

  ### Base route
  - This creates an `axios` route and exports it from the with the .env variable

  ### Surveys
  - `/surveys` : This API call makes a get request to the server returning the response data.
  - `/surveys/:id` : This API call makes a get request to the server returning the individual survey, it only does this when the location.state data is null.
