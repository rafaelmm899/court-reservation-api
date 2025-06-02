// models/index.js
import { Sequelize, DataTypes } from 'sequelize';
import { readdirSync } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const sequelize = new Sequelize(
    process.env.DB_DATABASE,
    process.env.DB_USER,
    process.env.DB_PASSWORD,
    {
        host: process.env.DB_HOST,
        dialect: process.env.DB_DIALECT,
        logging: console.log
    }
);
const models = {};

// Cargar todos los modelos del directorio
for (const file of readdirSync(__dirname)) {
  if (file === 'index.js' || !file.endsWith('.js')) continue;

  const { default: defineModel } = await import(path.join(__dirname, file));

  if (typeof defineModel !== 'function') {
    throw new Error(`El archivo ${file} no exporta una función como default.`);
  }
  const model = defineModel(sequelize, DataTypes);
  console.log('Modelo cargado:', model.name);
  models[model.name] = model;
}

// Asociaciones
for (const model of Object.values(models)) {
  if (model.associate) {
    model.associate(models);
  }
}

export { sequelize };
export default models;
