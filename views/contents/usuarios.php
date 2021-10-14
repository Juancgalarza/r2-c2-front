<!-- Content Header (Page header) -->
<div class="content-header">
    <div class="container-fluid">
        <div class="row mb-2">
            <div class="col-sm-6">
                <h1 class="m-0">Usuarios</h1>
            </div><!-- /.col -->
            <div class="col-sm-6">
                <ol class="breadcrumb float-sm-right">
                    <li class="breadcrumb-item"><a href="#">Gestión de usuarios</a></li>
                    <li class="breadcrumb-item active">Usuarios</li>
                </ol>
            </div><!-- /.col -->
        </div><!-- /.row -->
    </div><!-- /.container-fluid -->
</div>
<!-- /.content-header -->

<!-- Main content -->
<div class="content">
    <div class="container-fluid">
        <div class="row">
            <div class="col-12 col-md-6">
                <div class="card card-purple">
                    <div class="card-header">
                        <h3 class="card-title">Datos Personales</h3>

                        <div class="card-tools">
                            <button type="button" class="btn btn-tool" data-card-widget="collapse"><i
                                    class="fas fa-minus"></i>
                            </button>
                        </div>
                        <!-- /.card-tools -->
                    </div>
                    <!--form-nuevo-descripcion /.card-header -->
                    <div class="card-body">
                        <form method="POST" id="form-datos-persona">

                            <div class="row">
                                <div class="col-6 form-group">
                                    <label for="">Cédula</label>
                                    <input type="text" class="form-control solo-numeros" placeholder="Cédula"
                                        id="form-cedula" name="cedula" maxlength="10" minlength="10" required>
                                </div>

                                <div class="col-6 form-group">
                                    <label for="">Teléfono</label>
                                    <input type="text" class="form-control solo-numeros" placeholder="Teléfono"
                                        id="form-telefono" name="telefono" maxlength="10" minlength="10">
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-6 form-group">
                                    <label for="">Nombres</label>
                                    <input type="text" class="form-control solo-letras" placeholder="Nombres"
                                        id="form-nombres" maxlength="150" minlength="3" name="nombres" required>
                                </div>

                                <div class="col-6 form-group">
                                    <label for="">Apellidos</label>
                                    <input type="text" class="form-control solo-letras" placeholder="Apellidos"
                                        id="form-apellidos" maxlength="150" minlength="3" name="apellido">
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-12 form-group">
                                    <label for="">Correo</label>
                                    <input type="email" class="form-control" placeholder="Correo" id="form-correo"
                                        name="correo">
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-12 form-group">
                                    <label for="">Sexo</label>
                                    <select name="" id="form-sexo" class="form-control">
                                        <option value="0">Seleccione una opcion</option>
                                        <option value="M">Masculino</option>
                                        <option value="F">Femenino</option>
                                    </select>
                                </div>
                            </div>
                        </form>
                    </div>
                    <!-- /.card-body -->
                </div>
            </div>

            <div class="col-12 col-md-6">
                <div class="card">
                    <div class="card-header" style="background-color: #343a40; color: #fff;">
                        <h3 class="card-title">Datos de Usuario</h3>

                        <div class="card-tools">
                            <button type="button" class="btn btn-tool" data-card-widget="collapse"><i
                                    class="fas fa-minus"></i>
                            </button>
                        </div>
                        <!-- /.card-tools -->
                    </div>
                    <div class="card-body" style="height: 384px;">
                        <form method="POST" id="form-datos-usuario">
                            <div class="row">
                                <div class="col-12">
                                    <div class="form-group">
                                        <label for="">Rol</label>
                                        <select id="form-select-rol" class="form-control">
                                            <!-- <option value="0">Seleccione un Rol</option> -->
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-12 col-md-6 col-lg-5">
                                    <div class="form-group">
                                        <label for="">Contraseña</label>
                                        <input type="password" name="clave" class="form-control" id="form-clave"
                                            placeholder="Contraseña">
                                    </div>
                                </div>
                                <div class="col-12 col-md-6 col-lg-5">
                                    <div class="form-group">
                                        <label for="">Confirmar Contraseña</label>
                                        <input type="password" name="confclave" id="form-conf-clave"
                                            class="form-control" placeholder="Confirmar Contraseña">
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-12">
                                    <div class="form-group">
                                        <label for="form-img-usuario">Imagen</label>
                                        <div class="input-group">
                                            <div class="custom-file">
                                                <input type="file" name="img" id="form-img-usuario"
                                                    class="custom-file-input" accept="image/*">
                                                <label class="custom-file-label" for="exampleInputFile">Subir
                                                    Archivo</label>
                                            </div>
                                            <div class="input-group-append">
                                                <span class="input-group-text">Subir</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="form-group">
                                <button type="submit" class="btn btn-purple" id="btn-form-usuario">
                                    <i class="fa fa-plus mr-2"></i>
                                    Agregar Usuario
                                </button>
                            </div>
                        </form>
                    </div>

                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-12">
                <div class="card card-purple">
                    <div class="card-header">
                        <h3 class="card-title">Listar Usuarios</h3>

                        <div class="card-tools">
                            <button type="button" class="btn btn-tool" data-card-widget="collapse"><i
                                    class="fas fa-minus"></i>
                            </button>
                        </div>
                        <!-- /.card-tools -->
                    </div>
                    <!--form-nuevo-descripcion /.card-header -->
                    <div class="card-body">
                        <div class="div" style="overflow: auto;">
                            <table id="tabla-usuario" class="table table-bordered table-striped">
                                <thead>
                                    <tr>
                                        <th style="width: 10px">#</th>
                                        <th>Foto</th>
                                        <th>Nombres</th>
                                        <th>Apellidos</th>
                                        <th>Rol</th>
                                        <th>Acciones</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <!--  <tr>
                                            <td class="pt-25">1</td>
                                            <td class="pt-25">imagen.jpg</td>
                                            <td class="pt-25">Burro</td>
                                            <td class="pt-25">Hourse</td>
                                            <td class="pt-25">Bu</td>
                                            <td class="pt-25">Tuuu crees</td>
                                            <td class="pt-25">
                                                <div class="btn-group">
                                                    <button class="btn btn-warning  fa-lg">
                                                        <i class="fa fa-pencil-square fa-lg"></i>
                                                    </button>
                                                    <button class="btn btn-danger fa-lg">
                                                        <i class="fa fa-trash fa-lg"></i>
                                                    </button>
                                                </div>
                                            </td>
                                        </tr> -->
                                    </tfoot>
                            </table>
                        </div>
                    </div>
                    <!-- /.card-body -->
                </div>
            </div>
        </div>
        <!-- /.row -->
    </div><!-- /.container-fluid -->
