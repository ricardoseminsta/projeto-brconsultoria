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

(async () => {   
    let modalities = await Modality.findAll();
    if(modalities) {
        if((modalities[0].id != 1 &&
            modalities[0].name != 'debt') && (
            modalities[1].id != 2 && 
            modalities[1].name != 'credit')) {
        await sequelize.sync({ force: true });
        await Modality.create({id: 1, name: "debt"});
        await Modality.create({id: 2, name: "credit"});}
    }
  })();