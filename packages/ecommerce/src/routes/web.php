<?php

use Illuminate\Support\Facades\Route;
use Ecommerce\App\Http\Controllers\EcommerceController;

Route::get('/ecommerce', [EcommerceController::class, 'index']);