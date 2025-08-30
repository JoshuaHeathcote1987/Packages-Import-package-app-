<?php

namespace Ecommerce\App\Providers;

use Illuminate\Support\ServiceProvider;
use Illuminate\Support\Facades\Route;

class EcommerceServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     */
    public function register(): void
    {
        // This is where you would bind things to the service container.
    }

    /**
     * Bootstrap any application services.
     */
    public function boot(): void
    {
        // This is where you load your routes and migrations.
        $this->loadRoutesFrom(__DIR__.'/../../routes/web.php');
        $this->loadMigrationsFrom(__DIR__.'/../../database/migrations');
    }
}