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

    Route::view('/users/add', 'backend.users.form')->name('add-user');
    Route::post('/users/add', 'AdminController@addUser')->name('add-user-action');
});
