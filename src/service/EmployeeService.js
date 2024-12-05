
import axios from "axios";

const REST_API_GET = "http://192.168.0.107:8010/api/getAllEmp";

const REST_API_POST = "http://192.168.0.107:8010/api/addEmp";

const REST_API_PUT = "http://192.168.0.107/:8010/api/updateEmp/";

const REST_API_DEL = "http://192.168.0.107/8010/api/deleteEmp/";

export const listEmployees = () => axios.get(REST_API_GET);

export const createEmployee = (employee) => axios.post(REST_API_POST, employee);

export const updateEmployee = (employee) => axios.put(REST_API_PUT +employee.loginId, employee);

export const deleteEmployee = (loginId) => axios.delete(REST_API_DEL +loginId);