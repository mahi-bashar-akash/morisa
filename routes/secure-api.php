<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\backend\AuthController;

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
    ['middleware' => ['AdminAuth']],
    function () {
        Route::group(
            ['prefix' => 'auth'],
            function () {
                Route::post('/login', [AuthController::class, 'admin_login'])->name('Admin.Auth.Login');
                Route::post('/register', [AuthController::class, 'admin_register'])->name('Admin.Auth.Register');
                Route::post('/forget', [AuthController::class, 'admin_forget'])->name('Admin.Auth.Forgot');
                Route::post('/reset', [AuthController::class, 'admin_reset'])->name('Admin.Auth.Reset');
            }
        );
    }
);

/*
|---- PROFILE API INTEGRATION ------------------------|
*/

Route::group(
    ['middleware' => ['AdminAuthReq'], 'prefix' => 'profile'],
    function () {
        Route::get('/details', [AuthController::class, 'admin_profile_details'])->name('Admin.Profile.Details');
        Route::patch('/update', [AuthController::class, 'admin_profile_update'])->name('Admin.Profile.Update');
        Route::patch('/update/password', [AuthController::class, 'admin_profile_update_password'])->name('Admin.Profile.Update.Password');
        Route::get('/logout', [AuthController::class, 'admin_profile_logout'])->name('Admin.Profile.Logout');
    }
);

/*
| ---- ---- ---- ---- ---- ---- USER PORTAL API INTEGRATION ---- ---- ---- ---- ---- ---- ---- ------ |
*/

/*
|---- AUTHENTICATION API INTEGRATION -----------------|
*/

Route::group(
    ['middleware' => ['UserAuth']],
    function () {
        Route::group(
            ['prefix' => 'auth'],
            function () {
                Route::post('/login', [AuthController::class, 'user_login'])->name('User.Auth.Login');
                Route::post('/register', [AuthController::class, 'user_register'])->name('User.Auth.Register');
                Route::post('/forget', [AuthController::class, 'user_forget'])->name('User.Auth.Forgot');
                Route::post('/reset', [AuthController::class, 'user_reset'])->name('User.Auth.Reset');
            }
        );
    }
);

/*
|---- PROFILE API INTEGRATION ------------------------|
*/

Route::group(
    ['middleware' => ['UserAuthReq'], 'prefix' => 'profile'],
    function () {
        Route::get('/details', [AuthController::class, 'user_profile_details'])->name('User.Profile.Details');
        Route::patch('/update', [AuthController::class, 'user_profile_update'])->name('User.Profile.Update');
        Route::patch('/update/password', [AuthController::class, 'user_profile_update_password'])->name('User.Profile.Update.Password');
        Route::get('/logout', [AuthController::class, 'user_profile_logout'])->name('User.Profile.Logout');
    }
);
