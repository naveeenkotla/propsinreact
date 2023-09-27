# created with vite and react 
<br>
let marks ={m:22,p:55,e:99}
//<All usere="naveen" ide="99" mark={marks} /> //this is custom tag created with react and vite  
<br>
  this tags consists of properties with usere ,ide ,and mark ---object
<br>
  //objects paased as properties in the above all tag
<br>
 // at All function in all.jsx
<br>
  function All(props){

return (
    //<>
    //<p>my name is {props.usere}</p>
    //<p>my id is {props.ide}</p>
    //<p>my marks are {props.mark.e} </p>
    </>

)
}
export default All
<br>
props is predefined key word in react for properties 
<br>
props.usere,props.ide ,props.mark.e are ways to retrive the  properties from the tag <All usere="naveen" ide="99" mark={marks} /> and marks is marks={m:22,p:55,e:99}
<br>
<br>
<br>
