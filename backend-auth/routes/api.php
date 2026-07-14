<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\CategoryProductController;
use App\Http\Controllers\ProductController;
use App\Http\Controllers\UserController;
use App\Http\Controllers\OrderController;
use Illuminate\Support\Facades\Route;

/*-------------
| Public Routes
|--------------
*/

// Authentication
Route::post('/register', [AuthController::class, 'register']);
Route::post('/login', [AuthController::class, 'login']);

// Products (Boleh diakses semua orang)
Route::get('/products', [ProductController::class, 'index']);
Route::get('/products/{product}', [ProductController::class, 'show']);

// Categories (Boleh diakses semua orang)
Route::get('/categories', [CategoryProductController::class, 'index']);
Route::get('/categories/{categoryProduct}', [CategoryProductController::class, 'show']);


/*
|-----------------
| Protected Routes
|-----------------
*/

Route::middleware('auth:sanctum')->group(function () {

    // Auth
    Route::get('/me', [AuthController::class, 'me']);
    Route::post('/logout', [AuthController::class, 'logout']);

    // Product Management (Admin)
    Route::post('/products', [ProductController::class, 'store']);
    Route::put('/products/{product}', [ProductController::class, 'update']);
    Route::delete('/products/{product}', [ProductController::class, 'destroy']);

    // Category Management (Admin)
    Route::post('/categories', [CategoryProductController::class, 'store']);
    Route::put('/categories/{categoryProduct}', [CategoryProductController::class, 'update']);
    Route::delete('/categories/{categoryProduct}', [CategoryProductController::class, 'destroy']);

    // User
    Route::apiResource('users', UserController::class);

    // Order hanya bisa diakses oleh user ketika log in
    Route::apiResource('orders', OrderController::class);

});
