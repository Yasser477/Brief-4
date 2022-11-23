<?php

use App\Http\Controllers\testController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();

});

Route::post('brief',[testController::class,'store']);
Route::get('brief',[testController::class,'select']);
Route::delete('brief/{id}',[testController::class,'destroy']);
Route::get('/brief/{id}', [testController::class,'edit']);
Route::put('/brief/{id}', [testController::class,'update']);