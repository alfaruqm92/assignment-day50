<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('products', function (Blueprint $table) {

            $table->id();

            $table->foreignId('category_product_id')
                ->constrained('category_products')
                ->cascadeOnUpdate()
                ->restrictOnDelete();

            $table->string('title');

            $table->string('instructor');

            $table->text('description');

            $table->integer('price');

            $table->string('image')->nullable();

            $table->decimal('rating', 2, 1)->default(0);

            $table->integer('students')->default(0);

            $table->enum('level', [
                'Beginner',
                'Intermediate',
                'Advanced'
            ]);

            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('products');
    }
};
