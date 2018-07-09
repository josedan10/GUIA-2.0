<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\User;

class AdminController extends Controller
{
    //

    public function __construct()
    {
        $this->middleware('auth');
    }

    public function index() {
        return view('backend.index');
    }

    //Users functions

    public function users() {
        return view('backend.users.list');
    }

    public function addUser(Request $request) {
        
        dd($request);

        $user = new User();
        $user->name = $request->name;
        $user->email = $request->email;
        $user->admin = $request->admin;

        $user->save();
        dd(User::all());
    }
}
