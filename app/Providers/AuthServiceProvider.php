<?php

namespace App\Providers;

use App\Post;
use Illuminate\Foundation\Support\Providers\AuthServiceProvider as ServiceProvider;
use Illuminate\Support\Facades\Gate;

class AuthServiceProvider extends ServiceProvider
{
    /**
     * The policy mappings for the application.
     *
     * @var array
     */
    protected $policies = [
        // 'App\Model' => 'App\Policies\ModelPolicy',
    ];

    /**
     * Register any authentication / authorization services.
     *
     * @return void
     */
    public function boot()
    {
        $this->registerPolicies();
        $this->registerPostPolicies();
        //
    }

    public function registerPostPolicies()
    {
        Gate::define('edit-post', function ($user, Post $post) {
            return auth()->user()->isAdmin() || $user->id === $post->user_id;
        });
    }
}
