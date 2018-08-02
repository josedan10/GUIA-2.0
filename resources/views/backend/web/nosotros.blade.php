@extends('layouts.backend')
@section('content')
    <section class="container col-10 float-right users-list">
        <header class="columns section-header text-primary">
            <h1 class="column col-12 d-inline-block d-flex">Nosotros</h1>
        </header>
        <hr />
        <div class="container form">
            @if($errors->any())
                @foreach ($errors as $error)
                    <span class="error">$error</span>
                @endforeach
            @endif
            <div class="columns">
                <div class="col col-12">
                    <form action="{{ route('website-nosotros-edit') }}" method="POST">
                        @csrf
                        <div class="form-group">
                            <label for="title" class="form-label">Título</label>
                            <input type="text" name="title" class="form-input" required placeholder="Título" @if(isset($nosotros)) value="{{ $nosotros->title }}" @endif>
                        </div>
                        <div class="form-group">
                            <label for="content" class="form-label">Contenido</label>
                            <textarea name="content" class="form-input" required placeholder="Contenido" rows="8">@if(isset($nosotros)) {{ $nosotros->content }}@endif</textarea>
                        </div>
                        <input type="submit" value="Editar" class="btn btn-primary">
                    </form>
                </div>
            </div>
        </div>
    </section>
@endsection
