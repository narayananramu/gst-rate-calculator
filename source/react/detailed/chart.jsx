import React, { Component } from 'react';
import {Doughnut} from 'react-chartjs-2';

import { observer } from 'mobx-react';

@observer
class Chart extends Component{
    constructor(props){
		super(props);
		this.state = {
			data: {
				labels: [
					'Red',
					'Green',
					'Yellow'
				],
				datasets: [{
					data: [10, 50, 10],
					backgroundColor: [
					'#FF6384',
					'#36A2EB',
					'#FFCE56'
					],
					hoverBackgroundColor: [
					'#FF6384',
					'#36A2EB',
					'#FFCE56'
					]
				}]
			}
		}
    }
    render(){
        return(
			<Doughnut data={this.state.data} width={250} height={250} legend={{position: 'right'}} options={{maintainAspectRatio: false, responsive: false}}/>			
		);
    }
}

export default Chart