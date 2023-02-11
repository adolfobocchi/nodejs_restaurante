import {User} from '../models/User.js';

export const loginPage = (req, res) => { 
    let dados = {};
    res.render('pages/login', {
        dados
    });
}

export const register = async (req, res) => {
    if(req.body.email && req.body.password) {
        let {email, password} = req.body;
        let temUser = await User.findOne({where: {email}});
        if(!temUser) {
            let novoUser = await User.create({email, password});
            res.status(201);
            res.json({id: novoUser.id});
        } else {
            res.json({ error: 'E-mail já existe!'})
        }
    }
    res.json({error: 'E-mail ou senha invalidos!'});
}

export const login = async (req, res) => {
    if(req.body.email && req.body.password) {
        let {email, password} = req.body;
        let user = await User.findOne({where: {email, password}});
        if(user) {
            let authorization = Buffer.from(user.email+':'+user.password).toString('base64');
            req.session.authorization = authorization;
            //res.json({status: true, authorization: 'Basic '+authorization})
            res.redirect('/painel');
            
            return;
        }
    }
    res.json({status: false});
}

export const logout = async (req, res) => {
    req.session.destroy();
    res.redirect('/painel');
}

