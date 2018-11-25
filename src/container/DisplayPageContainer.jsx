import React from 'react';
import {connect} from 'react-redux';
import DisplayComponent from '../components/DisplayComponent';
import { fetchItem} from '../actions/addEdit';
//import AddItem  from '../components/AddItem';
import AddRow from '../components/AddRow';
//import PopUp from '../components/PopUp';


const DisplayPageContainer=(props)=>{
    
        console.log("we've reached inside DisplayPageConatiner");
        console.log(props);
        console.log(props.items);
        console.log("**DisplayPageConatiner:fetchItem action will be called on button click");
        //props.dispatch(fetchItem());
        return(<div >
                <button type="button" className="btn btn-success"
                        onClick={()=>props.dispatch(fetchItem())}>Fetch API</button> 

                { props.isLoading ?
                     <p>Loading...</p>:
                    <div>
                        <DisplayComponent items={props.items} />
                        
                        <AddRow />
                    </div>    
                }
        </div>);
}

const mapStateToProps=(state)=>{
        console.log("DisplayPageContainer:mapStateToProps called");
        console.log(state);
        return {
                //items:startFetchAPISuccess(state.items.data)
                items:state.items,
                isLoading:state.isLoading,
                error:state.error
        };
}

export default connect(mapStateToProps)(DisplayPageContainer);

// export default connect(state=>{
//         console.log(state);
//         console.log("DisplayPageContainer--mapping state to props in connect");
//         return state;
// })(DisplayPageContainer);

//set isLoading false in reducer to load initial state
//initial state will be empty
//after fetching data,we'll set that data to state and will set isLoading:false
//so that we can see that loaded data in DisplayComponent