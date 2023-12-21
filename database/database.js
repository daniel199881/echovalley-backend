import config from '../configs/db.js';
import { Sequelize } from 'sequelize';

// Initialize Sequelize with a connection pool
const sequelize = new Sequelize(
    config.name,
    config.user,
    config.password,
    {
        host: config.host,
        dialect: config.dialect,
        pool: config.pool
    }
);

export default sequelize;