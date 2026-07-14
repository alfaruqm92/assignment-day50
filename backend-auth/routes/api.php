<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\ProductController;
use App\Http\Controllers\UserController;
use Illuminate\Support\Facades\Route;

// ---------- PUBLIC ROUTES ----------
Route::post('/register', [AuthController::class, 'register']);
Route::post('/login',    [AuthController::class, 'login']);
Route::get('/products',  [ProductController::class, 'index']);

// ---------- PROTECTED ROUTES (butuh Bearer token) ----------
Route::middleware('auth:sanctum')->group(function () {
    Route::get('/me',      [AuthController::class, 'me']);
    Route::post('/logout', [AuthController::class, 'logout']);

    Route::get('/users', [UserController::class, 'index']);
    Route::get('/users/{id}', [UserController::class, 'show']);

    // ---------- ADMIN ONLY ----------
    Route::middleware('admin')->group(function () {
        Route::get('/admin/users', [ProductController::class, 'adminUsers']);
    });
});
