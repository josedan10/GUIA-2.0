<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('frontend.main');
});

Auth::routes();

Route::get('/home', 'HomeController@index')->name('home');

Route::prefix('/admin')->group(function() {
    Route::get('/','AdminController@index')->name('admin');
    Route::get('/users', 'AdminController@users')->name('users');

    Route::get('/users/add', function() {

        return view('backend.users.form', ['action' => 'add']);
    })->name('add-user');
    Route::post('/users/add', 'AdminController@addUser')->name('add-user-action');

    Route::get('/users/{id}/edit', function($id) {
        return view('backend.users.form', ['action' => 'edit', 'user' => App\User::find($id)]);
    });
    Route::post('/users/{id}/edit','AdminController@updateUser')->name('edit-user-action');

    Route::get('/users/{id}/available', function($id) {
        //Toogle available user
        $user = App\User::find($id);
        $user->available = !$user->available;
        $user->save();
        
        return redirect(route('users'));
    });

    Route::delete('/users/{id}/delete', function($id) {
        $user = App\User::find($id);
        $user->delete();

        return redirect(route('users'));
    });

    // Website

    Route::view('website/home', 'backend.website.home')->name('website-home');
    Route::view('website/nosotros', 'backend.website.nosotros')->name('website-nosotros');
    Route::view('website/contacto', 'backend.website.contacto')->name('website-contacto');
});
