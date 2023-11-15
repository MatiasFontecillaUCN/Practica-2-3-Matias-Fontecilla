<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\User;

class users extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        User::create([
            'name'=>"Matias Fontecilla",
            'email'=>"matias.fontecilla@gmail.com",
            'birth_place'=>"Quito",
            'description'=>"Estudiante de tercer año de ingenieria civil en computacion e informatica.",
            'age'=>"21",
        ]);
    }
}
