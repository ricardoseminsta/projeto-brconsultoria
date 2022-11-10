import { Request, Response } from 'express';
import { Sale } from '../models/Sale';
import { Store } from '../models/Store';
import { Modality } from '../models/Modality';
import { info } from 'console';

export const newSale = async (req: Request, res: Response) => {
    
    let { cardNumber, grossValue, netValue, parcel, ModalityId, flag, StoreId } = req.body;
    
    let hasModality = await Modality.findByPk(ModalityId);
    let hasStore = await Store.findByPk(StoreId);
    
    if(hasModality && hasStore) {
        let newSale = await Sale.create({ cardNumber, grossValue, netValue, parcel, ModalityId, flag, StoreId });
        
        res.status(201);
        return res.json({newSale});
    }
    res.status(400);
    return res.json({error: 'Modalidade ou Loja não cadastrados'});
    
}

export const removeSale = async (req: Request, res: Response) => {
    let id: number = parseInt(req.params.id);
    await Sale.destroy({ where: { id } })
    res.status(200)
    return res.json({});
}