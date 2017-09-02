'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Table = require('material-ui/Table');

var _Table2 = _interopRequireDefault(_Table);

var _Checkbox = require('material-ui/Checkbox');

var _Checkbox2 = _interopRequireDefault(_Checkbox);

var _Icon = require('material-ui/Icon');

var _Icon2 = _interopRequireDefault(_Icon);

var _mobxReact = require('mobx-react');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ItemList = (0, _mobxReact.observer)(_class = function (_Component) {
    _inherits(ItemList, _Component);

    function ItemList(props) {
        _classCallCheck(this, ItemList);

        var _this = _possibleConstructorReturn(this, (ItemList.__proto__ || Object.getPrototypeOf(ItemList)).call(this, props));

        _this.itemSelect = _this.itemSelect.bind(_this);
        return _this;
    }

    _createClass(ItemList, [{
        key: 'itemSelect',
        value: function itemSelect(e, checked) {
            if (checked) {
                this.props.store.addToSelection(e.target.value);
            } else {
                this.props.store.removeFromSelection(e.target.value);
            }
        }
    }, {
        key: 'render',
        value: function render() {
            var _props$store = this.props.store,
                categoryList = _props$store.categoryList,
                searchedItems = _props$store.searchedItems,
                itemList = _props$store.itemList;


            var category = categoryList.map(function (category, item) {
                var myitems = searchedItems.map(function (item) {
                    if (item.categorycode === category.categorycode) {
                        return item;
                    }
                });
                return _react2.default.createElement(
                    _Table2.default,
                    { key: item, className: 'listTable' },
                    _react2.default.createElement(
                        _Table.TableHead,
                        { className: 'listHead' },
                        _react2.default.createElement(
                            _Table.TableRow,
                            { className: 'listHead' },
                            _react2.default.createElement(
                                _Table.TableCell,
                                { colSpan: 2, className: 'listHead listHeadMinWidth', disablePadding: true },
                                category.categorylabel
                            ),
                            _react2.default.createElement(
                                _Table.TableCell,
                                { colSpan: 1, numeric: true, className: 'listHead rs-util-table-cell' },
                                'Old Rate'
                            ),
                            _react2.default.createElement(
                                _Table.TableCell,
                                { colSpan: 1, numeric: true, className: 'listHead' },
                                'GST'
                            )
                        )
                    ),
                    _react2.default.createElement(
                        _Table.TableBody,
                        { className: 'listBody' },
                        searchedItems.map(function (item, index) {
                            if (item.categorycode === category.categorycode) {
                                return _react2.default.createElement(
                                    _Table.TableRow,
                                    { className: '', key: index },
                                    _react2.default.createElement(
                                        _Table.TableCell,
                                        { colSpan: 1, checkbox: true },
                                        _react2.default.createElement(_Checkbox2.default, { value: item.productcode, checked: item.selected, onChange: this.itemSelect, style: { color: "#1f7ae0" }, icon: _react2.default.createElement(
                                                _Icon2.default,
                                                { style: { color: "#7f7f7f" } },
                                                'add_box'
                                            ) })
                                    ),
                                    _react2.default.createElement(
                                        _Table.TableCell,
                                        { colSpan: 1, className: "productLabel" },
                                        item.productlabel
                                    ),
                                    _react2.default.createElement(
                                        _Table.TableCell,
                                        { colSpan: 1, className: "rs-util-table-cell", numeric: true },
                                        item.oldrate
                                    ),
                                    _react2.default.createElement(
                                        _Table.TableCell,
                                        { colSpan: 1, numeric: true },
                                        item.gstrate
                                    )
                                );
                            }
                        }.bind(this))
                    )
                );
            }.bind(this));
            return _react2.default.createElement(
                'div',
                null,
                category
            );
        }
    }]);

    return ItemList;
}(_react.Component)) || _class;

exports.default = ItemList;