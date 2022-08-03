const Router = require("express").Router();
const {
    getAllContacts,
    createContact,
    getContactById,
    updateContact,
    deleteContactById,
} = require("./contactController");

Router.get("/", getAllContacts);
Router.post("/", createContact);
Router.get("/:id", getContactById);
Router.put("/:id", updateContact);
Router.delete("/:id", deleteContactById);

module.exports = Router;
