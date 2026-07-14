<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    use WithoutModelEvents;

    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        User::updateOrCreate(
            ['email' => 'admin@mail.com'],
            [
                'name'     => 'Admin Ganteng',
                'password' => 'password',
                'role'     => 'admin',
            ]
        );

        User::updateOrCreate(
            ['email' => 'user@mail.com'],
            [
                'name'     => 'User Biasa',
                'password' => 'password',
                'role'     => 'user',
            ]
        );
    }
}
