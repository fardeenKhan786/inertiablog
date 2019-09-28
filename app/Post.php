<?php

namespace App;

use App\User;
use App\Comment;
use App\Category;
use Illuminate\Support\Str;
use Illuminate\Support\Carbon;
use Illuminate\Support\Facades\Gate;
use Illuminate\Database\Eloquent\Model;

class Post extends Model
{
    protected $guarded = [];
    protected $dates = [
        'publish_at'
    ];
    protected $casts = [
        'status' => 'boolean'
    ];
    // protected $appends = ['image_full_path'];

    // public function getImageFullPathAttribute()
    // {
    //     return  $this->image != null  ?  url('/storage/' . $this->image) : null;
    // }

    public function category()
    {
        return $this->belongsTo(Category::class);
    }

    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function comments()
    {
        return $this->hasMany(Comment::class);
    }


    public function toArray()
    {
        return parent::toArray() + [
            'summary' => Str::limit($this->description, 100),
            'image_full_path' =>   $this->image != null  ?  url('/storage/' . $this->image) : null,
            'publish_at_formated' => $this->publish_at->format('d M, Y'),
            'published_at_formated' => $this->publish_at->format('M d'),
            'can' => [
                'update' => Gate::denies('edit-post', $this),
                'delete' => Gate::denies('edit-post', $this),
            ]
        ];
    }
}
