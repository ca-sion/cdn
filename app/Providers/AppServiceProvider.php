<?php

namespace App\Providers;

use Statamic\Statamic;
use Illuminate\Support\ServiceProvider;
use Stillat\StatamicBardHeadingPermalinks\HeadingPermalinkExtension;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     */
    public function register(): void
    {
        //
    }

    /**
     * Bootstrap any application services.
     */
    public function boot(): void
    {
        // Statamic::vite('app', [
        //     'resources/js/cp.js',
        //     'resources/css/cp.css',
        // ]);

        HeadingPermalinkExtension::registerAll();
    }
}
