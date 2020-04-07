const connection = require('../database/connetion');

module.exports = {
    async create(req, res) {
        const { id } = req.body;

        const ong = await connection('ongs').where('id', id).select('name').first();

        if (!ong) {
            return res.status(400).json({ error: 'Inexistent Ong whit this id' });
        }

        return res.json(ong);
    }
}