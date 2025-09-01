<?php

use Illuminate\Support\Facades\Route;
use Blog\App\Http\Controllers\BlogController;

Route::get('/blog', [BlogController::class, 'index']);