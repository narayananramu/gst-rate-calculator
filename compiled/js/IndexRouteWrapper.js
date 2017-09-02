'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactLazyload = require('react-lazyload');

var _reactLazyload2 = _interopRequireDefault(_reactLazyload);

var _list = require('./home/list');

var _list2 = _interopRequireDefault(_list);

var _search = require('./home/search');

var _search2 = _interopRequireDefault(_search);

var _summary = require('./summary/summary');

var _summary2 = _interopRequireDefault(_summary);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var IndexRouteWrapper = function (_Component) {
    _inherits(IndexRouteWrapper, _Component);

    function IndexRouteWrapper(props) {
        _classCallCheck(this, IndexRouteWrapper);

        return _possibleConstructorReturn(this, (IndexRouteWrapper.__proto__ || Object.getPrototypeOf(IndexRouteWrapper)).call(this, props));
    }

    _createClass(IndexRouteWrapper, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'div',
                { className: 'wrapper' },
                _react2.default.createElement(
                    'div',
                    { className: 'col' },
                    _react2.default.createElement(
                        'h1',
                        { className: 'title' },
                        'GST Rate Comparsion'
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: 'content' },
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
                    )
                ),
                _react2.default.createElement(
                    'div',
                    { className: 'col' },
                    _react2.default.createElement(
                        'div',
                        { id: 'summary' },
                        _react2.default.createElement(_summary2.default, { store: this.props.store })
                    )
                )
            );
        }
    }]);

    return IndexRouteWrapper;
}(_react.Component);

exports.default = IndexRouteWrapper;