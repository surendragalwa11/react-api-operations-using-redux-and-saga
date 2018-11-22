const initialState={
    isLoading:true,
    error:undefined,
    items:{
            "data":[{ 
            "id":1,
            "first_name":"George",
            "last_name":"Bluth",
            "avatar":"https://s3.amazonaws.com/uifaces/faces/twitter/calebogden/128.jpg"
           }]
    }
};

export default (state=initialState,action)=>{
    console.log("item reducer called!");
    switch(action.type)
    {
        case 'ADD_ITEM' : 
            console.log("ADD_ITEM called in reducer");
            return [...state,action.item];
        
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
            return { ...state, isLoading: false, items: action.result.data };
        
        case 'API_FETCH_FAILURE': 
            console.log("API_FETCH_FAILURE called in reducer");
            return { ...state, isLoading: false, error: action.error };
        
        default : 
            console.log("default case called in reducer");
            return state;
    }
};