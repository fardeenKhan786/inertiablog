<?php

namespace App\Providers;

use Illuminate\Support\Facades\Auth;
use Illuminate\Support\ServiceProvider;
use Inertia\Inertia;
use Illuminate\Support\Facades\Session;

class AppServiceProvider extends ServiceProvider
{

    public function register()
    {
        Inertia::share([
            'auth' => function () {
                return [
                    'user' => Auth::user() ? [
                        'id' => Auth::user()->id,
                        'name' => Auth::user()->name,
                        'email' => Auth::user()->email,
                        'role' => Auth::user()->role,
                        'bio' => Auth::user()->profile ? Auth::user()->profile->bio : '',
                        'url' => Auth::user()->profile ? Auth::user()->profile->url : '',
                        'location' => Auth::user()->profile ? Auth::user()->profile->location : '',
                    ] : null,
                ];
            },
            'flash' => function () {
                return [
                    'success' => Session::get('success'),
                ];
            },
            'errors' => function () {
                return Session::get('errors')
                    ? Session::get('errors')->getBag('default')->getMessages()
                    : (object) [];
            },
        ]);
    }


    /**
     * Bootstrap any application services.
     *
     * @return void
     */
    public function boot()
    { }
}
