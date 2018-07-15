<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Notifications\Notifiable;

class Nosotros extends Model
{
    use Notifiable;

    protected $fillable = [
        'title', 'content'
    ];
}
