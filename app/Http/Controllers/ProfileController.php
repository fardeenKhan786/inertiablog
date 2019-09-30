<?php

namespace App\Http\Controllers;

use App\User;
use App\Profile;
use Inertia\Inertia;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;

class ProfileController extends Controller
{
    public function index()
    {
        $user = auth()->user();
        return Inertia::render('Profile/Index', compact('user'));
    }

    public function PasswordChange(Request $request)
    {
        $a = Hash::check($request->current_password, auth()->user()->password);
        dd($a);
    }
}
