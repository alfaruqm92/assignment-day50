<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class UserSeeder extends Seeder
{
    public function run(): void
    {
        User::insert([
            [
                'name' => 'Administrator',
                'email' => 'admin@coursehub.com',
                'password' => Hash::make('123456'),
                'role' => 'admin',
            ],
            [
                'name' => 'Muhammad Faruq',
                'email' => 'faruq@gmail.com',
                'password' => Hash::make('234567'),
                'role' => 'user',
            ],
            [
                'name' => 'Budi Santoso',
                'email' => 'budi@gmail.com',
                'password' => Hash::make('345678'),
                'role' => 'user',
            ],
            [
                'name' => 'Siti Aisyah',
                'email' => 'siti@gmail.com',
                'password' => Hash::make('456789'),
                'role' => 'user',
            ],
        ]);
    }
}
