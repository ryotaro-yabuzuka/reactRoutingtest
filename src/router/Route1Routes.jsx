import { Page1 } from "../Page1";
import { Page1DetailA } from "../Page1DetilA";
import { Page1DetailB } from "../Page1DetilB";

export const Route1Routers = [
  {
    path: "",
    exact: true,
    children: <Page1 />
  },
  {
    path: "/detailA",
    exact: false,
    children: <Page1DetailA />
  },
  {
    path: "/detailB",
    exact: false,
    children: <Page1DetailB />
  }
];
