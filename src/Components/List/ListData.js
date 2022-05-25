import React, { Component } from 'react';


class ListData extends Component {


render()
   { return (

<>



<div>

<h3 style={{marginLeft:"380px", marginTop:"-420px" , marginBottom:"20px"}}>Registered Students</h3>
<hr style={{width:"780px", marginLeft:"380px"}}></hr>

<table class="table" style={{width:"780px", marginLeft:"380px" , marginTop:"20px"}}>
<thead>
<tr>
<th scope="col">Name</th>
<th scope="col">Email</th>

</tr>
</thead>
<tbody>
<tr>
<td> {this.props.Name} </td>
<td> {this.props.Email}</td>

</tr>

</tbody>
</table>


</div>










</>



      );
}
}
export default ListData;