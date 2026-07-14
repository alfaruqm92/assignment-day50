<?php

namespace Database\Seeders;

use App\Models\Product;
use Illuminate\Database\Seeder;

class ProductSeeder extends Seeder
{
    public function run(): void
    {
        Product::insert([
            [
                'category_product_id' => 1,
                'title' => 'Complete React JS Bootcamp',
                'instructor' => 'John Doe',
                'description' => 'Belajar React dari dasar hingga mahir.',
                'price' => 399000,
                'image' => 'react.jpg',
                'rating' => 4.8,
                'students' => 1200,
                'level' => 'Beginner',
            ],
            [
                'category_product_id' => 1,
                'title' => 'Next.js Complete Guide',
                'instructor' => 'John Doe',
                'description' => 'Belajar Next.js App Router.',
                'price' => 499000,
                'image' => 'nextjs.jpg',
                'rating' => 4.9,
                'students' => 950,
                'level' => 'Intermediate',
            ],
            [
                'category_product_id' => 2,
                'title' => 'Laravel REST API Mastery',
                'instructor' => 'Jane Smith',
                'description' => 'Membangun REST API menggunakan Laravel.',
                'price' => 449000,
                'image' => 'laravel.jpg',
                'rating' => 4.9,
                'students' => 980,
                'level' => 'Intermediate',
            ],
            [
                'category_product_id' => 2,
                'title' => 'Node.js API Development',
                'instructor' => 'Kevin Tan',
                'description' => 'Express.js dan REST API.',
                'price' => 379000,
                'image' => 'node.jpg',
                'rating' => 4.8,
                'students' => 870,
                'level' => 'Intermediate',
            ],
            [
                'category_product_id' => 3,
                'title' => 'Flutter Mobile Development',
                'instructor' => 'Sarah Wilson',
                'description' => 'Membuat aplikasi Android & iOS.',
                'price' => 549000,
                'image' => 'flutter.jpg',
                'rating' => 4.9,
                'students' => 890,
                'level' => 'Intermediate',
            ],
            [
                'category_product_id' => 4,
                'title' => 'UI/UX Design with Figma',
                'instructor' => 'Emily Clark',
                'description' => 'Desain UI modern menggunakan Figma.',
                'price' => 299000,
                'image' => 'figma.jpg',
                'rating' => 4.7,
                'students' => 760,
                'level' => 'Beginner',
            ],
            [
                'category_product_id' => 5,
                'title' => 'Python for Data Science',
                'instructor' => 'Michael Lee',
                'description' => 'Belajar Python untuk analisis data.',
                'price' => 459000,
                'image' => 'python.jpg',
                'rating' => 4.8,
                'students' => 1400,
                'level' => 'Intermediate',
            ],
            [
                'category_product_id' => 6,
                'title' => 'Digital Marketing Masterclass',
                'instructor' => 'Ahmad Rizki',
                'description' => 'SEO, Google Ads dan Meta Ads.',
                'price' => 329000,
                'image' => 'marketing.jpg',
                'rating' => 4.6,
                'students' => 670,
                'level' => 'Beginner',
            ],
            [
                'category_product_id' => 7,
                'title' => 'Docker & Kubernetes',
                'instructor' => 'Kevin Tan',
                'description' => 'Containerization dan orchestration.',
                'price' => 499000,
                'image' => 'docker.jpg',
                'rating' => 4.8,
                'students' => 510,
                'level' => 'Advanced',
            ],
            [
                'category_product_id' => 8,
                'title' => 'Cyber Security Fundamentals',
                'instructor' => 'David Miller',
                'description' => 'Dasar keamanan jaringan dan aplikasi.',
                'price' => 429000,
                'image' => 'cybersecurity.jpg',
                'rating' => 4.7,
                'students' => 420,
                'level' => 'Beginner',
            ],
        ]);
    }
}
