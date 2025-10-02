import 'dotenv/config';
import Fastify from 'fastify';
import sequelizePlugin from './plugins/sequelize.js';
import itemsRoutes from './routes/items.js';

const app = Fastify({ logger: true });

app.register(sequelizePlugin);
app.register(itemsRoutes, { prefix: '/items' });

const start = async () => {
    try {
        app.listen({ port: process.env.PORT || 3000, host: '0.0.0.0'});
        app.log.info(`Server running on http://localhost:${process.env.PORT}`);
    } catch (err) {
        app.log.error(err);
        process.exit(1);
    }
};

start();