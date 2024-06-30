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

    userLogin: apiVersion + 'auth/user/login',
    userRegistration: apiVersion + 'auth/user/register',
    userForget: apiVersion + 'auth/user/forget',
    userReset: apiVersion + 'auth/user/reset',

    /*
    |---- * ---- * ---- * ---- * ---- * ---- * ---- * ----|
    |---- USER PROFILE API ROUTE INTEGRATION -------------|
    |---- * ---- * ---- * ---- * ---- * ---- * ---- * ----|
    */

    userDetails: apiVersion + 'profile/user/details',
    userDetailsUpdate: apiVersion + 'profile/user/update',
    userPasswordUpdate: apiVersion + 'profile/user/update/password',
    userLogout: apiVersion + 'profile/user/logout',

}

export default apiRoutes;
