import axios from "axios";
import { baseUrl } from "..";

const getProcessStatusChart = async () => {
  let response = await axios.get(`${baseUrl}/api/Report/ProcessStatusChart`);
  return response;
};

const getQuantityByMonth = async () => {
  let response = await axios.get(`${baseUrl}/api/Report/GetQuantityByMonth`);
  return response;
};

const getTopAgentByTotalQuantity = async () => {
  let response = await axios.get(
    `${baseUrl}/api/Report/TopAgentByTotalQuantity`
  );
  return response;
};

const getTopAgentByTotalQrders = async () => {
  let response = await axios.get(`${baseUrl}/api/Report/TopAgentByTotalOrders`);
  return response;
};

export {
  getProcessStatusChart,
  getQuantityByMonth,
  getTopAgentByTotalQuantity,
  getTopAgentByTotalQrders,
};
