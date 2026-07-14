<?php

namespace App\Http\Controllers;

use App\Models\CategoryProduct;
use Illuminate\Http\Request;

class CategoryProductController extends Controller
{
    /**
     * Menampilkan semua kategori
     */
    public function index()
    {
        $categories = CategoryProduct::orderBy('name')->get();

        return response()->json([
            'message' => 'Data kategori berhasil diambil',
            'data' => $categories,
        ]);
    }

    /**
     * Menampilkan detail kategori beserta product-nya
     */
    public function show(CategoryProduct $categoryProduct)
    {
        $categoryProduct->load('products');

        return response()->json([
            'message' => 'Detail kategori berhasil diambil',
            'data' => $categoryProduct,
        ]);
    }

    /**
     * Menambahkan kategori baru
     */
    public function store(Request $request)
    {
        $data = $request->validate([
            'name' => 'required|string|max:255',
            'slug' => 'required|string|unique:category_products,slug',
            'description' => 'nullable|string',
        ]);

        $category = CategoryProduct::create($data);

        return response()->json([
            'message' => 'Kategori berhasil ditambahkan',
            'data' => $category,
        ], 201);
    }

    /**
     * Mengubah kategori
     */
    public function update(Request $request, CategoryProduct $categoryProduct)
    {
        $data = $request->validate([
            'name' => 'required|string|max:255',
            'slug' => 'required|string|unique:category_products,slug,' . $categoryProduct->id,
            'description' => 'nullable|string',
        ]);

        $categoryProduct->update($data);

        return response()->json([
            'message' => 'Kategori berhasil diperbarui',
            'data' => $categoryProduct,
        ]);
    }

    /**
     * Menghapus kategori
     */
    public function destroy(CategoryProduct $categoryProduct)
    {
        $categoryProduct->delete();

        return response()->json([
            'message' => 'Kategori berhasil dihapus',
        ]);
    }
}
