"use client";

import { FaStar, FaTv } from "react-icons/fa";
import { FaArrowTrendUp, FaCircleExclamation } from "react-icons/fa6";
import { FiPlus } from "react-icons/fi";
import { MdLocalMovies } from "react-icons/md";
import { RiFlipVerticalLine } from "react-icons/ri";
import { SiFireship } from "react-icons/si";

export const TabsData = [
  {
    TabDetails: [
      {
        name: "Trending",
        icon: FaArrowTrendUp,
      },
      {
        name: "Popular",
        icon: SiFireship,
      },
      {
        name: "Recently Added",
        icon: FiPlus,
      },
      {
        name: "Premium",
        icon: FaStar,
      },
    ],
  },
];

export const SecondTabsData = [
  {
    TabDetails: [
      {
        name: "Movies",
        icon: MdLocalMovies,
      },
      {
        name: "Series",
        icon: RiFlipVerticalLine,
      },
      {
        name: "TV Shows",
        icon: FaTv,
      },
      {
        name: "Documentaries",
        icon: FaCircleExclamation,
      },
    ],
  },
];
