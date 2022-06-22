"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _koaRouter = _interopRequireDefault(require("koa-router"));

var _health = _interopRequireDefault(require("./health/health"));

var _user = _interopRequireDefault(require("./user/user"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const router = new _koaRouter.default();
router.get('/health', _health.default);
router.get('/api/users', _user.default.getAllUsers);
router.put('/api/user', _user.default.createUser);
router.delete('/api/user/:rol', _user.default.removeUser);
var _default = router;
exports.default = _default;