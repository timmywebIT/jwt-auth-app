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
           'password' => bcrypt($validate['password']),
           'role' => 'user'
       ]);

       $token = JWTAuth::fromUser($user);

        return response()->json([
            'token' => $token,
            'role' => $user->role
        ], 201);
    }

    public function login(Request $request)
    {
        $credentials = $request->validate([
            'email' => 'required|email',
            'password' => 'required'
        ]);

        if (!$token = JWTAuth::attempt($credentials)) {
            return response()->json(['error' => 'invalid_credentials'], 401);
        }

        $user = auth()->user();

        return response()->json([
            'message' => 'Успешный вход!',
            'token' => $token,
            'role' => $user->role
        ], 200);
    }

    public function logout()
    {
        try {
            JWTAuth::invalidate(JWTAuth::getToken());
            return response()->json(['message' => 'Вы вышли из системы']);
        } catch (\Exception $e) {
            return response()->json(['error' => 'Не удалось выйти'], 500);
        }
    }
}
