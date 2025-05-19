"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
require("./table.css");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
// apps/admin-app/src/components/common/Table.js

// We'll add some basic styling

var Table = function Table(_ref) {
  var columns = _ref.columns,
    data = _ref.data,
    isLoading = _ref.isLoading,
    error = _ref.error;
  if (isLoading) {
    return /*#__PURE__*/_react["default"].createElement("p", {
      className: "table-message"
    }, "Loading data...");
  }
  if (error) {
    return /*#__PURE__*/_react["default"].createElement("p", {
      className: "table-message error"
    }, "Error loading data: ", error.message || 'Unknown error');
  }
  if (!data || data.length === 0) {
    return /*#__PURE__*/_react["default"].createElement("p", {
      className: "table-message"
    }, "No data available.");
  }
  return /*#__PURE__*/_react["default"].createElement("table", {
    className: "styled-table"
  }, /*#__PURE__*/_react["default"].createElement("thead", null, /*#__PURE__*/_react["default"].createElement("tr", null, columns.map(function (col) {
    return /*#__PURE__*/_react["default"].createElement("th", {
      key: col.key
    }, col.header);
  }))), /*#__PURE__*/_react["default"].createElement("tbody", null, data.map(function (row, rowIndex) {
    return /*#__PURE__*/_react["default"].createElement("tr", {
      key: row.id || rowIndex
    }, " ", columns.map(function (col) {
      return /*#__PURE__*/_react["default"].createElement("td", {
        key: "".concat(col.key, "-").concat(row.id || rowIndex)
      }, col.render ? col.render(row) : row[col.key]);
    }));
  })));
};
var _default = exports["default"] = Table;