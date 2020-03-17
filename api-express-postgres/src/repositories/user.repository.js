const connection = require('../config/db.config');

const getUsers = async () => {
	try {
		const results = await connection.query('SELECT * FROM users ORDER BY id ASC');
		return results.rows;
	} catch (err) {
		console.log(err);
	}
};

const getUserById = async (id) => {
	try {
		const results = await connection.query('SELECT * FROM users WHERE id = $1', [ id ]);
		return results.rows;
	} catch (err) {
		console.log(err);
	}
};

const createUser = async (user) => {
	try {
		await connection.query('INSERT INTO users (name, email) VALUES ($1, $2)', [ user.name, user.email ]);
	} catch (err) {
		console.log(err);
	}
};

const updateUser = async (user) => {
	try {
		await connection.query('UPDATE users SET name = $1, email = $2 WHERE id = $3', [
			user.name,
			user.email,
			user.id
		]);
	} catch (err) {
		console.log(err);
	}
};

const deleteUser = async (id) => {
	try {
        await connection.query('DELETE FROM users WHERE id = $1', [ id ]);
	} catch (err) {
		console.log(err);
	}
};

module.exports = {
	getUsers,
	getUserById,
	createUser,
    updateUser,
    deleteUser
};
