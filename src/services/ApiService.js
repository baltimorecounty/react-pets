import { Config } from "@baltimorecounty/javascript-utilities";
import axios from "axios";

const { getValue } = Config;

/**
 * Determines if api is up or not
 * @returns true if the api is available
 */
const GetStatus = () =>
  axios
    .get(`${getValue("apiRoot")}/status`)
    .then(({ status }) => status === 200);

/**
 * Get News Data from SiteExecutive structured content
 */
const GetPets = (endPoint = "/hub/pets", status = "adoptable", petType = "") =>
  axios
    .get(
      `${getValue("apiRoot")}${endPoint}?status=${status}${
        petType ? `&petType=${petType}` : ""
      }`
    )
    .then(({ status, data }) => (status === 200 ? data : []));

export { GetStatus, GetPets };
