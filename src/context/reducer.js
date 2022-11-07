export const reducer = (state, action)=>{
    switch(action.type){
        case 'add': 
            let selected = state.data.map((value) => value.id === action.payload.id && {...value, addtocart: true, quantity: 1})
            selected = selected.filter((value) => value && value)
            let added = [...state.products, ...selected]
            let reset = state.data.map((value) => value.id === action.payload.id ? selected[0] : value)
            console.log(state)
            return {...state, products: added, data: reset }

        case 'basket': 
            return {...state, basket: !state.basket}

        case 'heart':
            let heart = state.data.filter(value => value.id === action.payload.id)
            let heartChanged = heart.map(value => value && {...value, like: !value.like})
            let newData = state.data.map(value => value.id === action.payload.id ? heartChanged[0] : value)
            return {...state, data: newData}
            
        case 'increment':
            let inc = state.products.map((value)=>value.id === action.payload.id ?{...value,quantity:value.quantity+1}:value)
            let dnc = state.data.map((value)=>value.id === action.payload.id ?{...value,quantity:value.quantity+1}:value)
            console.log(state+' quantity')
            return {...state, products: inc,data:dnc}
              
        case 'decrement':
                let dec = state.products.map((value)=>value.id === action.payload.id && value.quantity>0?{...value,quantity:value.quantity--}:value) 
                let decre = state.data.map((value)=>value.id === action.payload.id ?{...value,quantity:value.quantity-1}:value)
                console.log(state.products.quantity+' quantity')
                return{...state, products: dec,data:decre}
        case 'delete':
            let del = state.products.filter((value)=>value.id !== action.payload.id)
            let deld = state.data.map((value)=>value.id === action.payload.id ?{...value,quantity:0,addtocart:false}:value)
            console.log(state)
            return{...state, products: del,data:deld}
        
            default: return state.data
    }
}