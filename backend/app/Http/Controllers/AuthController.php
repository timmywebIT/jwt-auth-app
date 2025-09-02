<?php

namespace App\Http\Controllers;
use App\Models\User;
use Illuminate\Http\Request;
use Tymon\JWTAuth\Facades\JWTAuth;

class AuthController extends Controller
{
    public function register(Request $request)
    {
       $validate = $request->validate([
           'name' => 'required|string',
           'email' => 'required|email|unique:users',
           'password' => 'required|string'
       ]);

       $user = User::create([
           'name' => $validate['name'],
           'email' => $validate['email'],
           'password' => bcrypt($validate['password'])
       ]);

       $token = JWTAuth::fromUser($user);
       return response()->json(['token' => $token], 201);
    }
}
