import fp from "fastify-plugin";
import { Sequelize, DataTypes } from "sequelize";
import itemModel from "../models/item.js";

export default fp(async (fastify, opts) => {
    const sequelize = new Sequelize(
        process.env.DB_NAME,
        process.env.DB_USER,
        process.env.DB_PASSWORD,
        {
            host: process.env.DB_HOST,
            port: process.env.DB_PORT,
            dialect: "mysql",
            logging: false,
        }
    );

    try {
        await sequelize.authenticate();
        fastify.log.info("db connected");
    } catch (err) {
        fastify.log.error("db not connected:", err);
        throw err;
    }

    const Item = itemModel(sequelize, DataTypes);

    await sequelize.sync();

    fastify.decorate("sequelize", sequelize);
    fastify.decorate("models", { Item });

    fastify.addHook("onClose", async () => {
        await sequelize.close();
    });
});
