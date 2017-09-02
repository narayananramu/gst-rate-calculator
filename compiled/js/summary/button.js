'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Button = require('material-ui/Button');

var _Button2 = _interopRequireDefault(_Button);

var _mobxReact = require('mobx-react');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SummaryButton = (0, _mobxReact.observer)(_class = function (_Component) {
    _inherits(SummaryButton, _Component);

    function SummaryButton(props) {
        _classCallCheck(this, SummaryButton);

        return _possibleConstructorReturn(this, (SummaryButton.__proto__ || Object.getPrototypeOf(SummaryButton)).call(this, props));
    }

    _createClass(SummaryButton, [{
        key: 'calculate',
        value: function calculate() {
            window.location.href = "#/calculate";
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(
                    _Button2.default,
                    { raised: true, className: 'gstCalculate', onClick: this.calculate },
                    'See how GST Affects your Budget'
                )
            );
        }
    }]);

    return SummaryButton;
}(_react.Component)) || _class;

exports.default = SummaryButton;