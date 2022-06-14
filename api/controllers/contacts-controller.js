class ContactsController {
    getAll = () => {
        return (req, res, next) => {
            res.status(200).json({
                success: true,
                data: [
                    {fname: "Tijani", lname: "Moro", phone: "0244323210"},
                    {fname: "Batu", lname: "Bamba", phone: "04353432323"}
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

module.exports = new ContactsController();