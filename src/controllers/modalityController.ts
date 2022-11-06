import { Request, Response } from 'express';
import { Modality } from '../models/Modality';

export const charge = async (req: Request, res: Response) => {
    const debt = await Modality.create({id: 1, name: "debt"});
    const credit = await Modality.create({id: 2, name: "credit"});
}

