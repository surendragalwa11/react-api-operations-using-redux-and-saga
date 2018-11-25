import React,{ Component } from 'react';

class EditRow extends Component
{
    
    render()
    {
        console.log("We're inside EditRow component");
        return(
        <div>
            <div  onClick={this.props.onEditClick}>
                <button type="button" className="btn btn-info btn-lg" 
                    data-toggle="modal" data-target="#myModal"
                >
                    Edit
               </button>
            </div>

             
            <div className="modal fade" id="myModal" role="dialog">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <button type="button" className="close" data-dismiss="modal">&times;</button>
                            <h4 className="modal-title">Modal Header</h4>
                        </div>
                   <div className="modal-body">
                        <div className="container">
                            <h2>Add new entry</h2>
                            <form  className="form-inline">
                       
                                <label htmlFor="fname">First name</label><br />
                                <input type="text"  placeholder="first name"  
                                    defaultValue={this.props.fnameDefault}
                                    onChange={this.props.onFnameChange}
                                    className="form-control"  required 
                                /> <br />
                    
                                <label htmlFor="lname">Last name</label> <br />
                                <input type="text" placeholder="last name" name="lname" 
                                    defaultValue={this.props.lnameDefault}
                                    onChange={this.props.onLnameChange} 
                                    className="form-control" required
                                /> <br />

                                <label htmlFor="iurl">Image url</label> <br />
                                <input type="text" placeholder="image url" 
                                    defaultValue={this.props.iurlDefault}
                                    onChange={this.props.onIurlChange} name="iurl"
                                    className="form-control" required
                                /> <br /> <br />
                                
                                <button onClick={ this.props.onSubmit } data-dismiss="modal"> 
                                    Submit 
                                </button>
                         
                           </form>
                       </div>
                   </div>
                   <div className="modal-footer">
                        <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
                   </div>
                </div>
            </div>
        </div>
   </div>);
    }
}

console.log("EditRow component call finished");
export default EditRow;