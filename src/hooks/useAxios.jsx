import axios from "axios";

const instance = axios.create({
  baseURL: "https://rental-car-server-seven.vercel.app",
});

const useAxios = () => {
  return instance;
};

export default useAxios;
