import {
  CircleIcon,
  HomeIcon,
  MessageIcon,
  WalletIcon,
} from "../../components/UIElements/svgIcons";
import React from "react";

export const navConfig = [
  {
    id: 1,
    path: "/dashboard",
    icon: <HomeIcon />,
  },
  {
    id: 2,
    path: "/chart",
    icon: <CircleIcon />,
  },
  { id: 3, path: "/message", icon: <MessageIcon /> },
  { id: 4, path: "/wallet", icon: <WalletIcon /> },
];
