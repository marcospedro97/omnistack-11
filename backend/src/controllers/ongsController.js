const crypto = require('crypto');
const connection = require('../database/connection');


module.exports = {
    async index(request, response){
        const ongs = await connection('ongs').select('*');
        return reponse.json(ongs);
    },
    async create(request, response){
        const { name, email, phone, city, uf } = request.body;
        const id = crypto.randomBytes(8).toString('HEX');

        await connection('ongs').insert({
            id,
            name,
            email,
            phone,
            city,
            uf,
        });

        return response.json({ id });
    }
};