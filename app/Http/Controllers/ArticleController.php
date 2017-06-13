<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Article;

class ArticleController extends Controller
{
	public function __construct()
	{
		$this->evernote = (object) [];
		$this->evernote->token = 'S=s242:U=1edcefd:E=162b9d009b9:C=15b621edae8:P=1cd:A=en-devtoken:V=2:H=7be65e236b8886a878aa604ecd76eb6b';
		$this->evernote->client = new \Evernote\Client ($this->evernote->token, $sandbox = false);		
	}

    public function show($id)
    {
    	$article = Article::with('hasManyComments')->find($id);
    	if($article->source == 'evernote'){
			$note = $this->evernote->client->getNote ($article->source_id)->getEdamNote();
			$note->contentHash = '';

			$article->body = str_replace('en-note', 'div', strstr($note->content, '<en-note'));
			// $article->body = preg_replace('/<!--(\s)*Sublime(\w)*-->/', '123', $article->body);
			$article->body = preg_replace('/<!--(\s)*Sublime:[\S]*-->/', '', $article->body);
    	}

    	// return view('article/show')->with('article', Article::with('hasManyComments')->find($id));
    	return view('article/show')->with('article', $article);
    }
}
