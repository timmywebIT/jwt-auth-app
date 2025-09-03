<?php

use App\Http\Controllers\AuthController;
use Illuminate\Support\Facades\Route;


Route::post('/login', [AuthController::class, 'login'])->name('login');
Route::post('/register', [AuthController::class, 'register'])->name('register');


Route::middleware(['auth:api', 'role:admin'])->get('/admin/dashboard', function () {
    return response()->json(['message' => 'Welcome, Admin']);
});

Route::middleware(['auth:api', 'role:user'])->get('/user/dashboard', function () {
    return response()->json(['message' => 'Welcome, User']);
});
