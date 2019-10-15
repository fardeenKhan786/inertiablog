<?php

namespace App\Console\Commands;

use App\Jobs\BirthdayWish as AppBirthdayWish;
use App\User;
use App\Mail\SendMail;
use Illuminate\Console\Command;
use Illuminate\Support\Facades\Mail;

class BirthdayWish extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'bday:wish';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Wish You a Happy Birthday';

    /**
     * Create a new command instance.
     *
     * @return void
     */
    public function __construct()
    {
        parent::__construct();
    }

    /**
     * Execute the console command.
     *
     * @return mixed
     */
    public function handle()
    {
        dispatch(new AppBirthdayWish());
    }
}
