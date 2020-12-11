import { axiosAPI } from './baseRoute';

export const getAllSurveys = async () => {
  try {
    const response = await axiosAPI.get('/surveys');
    return response;
  } catch (error) {
    console.log(error);
    return error;
  }
};

export const getSurvey = async (id) => {
  try {
    const response = await axiosAPI.get(`/surveys/${id}`);
    return response;
  } catch (error) {
    console.log(error);
    return error;
  }
};
