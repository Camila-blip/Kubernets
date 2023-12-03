import http from "k6/http";
import { sleep } from "k6";

//10 vus usuarios
//30 duration segundos de duração
// k6 run index.js

export const options = {
  vus: 10,
  duration: "30s",
};

export default function () {
  http.get("https://www.band.uol.com.br/");
  sleep(1);
}
