<?php

namespace App\Http\Controllers;

use App\Post;
use App\Comment;
use Illuminate\Http\Request;

class CommentController extends Controller
{
    public function store(Request $request, $post)
    {
        $comments = $this->validate($request, [
            'comments' => 'required'
        ]);
        Comment::create(array_merge(
            $comments,
            [
                'user_id' => auth()->user()->id,
                'post_id' => $post,
            ]
        ));

        session()->flash('success', 'Comment is posted successfully');
        return redirect()->back();
    }
}
