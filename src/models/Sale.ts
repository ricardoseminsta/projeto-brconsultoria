import { Model, DataTypes } from 'sequelize';
import { sequelize } from '../instances/pg';
// import { sequelize } from '../instances/mysql';
import { Store } from './Store';

export interface SaleInstance extends Model {
    id: number;
    cardNumber: number;
    grossValue: number;
    netValue: number;
    parcel: number;
    modality: 'debt' | 'credit';
    flag: string;
    idStored: number;    
}

export const Sale = sequelize.define<SaleInstance>('Sale', {
    id: {
        primaryKey: true,
        autoIncrement: true,
        type: DataTypes.INTEGER
    },
    arrived: {
        type: DataTypes.DATE
    },
    exit: {
        type: DataTypes.DATE
    }
}, {
    tableName: 'sale',
    timestamps: false
});

Store.hasMany(Sale)
Sale.belongsTo(Store, {
    onDelete: 'NO ACTION',
    onUpdate: 'NO ACTION'
});

// Sale.sync({ force: true })