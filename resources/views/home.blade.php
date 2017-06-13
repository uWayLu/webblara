@extends('layouts.app')

@section('content')
<div class="row">
    <div class="banner">
        <div class="col-md-12">
            <h1>[Web 開發] 虛假標題</h1>
        </div>
    </div>
</div>

<div class="container">
<!--     <div class="row">
        <div class="col-md-8 col-md-offset-2">
            <div class="panel panel-default">
                <div class="panel-heading">Dashboard</div>

                <div class="panel-body">
                    Dashboard is null now.
                </div>
            </div>
        </div>
    </div>
 -->
    <div class="row">
        <div class="col-md-9">
            <div class="panel panel-default">
                <div class="panel-heading"><h4><strong>文章列表 Articles</strong></h4></div>
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
        <div class="col-md-3">
            <div class="panel panel-info">
                <div class="panel-heading"><h4><strong>右欄操作功能區(類目搜尋?)</strong></h4></div>
                <div class="panel-body">內容</div>
            </div>
        </div>
    </div>
</div>
@endsection
