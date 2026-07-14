<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use App\Traits\ApiResponse;
use Illuminate\Database\Eloquent\ModelNotFoundException;

class UserController extends Controller
{
    use ApiResponse;

    public function index()
    {
        try {
            $users = User::all(['id', 'name', 'email', 'role', 'created_at']);
            return $this->successResponse($users, 'Users retrieved successfully');
        } catch (\Exception $e) {
            return $this->errorResponse('Failed to retrieve users', 500);
        }
    }

    public function show($id)
    {
        try {
            $user = User::findOrFail($id);
            return $this->successResponse($user, 'User retrieved successfully');
        } catch (ModelNotFoundException $e) {
            return $this->notFoundResponse('User not found');
        } catch (\Exception $e) {
            return $this->errorResponse('Failed to retrieve user', 500);
        }
    }
}
