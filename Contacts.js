const { Schema, model } = require("mongoose");

const contactSchema = new Schema({
    name: {
        type: String,
        required: true,
        trim: true,
        minLength: 4,
        maxLength: 30,
    },
    email: {
        type: String,
        required: true,
        trim: true,
    },
    phone: {
        type: String,
        required: true,
        trim: true,
        minLength: 7,
        maxLength: 15,
    },
});

const Contact = model("Contact", contactSchema);

module.exports = Contact;

// class Contacts {
//     constructor() {
//         this.contacts = [];
//     }

//     getAllContacts() {
//         return this.contacts;
//     }

//     getContactById(id) {
//         return this.contacts.find((contact) => contact.id === id);
//     }

//     createContact(contact) {
//         contact.id = this.contacts.length + 1;
//         this.contacts.push(contact);
//         return contact;
//     }
//     updateContactById(id, updateContact) {
//         const index = this.contacts.findIndex((contact) => contact.id === id);

//         this.contacts[index].name =
//             updateContact.name || this.contacts[index].name;
//         this.contacts[index].email =
//             updateContact.email || this.contacts[index].email;
//         this.contacts[index].phone =
//             updateContact.phone || this.contacts[index].phone;

//         return this.contacts[index];
//     }

//     deleteContact(id) {
//         const index = this.contacts.findIndex((contact) => contact.id === id);
//         const deletedObj = this.contacts[index];
//         this.contacts = this.contacts.filter((contact) => contact.id !== id);

//         return deletedObj;
//     }
// }

// module.exports = new Contacts();

// // module.exports = contacts;
