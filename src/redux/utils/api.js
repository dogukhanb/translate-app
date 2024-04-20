import axios from "axios";

export default axios.create({
  baseURL: "https://text-translator2.p.rapidapi.com",

  headers: {
    "X-RapidAPI-Key": "45265695a1mshe1b7ae3dc7b3f5ap19e428jsnea5e60b503cb",
    "X-RapidAPI-Host": "text-translator2.p.rapidapi.com",
  },
});
