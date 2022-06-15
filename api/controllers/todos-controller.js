const Todo = require('../models/todo-module');

class TodosController {
    getAll = () => {
        return (req, res, next) => {
            res.status(200).json({
                success: true,
                data: [
                    {todo: "learn js"},
                    {todo: "sleep by 10"}
                ]
            });
        }
    }

    create = () => {
        return (req, res, next) => {
            res.status(200).json({
                success: true,
                method: "create",
            });
        }
    }

    findById = () => {
        return (req, res, next) => {
            res.status(200).json({
                success: true,
                method: "findById",
            });
        }
    }

    update = () => {
        return (req, res, next) => {
            res.status(200).json({
                success: true,
                method: "update",
            });
        }
    }

    delete = () => {
        return (req, res, next) => {
            res.status(200).json({
                success: true,
                method: "delete",
            });
        }
    }
}

module.exports = new TodosController();