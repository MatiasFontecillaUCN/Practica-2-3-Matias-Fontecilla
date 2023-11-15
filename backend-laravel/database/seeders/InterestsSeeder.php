<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Interests;

class InterestsSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Interests::create([
            'interest' => 'Programacion',
        ]);
        Interests::create([
            'interest' => 'Anime',
        ]);Interests::create([
            'interest' => 'Libros',
        ]);
    }
}
