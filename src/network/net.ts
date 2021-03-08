import axios from "axios";
import { authMiddleWare } from "./middleware/auth";

function generateNet() {
  // Set config defaults when creating the instance
  const instance = axios.create({
    baseURL: 'http://localhost:8000/api/v1',
    timeout: 6000,
  });
  authMiddleWare(instance);
  return instance;
}

export const net = generateNet();
