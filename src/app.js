import "dotenv/config";
import Fastify from "fastify";
import sequelizePlugin from "./plugins/sequelize.js";
import s3Plugin from "./plugins/s3.js";
import debugRoutes from "./routes/debug.js";
import itemsRoutes from "./routes/items.js";

const app = Fastify({ logger: true });

app.register(sequelizePlugin);
app.register(s3Plugin);
app.register(debugRoutes);
app.register(itemsRoutes, { prefix: "/items" });

const start = async () => {
    try {
        await app.listen({ port: process.env.PORT || 3000, host: "0.0.0.0" });
        app.log.info(`Server running on http://localhost:${process.env.PORT}`);
    } catch (err) {
        app.log.error(err);
        process.exit(1);
    }
};

start();
