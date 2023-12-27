<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Illuminate\Http\Request;
use Illuminate\Database\Query\JoinClause;
use App\Models\User;
use function Laravel\Prompts\select;


use danog\MadelineProto\Broadcast\Progress;
use danog\MadelineProto\Broadcast\Status;
use danog\MadelineProto\Broadcast\Filter;
use danog\MadelineProto\EventHandler;
use danog\MadelineProto\Logger;
use danog\MadelineProto\Settings;
use danog\MadelineProto\Settings\Database\Mysql;
use danog\MadelineProto\Settings\Database\Postgres;
use danog\MadelineProto\Settings\Database\Redis;
use danog\MadelineProto\API;
use danog\MadelineProto\Tools;
use danog\MadelineProto;

    /**
     * Показать профиль конкретного пользователя.
     *
     * @param  Request  $request
     * @param  int  $id
     * @return Response
     */

class StoryController extends Controller
{
    function getBestDate(){
        
    }

    function getData() {

              if(Auth::user()) {
                $id=Auth::id();
              }else{
               $id=5;};

        $user = DB::select('SELECT login, path, username, best_time, best_day  FROM users WHERE id = '.$id);
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

             
        foreach ($user[0]->auditory as &$value) {
            $value->views = DB::table('views')
                ->select('id')
                ->where('views.follower_id', '=', $value->id)
                ->where('views.user_id', '=', $id)
                ->count();
        }

          foreach ($user[0]->auditory as &$value) {
            $value->likes = DB::table('views')
                ->select('like')
                ->where ('views.like', '=', 1)
                ->where('views.follower_id', '=', $value->id)
                ->where('views.user_id', '=', $id)
                ->count();
        }

        $user[0]->followers = $user[0]->auditory->count();
        $user[0]->activity = DB::table('activities')
            ->where('user_id', '=', $id)
            ->get()
            ->toArray();

        $user[0]->stories = DB::table('stories')
            ->where('stories.user_id', '=', $id)
            ->orderByRaw('stories.date DESC')
            ->get()
            ->toArray();

            foreach ($user[0]->stories as &$story) {
            $story->views = DB::table('views')
                ->select('id')
                ->where('views.story_id', '=', $story->id)
                ->count();
               }

        foreach ($user[0]->stories as &$value) {
            $value->people = DB::table('views')
                ->select('contacts.path', 'contacts.name', 'contacts.id', 'contacts.status', 'views.like', 'views.date')
                ->where('views.story_id', '=', $value->id)
                ->join('contacts', 'contacts.id', '=', 'views.follower_id')
                ->get()
                ->toArray();

            foreach ($value->people as &$person) {
                $person->date = DB::table('views')
                    ->select('views.date')
                    ->where('views.user_id', '=', $id)
                    ->where('views.follower_id', '=', $person->id)
                    ->where('views.story_id', '=', $value->id)
                    ->get()
                    ->toArray();
            }
        }


        $data = json_encode($user[0]);

        return $data;
    }

function newUser(Request $request){
    
        $url = 'https://ce50348.tw1.ru/';
        $data = $request->json()->all();
        $user = User::where('app_id', $data['id'])->first();
        if ($user){
            $user->remember_token =  $request->session()->get('_token');
            $user->save();
        }else{
            $imagePath = str_replace('\\', '', $data['photo_url']);
            $login = $data['username'];
            $userFolder = public_path('images/' . $login);
    if (!file_exists($userFolder)) {
        mkdir($userFolder, 0770, true);
    }
     $fileName = $login . '_avatar.jpg';
    $contents = file_get_contents($imagePath);
    file_put_contents($userFolder . '/' . $fileName, $contents);

            $username = $data['first_name'];
                if (isset($data['last_name'])) {
                 $username .= ' ' . $data['last_name'];
                }

            $user = User::create([
                'username' => $username,
                'login' => $login,
                'path' => 'images/' . $login .'/'.$login . '_avatar.jpg',
                'remember_token' => $request->session()->get('_token'),
                'hash' => $data['hash'],
                'best_time' => 'с 04:00 до 6:12',
                'best_day' => 'четверккк',
                'app_id' => $data['id'],
            ]);}

        
        Auth::loginUsingId($user->id);
       
    }


}
