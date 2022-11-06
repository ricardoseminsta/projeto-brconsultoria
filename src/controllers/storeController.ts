import { Request, Response } from 'express';
import { Store } from '../models/Store';

export const newStore = async (req: Request, res: Response) => {
    if(req.body.name) {
        let name: string = req.body.name;

        let hasStore = await Store.findOne({where: { name }});
        if(!hasStore) {
            let newStore = await Store.create({ name });

            res.status(201);
            return res.json({ id: newStore.id, name: newStore.name });
        }
        res.status(400)    
        return res.json({ error: 'Já existe uma loja com esse nome' });
    }
    res.status(400) 
    return res.json({ error: 'Não foi informado um nome, cadastro não realizado' });
}

export const list = async (req: Request, res: Response) => {
    let shops = await Store.findAll();
    let list: number[] = [];

    for(let i in shops) {
        list.push( shops[i].id );
    }

    res.json({ list });
}

export const removeStore = async (req: Request, res: Response) => {
    let id: number = parseInt(req.params.id);
    await Store.destroy({ where: { id } })
    res.status(200)
    return res.json({});
}

export const updateStore = async (req: Request, res: Response) => {
    let id: string = req.params.id;
    let name: string = req.body.name;
    let store = await Store.findByPk(id);
    if (store) {
        store.name = name;
        await store.save();
        res.status(200);
        return res.json({ store })
    }
    res.status(404);
    return res.json({ error: 'Não existe esse id de Loja'})
}