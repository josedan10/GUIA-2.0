<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- CSRF Token -->
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <title>{{ config('app.name', 'Laravel') }}</title>

    <!-- Scripts -->
    {{-- <script src="{{ asset('js/app.js') }}" defer></script> --}}

    <!-- Fonts -->
    <link rel="dns-prefetch" href="https://fonts.gstatic.com">
    <link href="https://fonts.googleapis.com/css?family=Raleway:300,400,600" rel="stylesheet" type="text/css">

    <!-- Styles -->
    <link href="{{ asset('css/main.css') }}" rel="stylesheet">
</head>
<body>
    <div id="app" class="admin">

        <div class="panel col-lg-2 admin-panel fixed bg-secondary">
            <div class="panel-header d-flex">
                <figure class="avatar avatar-xl" data-initial="JQ">
                    @if(false)
                        {{--  Put here the conditional for the user image  --}}
                        <img src="img/avatar-1.png" alt="...">
                    @endif
                </figure>
                <div class="panel-title text-center">José Daniel Quintero</div>
            </div>
            <div class="panel-body d-flex">
                <ul class="menu">
                    <li class="menu-item">
                        <a href="#" class="hide-lg">
                            <i class="icon icon-2x icon-dashboard"></i> Dashboard
                        </a>
                        <a href="#" class="show-lg">
                            <i class="icon icon-2x icon-dashboard"></i>
                        </a>
                    </li>
                    <li class="menu-item">
                        <a href="#" class="hide-lg">                                    
                            <i class="icon icon-2x icon-email"></i> Mensajes<span class="badge" data-badge="3"></span>
                        </a>
                        <a href="#" class="show-lg">                                    
                            <i class="icon icon-2x icon-email"></i><span class="badge" data-badge="3"></span>
                        </a>
                    </li>
                    <li class="menu-item">                                    
                        <div class="dropdown d-inline-block">
                            <a href="#" class="dropdown-toggle hide-lg" tabindex="0">
                                <i class="icon icon-2x icon-website"></i> Website
                                <i class="icon icon-caret"></i>
                            </a>
                            <a href="#" class="dropdown-toggle show-lg" tabindex="0">
                                <i class="icon icon-2x icon-website"></i>
                                <i class="icon icon-caret"></i>
                            </a>
                        
                            <!-- menu component -->
                            <ul class="menu">
                                <li class="menu-item">
                                    <a href="#">Home</a>
                                </li>
                                <li class="menu-item">
                                    <a href="#">Nosotros</a>
                                </li>
                                <li class="menu-item">
                                    <a href="#">Contacto</a>
                                </li>
                            </ul>
                        </div>                             
                    </li>
                    <li class="menu-item">
                        <a href="#" class="hide-lg">                                    
                            <i class="icon icon-2x icon-edit2"></i> Sirius
                        </a>
                        <a href="#" class="show-lg">                                    
                            <i class="icon icon-2x icon-edit2"></i>
                        </a>
                    </li>
                    <li class="menu-item">
                        <a href="#" class="hide-lg">
                        <i class="icon icon-2x icon-calendar"></i> Calendario
                        </a>
                        <a href="#" class="show-lg">
                        <i class="icon icon-2x icon-calendar"></i>
                        </a>
                    </li>
                    <li class="menu-item">
                        <a href="#" class="hide-lg">
                        <i class="icon icon-2x icon-users"></i> Usuarios
                        </a>
                        <a href="#" class="show-lg">
                        <i class="icon icon-2x icon-users"></i>
                        </a>
                    </li>
                </ul>
            </div>
            <div class="panel-footer">
                <a href="{{ route('logout') }}"
                    onclick="event.preventDefault();
                                    document.getElementById('logout-form').submit();">
                    {{ __('Logout') }} <i class="icon icon-logout"></i>
                </a>

                <form id="logout-form" action="{{ route('logout') }}" method="POST" style="display: none;">
                    @csrf
                </form>
            </div>
        </div>
        

        <main>
            @yield('content')
        </main>
    </div>

    <script src="{{ asset('js/index.min.js') }}"></script>
</body>
</html>