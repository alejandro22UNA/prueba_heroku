var db = require('./queries');

function http() {
	// body...

	this.configurar = function (app) {
		// body...
		app.get('/inventario/',function(solictud,respuesta) {
			// body...
			db.seleccionar(respuesta);
		})
		app.get('/inventario/:id/',function (solictud,respuesta) {
			// body...
			db.seleccionarId(solictud.params.id,respuesta);
		})
		app.post('/inventario/',function(solictud,respuesta) {
			// body...
			db.insertar(solictud.body,respuesta);
		})

		app.put('/inventario/',function(solictud,respuesta) {
			// body...
			db.actualizar(solictud.body,respuesta);
		})

		app.delete('/inventario/:id/',function(solictud,respuesta) {
			// body...
			db.borrar(solictud.params.id,respuesta);
		})
		app.post('/auth/login/',function(solicitud,respuesta){
			db.login(solicitud.body, respuesta);
		})
	}
}

module.exports = new http();