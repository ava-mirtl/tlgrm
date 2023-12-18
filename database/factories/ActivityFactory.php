<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Activity>
 */
class ActivityFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            '0' => json_encode([
                "storiesPublished" => 1,
                "percentage" => 60,
                "storyViews" => 342,
            ]),
            '1' => json_encode([
                "storiesPublished" => 2,
                "percentage" => 34,
                "storyViews" => 176,
            ]),
            '2' => json_encode([
                "storiesPublished" => 3,
                "percentage" => 75,
                "storyViews" => 482,
            ]),
            '3' => json_encode([
                "storiesPublished" => 2,
                "percentage" => 64,
                "storyViews" => 368,
            ]),
            '4' => json_encode([
                "storiesPublished" => 5,
                "percentage" => 70,
                "storyViews" => 426,
            ]),
            '5' => json_encode([
                "storiesPublished" => 3,
                "percentage" => 86,
                "storyViews" => 514,
            ]),
            '6' => json_encode([
                "storiesPublished" => 2,
                "percentage" => 64,
                "storyViews" => 369 ])
        ];
    }
}
