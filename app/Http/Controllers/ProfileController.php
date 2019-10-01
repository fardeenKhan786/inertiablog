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
        return Inertia::render('Profile/Index');
    }

    public function store(Request $request)
    {
        $userId = auth()->user()->id;
        $profile = Profile::updateOrCreate(
            [
                'user_id' => $userId,
            ],
            [
                'user_id' => $userId,
                'bio' => $request->bio,
                'url' => $request->url,
                'location' => $request->location
            ]
        );
        return redirect()->back();
    }
}
