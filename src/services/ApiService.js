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
 * Get Pet Data from Service
 */
const GetPets = (
  endPoint = "/hub/pets/pets",
  status = "adoptable",
  petType = ""
) =>
  axios
    .get(
      `${getValue("apiRoot")}${endPoint}?status=${status}&recordsPerPage=1000${
        petType ? `&petType=${petType}` : ""
      }`
    )
    .then(({ status, data }) => (status === 200 ? data : []));

export { GetStatus, GetPets };
