const contacts = require("./Contacts");

exports.getAllContacts = (req, res) => {
    res.json(contacts.getAllContacts());
};

exports.createContact = (req, res) => {
    const { name, email, phone } = req.body;
    let contact = contacts.createContact({
        name,
        phone,
        email,
    });
    res.json(contact);
};

exports.getContactById = (req, res) => {
    let { id } = req.params;
    id = parseInt(id);
    const contact = contacts.getContactById(id);
    res.json(contact);
};

exports.updateContact = (req, res) => {
    let { id } = req.params;
    id = Number(id);
    const { name, phone, email } = req.body;

    const contact = contacts.updateContactById(id, {
        name,
        phone,
        email,
    });
    res.json(contact);
};

exports.deleteContactById = (req, res) => {
    let { id } = req.params;
    id = Number(id);

    const contact = contacts.deleteContact(id);
    res.json(contact);
};
