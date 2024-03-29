<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\StoryController;
use App\Http\Controllers\AuthController;

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



Route::get('/lara', function () {
    return view('welcome');
});

Route::get('/data', [StoryController::class, 'getData']
)->name('data');

Route::post('/aus',  [AuthController::class, 'newUser']
)->name('aus');
