<?php

namespace App\Http\Controllers\Admin;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class EvernoteController extends Controller
{
	public function __construct()
	{
		// $this->token = 'S=s242:U=1edcefd:E=162b9d009b9:C=15b621edae8:P=1cd:A=en-devtoken:V=2:H=7be65e236b8886a878aa604ecd76eb6b';
		$this->token = 'uwaylu.15BE8BC0E65.687474703A2F2F776562626C6172612E756264646E732E6F72672F61646D696E2F657665726E6F74652F6765745F6F617574685F746F6B656E.CAD3B1E8A9687F26DB6D7CA3E6736C0C';
		$this->client = new \Evernote\Client ($this->token, $sandbox = true);		
	}

    public function index()
    {
    	// return '使用 Evernote SDK php 開發中';
    	// print_r( $data=json_decode($this->tags()) );
    	return view('adminlte::evernote.tags',  ['data' => json_decode($this->tags())]);
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

		// 這個 token 應該被 return 並存起來(有期限)
    }

    public function notebooks()
    {
		$notebooks = $this->client->listNotebooks();

		$output = '';
		foreach ($notebooks as $notebook) {
			$output .= "<br /><br />Name : " . $notebook->name;
			$output .= "<br />Guid : " . $notebook->guid;
			$output .= "<br />Is Business : ";
			$output .= $notebook->isBusinessNotebook () ? "Y" : "N";
			$output .= "<br />Is Default  : ";
			$output .= $notebook->isDefaultNotebook () ? "Y" : "N";
			$output .= "<br />Is Linked   : ";
			$output .= $notebook->isLinkedNotebook () ? "Y" : "N";
			$output .= '<br /><a target="_blank" href="notebook/' . $notebook->guid . '">Read notebook</a>';
		}

		return $output;
		// print_r($notebooks);
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

		// print_r($notes);
		return $output;
    }

    public function note($guid)
    {
		$note = $this->client->getNote ($guid);

		$output = '';

		$output .= "<br /><br />Name : " . $note->title;
		$output .= "<br />Guid : " . $note->guid;
		$output .= '<br /><a target="_blank" href="/admin/evernote/note/' . $note->guid . '/tag">Get Tags of note.</a>';		

		// print_r($note);
		return $output;
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
