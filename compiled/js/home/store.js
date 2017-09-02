'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _desc, _value, _class, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _desc2, _value2, _class3, _descriptor11, _descriptor12, _descriptor13, _descriptor14, _descriptor15, _descriptor16, _descriptor17;

var _mobx = require('mobx');

var _axios = require('axios');

var _axios2 = _interopRequireDefault(_axios);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _initDefineProp(target, property, descriptor, context) {
    if (!descriptor) return;
    Object.defineProperty(target, property, {
        enumerable: descriptor.enumerable,
        configurable: descriptor.configurable,
        writable: descriptor.writable,
        value: descriptor.initializer ? descriptor.initializer.call(context) : void 0
    });
}

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
    var desc = {};
    Object['ke' + 'ys'](descriptor).forEach(function (key) {
        desc[key] = descriptor[key];
    });
    desc.enumerable = !!desc.enumerable;
    desc.configurable = !!desc.configurable;

    if ('value' in desc || desc.initializer) {
        desc.writable = true;
    }

    desc = decorators.slice().reverse().reduce(function (desc, decorator) {
        return decorator(target, property, desc) || desc;
    }, desc);

    if (context && desc.initializer !== void 0) {
        desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
        desc.initializer = undefined;
    }

    if (desc.initializer === void 0) {
        Object['define' + 'Property'](target, property, desc);
        desc = null;
    }

    return desc;
}

function _initializerWarningHelper(descriptor, context) {
    throw new Error('Decorating class property failed. Please ensure that transform-class-properties is enabled.');
}

