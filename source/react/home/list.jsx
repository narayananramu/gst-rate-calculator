import React, { Component } from 'react';

import Table, {
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  TableSortLabel,
} from 'material-ui/Table';
import Checkbox from 'material-ui/Checkbox';
import Icon from 'material-ui/Icon';

import { observer } from 'mobx-react';

@observer
class ItemList extends Component{
    constructor(props){
        super(props);
        this.itemSelect = this.itemSelect.bind(this);
    }
    itemSelect(e,checked){
        if(checked){
            this.props.store.addToSelection(e.target.value);
        }
        else{
            this.props.store.removeFromSelection(e.target.value);
        }
    }
    render(){
        const { categoryList, searchedItems, itemList } = this.props.store;
        
        const category = categoryList.map(function(category,item) {
            var myitems = searchedItems.map(function(item){
                if(item.categorycode === category.categorycode){
                    return item;
                }
            });
            return(
                    <Table key={item} className="listTable">
                        <TableHead className="listHead">
                            <TableRow className="listHead">
                                <TableCell colSpan={2} className="listHead listHeadMinWidth" disablePadding>
                                    {category.categorylabel}
                                </TableCell>
                                <TableCell colSpan={1} numeric className="listHead rs-util-table-cell">
                                    Old Rate
                                </TableCell>
                                <TableCell colSpan={1} numeric  className="listHead">
                                    GST
                                </TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody className="listBody">
                            {
                                searchedItems.map(function(item,index){
                                    if(item.categorycode === category.categorycode){
                                        return(
                                            <TableRow className="" key={index}>
                                                <TableCell colSpan={1} checkbox><Checkbox value={item.productcode} checked={item.selected} onChange={this.itemSelect} style={{color:"#1f7ae0"}} icon={<Icon style={{color:"#7f7f7f"}}>add_box</Icon>}/></TableCell>
                                                <TableCell colSpan={1} className={"productLabel"}>{item.productlabel}</TableCell>
                                                <TableCell colSpan={1} className={"rs-util-table-cell"} numeric>{item.oldrate}</TableCell>
                                                <TableCell colSpan={1} numeric>{item.gstrate}</TableCell>
                                            </TableRow>)
                                    }
                                }.bind(this))
                            }
                        </TableBody>
                    </Table>
            )
        }.bind(this));
        return(
            <div>{category}</div>
        )
    }
}

export default ItemList;