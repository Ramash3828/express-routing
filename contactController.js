const Contact = require("./Contacts");

exports.getAllContacts = (req, res) => {
    Contact.find()
        .then((contacts) => {
            res.json(contacts);
        })
        .catch((e) => {
            console.log(e);
            res.status(500).json({ message: "Error Occurred" });
        });
};

exports.createContact = (req, res) => {
    const { name, email, phone } = req.body;
    const contact = new Contact({
        name,
        email,
        phone,
    });
    contact
        .save()
        .then((c) => {
            res.json(c);
        })
        .catch((e) => {
            console.log(e);
            res.status(500).json({ message: "Error Occurred" });
        });
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
        .then((contact) => {
            res.json(contact);
        })
        .catch((e) => {
            console.log(e);
            res.status(500).json({ message: "Error Occurred" });
        });
};
