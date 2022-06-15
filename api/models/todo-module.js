const { Sequelize, DataTypes, Model } = require('sequelize');
const mysql = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD,{
    host: process.env.DB_HOST,
    dialect: 'mysql',
    pool: {min: 0, max: 5}
});

const Todo = mysql.define('Todo', {
    user_id: {
        type: DataTypes.INTEGER,
        allowNull: true
    },
    name: {
        type: DataTypes.STRING,
        Validate: {
            len: {
                msg: "Name must be between 2 and 225 characters.",
                args: [2, 255]
            }
        }
    },
    completed: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
    }
}, {
    indexes: [
        {fields: ['user_id']},
        {fields: ['user_id', 'completed']}
    ]
});

Todo.sync();
Model.exports = Todo;