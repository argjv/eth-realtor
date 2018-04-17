import Home from './layouts/home/Home'
import Dashboard from './layouts/dashboard/Dashboard'
import Wallet from './layouts/wallet/Wallet'
import Property from './layouts/property/Property'
//import SignUp from './user/layouts/signup/SignUp'
import Profile from './user/layouts/profile/Profile'

import {UserIsAuthenticated } from './util/wrappers.js'

import {
  Dashboard as DashboardIcon,
  Person,
  Home as HomeIcon,
  ViewList,
  AccountBalanceWallet
} from "@material-ui/icons";

export const appRoutes = [
  {
    path: "/home",
    sidebarName: "Home",
    icon: DashboardIcon,
    component: Home
  },
  {
    path: "/dashboard",
    sidebarName: "Dashboard",

    icon: ViewList,
    component: UserIsAuthenticated(Dashboard)
  },
  {
    path: "/wallet",
    sidebarName: "Wallet",

    icon: AccountBalanceWallet,
    component: UserIsAuthenticated(Wallet)
  },
  {
    path: "/property",
    sidebarName: "Property",

    icon: HomeIcon,
    component: UserIsAuthenticated(Property)
  },
  {
    path: "/profile",
    sidebarName: "Profile",

    icon: Person,
    component: UserIsAuthenticated(Profile)
  },
  { redirect: true, path: "/", to: "/home", navbarName: "Redirect" }
];

