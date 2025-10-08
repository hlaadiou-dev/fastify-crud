"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
    class Item extends Model {
        static associate(models) {}
    }
    Item.init(
        {
            name: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            price: {
                type: DataTypes.FLOAT,
                allowNull: false,
            },
        },
        {
            sequelize,
            modelName: "Item",
        }
    );
    return Item;
};
