var conexion = require('./connections');
var jwt = require('jsonwebtoken');

function MetodosDB() {
	// this method function to execute the queries to the Database
	this.seleccionar = function(respuesta) {
		// body...
		conexion.obtener(function (er,cn) {
			// body...
			cn.query('select * from inventario',function(error,resultado) {
				// body...
				cn.release();

				if (error) {
					respuesta.send({estado:'Error'})
				} else {
					respuesta.send(resultado);
				}



			})
		})
	}


	this.seleccionarId = function(id, respuesta) {
		// body...
		conexion.obtener(function (er,cn) {
			// body...
			cn.query('select * from inventario where id=?',id,function (error,resultado) {
				cn.release();
				if (error) {
					respuesta.send({estado:'Error'});
				} else {
					respuesta.send(resultado);
				}
				// body...
			})
		})
	}

	this.insertar = function (datos,respuesta) {
		// body...
		conexion.obtener(function(er,cn) {
			// body...
			cn.query('INSERT INTO inventario set ?',datos,function(error,resultado) {
				cn.release();
				if (error) {
					respuesta.send({estado:'Error'});
				} else {
					respuesta.send({estado:'OK'});
				}
				// body...
			})
		})
	}
	this.actualizar = function (datos,respuesta) {
		// body...
		conexion.obtener(function(er,cn) {
			// body...
			cn.query('UPDATE inventario SET ? WHERE id = ?',[datos,datos.id,], function(error,resultado) {
				// body...
				cn.release();
				if (error) {
					respuesta.send({estado: 'Error'});
				} else {
					respuesta.send({estado:'OK'});
				}
			});

		})
	}

	this.borrar = function(id,respuesta) {
		// body...
		conexion.obtener(function (er,cn) {
			// body...
			cn.query('DELETE FROM inventario where id=?',id, function (error,resultado) {
				// body...
				cn.release();
				if (error) {
					respuesta.send({estado: 'Error'});
				} else {
					respuesta.send({estado:'OK'});
				}

			})
		})
	}
	this.login= function(datos,respuesta){
		conexion.obtener(function (er,cn) {
			// body...
			cn.query('select * from usuarios where user=? and pass=?',[datos.user,datos.pass],function(error,resultado) {
				// body...
				cn.release();

				if (error) {
					respuesta.send('Error');
				} else {
					if(resultado.length == 0){
						console.log('no se encuentra el usuario');
						respuesta.send('not Found');
					}else{
						var token = jwt.sign({
							user:datos.user,
							rol:'admin'
						},'secreto',{expiresIn:'120s'});
						respuesta.send(token);
					}
					
				}



			})
		})
	}

	
}

module.exports = new MetodosDB();