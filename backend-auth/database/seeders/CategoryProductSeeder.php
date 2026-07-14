<?php

namespace Database\Seeders;

use App\Models\CategoryProduct;
use Illuminate\Database\Seeder;

class CategoryProductSeeder extends Seeder
{
    public function run(): void
    {
        CategoryProduct::insert([
            [
                'name' => 'Frontend Development',
                'slug' => 'frontend-development',
                'description' => 'Belajar membangun antarmuka website modern.',
            ],
            [
                'name' => 'Backend Development',
                'slug' => 'backend-development',
                'description' => 'Belajar membangun REST API dan server.',
            ],
            [
                'name' => 'Mobile Development',
                'slug' => 'mobile-development',
                'description' => 'Belajar membuat aplikasi Android dan iOS.',
            ],
            [
                'name' => 'UI/UX Design',
                'slug' => 'ui-ux-design',
                'description' => 'Belajar desain antarmuka dan pengalaman pengguna.',
            ],
            [
                'name' => 'Data Science',
                'slug' => 'data-science',
                'description' => 'Belajar analisis data dan machine learning.',
            ],
            [
                'name' => 'Digital Marketing',
                'slug' => 'digital-marketing',
                'description' => 'Belajar SEO, Google Ads dan Social Media Marketing.',
            ],
            [
                'name' => 'DevOps',
                'slug' => 'devops',
                'description' => 'Belajar Docker, CI/CD dan Cloud.',
            ],
            [
                'name' => 'Cyber Security',
                'slug' => 'cyber-security',
                'description' => 'Belajar keamanan jaringan dan aplikasi.',
            ],
        ]);
    }
}
