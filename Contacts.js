class Contacts {
    constructor() {
        this.contacts = [];
    }

    getAllContacts() {
        return this.contacts;
    }

    getContactById(id) {
        return this.contacts.find((contact) => contact.id === id);
    }

    createContact(contact) {
        contact.id = this.contacts.length + 1;
        return contact;
    }
    updateContactById(id, updateContact) {
        const index = this.contacts.findIndex((contact) => contact.id === id);

        this.contacts[index].name =
            updateContact.name || this.contacts[index].name;
        this.contacts[index].email =
            updateContact.email || this.contacts[index].email;
        this.contacts[index].phone =
            updateContact.phone || this.contacts[index].phone;

        return this.contacts[index];
    }

    deleteContact(id) {
        const index = this.contacts.findIndex((contact) => contact.id === id);
        const deletedObj = this.contacts[index];
        this.contacts.filter((contact) => contact.id !== id);

        return deletedObj;
    }
}

const contacts = new Contacts();

module.exports = contacts;
