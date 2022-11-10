import { Model, DataTypes } from 'sequelize';
import { sequelize } from '../instances/pg';
import { Modality } from './Modality';
// import { sequelize } from '../instances/mysql';
import { Store } from './Store';''

export interface SaleInstance extends Model {
    id: number;
    cardNumber: number;
    grossValue: number;
    netValue: number;
    parcel: number;
    ModalityId: number;
    flag: string;
    StoreId: number;    
}

export const Sale = sequelize.define<SaleInstance>('Sale', {
    id: {
        primaryKey: true,
        autoIncrement: true,
        type: DataTypes.INTEGER
    },
    cardNumber: {
        type: DataTypes.INTEGER
    },
    grossValue: {
        type: DataTypes.DOUBLE
    },
    netValue: {
        type: DataTypes.DOUBLE
    },
    parcel: {
        type: DataTypes.INTEGER
    },
    ModalityId: {
        type: DataTypes.INTEGER
    },
    flag: {
        type: DataTypes.STRING
    },
    StoreId: {
        type: DataTypes.INTEGER
    },
}, {
    tableName: 'sales',
    timestamps: true
});

Store.hasMany(Sale)
Sale.belongsTo(Store, {
    onDelete: 'NO ACTION',
    onUpdate: 'NO ACTION'
});

Modality.hasMany(Sale)
Sale.belongsTo(Modality, {
    onDelete: 'NO ACTION',
    onUpdate: 'NO ACTION'
});

// Sale.sync({ force: true })