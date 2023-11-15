<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Interests;
use App\Models\Frameworks;
use App\Models\User;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // \App\Models\User::factory(10)->create();

        // \App\Models\User::factory()->create([
        //     'name' => 'Test User',
        //     'email' => 'test@example.com',
        // ]);
        $user = User::create([
            'name'=>"Matias Fontecilla",
            'email'=>"matias.fontecilla@gmail.com",
            'birth_place'=>"Quito",
            'summary'=>"Estudiante de tercer año de ingenieria civil en computacion e informatica.",
            'age'=>"21",
            'img_path'=>"../assets/download.png",
        ]);
        Interests::create([
            'interest' => 'Programacion',
            'user_id' => $user->id,
            'img_path'=>"../assets/programacion.jpg",
        ]);
        Interests::create([
            'interest' => 'Anime',
            'user_id' => $user->id,
            'img_path'=>"../assets/anime.png",
        ]);Interests::create([
            'interest' => 'Libros',
            'user_id' => $user->id,
            'img_path'=>"../assets/libro.png",
        ]);
        Frameworks::create([
            'framework' => 'Laravel',
            'user_id' => $user->id,
            'handle' => '20',
        ]);
        Frameworks::create([
            'framework' => 'Flask',
            'user_id' => $user->id,
            'handle' => '30',
        ]);
        Frameworks::create([
            'framework' => 'Svelte',
            'user_id' => $user->id,
            'handle' => '2',
        ]);
        Frameworks::create([
            'framework' => 'dotNet',
            'user_id' => $user->id,
            'handle' => '5',
        ]);
        Frameworks::create([
            'framework' => 'Boostrap',
            'user_id' => $user->id,
            'handle' => '10',
        ]);
    }
}
