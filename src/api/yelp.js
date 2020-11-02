import axios from "axios";
export default axios.create({
  // baseURL: 'https://api.yelp.com/v3/businesses',
  // baseURL: 'https://jsonplaceholder.typicode.com',
  baseURL: "http://demo02.gamscloud.vn/adminapi/api/Department",
  headers: {},
});
