<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\Rules\Password;

class UserController extends Controller
{
    /**
     * Menampilkan semua user
     */
    public function index()
    {
        $users = User::latest()->paginate(10);

        return response()->json([
            'message' => 'Data user berhasil diambil',
            'data' => $users,
        ]);
    }

    /**
     * Menampilkan detail user
     */
    public function show(User $user)
    {
        return response()->json([
            'message' => 'Detail user berhasil diambil',
            'data' => $user,
        ]);
    }

    /**
     * Menambahkan user
     */
    public function store(Request $request)
    {
        $data = $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|email|unique:users,email',
            'password' => ['required', Password::min(6)],
            'role' => 'required|in:admin,user',
        ]);

        $data['password'] = Hash::make($data['password']);

        $user = User::create($data);

        return response()->json([
            'message' => 'User berhasil ditambahkan',
            'data' => $user,
        ], 201);
    }

    /**
     * Update user
     */
    public function update(Request $request, User $user)
    {
        $data = $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|email|unique:users,email,' . $user->id,
            'role' => 'required|in:admin,user',
        ]);

        $user->update($data);

        return response()->json([
            'message' => 'User berhasil diperbarui',
            'data' => $user,
        ]);
    }

    /**
     * Hapus user
     */
    public function destroy(User $user)
    {
        $user->delete();

        return response()->json([
            'message' => 'User berhasil dihapus',
        ]);
    }
}
