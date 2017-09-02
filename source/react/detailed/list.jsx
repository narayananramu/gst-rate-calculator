import React, { Component } from 'react';

import Table, {
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  TableSortLabel,
} from 'material-ui/Table';
import Input from 'material-ui/Input';

import Chart from './chart';

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
            if(item.new_budget > item.monthly_spending){
                return(
                    <TableRow className="" key={index}>
                        <TableCell colSpan={2} className="productLabelCol" disablePadding>{item.productlabel}</TableCell>
                        <TableCell colSpan={1} className="productSpendCol" numeric disablePadding>₹ <Input placeholder="Monthly Spending" className="productSpendInput" id={"input-spend-"+item.productcode} value={item.monthly_spending} onChange={this.inputChange} /></TableCell>
                        <TableCell colSpan={1} className="productSpendCol" numeric disablePadding>₹ <Input className="productSpendInput" value={item.new_budget.toFixed(2)} onChange={this.inputChange} disabled /></TableCell>
                        <TableCell colSpan={1} className="productSpendCol" numeric disablePadding><span>{item.change.toFixed(2)}%</span><span className="increase">&middot; </span></TableCell>                        
                    </TableRow>
                )
            }
            else if(item.new_budget === item.monthly_spending){
                return(
                    <TableRow className="" key={index}>
                        <TableCell colSpan={2} className="productLabelCol" disablePadding>{item.productlabel}</TableCell>
                        <TableCell colSpan={1} className="productSpendCol" numeric disablePadding>₹ <Input placeholder="Monthly Spending" className="productSpendInput" id={"input-spend-"+item.productcode} value={item.monthly_spending} onChange={this.inputChange} /></TableCell>
                        <TableCell colSpan={1} className="productSpendCol" numeric disablePadding>₹ <Input className="productSpendInput" value={item.new_budget.toFixed(2)} onChange={this.inputChange} disabled /></TableCell>
                        <TableCell colSpan={1} className="productSpendCol" numeric disablePadding><span>{item.change.toFixed(2)}%</span><span className="neutral">&middot; </span></TableCell>                        
                    </TableRow>
                )
            }
            else{
                return(
                    <TableRow className="" key={index}>
                        <TableCell colSpan={2} className="productLabelCol" disablePadding>{item.productlabel}</TableCell>
                        <TableCell colSpan={1} className="productSpendCol" numeric disablePadding>₹ <Input placeholder="Monthly Spending" className="productSpendInput" id={"input-spend-"+item.productcode} value={item.monthly_spending} onChange={this.inputChange} /></TableCell>
                        <TableCell colSpan={1} className="productSpendCol" numeric disablePadding>₹ <Input className="productSpendInput" value={item.new_budget.toFixed(2)} onChange={this.inputChange} disabled /></TableCell>
                        <TableCell colSpan={1} className="productSpendCol" numeric disablePadding><span>{item.change.toFixed(2)}%</span><span className="decrease">&middot; </span></TableCell>                        
                    </TableRow>
                )
            }
        }.bind(this));    
        return(
            <Table className="detailedTable">
                <TableHead className="listHead">
                    <TableRow className="listHead" >
                        <TableCell colSpan={2}   className="listHead listHeadMinWidth" disablePadding>
                            Your shortlist
                        </TableCell>
                        <TableCell colSpan={1} numeric className="listHead" disablePadding>
                            Current Spend
                        </TableCell>
                        <TableCell colSpan={1} numeric className="listHead" disablePadding>
                            After GST
                        </TableCell>
                        <TableCell colSpan={1} numeric className="listHead" disablePadding>
                            Change
                        </TableCell>
                    </TableRow>
                </TableHead>
                <TableBody className="listBody">
                    { shortListItems }
                    <TableRow className="">
                        <TableCell colSpan={2} className="productLabelCol" disablePadding>Total</TableCell>
                        <TableCell colSpan={1} className="productSpendCol" numeric disablePadding>₹ {this.props.store.total.toFixed(2)}</TableCell>
                        <TableCell colSpan={1} className="productSpendCol" numeric disablePadding>₹ {this.props.store.after_gst.toFixed(2)}</TableCell>
                        <TableCell colSpan={1} className="productSpendCol" numeric disablePadding>{this.props.store.change.toFixed(2)}%</TableCell>                        
                    </TableRow>
                    <TableRow>
                        <TableCell colSpan={5} className="chartHolder">
                            <p>Looks like you will be spending {this.props.store.change===0?" anything extra ":((this.props.store.change<0)? this.props.store.change.toFixed(2)+"% less":this.props.store.change.toFixed(2)+"% more")} under GST than before.</p>
                            <Chart store={this.props.store}/>
                        </TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        )
    }
}

export default SelectedItemList;