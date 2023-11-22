<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Story>
 */
class StoryFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'views' => rand(200, 1000),
            'likes' =>  rand(1, 100),
            'status' => 'active',
            'path' => fake()->image(),
            'rest' => '12 мин',
            'date' => fake()->date(),
            'content' => fake()->text(100),
            'duration' => 48,
            'views_per_hour' => '{
                "2": 120,
                "3": 92,
                "4": 18,
                "5": 143,
                "6": 13,
                "7": 14,
                "8": 143,
                "9": 43,
                "10": 213,
                "11": 143,
                "12": 183,
                "13": 13,
                "14": 143,
                "15": 43,
                "16": 143,
                "17": 13,
                "18": 143,
                "19": 143,
                "20": 143,
                "21": 13,
                "22": 173,
                "23": 43,
                "24": 43,
                "1": 14
                }',

        ];
}
}
