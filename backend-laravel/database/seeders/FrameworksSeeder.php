<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Frameworks;

class FrameworksSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Frameworks::create([
            'framework' => 'Laravel',
            'handle' => '20',
        ]);
        Frameworks::create([
            'framework' => 'Flask',
            'handle' => '30',
        ]);
        Frameworks::create([
            'framework' => 'Svelte',
            'handle' => '2',
        ]);
        Frameworks::create([
            'framework' => 'dotNet',
            'handle' => '5',
        ]);
        Frameworks::create([
            'framework' => 'Boostrap',
            'handle' => '10',
        ]);
    }
}
