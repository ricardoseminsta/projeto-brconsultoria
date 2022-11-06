import { Model, DataTypes } from 'sequelize';
import { sequelize } from '../instances/pg';

export interface ModalityInstance extends Model {
    id: number;
    name: "debt" | "credit";
}

export const Modality = sequelize.define<ModalityInstance>('Modality', {
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
    tableName: 'modalities',
    timestamps: false
});

// Modality.sync({ force: true })