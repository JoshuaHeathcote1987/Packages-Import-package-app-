<?php

namespace Blog\App\Http\Controllers;

use App\Http\Controllers\Controller;
use Inertia\Inertia;

class BlogController extends Controller
{
    public function index()
    {
        return Inertia::render('blog/blog/index');
    }
}