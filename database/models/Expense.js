import { DataTypes, Model } from "sequelize";
import database from '../database.js';

class ExpenseModel extends Model { };

const Expense = ExpenseModel.init(
    {
        title: {
            type: DataTypes.STRING,
        },
        type: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: 'bills'
        },
        amount: {
            type: DataTypes.DOUBLE,
            allowNull: false,
            defaultValue: parseFloat(0)
        },
        date: {
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: new Date(),
            get() {
                const date = new Date(this.getDataValue('date'));
                return date.toLocaleString();
            }
        }
    },
    {
        sequelize: database,

        modelName: 'Expense',
        tableName: 'Expense',

        paranoid: true,

        defaultScope: {
            attributes: {
                exclude: ['createdAt', 'updatedAt', 'deletedAt']
            }
        },
    }
);

export default Expense;