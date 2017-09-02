'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _list = require('./sideSearch/list');

var _list2 = _interopRequireDefault(_list);

var _search = require('./sideSearch/search');

var _search2 = _interopRequireDefault(_search);

var _list3 = require('./detailed/list');

var _list4 = _interopRequireDefault(_list3);

var _Icon = require('material-ui/Icon');

var _Icon2 = _interopRequireDefault(_Icon);

var _IconButton = require('material-ui/IconButton');

var _IconButton2 = _interopRequireDefault(_IconButton);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CalculateRouteWrapper = function (_Component) {
    _inherits(CalculateRouteWrapper, _Component);

    function CalculateRouteWrapper(props) {
        _classCallCheck(this, CalculateRouteWrapper);

        var _this = _possibleConstructorReturn(this, (CalculateRouteWrapper.__proto__ || Object.getPrototypeOf(CalculateRouteWrapper)).call(this, props));

        _this.goBack = _this.goBack.bind(_this);
        return _this;
    }

    _createClass(CalculateRouteWrapper, [{
        key: 'goBack',
        value: function goBack() {
            window.location.href = "#/";
            this.props.store.empty();
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'div',
                { className: 'wrapper' },
                _react2.default.createElement(
                    'div',
                    { className: 'col', id: 'sidebar' },
                    _react2.default.createElement(
                        'div',
                        { id: 'search' },
                        _react2.default.createElement(_search2.default, { store: this.props.store })
                    ),
                    _react2.default.createElement(
                        'div',
                        { id: 'list' },
                        _react2.default.createElement(_list2.default, { store: this.props.store })
                    )
                ),
                _react2.default.createElement(
                    'div',
                    { className: 'col' },
                    _react2.default.createElement(
                        'h1',
                        { className: 'title' },
                        'GST Rate Comparsion'
                    ),
                    _react2.default.createElement(
                        _IconButton2.default,
                        { className: 'close-button', 'aria-label': 'Close', onClick: this.goBack },
                        _react2.default.createElement(
                            _Icon2.default,
                            null,
                            'clear'
                        )
                    ),
                    _react2.default.createElement(
                        'div',
                        { id: 'detailed' },
                        _react2.default.createElement(_list4.default, { store: this.props.store })
                    )
                )
            );
        }
    }]);

    return CalculateRouteWrapper;
}(_react.Component);

exports.default = CalculateRouteWrapper;