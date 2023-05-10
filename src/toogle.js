import React from "react";
class Toggle extends React.Component{
    state={
        data:'ON'
    }
    ClickHandler(){
        
        if(this.state.data==='ON'){
            this.setState({data:'OFF'})
        }
        else{
            this.setState({data:'ON'})
        }
        }
   render()
   {
    return(
        <div>
            
        {/* <button onClick={this.ClickHandler.bind(this)}>ClickMe</button> */}
        <button onClick={()=>this.ClickHandler()}>{this.state.data}</button>
        </div>
     )
   } 
}
export default Toggle;