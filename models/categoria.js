const conn = require('../conn');
const DATABASE = 'mislibros';
const CATEGORIAS = 'categorias';

module.exports = {
	nombreCategoria: async (nombre) => {
		const connectiondb = await conn.getConnection();
		const respuesta = await connectiondb
					.db(DATABASE)
					.collection(CATEGORIAS)
					.findOne({nombre: nombre})

		return respuesta;
	},
	nuevaCategoria: async (categoria) => {
		const connectiondb = await conn.getConnection();
		const respuesta = await connectiondb
					.db(DATABASE)
					.collection(CATEGORIAS)
					.insertOne(categoria);
		return respuesta;
	},
	categoriaId: async (id) => {
		const connectiondb = await conn.getConnection();
		const respuesta = await connectiondb
					.db(DATABASE)
					.collection(CATEGORIAS)
					.findOne({id: parseInt(id)})

		return respuesta;
	},
	listaCategorias: async () => {
		const connectiondb = await conn.getConnection();
		const respuesta = await connectiondb
					.db(DATABASE)
					.collection(CATEGORIAS)
					.find()
                    			.toArray()
		return respuesta;
	},
	//Revisar
	categoriaLibros: async (id) => {
		const connectiondb = await conn.getConnection();
		const respuesta = await connectiondb
					.db(DATABASE)
					.collection(CATEGORIAS)
					.findOne({id: parseInt(id)})
		return respuesta;
	},
	borrarCategoria: async (id) => {
		const connectiondb = await conn.getConnection();
		const respuesta = await connectiondb
					.db(DATABASE)
					.collection(CATEGORIAS)
					.deleteOne({id: parseInt(id)})
		return respuesta;
	},
	/*
	resetCategorias: async () => {
		let respuesta = await conexion.query(
			"ALTER TABLE categorias AUTO_INCREMENT = 1");
		return respuesta;
	},*/
	modificarCategoria: async (categoria) => {
		const connectiondb = await conn.getConnection();
		const respuesta = await connectiondb
					.db(DATABASE)
					.collection(CATEGORIAS)
					.updateOne({id: parseInt(categoria.id)}, {$set: {nombre: categoria.nombre }});
		return respuesta;
	}
}