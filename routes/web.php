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

Route::get('/welcome', function(){
    return view('welcome');
});

Auth::routes();

Route::get('/', 'HomeController@index');
Route::get('article/{id}', 'ArticleController@show');
Route::post('comment', 'CommentController@store');

Route::group(['middleware' => 'auth', 'namespace' => 'Admin', 'prefix' => 'admin'], function(){
	Route::get('/', 'HomeController@index');
	Route::resource('/article', 'ArticleController');
	
	// Evernote
	Route::get('/evernote/notebooks', 'EvernoteController@notebooks');
	Route::get('/evernote/notebook/{guid}', 'EvernoteController@notebook');
	Route::get('/evernote/notebook/{guid}/notes', 'EvernoteController@notes');
	Route::get('/evernote/note/{guid}', 'EvernoteController@note');
	Route::get('/evernote/note/{guid}/tag', 'EvernoteController@note_tag');
	Route::get('/evernote/tags', 'EvernoteController@tags');
});
