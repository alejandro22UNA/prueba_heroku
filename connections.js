var mysql = require('mysql');

function Conexion() {
	// Creating the connection to Database.

	this.pool = null;

	this.inicia = function (){

		// body...

		this.pool = mysql.createPool({
			connectionlimit: 10,
			host:'localhost',
			user:'root',
			password:'123456',
			database:'demo'
		})
	}


	this.obtener = function (callback) {
		// body...
		this.pool.getConnection(function (error,connection){

			callback(error,connection);
			// body...

		})
	}
	//
}

module.exports = new Conexion();