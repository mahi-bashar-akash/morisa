<?php

namespace App\Http\Controllers;

use Illuminate\Foundation\Auth\Access\AuthorizesRequests;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Routing\Controller as BaseController;

class AppController extends BaseController
{
    public function user() {
        return view('app.user');
    }

    public function admin() {
        return view('app.admin');
    }

    public function emailTemplate() {
        return view('emails.forget');
    }

}
