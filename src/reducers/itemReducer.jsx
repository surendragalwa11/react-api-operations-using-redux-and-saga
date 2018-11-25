const initialState={
    isLoading:true,
    error:undefined,
    items:{
            "data":[{
           }]
    },
    fname:'',
    lname:undefined,
    iurl:undefined,
    id:undefined
};

export default (state=initialState,action)=>{
    console.log("item reducer called!");
    switch(action.type)
    {
        case 'ADD_ITEM' : 
            console.log("ADD_ITEM called in reducer");
            console.log(action.item);
            console.log(state);
            console.log(state.items);
            console.log(action.item.data);
            console.log({items:[...state.items,...action.item.data]});
            return ({items:[...state.items,...action.item.data]});
        
        case 'EDIT_ITEM' : 
            console.log("EDIT_ITEM called in reducer");
            return state.map(item=>{
                
                if(item.id===action.id){
                    return {...item,...action.updates };
                }
                else{
                    return item;
                }
            });

        case 'DELETE_ITEM' : 
            console.log("DELETE_ITEM called in reducer");
            return state.filter(id=>id!==action.id);

        case 'API_FETCH_REQUEST' : 
            console.log("API_FETCH_REQUEST called in reducer");
            return { ...state, isLoading:true, error: null };
        
        case 'API_FETCH_SUCCESS': 
            console.log("API_FETCH_SUCCESS called in reducer");
            //console.log(action);
            //console.log(action.result);
            console.log(action.result.data);
            console.log(state);
            console.log({ ...state,isLoading: false,items:[...action.result.data] });
            return { ...state,isLoading: false,items:[...action.result.data] };
        
        case 'API_FETCH_FAILURE': 
            console.log("API_FETCH_FAILURE called in reducer");
            return { ...state, isLoading: false, error: action.result.error };
        
        default : 
            console.log("default case called in reducer");
            return state;
    }
};