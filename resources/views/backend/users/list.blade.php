@extends('layouts.backend')
@section('content')
    <section class="container col-10 float-right users-list">
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
                        <th>Tipo</th>
                        <th>Creación</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
    
                <tbody>
                    @foreach($users as $user)
                        <tr>
                            <th>{{ $user->name }}</th>
                            <th>{{ $user->email }}</th>
                            <th>{{ ($user->admin) ? 'admin' : 'editor' }}</th>
                            <th>{{ date("d M Y", strtotime($user->created_at)) }}</th>
                            <th>
                                <a href="{{ 'users/'.$user->id.'/edit' }}">
                                    <i class="icon icon-edit"></i>
                                </a>

                                <a href="">
                                    <i class="icon icon-message"></i>
                                </a>

                                <a href="{{ 'users/'.$user->id.'/available' }}">
                                    @if($user->available) 
                                        <i class="icon icon-stop"></i>
                                    @else
                                        <i class="icon icon-stop text-error"></i>
                                    @endif
                                </a>

                                <a href="{{ 'users/'.$user->id.'/delete' }}" onclick="{{ 'deleteUser(event,\''.$user->name.'\','.$user->id.')' }}">
                                    <i class="icon icon-delete"></i>
                                </a>
    
                                <form id="{{ 'delete-'.$user->id.'-form' }}" action="{{ 'users/'.$user->id.'/delete' }}" method="POST" style="display: none;">
                                    {{ method_field('DELETE') }}
                                    @csrf
                                </form>
                            </th>
                        </tr>
                    @endforeach
                </tbody>
    
            </table>
        </div>

        <div id="modal" class="modal">
            <a href="javascript:;" onclick="closeModal()" class="modal-overlay float-right" aria-label="Close"></a>
            <div class="modal-container">
                ¿Deseas eliminar este usuario?
                <br> <h5 id="modal-userName"></h5>
                
                <div class="form-group">
                    <button id="modalBtnSend" class="btn btn-primary">Sí</button>
                    <button onclick="closeModal()" class="btn btn-primary">No</button>
                </div>
            </div>
        </div>
    </section>
@endsection