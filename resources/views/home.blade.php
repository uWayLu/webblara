@extends('layouts.app')

@section('content')
<div class="container">
    <div class="row">
        <div class="col-md-8 col-md-offset-2">
            <div class="panel panel-default">
                <div class="panel-heading">Dashboard</div>

                <div class="panel-body">
                    Dashboard is null now.
                </div>
            </div>
        </div>
    </div>
    <div class="row">
        <div class="col-md-12">
            <div class="panel panel-default">
                <div class="panel-heading">Articles</div>
                <div class="panel-body">
                    <ul class="articles">
                        @foreach ($articles as $article)
                        <li class="artilce">
                            <div class="title">
                                <a href="{{ url('article/'.$article->id) }}">
                                    <h4>{{ $article->title }}</h4>
                                </a>
                            </div>
                            <div class="content">
                                <p>{{ $article->body }}</p>
                            </div>
                        </li>
                        @endforeach
                    </ul>                    
                </div>
            </div>
        </div>
    </div>
</div>
@endsection
