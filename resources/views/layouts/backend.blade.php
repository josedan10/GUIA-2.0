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
    <link href="{{ asset('css/backend.css') }}" rel="stylesheet">
</head>
<body>
    <div id="app" class="admin">
        <div class="col-2 fixed bg-secondary">
            <div class="panel admin-panel">
                <div class="panel-header d-flex">
                    <figure class="avatar avatar-xl c-hand" data-initial="JQ">
                        @if(false)
                            {{--  Put here the conditional for the user image  --}}
                            <img src="img/avatar-1.png" alt="...">
                        @endif
                    </figure>
                    <div class="panel-title text-center"><h5>{{ Auth::user()->name }}</h5></div>
                </div>
                <div id="admin-panel" class="panel-body d-flex">
                </div>
                <div class="panel-footer">
                    <a href="{ route('logout') }"
                        onclick="event.preventDefault();
                                        document.getElementById('logout-form').submit();">
                        {{ __('Logout') }} <i class="icon icon-logout"></i>
                    </a>

                    <form id="logout-form" action="{{ route('logout') }}" method="POST" style="display: none">
                        @csrf
                    </form>
                </div>
            </div>
        </div>

            @yield('content')
    </div>

    <script src="{{ asset('js/backend.min.js') }}"></script>
    <script src="{{ asset('js/triggers.js') }}"></script>
</body>
</html>
