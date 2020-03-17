import express from 'express';
import UserController from './controllers/user.controller';
import BullBoard from 'bull-board';
import Queue from './lib/queue';

const app = express();
BullBoard.setQueues(Queue.queues.map(queue => queue.bull));

app.use(express.json());
app.post('/users', UserController.store);

app.use('/admin/queues', BullBoard.UI);

app.listen(process.env.HTTP_PORT, process.env.HTTP_HOST, () => {
	console.log(`WebApp running on.`);
});