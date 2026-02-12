<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use Laravel\Fortify\Features;
use SebastianBergmann\CodeCoverage\Report\Html\Dashboard;

Route::inertia("/", "welcome");

Route::inertia("posts", "posts/index");

Route::inertia("dashboard", "dashboard");

Route::inertia("users", "users/index");

// route::get("/posts", function () {
//    return Inertia::render("Posts/Index");
// })->name("posts");

require __DIR__.'/settings.php';
