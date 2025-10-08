"use strict";

module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.bulkInsert("Items", [
            {
                name: "Keyboard",
                price: 49.99,
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                name: "Mouse",
                price: 29.99,
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                name: "Monitor",
                price: 199.99,
                createdAt: new Date(),
                updatedAt: new Date(),
            },
        ]);
    },

    async down(queryInterface, Sequelize) {
        await queryInterface.bulkDelete("Items", null, {});
    },
};
