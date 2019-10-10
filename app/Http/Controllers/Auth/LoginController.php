<?php

namespace App\Http\Controllers\Auth;

use App\User;
use Socialite;
use Inertia\Inertia;
use Illuminate\Support\Str;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;
use Illuminate\Foundation\Auth\AuthenticatesUsers;

class LoginController extends Controller
{
    /*
    |--------------------------------------------------------------------------
    | Login Controller
    |--------------------------------------------------------------------------
    |
    | This controller handles authenticating users for the application and
    | redirecting them to your home screen. The controller uses a trait
    | to conveniently provide its functionality to your applications.
    |
    */

    use AuthenticatesUsers;

    /**
     * Where to redirect users after login.
     *
     * @var string
     */
    protected $redirectTo = '/home';

    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('guest')->except('logout');
    }

    public function showLoginForm()
    {
        return Inertia::render('Auth/Login');
    }


    public function redirectToProvider()
    {
        return Socialite::driver('github')->redirect();
    }

    /**
     * Obtain the user information from GitHub.
     *
     * @return \Illuminate\Http\Response
     */
    public function handleProviderCallback()
    {
        $Githubuser = Socialite::driver('github')->user();
        // dd($Githubuser);

        $user = User::updateOrCreate(
            [
                'provider_id' => $Githubuser->getId(),
            ],
            [
                'name' => $Githubuser->getName(),
                'uuid' =>  Str::uuid(),
                'provider_id' => $Githubuser->getId(),
            ]
        );

        Auth::login($user, true);

        return redirect($this->redirectTo);
    }
}
