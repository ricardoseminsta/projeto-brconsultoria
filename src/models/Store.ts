import { Model, DataTypes } from 'sequelize';
import { sequelize } from '../instances/pg';

export interface StoreInstance extends Model {
    id: number;
    name: string;
}

export const Store = sequelize.define<StoreInstance>('Store', {
    id: {
        primaryKey: true,
        autoIncrement: true,
        type: DataTypes.INTEGER
    },
    name: {
        type: DataTypes.STRING,
        unique: true
    },
}, {
    tableName: 'stores',
    timestamps: false
});

// Store.sync({ force: true })