<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;

class PasswordChangeController extends Controller
{
    public function store(Request $request)
    {

        $this->validate(
            $request,
            [
                'current_password' => 'required',
                'password' => ' required|min:6|confirmed'
            ]
        );
        $user = auth()->user();
        if (Hash::check($request->current_password, $user->password)) {
            $user->password = Hash::make($request->password);
            $user->save();
            session()->flash('success', 'Password Updated');
            return redirect()->back();
        } else {
            return response([
                'status' => 'error',
                'message' => 'current password is incorrect!'
            ]);
        }
    }
}
