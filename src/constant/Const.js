

const BASE_URL = "http://localhost:8080";

const ADMIN_LOGIN_URL = BASE_URL + "/admin/login";
const ADMIN_PROFILE = BASE_URL + "/admin/me";
const ADMIN_LOGOUT = BASE_URL + "/admin/logout";
const ADMIN_GET_BUS_OWNERS = BASE_URL + "/admin/busowners";
const ADMIN_DEL_BUS_OWNERS = BASE_URL + "/admin/busowner";
const ADMIN_CREATE_BUS_OWNER = BASE_URL + "/admin/bus/owner";

export default {
    BASE_URL,
    ADMIN_LOGIN_URL,
    ADMIN_PROFILE,
    ADMIN_LOGOUT,
    ADMIN_GET_BUS_OWNERS,
    ADMIN_DEL_BUS_OWNERS,
    ADMIN_CREATE_BUS_OWNER
};