<?php

namespace Ecommerce\App\Http\Controllers;

use App\Http\Controllers\Controller;
use Inertia\Inertia;

class EcommerceController extends Controller
{
    public function index()
    {
        return Inertia::render('ecommerce/ecommerce/index');
    }
}