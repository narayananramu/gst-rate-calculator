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

var _Input = require('material-ui/Input');

var _Input2 = _interopRequireDefault(_Input);

var _chart = require('./chart');

var _chart2 = _interopRequireDefault(_chart);

var _mobxReact = require('mobx-react');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SelectedItemList = (0, _mobxReact.observer)(_class = function (_Component) {
    _inherits(SelectedItemList, _Component);

    function SelectedItemList(props) {
        _classCallCheck(this, SelectedItemList);

        var _this = _possibleConstructorReturn(this, (SelectedItemList.__proto__ || Object.getPrototypeOf(SelectedItemList)).call(this, props));

        _this.inputChange = _this.inputChange.bind(_this);
        return _this;
    }

    _createClass(SelectedItemList, [{
        key: 'inputChange',
        value: function inputChange(e) {
            if (e.target.value.length != 0) {
                this.props.store.changeMonthlySpending(e.target.id.split("input-spend-")[1], parseFloat(e.target.value));
            }
        }
    }, {
        key: 'render',
        value: function render() {
            var selectedItems = this.props.store.selectedItems;

            var shortListItems = selectedItems.map(function (item, index) {
                if (item.new_budget > item.monthly_spending) {
                    return _react2.default.createElement(
                        _Table.TableRow,
                        { className: '', key: index },
                        _react2.default.createElement(
                            _Table.TableCell,
                            { colSpan: 2, className: 'productLabelCol', disablePadding: true },
                            item.productlabel
                        ),
                        _react2.default.createElement(
                            _Table.TableCell,
                            { colSpan: 1, className: 'productSpendCol', numeric: true, disablePadding: true },
                            '\u20B9 ',
                            _react2.default.createElement(_Input2.default, { placeholder: 'Monthly Spending', className: 'productSpendInput', id: "input-spend-" + item.productcode, value: item.monthly_spending, onChange: this.inputChange })
                        ),
                        _react2.default.createElement(
                            _Table.TableCell,
                            { colSpan: 1, className: 'productSpendCol', numeric: true, disablePadding: true },
                            '\u20B9 ',
                            _react2.default.createElement(_Input2.default, { className: 'productSpendInput', value: item.new_budget.toFixed(2), onChange: this.inputChange, disabled: true })
                        ),
                        _react2.default.createElement(
                            _Table.TableCell,
                            { colSpan: 1, className: 'productSpendCol', numeric: true, disablePadding: true },
                            _react2.default.createElement(
                                'span',
                                null,
                                item.change.toFixed(2),
                                '%'
                            ),
                            _react2.default.createElement(
                                'span',
                                { className: 'increase' },
                                '\xB7 '
                            )
                        )
                    );
                } else if (item.new_budget === item.monthly_spending) {
                    return _react2.default.createElement(
                        _Table.TableRow,
                        { className: '', key: index },
                        _react2.default.createElement(
                            _Table.TableCell,
                            { colSpan: 2, className: 'productLabelCol', disablePadding: true },
                            item.productlabel
                        ),
                        _react2.default.createElement(
                            _Table.TableCell,
                            { colSpan: 1, className: 'productSpendCol', numeric: true, disablePadding: true },
                            '\u20B9 ',
                            _react2.default.createElement(_Input2.default, { placeholder: 'Monthly Spending', className: 'productSpendInput', id: "input-spend-" + item.productcode, value: item.monthly_spending, onChange: this.inputChange })
                        ),
                        _react2.default.createElement(
                            _Table.TableCell,
                            { colSpan: 1, className: 'productSpendCol', numeric: true, disablePadding: true },
                            '\u20B9 ',
                            _react2.default.createElement(_Input2.default, { className: 'productSpendInput', value: item.new_budget.toFixed(2), onChange: this.inputChange, disabled: true })
                        ),
                        _react2.default.createElement(
                            _Table.TableCell,
                            { colSpan: 1, className: 'productSpendCol', numeric: true, disablePadding: true },
                            _react2.default.createElement(
                                'span',
                                null,
                                item.change.toFixed(2),
                                '%'
                            ),
                            _react2.default.createElement(
                                'span',
                                { className: 'neutral' },
                                '\xB7 '
                            )
                        )
                    );
                } else {
                    return _react2.default.createElement(
                        _Table.TableRow,
                        { className: '', key: index },
                        _react2.default.createElement(
                            _Table.TableCell,
                            { colSpan: 2, className: 'productLabelCol', disablePadding: true },
                            item.productlabel
                        ),
                        _react2.default.createElement(
                            _Table.TableCell,
                            { colSpan: 1, className: 'productSpendCol', numeric: true, disablePadding: true },
                            '\u20B9 ',
                            _react2.default.createElement(_Input2.default, { placeholder: 'Monthly Spending', className: 'productSpendInput', id: "input-spend-" + item.productcode, value: item.monthly_spending, onChange: this.inputChange })
                        ),
                        _react2.default.createElement(
                            _Table.TableCell,
                            { colSpan: 1, className: 'productSpendCol', numeric: true, disablePadding: true },
                            '\u20B9 ',
                            _react2.default.createElement(_Input2.default, { className: 'productSpendInput', value: item.new_budget.toFixed(2), onChange: this.inputChange, disabled: true })
                        ),
                        _react2.default.createElement(
                            _Table.TableCell,
                            { colSpan: 1, className: 'productSpendCol', numeric: true, disablePadding: true },
                            _react2.default.createElement(
                                'span',
                                null,
                                item.change.toFixed(2),
                                '%'
                            ),
                            _react2.default.createElement(
                                'span',
                                { className: 'decrease' },
                                '\xB7 '
                            )
                        )
                    );
                }
            }.bind(this));
            return _react2.default.createElement(
                _Table2.default,
                { className: 'detailedTable' },
                _react2.default.createElement(
                    _Table.TableHead,
                    { className: 'listHead' },
                    _react2.default.createElement(
                        _Table.TableRow,
                        { className: 'listHead' },
                        _react2.default.createElement(
                            _Table.TableCell,
                            { colSpan: 2, className: 'listHead listHeadMinWidth', disablePadding: true },
                            'Your shortlist'
                        ),
                        _react2.default.createElement(
                            _Table.TableCell,
                            { colSpan: 1, numeric: true, className: 'listHead', disablePadding: true },
                            'Current Spend'
                        ),
                        _react2.default.createElement(
                            _Table.TableCell,
                            { colSpan: 1, numeric: true, className: 'listHead', disablePadding: true },
                            'After GST'
                        ),
                        _react2.default.createElement(
                            _Table.TableCell,
                            { colSpan: 1, numeric: true, className: 'listHead', disablePadding: true },
                            'Change'
                        )
                    )
                ),
                _react2.default.createElement(
                    _Table.TableBody,
                    { className: 'listBody' },
                    shortListItems,
                    _react2.default.createElement(
                        _Table.TableRow,
                        { className: '' },
                        _react2.default.createElement(
                            _Table.TableCell,
                            { colSpan: 2, className: 'productLabelCol', disablePadding: true },
                            'Total'
                        ),
                        _react2.default.createElement(
                            _Table.TableCell,
                            { colSpan: 1, className: 'productSpendCol', numeric: true, disablePadding: true },
                            '\u20B9 ',
                            this.props.store.total.toFixed(2)
                        ),
                        _react2.default.createElement(
                            _Table.TableCell,
                            { colSpan: 1, className: 'productSpendCol', numeric: true, disablePadding: true },
                            '\u20B9 ',
                            this.props.store.after_gst.toFixed(2)
                        ),
                        _react2.default.createElement(
                            _Table.TableCell,
                            { colSpan: 1, className: 'productSpendCol', numeric: true, disablePadding: true },
                            this.props.store.change.toFixed(2),
                            '%'
                        )
                    ),
                    _react2.default.createElement(
                        _Table.TableRow,
                        null,
                        _react2.default.createElement(
                            _Table.TableCell,
                            { colSpan: 5, className: 'chartHolder' },
                            _react2.default.createElement(
                                'p',
                                null,
                                'Looks like you will be spending ',
                                this.props.store.change === 0 ? " anything extra " : this.props.store.change < 0 ? this.props.store.change.toFixed(2) + "% less" : this.props.store.change.toFixed(2) + "% more",
                                ' under GST than before.'
                            ),
                            _react2.default.createElement(_chart2.default, { store: this.props.store })
                        )
                    )
                )
            );
        }
    }]);

    return SelectedItemList;
}(_react.Component)) || _class;

exports.default = SelectedItemList;