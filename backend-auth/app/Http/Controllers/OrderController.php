<?php

namespace App\Http\Controllers;

use App\Models\Order;
use Illuminate\Http\Request;

class OrderController extends Controller
{
    public function index()
    {
        $orders = Order::with(['user','product'])
            ->latest()
            ->paginate(10);

        return response()->json($orders);
    }

    public function show(Order $order)
    {
        return response()->json(
            $order->load(['user','product'])
        );
    }

    public function store(Request $request)
    {
        $data = $request->validate([
            'product_id'=>'required|exists:products,id'
        ]);

        $product = \App\Models\Product::findOrFail($data['product_id']);

        $order = Order::create([
            'user_id'=>auth()->id(),
            'product_id'=>$product->id,
            'order_date'=>now(),
            'total_price'=>$product->price,
            'status'=>'pending'
        ]);

        return response()->json([
            'message'=>'Order berhasil dibuat',
            'data'=>$order
        ],201);
    }

    public function update(Request $request, Order $order)
    {
        $request->validate([
            'status'=>'required|in:pending,paid,cancelled'
        ]);

        $order->update([
            'status'=>$request->status
        ]);

        return response()->json([
            'message'=>'Status order berhasil diperbarui',
            'data'=>$order
        ]);
    }

    public function destroy(Order $order)
    {
        $order->delete();

        return response()->json([
            'message'=>'Order berhasil dihapus'
        ]);
    }
}
