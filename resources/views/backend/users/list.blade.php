@extends('layouts.backend')
@section('content')
    <section class="container col-10 col-xl-9 col-xs-8 float-right users-list">
        <header class="columns section-header text-primary">
            <h1 class="column col-11 d-inline-block d-flex">Usuarios</h1>
            <div class="column col-1 action d-flex">
                <a href="{{ route('add-user') }}"><i class="icon icon-plus"></i></a>
            </div>
        </header>
        <hr />


        <div class="columns list">
            <table class="users-table table table-striped">
                <thead>
                    <tr>
                        <th>Nombre</th>
                        <th>Correo</th>
                        <th>Tipo de usuario</th>
                        <th>Fecha de creación</th>
                        <th>Actions</th>
                    </tr>
                </thead>
    
                <tbody>
                    <tr>
                        <th>José Daniel Quintero</th>
                        <th>josedanq100@gmail.com</th>
                        <th>admin</th>
                        <th>01/01/2018</th>
                        <th>
                            <i class="icon icon-edit"></i>
                            <i class="icon icon-delete"></i>
                        </th>
                    </tr>
                    <tr>
                        <th>Celeste Méndez</th>
                        <th>sracarmen@yahoo.com</th>
                        <th>admin</th>
                        <th>01/01/2018</th>
                        <th>
                            <i class="icon icon-edit"></i>
                            <i class="icon icon-delete"></i>
                        </th>
                    </tr>
                    <tr>
                        <th>José Daniel Quintero</th>
                        <th>josedanq100@gmail.com</th>
                        <th>admin</th>
                        <th>01/01/2018</th>
                        <th>
                            <i class="icon icon-edit"></i>
                            <i class="icon icon-delete"></i>
                        </th>
                    </tr>
                    <tr>
                        <th>Celeste Méndez</th>
                        <th>sracarmen@yahoo.com</th>
                        <th>admin</th>
                        <th>01/01/2018</th>
                        <th>
                            <i class="icon icon-edit"></i>
                            <i class="icon icon-delete"></i>
                        </th>
                    </tr>
                </tbody>
    
            </table>
        </div>
    </section>

@endsection