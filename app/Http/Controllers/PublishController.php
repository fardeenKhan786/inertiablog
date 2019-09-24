<?php

namespace App\Http\Controllers;

use App\Post;
use Illuminate\Http\Request;

class PublishController extends Controller
{
    public function update(Post $post)
    {
        if ($post->status == 0) {
            $post->update([
                'status' => 1,
            ]);
        } else {
            $post->update([
                'status' => 0,
            ]);
        }


        return redirect()->back();
    }
}
