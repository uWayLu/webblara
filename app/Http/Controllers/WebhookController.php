<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Webhook;

class WebhookController extends Controller
{
    public function evernote(Request $request)
    {
    	// return 'Hello, evernote developer!' . json_encode($request->input());
	    $webhook = new Webhook;
	    $webhook->type = 'evernote';
	    $webhook->data = json_encode($request->input());
	    $webhook->created_at = time();

	    if ($webhook->save()) {
	        return json_encode($request->input());
	    } else {
	        return response('fail', 500);
	    }
    }    
}
