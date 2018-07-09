@extends("layouts.backend")
@section("content")
    <section class="container form-users container col-10 col-xl-9 col-xs-8 float-right">
        <header class="columns section-header text-primary">
            <h1 class="column col-12 d-inline-block d-flex">Usuarios - add</h1>
        </header>
        <hr />
        <div class="container form">
            <div class="columns">
                <form action="{{ route('add-user-action') }}" method="POST">
                    <div class="form-group">
                        <label class="form-label" for="name">Nombre</label>
                        <input class="form-input" type="text" id="name" name="name" placeholder="Nombre">
                    </div>

                    <div class="divider"></div>

                    <div class="form-group">
                        <label class="form-label" for="email">Correo</label>
                        <input class="form-input" type="text" id="email" name="email" placeholder="Correo">
                    </div>

                    <div class="divider"></div>

                    <div class="form-group">
                        <label class="form-switch">
                            Usuario admin
                            <input type="checkbox" id="admin" name="admin" value="admin">
                            <i class="form-icon"></i>
                        </label>
                    </div>

                    <input type="submit" value="Agregar" class="btn btn-primary">

                    @csrf
                </form>
            </div>
        </div>
    </section>
@endsection