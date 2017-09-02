import React, { Component } from 'react';

import Table, {
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  TableSortLabel,
} from 'material-ui/Table';
import Input from 'material-ui/Input';

import { observer } from 'mobx-react';

@observer
class SelectedItemList extends Component{
    constructor(props){
        super(props);
        this.inputChange = this.inputChange.bind(this);
    }
    inputChange(e){
        if(e.target.value.length != 0){
            this.props.store.changeMonthlySpending(e.target.id.split("input-spend-")[1], parseFloat(e.target.value));
        }
    }
    render(){
        const { selectedItems } = this.props.store;
        const shortListItems = selectedItems.map(function(item,index){
            return(
                <TableRow className="" key={index}>
                    <TableCell colSpan={1} className="productLabelCol" disablePadding>{item.productlabel}</TableCell>
                    <TableCell colSpan={1} className="productSpendCol"  numeric disablePadding>₹ <Input placeholder="Monthly Spending" className="productSpendInput" id={"input-spend-"+item.productcode} value={item.monthly_spending} onChange={this.inputChange} /></TableCell>
                </TableRow>
            )
        }.bind(this));    
        return(
            <Table className="summaryTable">
                <TableHead className="listHead">
                    <TableRow className="listHead" >
                        <TableCell  className="listHead listHeadMinWidth" disablePadding>
                            Yourshortlist
                        </TableCell>
                        <TableCell colSpan={1} numeric className="listHead" disablePadding>
                            Current Spend
                        </TableCell>
                    </TableRow>
                </TableHead>
                <TableBody className="listBody">
                    { shortListItems }
                    <TableRow className="">
                        <TableCell colSpan={2} className="note">
                        Pick products from the left and add your current monthly spend on  <br/> that item to see how GST affects your monthly budget
                        </TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        )
    }
}

export default SelectedItemList;