"use strict";

var _koa = _interopRequireDefault(require("koa"));

var _koaBody = _interopRequireDefault(require("koa-body"));

var _index = _interopRequireDefault(require("./routes/index"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const app = new _koa.default();
const port = 3000;
app.use((0, _koaBody.default)({
  multipart: true,
  urlencoded: true
}));
app.use(_index.default.routes());
app.listen(3000, () => {
  console.log(`Server is running on port ${port}`);
});