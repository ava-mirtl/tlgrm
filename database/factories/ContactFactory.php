<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Contact>
 */
class ContactFactory extends Factory
{

    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'name' => fake()->name(),
            'status' => 'В сети',
            'premium' =>  fake()->boolean(),
            'path' => fake()->image(),
            'login' => fake()->lastName(),
            'sex' => 'female',
        ];
    }
}
