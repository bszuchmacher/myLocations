import React from 'react';

 class Index extends React.Component{
   constructor(props){
     super(props);
     this.state = {mode: 'INTRO'};
   }

render(){
  switch (this.state.mode) {
    case 'INTRO':
       return(
         <div className="index-box view" style={{textAlign:"center"}}>
          <h1 style={{fontSize:"50px",textDecorationLine: "underline"}}>Welcome to Ben's Location's Page!</h1>
          <h2 style={{fontSize:"30px",textDecorationLine: "underline",marginTop:"3%" }}>Categories & Locations</h2>
          <p style={{fontSize:"20px",marginTop:"2%"}}>The app consists of 2 types of entities: <b>CATEGORIES and LOCATIONS</b> <br></br>While CATEGORY is a <u>string</u>, LOCATION is an <u>object</u> <b><u>with string properties</u></b>:<br></br> NAME, CATEGORY, ADDRESS & COORDINATES</p>
          <p style={{fontSize:"18px"}}>To navigate between <b> Categories and Locations </b> -- use the Footer Navbar <b>(DOWN BELOW)</b></p>
          <h2 style={{fontSize:"30px",textDecorationLine: "underline", marginTop:"3%"}} >Toolbar</h2>
          <p style={{fontSize:"18px"}}>My <b>Toolbar</b> contains <b>4</b> operations: <b>View, Add, Delete, Update </b>- each available for both entity types</p>
        </div>
       );
    default:
    return(<div>NICE TO HAVE YOU ON BOARD...HAHA!!!</div>);

  }
  }
}

export default Index;
