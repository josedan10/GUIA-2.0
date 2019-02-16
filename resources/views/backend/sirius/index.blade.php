@extends('layouts.backend')
@section('content')

	<main class="container col-10 float-right">
		Bienvenido a Sirius

		<form action="">
			<input type="search" name="filter" id="searchInput">
		</form>

		<div>
			<ul>
				@if(Auth::user()->admin)
					<li>
						<a href="/admin/sirius/featured-articles">Featured articles</a>
					</li>
				@endif
					<li>
						<a href="/admin/sirius/create-article">Create new article</a>
					</li>
			</ul>
		</div>

	</main>

@endsection
