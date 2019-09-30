<?php

namespace App\Http\Controllers;

use App\Post;
use App\Comment;
use Illuminate\Http\Request;

class CommentController extends Controller
{
    public function store(Request $request, $post)
    {
        $comment = $this->validate(
            $request,
            [
                'comments' => 'required',
                'parent_id' => 'required'
            ],
            [
                'comments.required' => 'Comment field cannot be empty'
            ]
        );
        Comment::create(array_merge(
            $comment,
            [
                'user_id' => auth()->user()->id,
                'post_id' => $post,
            ]
        ));

        session()->flash('success', 'Comment is posted successfully');
        return redirect()->back();
    }
}
