import {autorun, observable, computed} from 'mobx';
import axios from 'axios';
class Items{
    
    @observable categorycode = "";
    @observable categorylabel = "";
    @observable productcode = "";
    @observable productlabel = "";
    @observable oldrate = "";
    @observable gstrate = "";
    @observable selected = false;
    @observable monthly_spending = 0;
    @observable new_budget = 0;
    @observable change = 0;

    constructor(item){
        this.categorycode = item.categorycode;
        this.categorylabel = item.categorylabel;
        this.productcode = item.productcode;
        this.productlabel = item.productlabel;
        this.oldrate = item.oldrate;
        this.gstrate = item.gstrate;
    }
}
class ItemStore {
    @observable categoryList = [];
    @observable itemList = [];
    @observable search = "";
    @observable total = 0;
    @observable after_gst = 0;
    @observable change = 0;
    @observable categorial = {};

    @computed get searchedItems(){
        var matchesFilter = new RegExp(this.search, "i");
        return this.itemList.filter(item => matchesFilter.test(item.productlabel))
    }

    @computed get selectedItems(){
        return this.itemList.filter(item => item.selected)
    }

    addToSelection(itemcode){
        var item = this.itemList.find(a => { return a.productcode === itemcode});
        if(item){
            this.itemList[this.itemList.indexOf(item)].selected = true;
            this.categorial[this.itemList[this.itemList.indexOf(item)].categorycode] += this.itemList[this.itemList.indexOf(item)].monthly_spending;
        }
    }

    removeFromSelection(itemcode){
        var item = this.itemList.find(a => { return a.productcode === itemcode});
        var index = this.itemList.indexOf(item);
        if (item && index) {
            this.total -=  this.itemList[index].monthly_spending;
            this.after_gst -=  this.itemList[index].new_budget;
            this.itemList[index].selected = false;
            this.itemList[index].new_budget = 0;
            this.itemList[index].change = 0;
            this.itemList[index].monthly_spending = 0;
            if(this.after_gst > 0 && this.total > 0){
                this.change = (this.after_gst / this.total);
            }
            else{
                this.total =  0;
                this.after_gst =  0;
                this.change = 0;
            }
        }
    }

    changeMonthlySpending(itemcode, value){
        if(value != "NaN"){
            var item = this.itemList.find(a => { return a.productcode === itemcode});
            var index = this.itemList.indexOf(item);
            if (item && index) {
                var onb = this.itemList[index].new_budget;
                this.itemList[index].new_budget = (value - ((value * item.oldrate) / 100) + ((value * item.gstrate) / 100));               
                this.total +=   (value - this.itemList[index].monthly_spending);
                this.after_gst +=  (this.itemList[index].new_budget - onb);
                this.itemList[index].change = (((this.itemList[index].new_budget - value)/value) * 100);
                this.itemList[index].monthly_spending = value;
                if(this.after_gst > 0 && this.total > 0){
                    this.change = ((this.after_gst - this.total)/this.total) * 100 ;
                }
                else{
                    this.total =  0;
                    this.after_gst =  0;
                    this.change = 0;
                }
            }
        }
        if(!isFinite(this.change)){
            this.total =  0;
            this.after_gst =  0;
            this.change = 0;
        }
    }

    fetchItems(){
        if(this.itemList.length == 0){
            axios.get("js/gst.json")
            .then(function(response) {
                response.data.map(function(item){
                    this.itemList.push(new Items(item));
                }.bind(this));
            }.bind(this))
            .catch(function(error){
                console.log(error);
            });
        }
    }

    fetchCategory(){
        if(this.categoryList.length == 0){
            axios.get("js/gst_category.json")
            .then(function(response) {
                this.categoryList = response.data;
            }.bind(this)); 
        }
    }

    empty(){
        this.total =  0;
        this.after_gst =  0;
        this.change = 0;
        this.itemList.map(function(item){
            item.selected = false;
            item.monthly_spending = 0;
            item.new_budget = 0;
            item.change = 0;
        });
    }
}

var store = window.store = new ItemStore();

export default store;