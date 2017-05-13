<?php

namespace App\Notifications;

// use Illuminate\Bus\Queueable;
use Illuminate\Notifications\Notification;
// use Illuminate\Contracts\Queue\ShouldQueue;
// use Illuminate\Notifications\Messages\MailMessage;

use NotificationChannels\Evernote\EvernoteChannel;
use NotificationChannels\Evernote\EvernoteContent;
use NotificationChannels\Evernote\EvernoteMessage;

class EvernoteNotify extends Notification
{
    use Queueable;

    /**
     * Create a new notification instance.
     *
     * @return void
     */
    public function __construct()
    {
        //
    }

    /**
     * Get the notification's delivery channels.
     *
     * @param  mixed  $notifiable
     * @return array
     */
    public function via($notifiable)
    {
        return [EvernoteChannel::class];
    }

    /**
     * 
     *
     * @param  $notifiable
     * @return 
     */
    public function toEvernote($notifiable)
    {
        return EvernoteMessage::create('Evernote message title')
                    ->sandbox()
                    ->content(EvernoteContent::create('Evernote content is here'))
                    ->tags(['Laravel','Notifications'])
                    ->reminder('tomorrow');
    }

    /**
     * Get the array representation of the notification.
     *
     * @param  mixed  $notifiable
     * @return array
     */
    public function toArray($notifiable)
    {
        return [
            //
        ];
    }

    /**
     * Save Evernote webhook notification to database.
     */
    public function toDatabase($notifiable)
    {
        # code...
    }
}
