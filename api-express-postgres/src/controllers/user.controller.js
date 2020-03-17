const routes = require('express').Router();

const repository = require('../repositories/user.repository');

routes.get('/', async (req, res) => {
	const users = await repository.getUsers();
	res.json(users);
});
routes.get('/:id', async (req, res) => {
	const user = await repository.getUserById(req.params.id);
	res.json(user);
});
routes.post('/', async (req, res) => {
	const { name, email } = req.body;
	await repository.createUser({ name, email });
	res.status(201).send();
});
routes.put('/:id', async (req, res) => {
    const { id } = req.params;
	const { name, email } = req.body;
    await repository.updateUser({ name, email, id });
	res.status(200).send();
});
routes.delete('/:id', async (req, res) => {
    const { id } = req.params;
    await repository.deleteUser( id );
    res.status(200).send();
});

module.exports = (app) => app.use('/users', routes);
