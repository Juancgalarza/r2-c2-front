/* $(function(){ */

    _init();

    function _init(){
        cargarRoles();
        guardarPersona();
        guardarUsuario();
        cargarCedula();
        cargarTabla();
        cargarRol();
        actualizar_usuario();
    }

    function cargarRoles(){
        $.ajax({
            url : urlServidor + 'rol/listar',
            type : 'GET',
            dataType : 'json',
            success : function(response) {
                if(response.status){
                    let option = '<option value=0>Seleccione un Rol</option>';
                    
                    response.roles.forEach(element =>{
                        option += `<option value=${element.id}>${element.rol}</option>`;
                    });
                    $('#form-select-rol').html(option);
   
                }   
            },
            error : function(xhr, status) {
                console.log('Disculpe, existió un problema');
            },
            complete : function(xhr, status) {
                // console.log('Petición realizada');
            }
        });
    }

    function cargarCedula(){
        $('#form-cedula').blur(function(){
            let cedula = $('#form-cedula').val();
            
            if(!validarCedula(cedula)){
                toastr.options = {
                    "closeButton": true,
                    "preventDuplicates": true,
                    "positionClass": "toast-top-center",
                };
    
                toastr["error"]("La cédula es incorrecta", "Usuario")
            }
        });
    }

    function guardarPersona(){
        $('#form-datos-persona').submit(function(e){
            e.preventDefault();

            let cedula = $('#form-cedula').val();
            let nombres = $('#form-nombres').val();
            let apellidos = $('#form-apellidos').val();
            let telefono = $('#form-telefono').val();
            let correo = $('#form-correo').val();
            let sexo = $('#form-sexo option:selected').val();

            let json = {
                persona: {
                    cedula,nombres,apellidos,telefono,correo,sexo
                }
            };

            if(!validarPersona(json)){
                console.log("debe llenar los campos");
            }
        });
    }

    function guardarUsuario(){
        $('#form-datos-usuario').submit(function(e){
           e.preventDefault();
           let rol_id = $('#form-select-rol option:selected').val();
           let foto = $('#form-img-usuario')[0].files[0];
           let clave = $('#form-clave').val();
           let confclave = $('#form-conf-clave').val();
           let cedula = $('#form-cedula').val();
           let nombres = $('#form-nombres').val();
           let apellidos = $('#form-apellidos').val();
           let telefono = $('#form-telefono').val();
           let correo = $('#form-correo').val();
           let sexo = $('#form-sexo option:selected').val();
           let def = (foto == undefined) ? 'default.jpg' : foto.name;

           let json = {
               usuario: {
                   rol_id,clave,confclave,foto: def
               },
               persona: {
                   cedula,nombres,apellidos,telefono,correo,sexo
               }
           };

           //validacion para datos de personas
           if(!validarPersona(json)){
               console.log("llene los campos de datos de persona");
           }else
           if(!validarUsuario(json.usuario)){
               console.log("llene los campos de datos de usuario");
           }else{
               //Realizar peticion ajax
               guardandoUsuario(json);
           }

        });
    }

    function validarPersona(json){
        let persona = json.persona;
        //expresion regular -> validar correo electronico
        var caract = new RegExp(/^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/);

        if(persona.cedula.length == 0){
            return false;
        }else 
        if(persona.nombres.length == 0){
            return false;
        } else 
        if(persona.apellidos.length == 0){
            return false;
        }else
        if(persona.correo.length == 0){
            return false;
        }else 
        if(persona.cedula.length < 10 || persona.nombres.length < 3 || persona.apellidos.length < 3){
           return false; 
        }else
        if(caract.test(persona.correo) == false){
            toastr.options = {
                "closeButton": true,
                "preventDuplicates": true,
                "positionClass": "toast-top-center",
            };

            toastr["error"]("Correo no válido", "Correo")
            return false;
        }else 
        if(!validarCedula(persona.cedula)){
            toastr.options = {
                "closeButton": true,
                "preventDuplicates": true,
                "positionClass": "toast-top-center",
            };

            toastr["error"]("La cédula es incorrecta", "Cédula")
            return false;
        }else{
            return true;
        }
    }

    function validarCedula(cedula){
        if(cedula.length == 10){
        
            //Obtenemos el digito de la region que sonlos dos primeros digitos
            var digito_region = cedula.substring(0,2);
            
            //Pregunto si la region existe ecuador se divide en 24 regiones
            if( digito_region >= 1 && digito_region <=24 ){
              
              // Extraigo el ultimo digito
              var ultimo_digito   = cedula.substring(9,10);
    
              //Agrupo todos los pares y los sumo
              var pares = parseInt(cedula.substring(1,2)) + parseInt(cedula.substring(3,4)) + parseInt(cedula.substring(5,6)) + parseInt(cedula.substring(7,8));
    
              //Agrupo los impares, los multiplico por un factor de 2, si la resultante es > que 9 le restamos el 9 a la resultante
              var numero1 = cedula.substring(0,1);
              var numero1 = (numero1 * 2);
              if( numero1 > 9 ){ var numero1 = (numero1 - 9); }
    
              var numero3 = cedula.substring(2,3);
              var numero3 = (numero3 * 2);
              if( numero3 > 9 ){ var numero3 = (numero3 - 9); }
    
              var numero5 = cedula.substring(4,5);
              var numero5 = (numero5 * 2);
              if( numero5 > 9 ){ var numero5 = (numero5 - 9); }
    
              var numero7 = cedula.substring(6,7);
              var numero7 = (numero7 * 2);
              if( numero7 > 9 ){ var numero7 = (numero7 - 9); }
    
              var numero9 = cedula.substring(8,9);
              var numero9 = (numero9 * 2);
              if( numero9 > 9 ){ var numero9 = (numero9 - 9); }
    
              var impares = numero1 + numero3 + numero5 + numero7 + numero9;
    
              //Suma total
              var suma_total = (pares + impares);
    
              //extraemos el primero digito
              var primer_digito_suma = String(suma_total).substring(0,1);
    
              //Obtenemos la decena inmediata
              var decena = (parseInt(primer_digito_suma) + 1)  * 10;
    
              //Obtenemos la resta de la decena inmediata - la suma_total esto nos da el digito validador
              var digito_validador = decena - suma_total;
    
              //Si el digito validador es = a 10 toma el valor de 0
              if(digito_validador == 10)
                var digito_validador = 0;
    
              //Validamos que el digito validador sea igual al de la cedula
              if(digito_validador == ultimo_digito){
                return true;
              }else{
                return false;
              }
              
            }else{
              // imprimimos en consola si la region no pertenece
              return false;
            }
         }else{
            //imprimimos en consola si la cedula tiene mas o menos de 10 digitos
            return false;
         }    
    }

    function validarUsuario(usuario){
        if(usuario.length == 0){
            return false;
        }else
        if(usuario.clave.length == 0){
            return false;
        }else
        if(usuario.confclave.length == 0){
            return false;
        }else
        if(usuario.clave !== usuario.confclave){
            toastr.options = {
                "closeButton": true,
                "preventDuplicates": true,
                "positionClass": "toast-top-center",
            };

            toastr["error"]("Las claves no coinciden", "Claves")
            return false;
        }
        else{
            return true;
        }
    }

    function guardandoUsuario(json){
        $.ajax({
             // la URL para la petición
             url : urlServidor + 'usuario/guardar',
             // especifica si será una petición POST o GET
             type : 'POST',
             data: 'data=' + JSON.stringify(json),
             // el tipo de información que se espera de respuesta
             dataType : 'json',
             success : function(response) {
                if(response.status){
                    toastr.options = {
                        "closeButton": true,
                        "preventDuplicates": true,
                        "positionClass": "toast-top-center",
                    };
        
                    toastr["success"](response.mensaje, "Usuario")
                    $('#form-datos-persona')[0].reset();
                    $('#form-datos-usuario')[0].reset();
                    cargarTabla();
                }
             },
             error : function(jqXHR, status, error) {
                console.log('Existió un problema, reviselo..!');
            },
            complete : function(jqXHR, status) {
                // console.log('Petición realizada');
            }
        });

        if(json.usuario.img == 'default.jpg'){
            
        }else{
            //Enviar imagen al servidor(Backend)
            let img = $('#form-img-usuario')[0].files[0];
            let formdata = new FormData();
            formdata.append('fichero',img);

            $.ajax({
                // la URL para la petición
                url : urlServidor + 'usuario/fichero',
                // especifica si será una petición POST o GET
                type : 'POST',
                data : formdata,
                contentType: false,
                processData: false,
                // el tipo de información que se espera de respuesta
                dataType : 'json',
                success : function(responseImg){
                    //console.log(responseImg);
                    if(responseImg.status){
                        toastr.options = {
                            "closeButton": true,
                            "preventDuplicates": true,
                            "positionClass": "toast-top-center",
                        };
            
                        toastr["success"](responseImg.mensaje, "Usuario")
                    }
                },
                error : function(jqXHR, status, error) {
                    console.log('Existió un problema, reviselo..!');
                },
                complete : function(jqXHR, status) {
                    // console.log('Petición realizada');
                }
            });
        }
    }

    function cargarTabla(){
        tabla = $('#tabla-usuario').DataTable({
            "lengthMenu": [ 5, 10, 25, 75, 100],//mostramos el menú de registros a revisar
            "responsive": true, "lengthChange": false, "autoWidth": false,
            "aProcessing": true,//Activamos el procesamiento del datatables
            "aServerSide": true,//Paginación y filtrado realizados por el servidor
            "ajax":
                {
                    url:  urlServidor + 'usuario/datatable',
                    type : "get",
                    dataType : "json",						
                    error: function(e){
                        console.log(e.responseText);	
                    }
                },
            destroy: true,
            "iDisplayLength": 10,//Paginación
            "language": {
 
			    "sProcessing":     "Procesando...",
			 
			    "sLengthMenu":     "Mostrar _MENU_ registros",
			 
			    "sZeroRecords":    "No se encontraron resultados",
			 
			    "sEmptyTable":     "Ningún dato disponible en esta tabla",
			 
			    "sInfo":           "Mostrando un total de _TOTAL_ registros",
			 
			    "sInfoEmpty":      "Mostrando un total de 0 registros",
			 
			    "sInfoFiltered":   "(filtrado de un total de _MAX_ registros)",
			 
			    "sInfoPostFix":    "",
			 
			    "sSearch":         "Buscar:",
			 
			    "sUrl":            "",
			 
			    "sInfoThousands":  ",",
			 
			    "sLoadingRecords": "Cargando...",
			 
			    "oPaginate": {
			 
			        "sFirst":    "Primero",
			 
			        "sLast":     "Último",
			 
			        "sNext":     "Siguiente",
			 
			        "sPrevious": "Anterior"
			 
			    },
			 
			    "oAria": {
			 
			        "sSortAscending":  ": Activar para ordenar la columna de manera ascendente",
			 
			        "sSortDescending": ": Activar para ordenar la columna de manera descendente"
			 
			    }

			   }//cerrando language
        });
    }

    function actualizar_usuario(){
        $('#btn-update').click(function(){
            let id = $('#usuario-id').val();
            let nombres = $('#upd-nombres').val();
            let apellidos = $('#upd-apellidos').val();
            let persona_id = $('#upd-persona-id').val();
            let rol_id = $('#upd-rol option:selected').val();
            
            if(nombres.length == 0){
                toastr.options = {
                    "closeButton": true,
                    "preventDuplicates": true,
                    "positionClass": "toast-top-center",
                };
    
                toastr["error"]("Complete el campo nombres", "Usuario")
            }else
            if(apellidos.length == 0){
                toastr.options = {
                    "closeButton": true,
                    "preventDuplicates": true,
                    "positionClass": "toast-top-center",
                };
    
                toastr["error"]("Complete el campo apellidos", "Usuario")
            }
            else{
                let json = {
                    usuario: {
                        id:id,
                        rol_id: rol_id,
                        persona_id: persona_id,
                        nombres: nombres,
                        apellidos: apellidos,
                    }
                };

                $.ajax({
                    // la URL para la petición
                    url : urlServidor + 'usuario/editar',
                    type : 'POST',
                    data: {data: JSON.stringify(json)},
                    dataType : 'json',
                    success : function(response){
                        console.log(response);
                        if(response.status){
                            toastr.options = {
                                "closeButton": true,
                                "preventDuplicates": true,
                                "positionClass": "toast-top-center",
                            };
                
                            toastr["success"](response.mensaje, "Listo !")

                            $('#actualizar_usuario').modal('hide');
                            cargarTabla();
                        }else{
                            toastr.options = {
                                "closeButton": true,
                                "preventDuplicates": true,
                                "positionClass": "toast-top-center",
                            };
                
                            toastr["error"](response.mensaje, "Error")
                        }
                    },
                    error : function(jqXHR, status, error) {
                     console.log('Disculpe, existió un problema');
                 },
                 complete : function(jqXHR, status) {
                     // console.log('Petición realizada');
                 } 
                 });
            }
        })
    }