var Items = (_class = function Items(item) {
    _classCallCheck(this, Items);

    _initDefineProp(this, 'categorycode', _descriptor, this);

    _initDefineProp(this, 'categorylabel', _descriptor2, this);

    _initDefineProp(this, 'productcode', _descriptor3, this);

    _initDefineProp(this, 'productlabel', _descriptor4, this);

    _initDefineProp(this, 'oldrate', _descriptor5, this);

    _initDefineProp(this, 'gstrate', _descriptor6, this);

    _initDefineProp(this, 'selected', _descriptor7, this);

    _initDefineProp(this, 'monthly_spending', _descriptor8, this);

    _initDefineProp(this, 'new_budget', _descriptor9, this);

    _initDefineProp(this, 'change', _descriptor10, this);

    this.categorycode = item.categorycode;
    this.categorylabel = item.categorylabel;
    this.productcode = item.productcode;
    this.productlabel = item.productlabel;
    this.oldrate = item.oldrate;
    this.gstrate = item.gstrate;
}, (_descriptor = _applyDecoratedDescriptor(_class.prototype, 'categorycode', [_mobx.observable], {
    enumerable: true,
    initializer: function initializer() {
        return "";
    }
}), _descriptor2 = _applyDecoratedDescriptor(_class.prototype, 'categorylabel', [_mobx.observable], {
    enumerable: true,
    initializer: function initializer() {
        return "";
    }
}), _descriptor3 = _applyDecoratedDescriptor(_class.prototype, 'productcode', [_mobx.observable], {
    enumerable: true,
    initializer: function initializer() {
        return "";
    }
}), _descriptor4 = _applyDecoratedDescriptor(_class.prototype, 'productlabel', [_mobx.observable], {
    enumerable: true,
    initializer: function initializer() {
        return "";
    }
}), _descriptor5 = _applyDecoratedDescriptor(_class.prototype, 'oldrate', [_mobx.observable], {
    enumerable: true,
    initializer: function initializer() {
        return "";
    }
}), _descriptor6 = _applyDecoratedDescriptor(_class.prototype, 'gstrate', [_mobx.observable], {
    enumerable: true,
    initializer: function initializer() {
        return "";
    }
}), _descriptor7 = _applyDecoratedDescriptor(_class.prototype, 'selected', [_mobx.observable], {
    enumerable: true,
    initializer: function initializer() {
        return false;
    }
}), _descriptor8 = _applyDecoratedDescriptor(_class.prototype, 'monthly_spending', [_mobx.observable], {
    enumerable: true,
    initializer: function initializer() {
        return 0;
    }
}), _descriptor9 = _applyDecoratedDescriptor(_class.prototype, 'new_budget', [_mobx.observable], {
    enumerable: true,
    initializer: function initializer() {
        return 0;
    }
}), _descriptor10 = _applyDecoratedDescriptor(_class.prototype, 'change', [_mobx.observable], {
    enumerable: true,
    initializer: function initializer() {
        return 0;
    }
})), _class);
var ItemStore = (_class3 = function () {
    function ItemStore() {
        _classCallCheck(this, ItemStore);

        _initDefineProp(this, 'categoryList', _descriptor11, this);

        _initDefineProp(this, 'itemList', _descriptor12, this);

        _initDefineProp(this, 'search', _descriptor13, this);

        _initDefineProp(this, 'total', _descriptor14, this);

        _initDefineProp(this, 'after_gst', _descriptor15, this);

        _initDefineProp(this, 'change', _descriptor16, this);

        _initDefineProp(this, 'categorial', _descriptor17, this);
    }

    _createClass(ItemStore, [{
        key: 'addToSelection',
        value: function addToSelection(itemcode) {
            var item = this.itemList.find(function (a) {
                return a.productcode === itemcode;
            });
            if (item) {
                this.itemList[this.itemList.indexOf(item)].selected = true;
                this.categorial[this.itemList[this.itemList.indexOf(item)].categorycode] += this.itemList[this.itemList.indexOf(item)].monthly_spending;
            }
        }
    }, {
        key: 'removeFromSelection',
        value: function removeFromSelection(itemcode) {
            var item = this.itemList.find(function (a) {
                return a.productcode === itemcode;
            });
            var index = this.itemList.indexOf(item);
            if (item && index) {
                this.total -= this.itemList[index].monthly_spending;
                this.after_gst -= this.itemList[index].new_budget;
                this.itemList[index].selected = false;
                this.itemList[index].new_budget = 0;
                this.itemList[index].change = 0;
                this.itemList[index].monthly_spending = 0;
                if (this.after_gst > 0 && this.total > 0) {
                    this.change = this.after_gst / this.total;
                } else {
                    this.total = 0;
                    this.after_gst = 0;
                    this.change = 0;
                }
            }
        }
    }, {
        key: 'changeMonthlySpending',
        value: function changeMonthlySpending(itemcode, value) {
            if (value != "NaN") {
                var item = this.itemList.find(function (a) {
                    return a.productcode === itemcode;
                });
                var index = this.itemList.indexOf(item);
                if (item && index) {
                    var onb = this.itemList[index].new_budget;
                    this.itemList[index].new_budget = value - value * item.oldrate / 100 + value * item.gstrate / 100;
                    this.total += value - this.itemList[index].monthly_spending;
                    this.after_gst += this.itemList[index].new_budget - onb;
                    this.itemList[index].change = (this.itemList[index].new_budget - value) / value * 100;
                    this.itemList[index].monthly_spending = value;
                    if (this.after_gst > 0 && this.total > 0) {
                        this.change = (this.after_gst - this.total) / this.total * 100;
                    } else {
                        this.total = 0;
                        this.after_gst = 0;
                        this.change = 0;
                    }
                }
            }
            if (!isFinite(this.change)) {
                this.total = 0;
                this.after_gst = 0;
                this.change = 0;
            }
        }
    }, {
        key: 'fetchItems',
        value: function fetchItems() {
            if (this.itemList.length == 0) {
                _axios2.default.get("js/gst.json").then(function (response) {
                    response.data.map(function (item) {
                        this.itemList.push(new Items(item));
                    }.bind(this));
                }.bind(this)).catch(function (error) {
                    console.log(error);
                });
            }
        }
    }, {
        key: 'fetchCategory',
        value: function fetchCategory() {
            if (this.categoryList.length == 0) {
                _axios2.default.get("js/gst_category.json").then(function (response) {
                    this.categoryList = response.data;
                }.bind(this));
            }
        }
    }, {
        key: 'empty',
        value: function empty() {
            this.total = 0;
            this.after_gst = 0;
            this.change = 0;
            this.itemList.map(function (item) {
                item.selected = false;
                item.monthly_spending = 0;
                item.new_budget = 0;
                item.change = 0;
            });
        }
    }, {
        key: 'searchedItems',
        get: function get() {
            var matchesFilter = new RegExp(this.search, "i");
            return this.itemList.filter(function (item) {
                return matchesFilter.test(item.productlabel);
            });
        }
    }, {
        key: 'selectedItems',
        get: function get() {
            return this.itemList.filter(function (item) {
                return item.selected;
            });
        }
    }]);

    return ItemStore;
}(), (_descriptor11 = _applyDecoratedDescriptor(_class3.prototype, 'categoryList', [_mobx.observable], {
    enumerable: true,
    initializer: function initializer() {
        return [];
    }
}), _descriptor12 = _applyDecoratedDescriptor(_class3.prototype, 'itemList', [_mobx.observable], {
    enumerable: true,
    initializer: function initializer() {
        return [];
    }
}), _descriptor13 = _applyDecoratedDescriptor(_class3.prototype, 'search', [_mobx.observable], {
    enumerable: true,
    initializer: function initializer() {
        return "";
    }
}), _descriptor14 = _applyDecoratedDescriptor(_class3.prototype, 'total', [_mobx.observable], {
    enumerable: true,
    initializer: function initializer() {
        return 0;
    }
}), _descriptor15 = _applyDecoratedDescriptor(_class3.prototype, 'after_gst', [_mobx.observable], {
    enumerable: true,
    initializer: function initializer() {
        return 0;
    }
}), _descriptor16 = _applyDecoratedDescriptor(_class3.prototype, 'change', [_mobx.observable], {
    enumerable: true,
    initializer: function initializer() {
        return 0;
    }
}), _descriptor17 = _applyDecoratedDescriptor(_class3.prototype, 'categorial', [_mobx.observable], {
    enumerable: true,
    initializer: function initializer() {
        return {};
    }
}), _applyDecoratedDescriptor(_class3.prototype, 'searchedItems', [_mobx.computed], Object.getOwnPropertyDescriptor(_class3.prototype, 'searchedItems'), _class3.prototype), _applyDecoratedDescriptor(_class3.prototype, 'selectedItems', [_mobx.computed], Object.getOwnPropertyDescriptor(_class3.prototype, 'selectedItems'), _class3.prototype)), _class3);


var store = window.store = new ItemStore();

exports.default = store;