@extends('layouts.backend')
@section('content')
    <section class="container col-10 float-right users-list">
        <header class="columns section-header text-primary">
            <h1 class="column col-12 d-inline-block d-flex">Nosotros</h1>
        </header>
        <hr />
        <div class="container form">
            <div class="columns">
                <div class="col col-12">
                    <form action="{{ route('website-nosotros-edit') }}" method="POST">
                        <div class="form-group">
                            <label for="title" class="form-label">Título</label>
                            <input type="text" class="form-input" placeholder="Título" @if(isset($nosotros)) value="{{ $nosotros->title }}" @endif>
                        </div>
                        <div class="form-group">
                            <label for="content" class="form-label">Contenido</label>
                            <textarea class="form-input" placeholder="Contenido" rows="8">@if(isset($nosotros)) {{ $nosotros->content }}@endif</textarea>
                        </div>
                        <input type="submit" value="Editar" class="btn btn-primary">
                    </form>
                </div>
            </div>
        </div>
    </section>
@endsection