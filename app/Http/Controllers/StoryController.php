<?php

namespace App\Http\Controllers;


use Illuminate\Support\Facades\DB;
use Illuminate\Http\Client\Request;
use Illuminate\Database\Query\JoinClause;
use function Laravel\Prompts\select;

class StoryController extends Controller
{

    function getData(){
        $id = 7;
        $user = DB::select('SELECT username, login, path, best_time, best_day  FROM users WHERE id = '.$id);
        $user[0]->follow =  DB::table('contacts')
            ->join('subscriptions', 'contacts.id', '=', 'subscriptions.contact_id')
            ->where('subscriptions.user_id', '=', $id)
            ->whereNotNull('subscriptions.followed_by_user' )
            ->select('contacts.*')
            ->count();
        $user[0]->premium_followers =  DB::table('contacts')
            ->join('subscriptions', 'contacts.id', '=', 'subscriptions.contact_id')
            ->where('subscriptions.user_id', '=', $id)
            ->where('subscriptions.follower', '=', 1 )
            ->where('contacts.premium', '=', 1 )
            ->select('contacts.*')
            ->count();
        $user[0]->auditory =
            DB::table('contacts')
                ->join('subscriptions', 'contacts.id', '=', 'subscriptions.contact_id')
                ->where('subscriptions.user_id', '=', $id)
                ->where('subscriptions.follower', '=', 1 )
                ->select('contacts.*')
                ->get();
        $user[0]->followers = $user[0]->auditory->count();
        $user[0]->activity = DB::table('activities')
            ->where('user_id', '=', $id)
            ->get()
            ->toArray();

        $user[0]->stories = DB::table('stories')
            ->where('stories.user_id', '=', $id)
            ->get()
            ->toArray();

        foreach ($user[0]->stories as &$value) {
            $value->people = DB::table('views')
                ->select('contacts.path', 'contacts.name', 'contacts.id', 'contacts.status', 'views.like', 'views.created_at')
                ->where('views.story_id', '=', $value->id)
                ->join('contacts', 'contacts.id', '=', 'views.follower_id')
                ->get()
                ->toArray()
            ;

            foreach ($value->people as &$person) {
                $person->views = DB::table('views')
                    ->where('views.user_id', '=', $id)
                    ->where('views.follower_id', '=', $person->id)
                    ->count()
                ;
            }
        }


        $data = json_encode($user[0]);

        return $data;
    }
}
