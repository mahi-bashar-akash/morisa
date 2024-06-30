const apiVersion = '/secure/';

const apiRoutes = {

    /*
    |---- * ---- * ---- * ---- * ---- * ---- * ---- * ----|
    |---- ADMIN AUTHENTICATION API ROUTE INTEGRATION -----|
    |---- * ---- * ---- * ---- * ---- * ---- * ---- * ----|
    */

    adminLogin: apiVersion + 'auth/admin/login',
    adminRegistration: apiVersion + 'auth/admin/register',
    adminForget: apiVersion + 'auth/admin/forget',
    adminReset: apiVersion + 'auth/admin/reset',

    /*
    |---- * ---- * ---- * ---- * ---- * ---- * ---- * ----|
    |---- ADMIN PROFILE API ROUTE INTEGRATION ------------|
    |---- * ---- * ---- * ---- * ---- * ---- * ---- * ----|
    */

    adminDetails: apiVersion + 'profile/admin/details',
    adminDetailsUpdate: apiVersion + 'profile/admin/update',
    adminPasswordUpdate: apiVersion + 'profile/admin/update/password',
    adminLogout: apiVersion + 'profile/admin/logout',

    /*
    |---- * ---- * ---- * ---- * ---- * ---- * ---- * ----|
    |---- USER AUTHENTICATION API ROUTE INTEGRATION ------|
    |---- * ---- * ---- * ---- * ---- * ---- * ---- * ----|
    */

    userLogin: apiVersion + 'user/auth/login',
    userRegistration: apiVersion + 'user/auth/register',
    userForget: apiVersion + 'user/auth/forget',
    userReset: apiVersion + 'user/auth/reset',

    /*
    |---- * ---- * ---- * ---- * ---- * ---- * ---- * ----|
    |---- USER PROFILE API ROUTE INTEGRATION -------------|
    |---- * ---- * ---- * ---- * ---- * ---- * ---- * ----|
    */

    userDetails: apiVersion + 'user/profile/details',
    userDetailsUpdate: apiVersion + 'user/profile/update',
    userPasswordUpdate: apiVersion + 'user/profile/update/password',
    userLogout: apiVersion + 'user/profile/logout',

}

export default apiRoutes;
