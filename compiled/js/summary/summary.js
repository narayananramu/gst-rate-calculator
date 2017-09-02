'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _button = require('./button');

var _button2 = _interopRequireDefault(_button);

var _list = require('./list');

var _list2 = _interopRequireDefault(_list);

var _mobxReact = require('mobx-react');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Summary = (0, _mobxReact.observer)(_class = function (_Component) {
    _inherits(Summary, _Component);

    function Summary(props) {
        _classCallCheck(this, Summary);

        return _possibleConstructorReturn(this, (Summary.__proto__ || Object.getPrototypeOf(Summary)).call(this, props));
    }

    _createClass(Summary, [{
        key: 'render',
        value: function render() {
            if (this.props.store.selectedItems.length > 0) {
                return _react2.default.createElement(
                    'div',
                    null,
                    _react2.default.createElement(_button2.default, { store: this.props.store }),
                    _react2.default.createElement(_list2.default, { store: this.props.store })
                );
            } else {
                return null;
            }
        }
    }]);

    return Summary;
}(_react.Component)) || _class;

exports.default = Summary;