// #region Global Imports
const nextRoutes = require("next-routes");
// #endregion Global Imports

const routes = (module.exports = nextRoutes());

routes.add("home", "/");
routes.add("/awesome", "/awesome/index");
routes.add("/menus", "/menu/index");

export default routes;
