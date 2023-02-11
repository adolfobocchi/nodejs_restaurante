import { User } from "../models/User.js";

export const Auth = {
    private: async (req, res, next) => {
        let sucesso = false;
        if(req.session.authorization) {
            let hash = req.session.authorization;
            //console.log(hash);
            let decoded = Buffer.from(hash, 'base64').toString();
            //console.log(decoded);
            let data = decoded.split(':');
            if(data.length === 2) {
                let temUser = await User.findOne({where: {
                    email: data[0],
                    password: data[1]
                }})
                if(temUser) {
                    sucesso = true;
                }
            }
        }
        
        if(sucesso) {
            next();
        } else {
            res.status(403);
            //res.json({error: 'Não Autorizado'});
            res.redirect('/login');

        }
    }
}