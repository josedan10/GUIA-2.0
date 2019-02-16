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
    $nosotros = App\Nosotros::find(1);
    return view('frontend.main', ['nosotros' => $nosotros]);
});

Route::get('/info', function () {
    return response()->json([
        'stuff' => phpinfo()
    ]);
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

    //Home

    Route::get('website/home', function() {
        $isHome = App\Home::all();

        $home = ($ishome) ? App\Home::find(1) : null;

        return view('backend.web.home', ['home' => $home]);

    })->name('website-home');
    
    Route::post('website/home', function() {
        return redirect(route('website-home'));
    })->name('website-home-edit');

    //Nosotros

    Route::get('website/nosotros', function() {
        $isNosotros = App\Nosotros::all();

        $nosotros = ($isNosotros) ? App\Nosotros::find(1) : null;

        return view('backend.web.nosotros', ['nosotros' => $nosotros]);

    })->name('website-nosotros');

    Route::post('website/nosotros', 'AdminController@updateNosotros')->name('website-nosotros-edit');

    //Contacto

    Route::view('website/contacto', 'backend.web.contacto')->name('website-contacto');

    // Sirius Blog

    Route::view('website/sirius', 'backend.sirius.index')->name('sirius-index');
});