</div>
<!-- /.content -->
</div>
<!-- /.content-wrapper -->

<!-- Modales -->
<div class="modal fade" id="actualizar_usuario">
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header bg-purple">
                <h4 class="modal-title">Actualizar Usuario</h4>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div class="modal-body">
                <div class="contanier-fluid">
                    <form id="update-usuario" method="post">
                        <input type="hidden" id="usuario-id">
                        <div class="row">
                            <input type="hidden" id="upd-persona-id">
                            <div class="col-12 col-md-6 form-group">
                                <label for="">Cédula</label>
                                <input id="upd-cedula" type="text" readOnly class="form-control">
                            </div>
                            <input type="hidden" id="rol-id">
                            <div class="col-12 col-md-6 form-group">
                                <label for="">Rol</label>
                                <select id="upd-rol" class="form-control">
                                    <!-- <option value="0">Seleccione un Cargo</option> -->
                                </select>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-12 col-md-6 form-group">
                                <label for="">Nombres</label>
                                <input id="upd-nombres" type="text" class="form-control letras-vd">
                            </div>
                            <div class="col-12 col-md-6 form-group">
                                <label for="">Apellidos</label>
                                <input id="upd-apellidos" type="text" class="form-control letras-vd">
                            </div>
                        </div>
                    </form>
                    <div class="row">
                        <div class="col-12">
                            <button id="btn-update" class="btn btn-purple"><i
                                    class="fas fa-pencil-alt mr-2"></i>Actualizar</button>
                        </div>
                    </div>
                </div>
            </div>
            <div class="modal-footer justify-content-between">
            </div>
        </div>
        <!-- /.modal-content -->
    </div>
    <!-- /.modal-dialog -->
</div>

<script src="<?=BASE?>views/plugins/datatables/jquery.dataTables.min.js"></script>
<script src="<?=BASE?>views/plugins/datatables-bs4/js/dataTables.bootstrap4.min.js"></script>
<script src="<?=BASE?>views/plugins/datatables-responsive/js/dataTables.responsive.min.js"></script>
<script src="<?=BASE?>views/plugins/datatables-responsive/js/responsive.bootstrap4.min.js"></script>
<script src="<?=BASE?>views/plugins/datatables-buttons/js/dataTables.buttons.min.js"></script>
<script src="<?=BASE?>views/plugins/datatables-buttons/js/buttons.bootstrap4.min.js"></script>
<script src="<?=BASE?>views/plugins/jszip/jszip.min.js"></script>
<script src="<?=BASE?>views/plugins/pdfmake/pdfmake.min.js"></script>

<script src="<?=BASE?>views/plugins/Toast/js/Toast.min.js"></script>
<script src="<?=BASE?>views/dist/js/scripts/usuarios.js?ver=1.1.1"></script>