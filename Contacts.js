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

    updateContactById(id, updateContact) {
        const index = this.contacts.findIndex((contact) => contact.id === id);
        id = this.contacts.length + 1;
        this.contacts[index].name =
            updateContact.name || this.contacts[index].name;
    }
}
