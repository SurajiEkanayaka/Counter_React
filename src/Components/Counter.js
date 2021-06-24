/* eslint-disable react/jsx-no-undef */
import { Component } from 'react';


class Counter extends Component {

    state={
        count : 0 //for count
    }
    
    increment = () => {        
        this.setState({
            count : this.state.count + 1           
        }); 
        console.log(this.state.count);        
    }

    incrementa = () => {
    this.setState({
        count : this.state.count - 1       
        });
        console.log(this.state.count);
    }


    render() {
        return (
            <>
                <center>
                <div>Contity : {this.state.count} </div>
                <button onClick={this.increment} style={{color: "blue", backgroundColor:"white"}}>+</button>
                <button onClick={this.incrementa} style={{color: "red", backgroundColor:"white"}}>-</button>
                </center>
               
                
            </>
        );
    }
}

export default Counter;