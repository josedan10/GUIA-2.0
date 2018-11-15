@extends('layouts.backend')
@section('content')
<main class="admin-grid grid col-10 float-right">
    <div class="outstanding-art"></div>
    <div class="outstanding-writer">
        <div class="title">
            POST OF THE WEEK
        </div>
        <div class="content bg-secondary">
            <span class="content-title"> La era espacial </span>
            <span class="content-author"><b>Author:</b> José Daniel Quintero</span>
        </div>
    </div>
    <div id="timer" class="bg-secondary event-timer"></div>
    <div class="event-timeline bg-secondary">
        <div class="panel">
            <div class="panel-header">
                <div class="divider bg-secondary" data-content="Próximos eventos"></div>
            </div>
            <div class="panel-body">
                <ul class="menu">
                    <li class="menu-item">
                        <div class="event-title relative">
                            <h6>La era espacial</h6>
                            <span class="audience absolute" data-type="all"></span>
                        </div>
                        <div class="event-body">
                            <div class="location d-inline-block">AUL-005</div>
                            <div class="time d-inline-block">9:30 - 11:30</div>
                        </div>
                    </li>
                    <div class="divider"></div>
                    <li class="menu-item">
                        <div class="event-title relative">
                            <h6>La era espacial</h6>
                            <span class="audience absolute"></span>
                        </div>
                        <div class="event-body">
                            <div class="location d-inline-block">AUL-005</div>
                            <div class="time d-inline-block">9:30 - 11:30</div>
                        </div>
                    </li>
                    <div class="divider"></div>
                    <li class="menu-item">
                        <div class="event-title relative">
                            <h6>La era espacial</h6>
                            <span class="audience absolute"></span>
                        </div>
                        <div class="event-body">
                            <div class="location d-inline-block">AUL-005</div>
                            <div class="time d-inline-block">9:30 - 11:30</div>
                        </div>
                    </li>
                    <div class="divider"></div>
                    <li class="menu-item">
                        <div class="event-title relative">
                            <h6>La era espacial</h6>
                            <span class="audience absolute"></span>
                        </div>
                        <div class="event-body">
                            <div class="location d-inline-block">AUL-005</div>
                            <div class="time d-inline-block">9:30 - 11:30</div>
                        </div>
                    </li>
                    <div class="divider"></div>
                    <li class="menu-item">
                        <div class="event-title relative">
                            <h6>La era espacial</h6>
                            <span class="audience absolute"></span>
                        </div>
                        <div class="event-body">
                            <div class="location d-inline-block">AUL-005</div>
                            <div class="time d-inline-block">9:30 - 11:30</div>
                        </div>
                    </li>
                    <div class="divider"></div>
                    <li class="menu-item">
                        <div class="event-title relative">
                            <h6>La era espacial</h6>
                            <span class="audience absolute"></span>
                        </div>
                        <div class="event-body">
                            <div class="location d-inline-block">AUL-005</div>
                            <div class="time d-inline-block">9:30 - 11:30</div>
                        </div>
                    </li>
                    <div class="divider"></div>
                    <li class="menu-item">
                        <div class="event-title relative">
                            <h6>La era espacial</h6>
                            <span class="audience absolute"></span>
                        </div>
                        <div class="event-body">
                            <div class="location d-inline-block">AUL-005</div>
                            <div class="time d-inline-block">9:30 - 11:30</div>
                        </div>
                    </li>
                    <div class="divider"></div>
                    <li class="menu-item">
                        <div class="event-title relative">
                            <h6>La era espacial</h6>
                            <span class="audience absolute"></span>
                        </div>
                        <div class="event-body">
                            <div class="location d-inline-block">AUL-005</div>
                            <div class="time d-inline-block">9:30 - 11:30</div>
                        </div>
                    </li>
                    <div class="divider"></div>
                    <li class="menu-item">
                        <div class="event-title relative">
                            <h6>La era espacial</h6>
                            <span class="audience absolute"></span>
                        </div>
                        <div class="event-body">
                            <div class="location d-inline-block">AUL-005</div>
                            <div class="time d-inline-block">9:30 - 11:30</div>
                        </div>
                    </li>
                    <div class="divider"></div>
                    <li class="menu-item">
                        <div class="event-title relative">
                            <h6>La era espacial</h6>
                            <span class="audience absolute"></span>
                        </div>
                        <div class="event-body">
                            <div class="location d-inline-block">AUL-005</div>
                            <div class="time d-inline-block">9:30 - 11:30</div>
                        </div>
                    </li>
                </ul>
            </div>
            <div class="panel-footer">
                <button class="btn btn-primary float-right">Actualizar</button>
            </div>
        </div>
    </div>
    <div class="form-container container bg-secondary">
        <div class="panel">
            <div class="panel-header">
                <div class="divider" data-content="Enviar mensaje a todos los suscriptores"></div>
            </div>
            <div class="panel-body">
                <form class="d-block" action="" method="post">
                    <div class="form-group">
                        <textarea class="form-input" id="msg" placeholder="Mensaje rápido..." ></textarea>
                    </div>
                </form>
            </div>
            <div class="panel-footer">
                <input class="btn btn-primary float-right" type="submit" value="Enviar">
            </div>
        </div>
    </div>
</main>
@endsection
