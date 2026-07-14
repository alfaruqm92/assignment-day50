<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class ProductController extends Controller
{
    private array $products = [
        ['id' => 1, 'name' => 'Kopi Arabika',  'price' => 85000, 'stock' => 20],
        ['id' => 2, 'name' => 'Kopi Robusta',  'price' => 65000, 'stock' => 35],
        ['id' => 3, 'name' => 'Teh Hijau',     'price' => 45000, 'stock' => 50],
        ['id' => 4, 'name' => 'Cokelat Panas', 'price' => 30000, 'stock' => 15],
    ];

    /**
     * PUBLIC: siapa saja boleh lihat daftar produk.
     * GET /api/products
     */
    public function index()
    {
        return response()->json(['data' => $this->products]);
    }

    /**
     * ADMIN ONLY
     * GET /api/admin/users
     */
    public function adminUsers()
    {
        return response()->json([
            'message' => 'Data khusus admin',
            'data'    => \App\Models\User::select('id', 'name', 'email', 'role')->get(),
        ]);
    }
}
