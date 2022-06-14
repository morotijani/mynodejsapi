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
            const obj = {fname: req.body.fname, lname: req.body.lname, email: req.body.email}
            res.status(200).json({
                success: true,
                method: "create",
                contact: obj
            });
        }
    }

    findById = () => {
        return (req, res, next) => {
            res.status(200).json({
                success: true,
                method: "findById",
                contactId : req.params.id
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