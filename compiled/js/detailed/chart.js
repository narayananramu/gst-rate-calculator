'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactChartjs = require('react-chartjs-2');

var _mobxReact = require('mobx-react');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Chart = (0, _mobxReact.observer)(_class = function (_Component) {
	_inherits(Chart, _Component);

	function Chart(props) {
		_classCallCheck(this, Chart);

		var _this = _possibleConstructorReturn(this, (Chart.__proto__ || Object.getPrototypeOf(Chart)).call(this, props));

		_this.state = {
			data: {
				labels: ['Red', 'Green', 'Yellow'],
				datasets: [{
					data: [10, 50, 10],
					backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
					hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56']
				}]
			}
		};
		return _this;
	}

	_createClass(Chart, [{
		key: 'render',
		value: function render() {
			return _react2.default.createElement(_reactChartjs.Doughnut, { data: this.state.data, width: 250, height: 250, legend: { position: 'right' }, options: { maintainAspectRatio: false, responsive: false } });
		}
	}]);

	return Chart;
}(_react.Component)) || _class;

exports.default = Chart;