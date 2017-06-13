<?php

namespace App\Http\Controllers\Admin;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class EvernoteController extends Controller
{
	public function __construct()
	{
		$this->token = 'S=s242:U=1edcefd:E=162b9d009b9:C=15b621edae8:P=1cd:A=en-devtoken:V=2:H=7be65e236b8886a878aa604ecd76eb6b';
		$this->client = new \Evernote\Client ($this->token, $sandbox = false);		
	}

    public function index()
    {
    	// return '使用 Evernote SDK php 開發中';
    	// print_r( $data=json_decode($this->tags()) );
    	return view('adminlte::evernote',  ['data' => json_decode($this->tags())]);
    }

    public function get_oauth_token(Request $request){
		//set this to false to use in production
		$sandbox = true;

		$oauth_handler = new \Evernote\Auth\OauthHandler($sandbox);

		$key      = env('EVERNOTE_APP_KEY');
		$secret   = env('EVERNOTE_APP_SECRET');
		$callback = $request->url();

		$oauth  = $oauth_handler->authorize($key, $secret, $callback);
		// $headers = headers_list ();

		// foreach ($headers as $header) {
		// if (substr ($header, 0, '9') == 'Location:' && strpos ($header, 'sandbox.evernote.com/OAuth.action') !== false)
	 //  		return redirect(substr ($header, 10));
		// }

		$oauth  = $oauth_handler->authorize($key, $secret, $callback);
		
		// echo json_encode($headers);

		// var_dump($oauth);
		// exit;

		$oauth_token = $request->input('oauth_token');
		// print_r($_SESSION);		
		// return json_encode($request->input());

		// $output = "Oauth Token : " . $oauth_token
		$output = "Oauth Token : " . $oauth['oauth_token']
		  . "<br />"
		  . "Evernote authed";

		return $output;

    }

    public function notebooks()
    {
		$notebooks = $this->client->listNotebooks();

		// $output = '';
		// foreach ($notebooks as $notebook) {
		// 	$output .= "<br /><br />Name : " . $notebook->name;
		// 	$output .= "<br />Guid : " . $notebook->guid;
		// 	$output .= "<br />Is Business : ";
		// 	$output .= $notebook->isBusinessNotebook () ? "Y" : "N";
		// 	$output .= "<br />Is Default  : ";
		// 	$output .= $notebook->isDefaultNotebook () ? "Y" : "N";
		// 	$output .= "<br />Is Linked   : ";
		// 	$output .= $notebook->isLinkedNotebook () ? "Y" : "N";
		// 	$output .= '<br /><a target="_blank" href="notebook/' . $notebook->guid . '">Read notebook</a>';
		// }

		// return $output;
		// return json_encode($notebooks[0]->getEdamNotebook());
    	// return json_encode($notebooks, JSON_UNESCAPED_SLASHES | JSON_UNESCAPED_UNICODE);
		$notebooks = array_map(function($notebook){ return $notebook->getEdamNotebook(); }, $notebooks);

		// return json_encode(json_decode($notebooks), JSON_UNESCAPED_SLASHES | JSON_UNESCAPED_UNICODE);
		return json_encode($notebooks, JSON_UNESCAPED_SLASHES | JSON_UNESCAPED_UNICODE);
    }

    public function notebook($guid)
    {
		$notebook = $this->client->getNotebook ($guid);

		$output = '';

		$output .= "<br /><br />Name : " . $notebook->name;
		$output .= "<br />Guid : " . $notebook->guid;
		$output .= '<br /><a target="_blank" href="' . $notebook->guid . '/notes">Read notebook</a>';		

		// print_r($notebook);
		return $output;
    }

    public function notes($guid)
    {
		$filter = new \EDAM\NoteStore\NoteFilter ();
		$filter->notebookGuid = $guid;
		$filter->order = \EDAM\Types\NoteSortOrder::UPDATED;

		$search = $this->client->getAdvancedClient ()->getNoteStore ()->findNotes ($this->token, $filter, 0, 100);
		$notes = $search->notes;

		$output = '';

		foreach ($notes as $note) {
			$output .= "<br /><br />Name : " . $note->title;
			$output .= "<br />Guid : " . $note->guid;
			$output .= '<br /><a target="_blank" href="/admin/evernote/note/' . $note->guid . '">Read note</a>';		
		}

		// $notes[0]->contentHash = mb_convert_encoding($notes[0]->contentHash, 'utf-8');
		// print_r(json_encode($notes[0]));

		// return $output;
		// echo gettype($notes);
		// print_r(json_encode($notes));

		$notes = array_map(function($note){
			$note->contentHash = '';
			$note->resources = '';
			return $note;
		}, $notes);

		// print_r($notes);

		return $notes;
    }

    public function note($guid)
    {
		$note = $this->client->getNote ($guid);

		$output = '';

		$output .= "<br /><br />Name : " . $note->title;
		$output .= "<br />Guid : " . $note->guid;
		$output .= '<br /><a target="_blank" href="/admin/evernote/note/' . $note->guid . '/tag">Get Tags of note.</a>';		

		$note = $note->getEdamNote();
		$note->contentHash = '';

		// return 
		return json_encode($note);
		// return $output;
    }

    public function note_tag($guid)
    {
		$note = $this->client->getNote ($guid);

		$tagGuids = $note->getEdamNote ()->tagGuids;
		$tagNames = $this->client->getAdvancedClient ()->getNoteStore ()->getNoteTagNames ($note->getGuid ());

		// 如果要拉某個 Notebook 下的所有 Tag
		// $bookTags = $this->client->getAdvancedClient ()->getNoteStore ()->listTagsByNotebook ($book->getGuid ());

		$output = '';

		foreach ((Array) $tagGuids as $k => $guid) {
		$output .= "<br /><br />Name : " . $tagNames[$k];
		$output .= "<br />Guid : " . $guid;
		}

		return $output;
    }

    public function tags()
    {
		$tags = $this->client->getAdvancedClient ()->getNoteStore ()->listTags ();
    	return json_encode($tags, JSON_UNESCAPED_SLASHES | JSON_UNESCAPED_UNICODE);
    }
}
