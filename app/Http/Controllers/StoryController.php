<?php

namespace App\Http\Controllers;


use Illuminate\Support\Facades\DB;
use Illuminate\Http\Client\Request;
use Illuminate\Database\Query\JoinClause;
use function Laravel\Prompts\select;

class StoryController extends Controller
{

    function getData($id){

        $user = DB::select('SELECT username, login, path, best_time, best_day  FROM users WHERE id = '.$id);
        $user[0]->follow =  DB::table('contacts')
            ->join('subscriptions', 'contacts.id', '=', 'subscriptions.contact_id')
            ->where('subscriptions.user_id', '=', $id)
            ->whereNotNull('subscriptions.followed_by_user' )
            ->select('contacts.*')
            ->get()
            ->toArray();


        $stories = DB::table('stories')
            ->join('views', 'views.story_id', '=', 'stories.id')
            ->where('stories.user_id', '=', $id)
            ->join('contacts', 'contacts.id', '=', 'views.follower_id')
            ->groupBy('views.follower_id')
            ->get()
            ->toArray();
//var_dump($followers);
//die();



        $user[0]->premium_followers =  DB::table('contacts')
            ->join('subscriptions', 'contacts.id', '=', 'subscriptions.contact_id')
            ->where('subscriptions.user_id', '=', $id)
            ->where('subscriptions.follower', '=', 1 )
            ->where('contacts.premium', '=', 1 )
            ->select('contacts.*')
            ->count();


var_dump($user[0]);
die();
        $data = json_encode($user[0]);

        return $data;
    }
}
