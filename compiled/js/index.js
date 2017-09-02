'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _IndexRouteWrapper = require('./IndexRouteWrapper');

var _IndexRouteWrapper2 = _interopRequireDefault(_IndexRouteWrapper);

var _CalculateRouteWrapper = require('./CalculateRouteWrapper');

var _CalculateRouteWrapper2 = _interopRequireDefault(_CalculateRouteWrapper);

var _store = require('./home/store.js');

var _store2 = _interopRequireDefault(_store);

var _reactRouterDom = require('react-router-dom');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_store2.default.fetchCategory();
_store2.default.fetchItems();
_reactDom2.default.render(_react2.default.createElement(
    _reactRouterDom.HashRouter,
    null,
    _react2.default.createElement(
        _reactRouterDom.Switch,
        null,
        _react2.default.createElement(_reactRouterDom.Route, {
            exact: true, path: '/',
            render: function render(props) {
                return _react2.default.createElement(_IndexRouteWrapper2.default, _extends({}, props, { store: _store2.default }));
            } }),
        _react2.default.createElement(_reactRouterDom.Route, {
            exact: true, path: '/calculate',
            render: function render(props) {
                return _react2.default.createElement(_CalculateRouteWrapper2.default, _extends({}, props, { store: _store2.default }));
            } })
    )
), document.getElementById("container"));