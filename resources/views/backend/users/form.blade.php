@extends("layouts.backend")
@section("content")
    <section class="container form-users container col-10 float-right">
        <header class="columns section-header text-primary">
            <h1 class="column col-12 d-inline-block d-flex">Usuarios - {{ $action }}</h1>
        </header>
        <hr />
        <div class="container form">
            <div class="columns">
                <form action="{{ ($action === 'add') ? route($action.'-user-action') : '/admin/users/'.$user->id.'/'.$action }}" method="POST">
                    
                    @if(isset($user))
                        <input type="hidden" name="id" value="{{ $user->id }}">
                    @endif

                    <div class="form-group">
                        <label class="form-label" for="name">Nombre</label>
                        <input class="form-input" type="text" id="name" name="name" placeholder="Nombre" value=@if(isset($user)) "{{ $user->name }}"@endif>
                    </div>

                    <div class="divider"></div>

                    <div class="form-group">
                        <label class="form-label" for="email">Correo</label>
                        <input class="form-input" type="text" id="email" name="email" placeholder="Correo" value=@if(isset($user)) "{{ $user->email }}"@endif>
                    </div>

                    <div class="divider"></div>

                    <div class="form-group">
                        <label class="form-switch">
                            Admin
                            <input type="checkbox" id="admin" name="admin">
                            <i class="form-icon"></i>
                        </label>
                    </div>
                    <div class="form-group">
                        <label class="form-switch">
                            Disponible
                            <input type="checkbox" id="available" name="available">
                            <i class="form-icon"></i>
                        </label>
                    </div>

                    @if($action === 'add')
                        <input type="submit" value="Agregar" class="btn btn-primary">
                    @else
                        <input type="submit" value="Editar" class="btn btn-primary">
                    @endif

                    @csrf
                </form>
            </div>
        </div>
    </section>
@endsection