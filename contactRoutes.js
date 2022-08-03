const Router = require("express").Router();
const { getAllContacts, createContact } = require("./contactController");

Router.get("/", getAllContacts);
Router.post("/", createContact);
// Router.put("/:id");
// Router.delete("/:id");

module.exports = Router;
