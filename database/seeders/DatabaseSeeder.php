<?php

namespace Database\Seeders;
use App\Models\Activity;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {

        for ($i = 0; $i < 10; $i++) {
            \App\Models\User::factory()->create();
            \App\Models\Contact::factory(40)->create();
            \App\Models\Story::factory(15)->create(
                [
                    'user_id' => $i+1,

                ]);
            \App\Models\Activity::factory()->create(
                [
                    'user_id' => $i+1,

                ]);
        };

        for ($i = 0; $i < 400; $i++) {
            \App\Models\Subscription::factory()->create([
                'user_id' => rand(1, 10),
                'contact_id' => rand(1, 400),
            ]);
              if ($i<150){
            \App\Models\View::factory()->create(
                [
                    'story_id' => $i + 1,
                    'follower_id' => $i + 1,
                ]
            );

               }
               else{
                   \App\Models\View::factory()->create(
                       [
                           'story_id' => rand(1, 150),
                           'follower_id' => $i + 1,
                       ]
                   );
               }
        };


//
//        $views = DB::table('views')->get();
//
//        foreach ($views as $view) {
//            $user_id = DB::table('stories')
//                ->where('id', $view->story_id)
//                ->select('user_id')
//                ->first();
//
//            if ($user_id) {
//                $user_id = $user_id->user_id;
//
//                DB::table('views')
//                    ->where('id', $view->id)
//                    ->update(['user_id' => $user_id]);
//            };
//        }
//

    }
}
