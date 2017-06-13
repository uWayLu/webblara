@extends('adminlte::layouts.app')

@section('htmlheader_title')
	{{ trans('adminlte_lang::message.evernote') . ' ' . trans('adminlte_lang::message.tags') }}
@endsection

@section('main-content')
	<div class="container-fluid spark-screen">
		<evernote></evernote>
		<div class="row" style="display: none;">
			<div class="col-md-10 col-md-offset-1">
				<!-- Default box -->
				<div class="box">
					<div class="box-header with-border">
						<h3 class="box-title">{{ trans('adminlte_lang::message.evernote') }} {{trans('adminlte_lang::message.tags') }}</h3>

						<div class="box-tools pull-right">
							<b-button size="sm" variant="primary">Refresh</b-button>
							<button type="button" class="btn btn-box-tool" data-widget="collapse" data-toggle="tooltip" title="Collapse">
								<i class="fa fa-minus"></i></button>
							<button type="button" class="btn btn-box-tool" data-widget="remove" data-toggle="tooltip" title="Remove">
								<i class="fa fa-times"></i></button>
						</div>
					</div>
					<div class="box-body">
						@foreach ($data as $tag)
							@if (!$tag->parentGuid)
								<div class="col-md-2"><span class="bg-primary" @click="save_tags">&nbsp;{{ $tag->name }}&nbsp;</span></div>
								@foreach ($data as $minortag)
									@if ($minortag->parentGuid == $tag->guid)
										<div class="col-md-2"><span class="bg-info" @click="save_tags">&nbsp;{{ $minortag->name }}&nbsp;</span></div>
									@endif
								@endforeach
							@endif
						@endforeach
					</div>
					<!-- /.box-body -->
				</div>
				<!-- /.box -->
			</div>
		</div>
	</div>
@endsection
