<?php

namespace App\Http\Controllers;

use App\Post;
use Illuminate\Http\Request;
use App\Mail\SendMail;
use Mail;

class PublishController extends Controller
{
    public function update(Post $post)
    {
        if ($post->status == 0) {
            $post->update([
                'status' => 1,

            ]);
            Mail::to($post->user->email)->send(
                new SendMail($post->user->name)
            );
            session()->flash('success', 'Your post is varified ! please check your mail');
        } else {
            $post->update([
                'status' => 0,
            ]);
        }


        return redirect()->back();
    }
}
