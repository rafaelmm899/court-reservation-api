import {DataTypes, Model} from "sequelize";
import sequelize from "../../config/database.js";
import bcrypt from "bcrypt";

export default (sequelize, DataTypes) => {
    class User extends Model {
        static associate(models) {
            this.hasMany(models.Reservation, {
                foreignKey: 'userId',
                as: 'reservations'
            });
        }
    }

    User.init({
            id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
            name: {
                type: DataTypes.STRING,
                allowNull: false
            },
            email: {
                type: DataTypes.STRING,
                allowNull: false
            },
            password: {
                type: DataTypes.STRING,
                allowNull: false
            }
        }, {
            sequelize,
            timestamps: true,
            modelName: 'User',
            tableName: 'users',
            hooks: {
                beforeCreate: async (user) => {
                    user.password = await bcrypt.hash(user.password, 10);
                }
            },
            underscored: true
        }
    );

    return User;
}