const contacts = require("./Contacts");

exports.getAllContacts = (req, res) => {
    res.json(contacts);
};

exports.createContact = (req, res) => {
    const { name, email, phone } = req.body;
};
