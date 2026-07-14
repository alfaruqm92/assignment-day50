<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Product extends Model
{
    use HasFactory;

    protected $fillable = [
        'category_product_id',
        'title',
        'instructor',
        'description',
        'price',
        'image',
        'rating',
        'students',
        'level',
    ];

    public function category()
    {
        return $this->belongsTo(CategoryProduct::class);
    }

    public function orders()
{
    return $this->hasMany(Order::class);
}
}
