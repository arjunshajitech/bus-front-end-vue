

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
    BUSOWNER_LOGOUT
};