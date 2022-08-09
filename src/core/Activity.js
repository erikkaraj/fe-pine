import axios from "axios";
import { axiosClient } from "../axios/axios";

/**
 * @returns {Array<Object>}
 */
let cancelToken;
const getPaginatedAtivities = async ({ query, pageNumber }) => {
  //Check if there are any previous pending requests
  if (typeof cancelToken != typeof undefined) {
    cancelToken.cancel("Operation canceled due to new request.");
  }

  //Save the cancel token for the current request
  cancelToken = axios.CancelToken.source();

  const response = await axiosClient.get(
    `/activities/${query}/paginated/${pageNumber}`,
    {
      cancelToken: cancelToken.token,
    }
  );
  const {
    data: { data: activitiesPaginated = {} },
  } = response;

  return activitiesPaginated;
};

/**
 * @returns {Array<Object>}
 */
const postActivity = async ({ payload }) => {
  const response = await axiosClient.post(`activity`, payload);
  const {
    data: { data: activity },
  } = response;

  return activity;
};

/**
 * @returns {Array<Object>}
 */
const getActivityByUser = async ({ userId }) => {
  const response = await axiosClient.get(
    `activities/${userId}/by-user?relations=[category,images]`
  );
  const {
    data: { data: activities },
  } = response;

  return activities;
};

/**
 * @returns {Array<Object>}
 */
const getActivity = async (activityId) => {
  const response = await axiosClient.get(
    `activity/${activityId}?relations=[category,images]`
  );
  const {
    data: { data: activity },
  } = response;

  return activity;
};

/**
 * @returns {Array<Object>}
 */
const putActivity = async ({ payload, activityId }) => {
  const response = await axiosClient.put(`activity/${activityId}`, payload);
  const {
    data: { data: activity },
  } = response;

  return activity;
};

/**
 * @returns {Array<Object>}
 */
const deleteActivity = async (activityId) => {
  const response = await axiosClient.delete(`activity/${activityId}`);
  const {
    data: { data: activity },
  } = response;

  return activity;
};

/**
 * @returns {Array<Object>}
 */
const postActivityImages = async ({ payload, activityId }) => {
  // make diffent formData per each file and request.
  let formData = new FormData();
  formData.append("file", payload);
  formData.append("name", payload.name);
  formData.append("activity_id", activityId);

  const response = await axiosClient.post(`activityimages`, formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
    timeout: 1000 * 30,
  });

  const {
    data: { data: image },
  } = response;

  return image;
};

export {
  getPaginatedAtivities,
  postActivity,
  getActivityByUser,
  getActivity,
  putActivity,
  deleteActivity,
  postActivityImages,
};
