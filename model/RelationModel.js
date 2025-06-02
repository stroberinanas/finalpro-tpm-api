import { response } from 'express';
import Basecamp from './BasecampModel.js';
import Pos from './PosModel.js';
import User from './UserModel.js';

// Definisikan relasi antar model
Basecamp.hasMany(Pos, { foreignKey: 'basecamp_id' });
Pos.belongsTo(Basecamp, { foreignKey: 'basecamp_id' });

// Model Pos dan Basecamp sudah ada relasi: Pos.belongsTo(Basecamp, {foreignKey: 'basecamp_id'})

export {
    Basecamp,
    Pos,
    User,
};
