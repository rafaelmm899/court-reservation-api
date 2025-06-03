import {Model} from "sequelize";

export default (sequelize, DataTypes) => {
    class Reservation extends Model {
        static associate(models) {
            this.belongsTo(models.User, {
                foreignKey: 'userId',
                as: 'users'
            });
            this.belongsTo(models.Court, {
                foreignKey: 'courtId',
                as: 'courts'
            });
        }
    }

    Reservation.init({
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        date: {
            type: DataTypes.DATE,
            allowNull: false
        },
        time: {
            type: DataTypes.TIME,
            allowNull: false
        }
    }, {
        sequelize,
        modelName: 'Reservation',
        tableName: 'reservations',
        underscored: true
    });

    return Reservation;
}