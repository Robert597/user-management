var Axios = require("axios");
// import Axios from "axios";
const getElements = async () => {
const response = await Axios.get("localhost:3500/api/Users");
const data = response.data;
console.log(data);
}
getElements();