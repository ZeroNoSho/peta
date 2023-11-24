import axios from "axios";
export default function handler(req, res) {
  axios
    .get(
      `https://platform.antares.id:8443/~/antares-cse/cnt-mGykEPht4B5B9eos?fu=1&drt=2&ty=4`,
      {
        headers: {
          "X-M2m-Origin": "0428f1ab6e54f10b:dec8faeea8875466",
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      }
    )
    .then((response) => {
      res.status(200).json({ message: response.data });
    })
    .catch((err) => {});
}
