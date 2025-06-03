import {Model} from "sequelize";
import {CourtType} from "../../enums/CourtType.js";

export default (sequelize, DataTypes) => {
    class Court extends Model {
        static associate(models) {
            Court.hasMany(models.Reservation, { foreignKey: 'court_id', as: 'reservations' });
        }
    }

    Court.init({
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        type: {
            type: DataTypes.ENUM([CourtType.FOOTBALL, CourtType.TENNIS, CourtType.PADEL, CourtType.BASKETBALL]),
            allowNull: false
        }
    }, {
        sequelize,
        modelName: 'Court',
        tableName: 'courts',
        underscored: true
    });

    return Court;
}