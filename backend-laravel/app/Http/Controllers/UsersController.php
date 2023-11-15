<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Frameworks;
use App\Models\Interests;
use App\Models\User;

class UsersController extends Controller
{
    public function index(){
        $user = User::where('id',1)->first();
        $frameworks = Frameworks::where('user_id',$user->id)->get();
        $interests = Interests::where('user_id',$user->id)->get();
        return response()->json(["frameworks"=>$frameworks,"interests"=>$interests,"user"=>$user]);
    }
}
