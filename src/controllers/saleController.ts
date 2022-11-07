import { Request, Response } from 'express';
import { Sale } from '../models/Sale';
import { Store } from '../models/Store';
import { Modality } from '../models/Modality';

export const newSale = async (req: Request, res: Response) => {
    let modalities = await Modality.findAll();
    
}

