import React,{ Component } from 'react';
import EditRow from './EditRow';


class DisplayComponent extends Component
{
    render()
    {
        console.log("we're inside DisplayComponent");
        console.log(this.props);
        console.log(this.props.items);
        
        
        return(<div>
        <table className="table table-hover">
            <thead >
                <tr className="success">
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Picture </th>
                    <th>Edit</th>
                </tr>
            </thead>
            <tbody>
                { this.props.items.map(item =>(
                    <tr key={ item.id } className="info" >
                        <td>{ item.first_name } </td>
                        <td>{ item.last_name } </td>
                        <td> <img src={item.avatar} alt='pic' className="img-circle" height="170" width="170" /> </td>
                        
                        <td><EditRow id={item.id}/> </td>
                    </tr>
                ))}
            </tbody>
        </table>
        </div>);
        
       
    }
}

export default DisplayComponent;