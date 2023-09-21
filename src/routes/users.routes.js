const {Router} = require("express");

const UsersContoller = require("../controllers/UsersContoller");


const usersRoutes = Router();


const usersContoller = new UsersContoller();


usersRoutes.post("/", usersContoller.create);
usersRoutes.put("/:id", usersContoller.update);

module.exports = usersRoutes;