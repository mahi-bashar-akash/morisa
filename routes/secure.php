<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\api\AuthController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

/*
| ---- ---- ---- ---- ---- ---- ADMIN PORTAL API INTEGRATION ---- ---- ---- ---- ---- ---- ---- ---- |
*/

/*
|---- AUTHENTICATION API INTEGRATION -----------------|
*/

Route::group(
    ['middleware' => 'adminAuth', 'prefix' => 'auth'],
    function () {
        Route::post('admin/login', [AuthController::class, 'admin_login'])->name('Admin.Auth.Login');
        Route::post('admin/register', [AuthController::class, 'admin_register'])->name('Admin.Auth.Register');
        Route::post('admin/forget', [AuthController::class, 'admin_forget'])->name('Admin.Auth.Forgot');
        Route::post('admin/reset', [AuthController::class, 'admin_reset'])->name('Admin.Auth.Reset');
    }
);

/*
|---- PROFILE API INTEGRATION ------------------------|
*/

Route::group(
    ['middleware' => 'adminAuthReq', 'prefix' => 'profile'],
    function () {
        Route::get('admin/details', [AuthController::class, 'admin_profile_details'])->name('Admin.Profile.Details');
        Route::patch('admin/update', [AuthController::class, 'admin_profile_update'])->name('Admin.Profile.Update');
        Route::patch('admin/update/password', [AuthController::class, 'admin_profile_update_password'])->name('Admin.Profile.Update.Password');
        Route::get('admin/logout', [AuthController::class, 'admin_profile_logout'])->name('Admin.Profile.Logout');
    }
);

/*
| ---- ---- ---- ---- ---- ---- USER PORTAL API INTEGRATION ---- ---- ---- ---- ---- ---- ---- ------ |
*/

/*
|---- AUTHENTICATION API INTEGRATION -----------------|
*/

Route::group(
    ['middleware' => 'userAuth', 'prefix' => 'auth'],
    function () {
        Route::post('/user/login', [AuthController::class, 'user_login'])->name('User.Auth.Login');
        Route::post('/user/register', [AuthController::class, 'user_register'])->name('User.Auth.Register');
        Route::post('/user/forget', [AuthController::class, 'user_forget'])->name('User.Auth.Forgot');
        Route::post('/user/reset', [AuthController::class, 'user_reset'])->name('User.Auth.Reset');
    }
);

/*
|---- PROFILE API INTEGRATION ------------------------|
*/

Route::group(
    ['middleware' => 'userAuthReq', 'prefix' => 'profile'],
    function () {
        Route::get('/user/details', [AuthController::class, 'user_profile_details'])->name('User.Profile.Details');
        Route::patch('/user/update', [AuthController::class, 'user_profile_update'])->name('User.Profile.Update');
        Route::patch('/user/update/password', [AuthController::class, 'user_profile_update_password'])->name('User.Profile.Update.Password');
        Route::get('/user/logout', [AuthController::class, 'user_profile_logout'])->name('User.Profile.Logout');
    }
);
