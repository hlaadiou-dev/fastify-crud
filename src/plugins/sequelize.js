import fp from "fastify-plugin";
import models from "../models/index.cjs";

export default fp(async (fastify) => {
    const { sequelize, ...restModels } = models;

    try {
        await sequelize.authenticate();
        fastify.log.info("db connected");
    } catch (err) {
        fastify.log.error("db not connected:", err);
        throw err;
    }

    fastify.decorate("sequelize", sequelize);
    fastify.decorate("models", restModels);

    fastify.addHook("onClose", async () => {
        await sequelize.close();
    });
});
