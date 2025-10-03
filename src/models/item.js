export default (sequelize, DataTypes) => {
    const Item = sequelize.define(
        "Item",
        {
            id: {
                type: DataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true,
            },
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
            tableName: "items",
            timestamps: true,
        }
    );

    return Item;
};
