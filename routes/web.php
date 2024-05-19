<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/

Route::get('/user/', [\App\Http\Controllers\UserController::class, 'index'])->where('any', '.*')->name('lvs.user');
Route::get('/user/{any}', [\App\Http\Controllers\UserController::class, 'index'])->where('any', '.*')->name('lvs.user.any');
Route::get('/', function () { return redirect()->route('lvs.user.any', 'home'); } );
