<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::post('/contact', function (Request $request) {
    return response()->json([
        'message' => 'Принято!',
        'name' => $request->input('name')
    ]);
});
