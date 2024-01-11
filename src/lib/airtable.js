import axios from "axios";

export default axios.create({
  baseURL: "https://api.airtable.com/v0/app04gpmKMySbcl3B",
  // commbocc@gmail.com account read only api key
  headers: {
    Authorization: `Bearer patCMqNApPrJE8SXi.143baa8db7f29e133b886a0c24776496d00671e7ac993231593b78a2cfe599a6`,
  },
});
