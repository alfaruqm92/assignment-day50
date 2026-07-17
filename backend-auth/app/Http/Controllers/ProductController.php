<?php

namespace App\Http\Controllers;

use App\Models\Product;
use Illuminate\Http\Request;

class ProductController extends Controller
{
    /**
     * Menampilkan semua product dengan pagination
     */
    public function index(Request $request){
        $search = $request->search;

        $products = Product::with('category')
            ->when($search, function ($query) use ($search) {
                $query->where('name', 'like', "%{$search}%");
            })
            ->latest()
            ->paginate(10);

        return response()->json($products);
    }

    /**
     * Menampilkan detail product
     */
    public function show(Product $product)
    {
        $product->load('category');

        return response()->json($product);
    }

    /**
     * Menambahkan product baru
     */
    public function store(Request $request)
    {
        $data = $request->validate([
            'category_product_id' => 'required|exists:category_products,id',
            'title' => 'required|string|max:255',
            'instructor' => 'required|string|max:255',
            'description' => 'required|string',
            'price' => 'required|numeric|min:0',
            'level' => 'required|in:Beginner,Intermediate,Advanced',
        ]);

        $product = Product::create($data);

        return response()->json([
            'message' => 'Product berhasil ditambahkan',
            'data' => $product,
        ], 201);
    }

    /**
     * Update product
     */
    public function update(Request $request, Product $product)
    {
        $data = $request->validate([
            'category_product_id' => 'required|exists:category_products,id',
            'title' => 'required|string|max:255',
            'instructor' => 'required|string|max:255',
            'description' => 'required|string',
            'price' => 'required|numeric|min:0',
            'image' => 'nullable|string',
            'rating' => 'nullable|numeric|min:0|max:5',
            'students' => 'nullable|integer|min:0',
            'level' => 'required|in:Beginner,Intermediate,Advanced',
        ]);

        $product->update($data);

        return response()->json([
            'message' => 'Product berhasil diperbarui',
            'data' => $product,
        ]);
    }

    /**
     * Hapus product
     */
    public function destroy(Product $product)
    {
        $product->delete();

        return response()->json([
            'message' => 'Product berhasil dihapus',
        ]);
    }
}
