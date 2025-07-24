import {
  LuLayoutDashboard,
  LuHandCoins,
  LuWalletMinimal,
  LuLogOut,
  LuInfo,
} from "react-icons/lu";

export const SIDE_MENU_DATA = [
  {
    id: "01",
    label: "Dashboard",
    icon: LuLayoutDashboard,
    path: "/dashboard",
  },
  {
    id: "02",
    label: "Income",
    icon: LuWalletMinimal,
    path: "/income",
  },
  {
    id: "03",
    label: "Expense",
    icon: LuHandCoins,  
    path: "/expense"
  },
  {
    id: "04",
    label: "About",
    icon: LuInfo,
    path: "/about"
  },
  {
   id: "06" ,
   label: "Logout",
   icon: LuLogOut,
   path: 'Logout'
  }
];


//You're importing Lucide UI icons from the react-icons library.
//This is an array of objects. Each object represents a single menu item with the following properties: