<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Validator;

use App\User;
use App\Nosotros;
use App\Home;

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
        $users = User::all();
        return view('backend.users.list', ['users' => $users]);
    }

    public function addUser(Request $request) {

        $user = new User();
        $user->name = $request->name;
        $user->email = $request->email;
        $user->admin = ($request->admin) ? 1 : 0;
        $user->available = ($request->available) ? 1 : 0;
        $user->password = Hash::make(str_random(8));

        //Send the password by email, and send the link to change the password
        $password = $user->password;

        $user->save();
        return redirect(route('users'));
    }

    public function updateUser(Request $request) {

        $user = User::find($request->id);

        $user->name = $request->name;
        $user->email = $request->email;
        $user->admin = ($request->admin) ? 1 : 0;
        $user->available = ($request->available) ? 1 : 0;

        $user->save();
        return redirect(route('users'));
    }

    public function updateHome(Request $request) {

        // dd($request);
        $isHome = Nosotros::all();
        $home = ($isHome->isNotEmpty()) ? Home::find(1) : new Home();

        $validator = Validator::make($request->all(), [
            'title' => 'required|unique:home|max:255',
            'content' => 'required',
        ]);

        // TODO: send errors

        if ($validator->fails()) {
            return redirect(route('website-home'))
                        ->withErrors($validator)
                        ->withInput();
        } else {
            $home->title = $request->title;
            $home->content = $request->content;

            $home->save();
        }

        return redirect(route('website-home'));
    }

    public function updateNosotros(Request $request) {

        $isNosotros = Nosotros::all();
        $nosotros = ($isNosotros->isNotEmpty()) ? Nosotros::find(1) : new Nosotros();

        $validator = Validator::make($request->all(), [
            'title' => 'required|unique:nosotros|max:255',
            'content' => 'required',
        ]);

        // TODO: send errors

        if ($validator->fails()) {
            return redirect(route('website-nosotros'))
                        ->withErrors($validator)
                        ->withInput();
        } else {
            $nosotros->title = $request->title;
            $nosotros->content = $request->content;

            $nosotros->save();
        }

        return redirect(route('website-nosotros'));
    }
}
