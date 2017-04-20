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
    	return '使用 Evernote SDK php 開發中';
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

		print_r($note);
		// return $output;
    }
}
