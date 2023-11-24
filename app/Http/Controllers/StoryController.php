<?php

namespace App\Http\Controllers;


use Illuminate\Support\Facades\DB;
use Illuminate\Http\Client\Request;

class StoryController extends Controller
{

    function getData($id){
        $user = DB::select('SELECT username, login, path, best_time, best_day  FROM users WHERE id = '.$id);
        $user[0]->follow =
        $story =  DB::select('select * from stories where id = '.$id);
        $story[0]->people = DB::table('contacts')
            ->join('views', 'contacts.id', '=', 'views.follower_id')
            ->where('views.story_id', '=', $id)
            ->select('contacts.*')
            ->get();
        $data = json_encode($story[0]);
        return $data;
    }
}
