

const BASE_URL = "http://localhost:8080";

const ADMIN_LOGIN_URL = BASE_URL + "/admin/login";
const ADMIN_PROFILE = BASE_URL + "/admin/me";
const ADMIN_LOGOUT = BASE_URL + "/admin/logout";
const ADMIN_GET_BUS_OWNERS = BASE_URL + "/admin/busowners";
const ADMIN_DEL_BUS_OWNERS = BASE_URL + "/admin/busowner";
const ADMIN_CREATE_BUS_OWNER = BASE_URL + "/admin/bus/owner";


const BUSOWNER_LOGIN_URL = BASE_URL + "/busowner/login";
const BUSOWNER_PROFILE = BASE_URL + "/busowner/me";
const BUSOWNER_LOGOUT = BASE_URL + "/busowner/logout";
const BUSOWNER_CREATE_BUS = BASE_URL + "/busowner/bus";
const BUSOWNER_LIST_BUS = BASE_URL + "/busowner/bus";
const BUSOWNER_DELETE_BUS = BASE_URL + "/busowner/bus";
const BUSOWNER_CREATE_ROUTE = BASE_URL + "/busowner/routes";
const BUSOWNER_LIST_ROUTE = BASE_URL + "/busowner/routes";
const BUSOWNER_DELETE_ROUTE = BASE_URL + "/busowner/routes";


const LOCATIONS = [
    "Aryakara, Alappuzha",
    "Muhamma, Alappuzha",
    "Kavungal, Alappuzha",
    "Thampakachuvad, Alappuzha",
    "Rodumuku, Alappuzha",
    "Komalapuram, Alappuzha",
    "Thalavady, Alappuzha",
    "Arayd, Alappuzha",
    "Kalath, Alappuzha",
    "Mulakkal, Alappuzha"
]




export default {
    BASE_URL,
    ADMIN_LOGIN_URL,
    ADMIN_PROFILE,
    ADMIN_LOGOUT,
    ADMIN_GET_BUS_OWNERS,
    ADMIN_DEL_BUS_OWNERS,
    ADMIN_CREATE_BUS_OWNER,


    BUSOWNER_LOGIN_URL,
    BUSOWNER_PROFILE,
    BUSOWNER_LOGOUT,
    BUSOWNER_CREATE_BUS,
    BUSOWNER_LIST_BUS,
    BUSOWNER_DELETE_BUS,
    BUSOWNER_CREATE_ROUTE,
    BUSOWNER_LIST_ROUTE,
    BUSOWNER_DELETE_ROUTE,


    LOCATIONS
}