/* }); */

function editar_usuario(id){
    $('#actualizar_usuario').modal('show');
    cargar_usuario(id);
}

function cargar_usuario(id){
    $.ajax({
        // la URL para la petición
        url : urlServidor + 'usuario/listar/' + id,
        // especifica si será una petición POST o GET
        type : 'GET',
        // el tipo de información que se espera de respuesta
        dataType : 'json',
        success : function(response) {
       
            if(response.status){
                $('#usuario-id').val(response.usuario.id);
                $('#upd-persona-id').val(response.persona.id);
                $('#upd-cedula').val(response.persona.cedula);
                $('#upd-nombres').val(response.persona.nombres);
                $('#upd-apellidos').val(response.persona.apellidos);
                $('#upd-rol').val(response.usuario.rol_id);

                // document.getElementById('upd-cargo').value = response.usuario.rol_id
            }
        },
        error : function(jqXHR, status, error) {
            console.log('Disculpe, existió un problema');
        },
        complete : function(jqXHR, status) {
            // console.log('Petición realizada');
        }
    });
}

function cargarRol(){
    $.ajax({
        url : urlServidor + 'rol/listar',
        type : 'GET',
        dataType : 'json',
        success : function(response) {
            if(response.status){
                let option = '<option value=0>Seleccione un Rol</option>';
                
                response.roles.forEach(element =>{
                    option += `<option value=${element.id}>${element.rol}</option>`;
                });
                $('#upd-rol').html(option);

            }   
        },
        error : function(xhr, status) {
            console.log('Disculpe, existió un problema');
        },
        complete : function(xhr, status) {
            // console.log('Petición realizada');
        }
    });
}

function eliminar(id){
    let data = {
        usuario: {
            id: id,
        }
    };

    $.ajax({
        // la URL para la petición
        url : urlServidor + 'usuario/eliminar/',
        // especifica si será una petición POST o GET
        type : 'POST',
        // el tipo de información que se espera de respuesta
        data: {data: JSON.stringify(data)},
        dataType : 'json',
        success : function(response) {
            if(response.status){
                toastr.options = {
                    "closeButton": true,
                    "preventDuplicates": true,
                    "positionClass": "toast-top-center",
                };
    
                toastr["success"]("Se Ha eliminado el usuario del sistema", "Usuario")
                cargarTabla();
            }
        },
        error : function(jqXHR, status, error) {
            console.log('Disculpe, existió un problema');
        },
        complete : function(jqXHR, status) {
            // console.log('Petición realizada');
        }
    });
}

