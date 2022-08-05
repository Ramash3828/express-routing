const Contact = require("./Contacts");

exports.getAllContacts = (req, res) => {
    Contact.find()
        .then((contacts) => {
            res.render("index", { contacts, error: {} });
        })
        .catch((e) => {
            console.log(e);
            res.status(500).json({ message: "Error Occurred" });
        });
};

exports.createContact = (req, res) => {
    const { name, email, phone, id } = req.body;

    let error = {};

    if (!name) {
        error.name = "Please provide a Name";
    }
    if (!email) {
        error.email = "Please provide an email";
    }
    if (!phone) {
        error.phone = "Please provide an phone";
    }

    const isError = Object.keys(error).length > 0;

    if (isError) {
        Contact.find()
            .then((contacts) => {
                return res.render("index", { contacts, error });
            })
            .catch((e) => {
                console.log(e);
                return res.status(500).json({ message: "Error Occurred" });
            });
    }

    if (id) {
        Contact.findOneAndUpdate(
            { _id: id },
            {
                $set: { name, email, phone },
            }
        )
            .then(() => {
                Contact.find().then((contacts) => {
                    res.render("index", { contacts, error: {} });
                });
            })
            .catch((e) => {
                console.log(e);
                res.status(500).json({ message: "Error Occurred" });
            });
    } else {
        const contact = new Contact({
            name,
            email,
            phone,
        });

        contact
            .save()
            .then(() => {
                Contact.find().then((contacts) => {
                    res.render("index", { contacts, error: {} });
                });
            })
            .catch((e) => {
                console.log(e);
                res.status(500).json({ message: "Error Occurred" });
            });
    }
};

exports.getContactById = (req, res) => {
    const { id } = req.params;
    Contact.findById(id)
        .then((contact) => {
            res.json(contact);
        })
        .catch((e) => {
            console.log(e);
            res.status(500).json({ message: "Error Occurred" });
        });
};

exports.updateContact = (req, res) => {
    const { name, email, phone } = req.body;
    const { id } = req.params;

    Contact.findOneAndUpdate(
        { _id: id },
        {
            $set: { name, email, phone },
        },
        { new: true }
    )
        .then((contact) => {
            res.json(contact);
        })
        .catch((e) => {
            console.log(e);
            res.status(500).json({ message: "Error Occurred" });
        });
};

exports.deleteContactById = (req, res) => {
    const { id } = req.params;
    Contact.findOneAndDelete({ _id: id })
        .then(() => {
            Contact.find().then((contacts) => {
                res.render("index", { contacts, error: {} });
            });
        })
        .catch((e) => {
            console.log(e);
            res.status(500).json({ message: "Error Occurred" });
        });
};
