import { Request, Response } from 'express';
import { Store } from '../models/Store';

export const ping = (req: Request, res: Response) => {
    res.json({pong: true});
}

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

export const login = async (req: Request, res: Response) => {
    if(req.body.email && req.body.password) {
        let email: string = req.body.email;
        let password: string = req.body.password;

        let store = await Store.findOne({ 
            where: { email, password }
        });

        if(store) {
            res.json({ status: true });
            return;
        }
    }

    res.json({ status: false });
}

export const list = async (req: Request, res: Response) => {
    let shops = await Store.findAll();
    let list: number[] = [];

    for(let i in shops) {
        list.push( shops[i].id );
    }

    res.json({ list });
}