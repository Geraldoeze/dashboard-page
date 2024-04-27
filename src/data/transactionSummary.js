import { BagIcon, NetflixIcon } from "../components/UIElements/svgIcons";
import React from "react";

export const TaxiIcon = () => <img src="/assets/image/taxi.svg" width={'20px'} height={'24px'} alt="" />
export const transactionSummaryData = [
  {
    desc: "Taxi",
    amount: "-$9,20",
    time: "01:21PM",
    icon: <TaxiIcon />,
  },
  {
    desc: "Shopping",
    amount: "+$142,00",
    time: "11:15AM",
    icon: <BagIcon />,
  },
  {
    desc: "Netflix",
    amount: "+$24,99",
    time: "Jan 10, 2020",
    icon: <NetflixIcon />,
  },
];
