import { Request, Response } from 'express';
import { Sale } from '../models/Sale';
import { Store } from '../models/Store';
import { Modality } from '../models/Modality';
import { Op } from 'sequelize';

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
    await Sale.destroy({ where: { id } });
    res.status(200);
    return res.json({});
}

export const listSale = async (req: Request, res: Response) => {
    const {dataInicio, dataFim} = req.query;
    
    // incluindo os models Modality e Store para realizar inner joins e receber o nome da modalidade e loja
    const list = await Sale.findAll({
            include: [{
                model: Modality,
                required: true,
     
             }, {
                 model: Store,
                 required: true
             }],
            where: { 
                createdAt: { [Op.between]: [`${dataInicio} 00:00:01.000 +00:00`, `${dataFim} 23:59:59.000 +00:00`]}}
            });
    
    res.status(200);
    return res.json({list});
}

export const paginationSale = async (req: Request, res: Response) => {
    const page: number = parseInt(req.params.page);
    const npp: number = 2;
    const offset: number = (page - 1 ) * npp;
    // incluindo os models Modality e Store para realizar inner joins e receber o nome da modalidade e loja
    const list = await Sale.findAll({
            include: [{
                model: Modality,
                required: true,
     
             }, {
                 model: Store,
                 required: true
             }],
             offset,
             limit: npp
            });
    
    res.status(200);
    return res.json({list});
}